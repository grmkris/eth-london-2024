// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TreasuryContract {
    IERC20 public usdc;
    address public bettingContract;
    address public stakeContract;

    constructor(address _usdcAddress) {
        usdc = IERC20(_usdcAddress);
    }

    modifier onlyBettingContract() {
        require(msg.sender == bettingContract, "Caller is not the betting contract");
        _;
    }

    modifier onlyStakeContract() {
        require(msg.sender == stakeContract, "Caller is not the stake contract");
        _;
    }

    function setBettingContract(address _bettingContract) external {
        bettingContract = _bettingContract;
    }

    function setStakeContract(address _stakeContract) external {
        stakeContract = _stakeContract;
    }

    // Allow the betting contract to pull USDC for creating a match
    function pullUSDC(uint256 amount) external onlyBettingContract {
        require(usdc.transfer(bettingContract, amount), "USDC transfer failed");
    }

    // Allow the stake contract to withdraw funds (USDC)
    function withdrawUSDC(address to, uint256 amount) external onlyStakeContract {
        require(usdc.transfer(to, amount), "USDC transfer failed");
    }
}
