// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface MockStakeContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "MockStakeContract",
  "sourceName": "contracts/MockStakeContract.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getStakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "penalize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "stakes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523461001a576040516101a561002082396101a590f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630c2eb4031461004257806316934fc41461003d576378d97c940361006757610141565b610126565b61008f565b6001600160a01b031690565b90565b6001600160a01b0381160361006757565b600080fd5b9050359061007982610056565b565b90602082820312610067576100539161006c565b34610067576100ba6100aa6100a536600461007b565b610164565b6040519182918290815260200190565b0390f35b61005390610047906001600160a01b031682565b610053906100be565b610053906100d2565b906100ee906100db565b600052602052604060002090565b610053916008021c81565b9061005391546100fc565b600061012161005392826100e4565b610107565b34610067576100ba6100aa61013c36600461007b565b610112565b346100675761015136600461007b565b50604051005b6100536100536100539290565b50610053606461015756fea2646970667358221220df2088389ac6b3193b79b944f3dcc2444c73b1927d6c5b0c052a6650f9401bcf64736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b60003560e01c80630c2eb4031461004257806316934fc41461003d576378d97c940361006757610141565b610126565b61008f565b6001600160a01b031690565b90565b6001600160a01b0381160361006757565b600080fd5b9050359061007982610056565b565b90602082820312610067576100539161006c565b34610067576100ba6100aa6100a536600461007b565b610164565b6040519182918290815260200190565b0390f35b61005390610047906001600160a01b031682565b610053906100be565b610053906100d2565b906100ee906100db565b600052602052604060002090565b610053916008021c81565b9061005391546100fc565b600061012161005392826100e4565b610107565b34610067576100ba6100aa61013c36600461007b565b610112565b346100675761015136600461007b565b50604051005b6100536100536100539290565b50610053606461015756fea2646970667358221220df2088389ac6b3193b79b944f3dcc2444c73b1927d6c5b0c052a6650f9401bcf64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "MockStakeContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MockStakeContract$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/MockStakeContract.sol:MockStakeContract",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<MockStakeContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "MockStakeContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MockStakeContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/MockStakeContract.sol:MockStakeContract",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<MockStakeContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "MockStakeContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MockStakeContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/MockStakeContract.sol:MockStakeContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<MockStakeContract$Type["abi"]>>;
}
