// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ISocialOracle {
    function addQuestion(uint256 _id, uint256 _deadline) external;
    function getQuestionOutcome(uint256 _questionId) external view returns (bool outcome, bool determined);
}

interface IMatchNFT {
    function mint(uint256 eventId, address to) external;
}


contract DecentralizedBetting {
    struct Bet {
        uint256 amount;
        bool prediction;
    }

    struct Event {
        uint256 id;
        uint256 timestamp;
        bool outcome;
        bool resolved;
        uint256 totalPot;
        uint256 winningPot;
        bool emergencyStop;
    }

    address public owner;
    uint256 private nextEventId;
    IERC20 public bettingToken; // ERC20 token for betting

    mapping(uint256 => Event) public events;
    mapping(uint256 => mapping(address => Bet)) public bets;

    address public socialOracleAddress;
    address public matchNFTAddress;

    constructor(address _socialOracleAddress, address _matchNFTAddress, address _bettingTokenAddress) {
        owner = msg.sender;
        nextEventId = 1;
        socialOracleAddress = _socialOracleAddress;
        matchNFTAddress = _matchNFTAddress;
        bettingToken = IERC20(_bettingTokenAddress);
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    modifier eventNotResolved(uint256 eventId) {
        require(!events[eventId].resolved, "Event has been resolved.");
        _;
    }

    function createEvent(uint256 timestamp) external {
        uint256 eventId = nextEventId++;
        events[eventId].id = eventId;
        events[eventId].timestamp = timestamp;

        // Assuming SocialOracle has a function to add a question directly
        // and the deadline is set as the event's timestamp
        ISocialOracle(socialOracleAddress).addQuestion(eventId, timestamp);
        IMatchNFT(matchNFTAddress).mint(eventId, msg.sender);
    }


    function placeBet(uint256 eventId, bool prediction, uint256 amount) external eventNotResolved(eventId) {
        require(!events[eventId].emergencyStop, "Betting is temporarily suspended.");
        require(bettingToken.transferFrom(msg.sender, address(this), amount), "Failed to transfer bet tokens.");
        require(bets[eventId][msg.sender].amount == 0, "User has already placed a bet.");
        require(events[eventId].id != 0, "Invalid event ID.");

        bets[eventId][msg.sender] = Bet({
            amount: amount,
            prediction: prediction
        });

        events[eventId].totalPot += amount;
        if (prediction) {
            events[eventId].winningPot += amount;
        }
    }

    function resolveEvent(uint256 eventId) external eventNotResolved(eventId) {
        require(events[eventId].id != 0, "Invalid event ID.");
        // require(block.timestamp >= events[eventId].timestamp, "Event has not occurred yet.");

        // Get outcome from SocialOracle
        (bool outcome, bool determined) = ISocialOracle(socialOracleAddress).getQuestionOutcome(eventId);
        require(determined, "Question outcome not determined yet.");

        events[eventId].outcome = outcome;
        events[eventId].resolved = true;
    }


    function claimWinnings(uint256 eventId) external {
        require(events[eventId].resolved, "Event has not been resolved.");
        Bet storage bet = bets[eventId][msg.sender];
        require(bet.amount > 0, "User has no bet to claim.");

        uint256 winnings = 0;

        if (bet.prediction == events[eventId].outcome) {
            // Calculate the user's share of the winnings
            uint256 totalPot = events[eventId].totalPot;
            uint256 winningPot = events[eventId].winningPot;
            if (winningPot > 0) { // Ensure there is no division by zero
                winnings = (bet.amount * totalPot) / winningPot;
            }

            // Reset the bet amount to prevent reclamation
            bet.amount = 0;

            // Ensure the contract has enough tokens to pay out the winnings
            uint256 contractTokenBalance = bettingToken.balanceOf(address(this));
            require(contractTokenBalance >= winnings, "Insufficient contract token balance to pay out winnings.");

            // Transfer the winnings to the user
            require(bettingToken.transfer(msg.sender, winnings), "Failed to transfer winnings.");
        } else {
            // If the user didn't win, just reset their bet
            bet.amount = 0;
        }
    }

    function toggleEmergencyStop(uint256 eventId) external onlyOwner {
        events[eventId].emergencyStop = !events[eventId].emergencyStop;
    }

    function withdraw() external onlyOwner {
        uint256 amount = bettingToken.balanceOf(address(this));
        require(bettingToken.transfer(owner, amount), "Failed to transfer tokens.");

    }
}
