// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./BetStakingToken.sol";

interface IStakeContract {
    function getStakeAmount(address user) external view returns (uint256);
    function penalize(address user) external;
}

contract StakeContract is IStakeContract, Ownable {
    IERC20 public stakingToken;
    IERC20 public liquidityToken;
    BetStakingToken public betStakingToken;
    address public treasuryAddress;
    uint256 public totalStaked;
    uint256 public penaltyRate; // A percentage of the staked amount to be burned as penalty

    event Staked(address indexed user, uint256 stakeAmount, uint256 liquidityAmount);
    event Withdrawn(address indexed user, uint256 stakeAmount, uint256 liquidityAmount);
    event Penalized(address indexed user, uint256 penaltyAmount);

    constructor(address _betStakingToken, address _liquidityTokenAddress, address _stakingTokenAddress, address _treasuryAddress, uint256 _penaltyRate) {
        stakingToken = IERC20(_stakingTokenAddress);
        liquidityToken = IERC20(_liquidityTokenAddress);
        betStakingToken = BetStakingToken(_betStakingToken);
        treasuryAddress = _treasuryAddress;
        penaltyRate = _penaltyRate;
    }

    function stake(uint256 stakeAmount, uint256 liquidityAmount) external {
        require(stakeAmount > 0 && liquidityAmount > 0, "Amounts must be greater than 0");
        stakingToken.transferFrom(msg.sender, address(this), stakeAmount);
        liquidityToken.transferFrom(msg.sender, treasuryAddress, liquidityAmount);

        betStakingToken.mint(msg.sender, stakeAmount); // Assume 1:1 ratio for simplicity
        totalStaked += stakeAmount;

        emit Staked(msg.sender, stakeAmount, liquidityAmount);
    }

    function withdraw(uint256 stakeAmount) external {
        require(stakeAmount > 0, "Amount must be greater than 0");
        betStakingToken.burnFrom(msg.sender, stakeAmount);

        stakingToken.transfer(msg.sender, stakeAmount);
        emit Withdrawn(msg.sender, stakeAmount, 0); // Update with actual liquidity amount returned if applicable
    }

    function getStakeAmount(address user) external view returns (uint256) {
        return betStakingToken.balanceOf(user);
    }

    function penalize(address user) external onlyOwner {
        uint256 stakeAmount = betStakingToken.balanceOf(user);
        uint256 penaltyAmount = stakeAmount * penaltyRate / 100;
        betStakingToken.burnFrom(user, penaltyAmount);
        emit Penalized(user, penaltyAmount);
    }
}

