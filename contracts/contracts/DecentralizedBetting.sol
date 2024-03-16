// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISocialOracle {
    function addQuestion(uint256 _id, string memory _description, uint256 _deadline) external;
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

    mapping(uint256 => Event) public events;
    mapping(uint256 => mapping(address => Bet)) public bets;

    address public socialOracleAddress;
    address public matchNFTAddress;

    constructor(address _socialOracleAddress, address _matchNFTAddress) {
        owner = msg.sender;
        nextEventId = 1;
        socialOracleAddress = _socialOracleAddress;
        matchNFTAddress = _matchNFTAddress;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    modifier eventNotResolved(uint256 eventId) {
        require(!events[eventId].resolved, "Event has been resolved.");
        _;
    }

    function createEvent(uint256 timestamp, string memory description) external onlyOwner {
        uint256 eventId = nextEventId++;
        events[eventId].id = eventId;
        events[eventId].timestamp = timestamp;

        // Assuming SocialOracle has a function to add a question directly
        // and the deadline is set as the event's timestamp
        ISocialOracle(socialOracleAddress).addQuestion(eventId, description, timestamp);
        IMatchNFT(matchNFTAddress).mint(eventId, msg.sender);
    }


    function placeBet(uint256 eventId, bool prediction) external payable eventNotResolved(eventId) {
        require(!events[eventId].emergencyStop, "Betting is temporarily suspended.");
        require(msg.value > 0, "Bet amount must be greater than 0.");
        require(bets[eventId][msg.sender].amount == 0, "User has already placed a bet.");
        require(events[eventId].id != 0, "Invalid event ID.");

        bets[eventId][msg.sender] = Bet({
            amount: msg.value,
            prediction: prediction
        });

        events[eventId].totalPot += msg.value;
        if (prediction) {
            events[eventId].winningPot += msg.value;
        }
    }

    function resolveEvent(uint256 eventId) external onlyOwner eventNotResolved(eventId) {
        require(events[eventId].id != 0, "Invalid event ID.");
        require(block.timestamp >= events[eventId].timestamp, "Event has not occurred yet.");

        // Get outcome from SocialOracle
        (bool outcome, bool determined) = ISocialOracle(socialOracleAddress).getQuestionOutcome(eventId);
        require(determined, "Question outcome not determined yet.");

        events[eventId].outcome = outcome;
        events[eventId].resolved = true;
    }


    function claimWinnings(uint256 eventId) external eventNotResolved(eventId) {
        require(events[eventId].resolved, "Event has not been resolved.");
        Bet storage bet = bets[eventId][msg.sender];
        require(bet.amount > 0, "User has no bet to claim.");

        if (bet.prediction == events[eventId].outcome) {
            uint256 totalPot = events[eventId].totalPot;
            uint256 winningPot = events[eventId].winningPot;
            uint256 winnings = (bet.amount * totalPot) / winningPot;

            bet.amount = 0;
            require(address(this).balance >= winnings, "Insufficient contract balance to pay out winnings.");
            payable(msg.sender).transfer(winnings);
        } else {
            bet.amount = 0;
        }
    }

    function toggleEmergencyStop(uint256 eventId) external onlyOwner {
        events[eventId].emergencyStop = !events[eventId].emergencyStop;
    }

    function withdraw() external onlyOwner {
        uint256 amount = address(this).balance;
        payable(owner).transfer(amount);
    }
}
