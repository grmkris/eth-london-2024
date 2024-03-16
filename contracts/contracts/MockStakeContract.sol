// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStakeContract {
    function getStakeAmount(address user) external view returns (uint256);
    function penalize(address user) external;
}

contract MockStakeContract is IStakeContract {
    // This mapping can be used to simulate different stake amounts for different users if needed.
    // For simplicity, it's not used in the getStakeAmount function below, but it could be used
    // for a more advanced mock.
    mapping(address => uint256) public stakes;

    // Constructor - empty as we're just using a fixed return value for now
    constructor() {}

    // getStakeAmount always returns 100 to satisfy the requirement from SocialOracle
    function getStakeAmount(address user) external pure override returns (uint256) {
        return 100;
    }

    // penalize does nothing in this mock, but it's required to fulfill the IStakeContract interface
    function penalize(address user) external override {
        // Here you could add logic to simulate penalization, such as reducing the user's stake.
    }
}
