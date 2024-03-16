// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakeContract is Ownable {
    IERC20 public token;
    uint256 public totalStaked;
    uint256 public stakingRewardRate; // Reward rate per second
    uint256 public lastUpdateTime;

    mapping(address => uint256) public stakes;
    mapping(address => uint256) public rewards;

    event Staked(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    constructor(address _tokenAddress, uint256 _stakingRewardRate) {
        token = IERC20(_tokenAddress);
        stakingRewardRate = _stakingRewardRate;
    }

    // Function to stake tokens
    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        updateReward(msg.sender);
        token.transferFrom(msg.sender, address(this), amount);
        stakes[msg.sender] += amount;
        totalStaked += amount;
        emit Staked(msg.sender, amount);
    }

    // Function to withdraw staked tokens
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(stakes[msg.sender] >= amount, "Insufficient stake");
        updateReward(msg.sender);
        stakes[msg.sender] -= amount;
        totalStaked -= amount;
        token.transfer(msg.sender, amount);
        emit Withdrawn(msg.sender, amount);
    }

    // Function to claim rewards
    function claimReward() external {
        updateReward(msg.sender);
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards to claim");
        rewards[msg.sender] = 0;
        token.transfer(msg.sender, reward);
        emit RewardPaid(msg.sender, reward);
    }

    // Internal function to update rewards
    function updateReward(address account) internal {
        uint256 newRewardPerToken = rewardPerToken();
        rewards[account] = earned(account, newRewardPerToken);
        lastUpdateTime = block.timestamp;
    }

    // View function to get the staked amount of a user
    function getStakeAmount(address user) external view returns (uint256) {
        return stakes[user];
    }

    // View function to get the earned rewards of a user
    function earned(address account, uint256 newRewardPerToken) public view returns (uint256) {
        uint256 lastRewardPerToken = rewardPerToken();
        return stakes[account] * (newRewardPerToken - lastRewardPerToken) / 1e18 + rewards[account];
    }

    // Internal function to calculate the reward per token
    function rewardPerToken() public view returns (uint256) {
        if (totalStaked == 0) {
            return 0;
        }
        return stakingRewardRate * (block.timestamp - lastUpdateTime) / totalStaked;
    }

    // Function to set the staking reward rate (owner only)
    function setStakingRewardRate(uint256 _stakingRewardRate) external onlyOwner {
        stakingRewardRate = _stakingRewardRate;
    }
}