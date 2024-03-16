// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ISocialOracle$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ISocialOracle",
  "sourceName": "contracts/DecentralizedBetting.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        }
      ],
      "name": "addQuestion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_questionId",
          "type": "uint256"
        }
      ],
      "name": "getQuestionOutcome",
      "outputs": [
        {
          "internalType": "bool",
          "name": "outcome",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "determined",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ISocialOracle",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISocialOracle$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/DecentralizedBetting.sol:ISocialOracle",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISocialOracle$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ISocialOracle",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISocialOracle$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/DecentralizedBetting.sol:ISocialOracle",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISocialOracle$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ISocialOracle",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISocialOracle$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/DecentralizedBetting.sol:ISocialOracle",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISocialOracle$Type["abi"]>>;
}
