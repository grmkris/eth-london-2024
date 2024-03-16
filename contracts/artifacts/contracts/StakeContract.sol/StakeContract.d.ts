// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface StakeContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "StakeContract",
  "sourceName": "contracts/StakeContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_stakingRewardRate",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RewardPaid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Staked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "claimReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newRewardPerToken",
          "type": "uint256"
        }
      ],
      "name": "earned",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
      "name": "getStakeAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastUpdateTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardPerToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
      "name": "rewards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_stakingRewardRate",
          "type": "uint256"
        }
      ],
      "name": "setStakingRewardRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
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
    },
    {
      "inputs": [],
      "name": "stakingRewardRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523462000031576200001f62000018620000fc565b90620001bb565b604051610ce3620002668239610ce390f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b038211176200006e57604052565b62000036565b906200008b6200008360405190565b92836200004c565b565b6001600160a01b031690565b90565b6001600160a01b0381165b036200003157565b905051906200008b826200009c565b80620000a7565b905051906200008b82620000be565b9190604083820312620000315762000099906020620000f48286620000af565b9401620000c5565b6200011f62000f4980380380620001138162000074565b928339810190620000d4565b9091565b62000099906200008d906001600160a01b031682565b620000999062000123565b620000999062000139565b906001600160a01b03905b9181191691161790565b906200017862000099620001809262000144565b82546200014f565b9055565b90600019906200015a565b6200009962000099620000999290565b90620001b36200009962000180926200018f565b825462000184565b90620001e1620001d96200008b93620001d3620001e9565b62000144565b600162000164565b60036200019f565b6200008b336200020b565b62000099906200008d565b620000999054620001f4565b620002336200022c6200021f6000620001ff565b620001d384600062000164565b9162000144565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06200025f60405190565b600090a356fe6080604052600436101561001257600080fd5b60003560e01c80630700037d146101125780630c2eb4031461010d57806316934fc4146101085780632e1a7d4d146101035780633e491d47146100fe5780634f3fc2df146100f9578063715018a6146100f4578063817b1cd2146100ef5780638da5cb5b146100ea578063a694fc3a146100e5578063b7d68519146100e0578063b88a802f146100db578063c8f33c91146100d6578063cd3daf9d146100d1578063f2fde38b146100cc5763fc0c546a036101385761044b565b6103f6565b6103db565b6103c0565b61039c565b610384565b61036c565b610337565b61031c565b6102f8565b6102dd565b6102aa565b61026a565b610228565b6101fd565b6101cd565b6001600160a01b031690565b90565b6001600160a01b0381165b0361013857565b600080fd5b9050359061014a82610126565b565b90602082820312610138576101239161013d565b61012390610117906001600160a01b031682565b61012390610160565b61012390610174565b906101909061017d565b600052602052604060002090565b610123916008021c81565b90610123915461019e565b60006101c4610123926006610186565b6101a9565b9052565b34610138576101f96101e86101e336600461014c565b6101b4565b6040515b9182918290815260200190565b0390f35b34610138576101f96101e861021336600461014c565b610483565b60006101c4610123926005610186565b34610138576101f96101e861023e36600461014c565b610218565b80610131565b9050359061014a82610243565b906020828203126101385761012391610249565b346101385761028261027d366004610256565b610632565b604051005b9190604083820312610138576101239060206102a3828661013d565b9401610249565b34610138576101f96101e86102c0366004610287565b906107af565b600091031261013857565b610123600060036101a9565b34610138576102ed3660046102c6565b6101f96101e86102d1565b34610138576103083660046102c6565b61028261084a565b610123600060026101a9565b346101385761032c3660046102c6565b6101f96101e8610310565b34610138576103473660046102c6565b6101f9610352610852565b604051918291826001600160a01b03909116815260200190565b346101385761028261037f366004610256565b610880565b3461013857610282610397366004610256565b61097f565b34610138576103ac3660046102c6565b6102826109ca565b610123600060046101a9565b34610138576103d03660046102c6565b6101f96101e86103b4565b34610138576103eb3660046102c6565b6101f96101e8610aa3565b346101385761028261040936600461014c565b610b87565b610123916008021c610117565b90610123915461040e565b6101236000600161041b565b6101c99061017d565b60208101929161014a9190610432565b346101385761045b3660046102c6565b6101f9610466610426565b6040519182918261043b565b6101239081565b6101239054610472565b61049a61012391610492600090565b506005610186565b610479565b6101236101236101239290565b156104b357565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b0390fd5b1561050357565b60405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e74207374616b6560701b6044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b9190820391821161056057565b61053d565b90600019905b9181191691161790565b9061058561012361058c9261049f565b8254610565565b9055565b61012390610117565b6101239054610590565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176105db57604052565b6105a3565b801515610131565b9050519061014a826105e0565b9060208282031261013857610123916105e8565b6001600160a01b03909116815260408101929161014a9160200152565b6040513d6000823e3d90fd5b61064661063f600061049f565b82116104ac565b61066961065761049a336005610186565b8290610662565b9190565b10156104fc565b61067233610b90565b610698610680336005610186565b6106928361068d83610479565b610553565b90610575565b6106b06106a98261068d6002610479565b6002610575565b6106c26106bd6001610599565b61017d565b60206106cd60405190565b91829063a9059cbb60e01b8252816000816106ec883360048401610609565b03925af1801561076557610738575b507f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d56107336107293361017d565b926101ec60405190565b0390a2565b6107599060203d60201161075e575b61075181836105b9565b8101906105f5565b6106fb565b503d610747565b610626565b8181029291811591840414171561056057565b634e487b7160e01b600052601260045260246000fd5b811561079d570490565b61077d565b9190820180921161056057565b61080c61049a6108046107ed610123956107c7600090565b506107e76107d3610aa3565b6107e161049a896005610186565b92610553565b9061076a565b6107fe670de0b6b3a764000061049f565b90610793565b926006610186565b906107a2565b61081a610c0b565b61014a610838565b6101176101236101239290565b61012390610822565b61014a610845600061082f565b610c5b565b61014a610812565b6101236000610599565b6001600160a01b0391821681529116602082015260608101929161014a9160400152565b61088d61063f600061049f565b61089633610b90565b6108dd6020826108a96106bd6001610599565b6108b23061017d565b60006108bd60405190565b8096819582946108d16323b872dd60e01b90565b8452336004850161085c565b03925af180156107655761094b575b5061090d6108fb336005610186565b6106928361090883610479565b6107a2565b61091e6106a9826109086002610479565b7f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d6107336107293361017d565b6109639060203d60201161075e5761075181836105b9565b6108ec565b61014a90610974610c0b565b61014a906003610575565b61014a90610968565b1561098f57565b60405162461bcd60e51b81526020600482015260136024820152724e6f207265776172647320746f20636c61696d60681b6044820152606490fd5b6109d333610b90565b6109e161049a336006610186565b6109f56109ee600061049f565b8211610988565b610a12610a02600061049f565b610a0d336006610186565b610575565b610a1f6106bd6001610599565b6020610a2a60405190565b91829063a9059cbb60e01b825281600081610a49883360048401610609565b03925af1801561076557610a86575b507fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04866107336107293361017d565b610a9e9060203d60201161075e5761075181836105b9565b610a58565b610aad6002610479565b610aba61065e600061049f565b14610aec57610123610ae2610acf6003610479565b6107e7610adc6004610479565b42610553565b6107fe6002610479565b610123600061049f565b61014a90610b02610c0b565b610b62565b15610b0e57565b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b61014a90610845610b76610117600061082f565b6001600160a01b0383161415610b07565b61014a90610af6565b610bb090610a0d610ba8610ba2610aa3565b836107af565b916006610186565b61014a426004610575565b15610bc257565b60405162461bcd60e51b8152806104f8600482016020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b61014a610c16610852565b610c2f610c2233610117565b916001600160a01b031690565b14610bbb565b906001600160a01b039061056b565b90610c5461012361058c9261017d565b8254610c35565b610c7c610c76610c6b6000610599565b6106bd846000610c44565b9161017d565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610ca760405190565b600090a356fea264697066735822122000fec252bfc18786a865686d3e1f9ba97ec89dfcede73aeae6d022352dcbd1cc64736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b60003560e01c80630700037d146101125780630c2eb4031461010d57806316934fc4146101085780632e1a7d4d146101035780633e491d47146100fe5780634f3fc2df146100f9578063715018a6146100f4578063817b1cd2146100ef5780638da5cb5b146100ea578063a694fc3a146100e5578063b7d68519146100e0578063b88a802f146100db578063c8f33c91146100d6578063cd3daf9d146100d1578063f2fde38b146100cc5763fc0c546a036101385761044b565b6103f6565b6103db565b6103c0565b61039c565b610384565b61036c565b610337565b61031c565b6102f8565b6102dd565b6102aa565b61026a565b610228565b6101fd565b6101cd565b6001600160a01b031690565b90565b6001600160a01b0381165b0361013857565b600080fd5b9050359061014a82610126565b565b90602082820312610138576101239161013d565b61012390610117906001600160a01b031682565b61012390610160565b61012390610174565b906101909061017d565b600052602052604060002090565b610123916008021c81565b90610123915461019e565b60006101c4610123926006610186565b6101a9565b9052565b34610138576101f96101e86101e336600461014c565b6101b4565b6040515b9182918290815260200190565b0390f35b34610138576101f96101e861021336600461014c565b610483565b60006101c4610123926005610186565b34610138576101f96101e861023e36600461014c565b610218565b80610131565b9050359061014a82610243565b906020828203126101385761012391610249565b346101385761028261027d366004610256565b610632565b604051005b9190604083820312610138576101239060206102a3828661013d565b9401610249565b34610138576101f96101e86102c0366004610287565b906107af565b600091031261013857565b610123600060036101a9565b34610138576102ed3660046102c6565b6101f96101e86102d1565b34610138576103083660046102c6565b61028261084a565b610123600060026101a9565b346101385761032c3660046102c6565b6101f96101e8610310565b34610138576103473660046102c6565b6101f9610352610852565b604051918291826001600160a01b03909116815260200190565b346101385761028261037f366004610256565b610880565b3461013857610282610397366004610256565b61097f565b34610138576103ac3660046102c6565b6102826109ca565b610123600060046101a9565b34610138576103d03660046102c6565b6101f96101e86103b4565b34610138576103eb3660046102c6565b6101f96101e8610aa3565b346101385761028261040936600461014c565b610b87565b610123916008021c610117565b90610123915461040e565b6101236000600161041b565b6101c99061017d565b60208101929161014a9190610432565b346101385761045b3660046102c6565b6101f9610466610426565b6040519182918261043b565b6101239081565b6101239054610472565b61049a61012391610492600090565b506005610186565b610479565b6101236101236101239290565b156104b357565b60405162461bcd60e51b815260206004820152601d60248201527f416d6f756e74206d7573742062652067726561746572207468616e20300000006044820152606490fd5b0390fd5b1561050357565b60405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e74207374616b6560701b6044820152606490fd5b634e487b7160e01b600052601160045260246000fd5b9190820391821161056057565b61053d565b90600019905b9181191691161790565b9061058561012361058c9261049f565b8254610565565b9055565b61012390610117565b6101239054610590565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176105db57604052565b6105a3565b801515610131565b9050519061014a826105e0565b9060208282031261013857610123916105e8565b6001600160a01b03909116815260408101929161014a9160200152565b6040513d6000823e3d90fd5b61064661063f600061049f565b82116104ac565b61066961065761049a336005610186565b8290610662565b9190565b10156104fc565b61067233610b90565b610698610680336005610186565b6106928361068d83610479565b610553565b90610575565b6106b06106a98261068d6002610479565b6002610575565b6106c26106bd6001610599565b61017d565b60206106cd60405190565b91829063a9059cbb60e01b8252816000816106ec883360048401610609565b03925af1801561076557610738575b507f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d56107336107293361017d565b926101ec60405190565b0390a2565b6107599060203d60201161075e575b61075181836105b9565b8101906105f5565b6106fb565b503d610747565b610626565b8181029291811591840414171561056057565b634e487b7160e01b600052601260045260246000fd5b811561079d570490565b61077d565b9190820180921161056057565b61080c61049a6108046107ed610123956107c7600090565b506107e76107d3610aa3565b6107e161049a896005610186565b92610553565b9061076a565b6107fe670de0b6b3a764000061049f565b90610793565b926006610186565b906107a2565b61081a610c0b565b61014a610838565b6101176101236101239290565b61012390610822565b61014a610845600061082f565b610c5b565b61014a610812565b6101236000610599565b6001600160a01b0391821681529116602082015260608101929161014a9160400152565b61088d61063f600061049f565b61089633610b90565b6108dd6020826108a96106bd6001610599565b6108b23061017d565b60006108bd60405190565b8096819582946108d16323b872dd60e01b90565b8452336004850161085c565b03925af180156107655761094b575b5061090d6108fb336005610186565b6106928361090883610479565b6107a2565b61091e6106a9826109086002610479565b7f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d6107336107293361017d565b6109639060203d60201161075e5761075181836105b9565b6108ec565b61014a90610974610c0b565b61014a906003610575565b61014a90610968565b1561098f57565b60405162461bcd60e51b81526020600482015260136024820152724e6f207265776172647320746f20636c61696d60681b6044820152606490fd5b6109d333610b90565b6109e161049a336006610186565b6109f56109ee600061049f565b8211610988565b610a12610a02600061049f565b610a0d336006610186565b610575565b610a1f6106bd6001610599565b6020610a2a60405190565b91829063a9059cbb60e01b825281600081610a49883360048401610609565b03925af1801561076557610a86575b507fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e04866107336107293361017d565b610a9e9060203d60201161075e5761075181836105b9565b610a58565b610aad6002610479565b610aba61065e600061049f565b14610aec57610123610ae2610acf6003610479565b6107e7610adc6004610479565b42610553565b6107fe6002610479565b610123600061049f565b61014a90610b02610c0b565b610b62565b15610b0e57565b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b61014a90610845610b76610117600061082f565b6001600160a01b0383161415610b07565b61014a90610af6565b610bb090610a0d610ba8610ba2610aa3565b836107af565b916006610186565b61014a426004610575565b15610bc257565b60405162461bcd60e51b8152806104f8600482016020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b61014a610c16610852565b610c2f610c2233610117565b916001600160a01b031690565b14610bbb565b906001600160a01b039061056b565b90610c5461012361058c9261017d565b8254610c35565b610c7c610c76610c6b6000610599565b6106bd846000610c44565b9161017d565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610ca760405190565b600090a356fea264697066735822122000fec252bfc18786a865686d3e1f9ba97ec89dfcede73aeae6d022352dcbd1cc64736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "StakeContract",
    constructorArgs: [_tokenAddress: AbiParameterToPrimitiveType<{"name":"_tokenAddress","type":"address"}>, _stakingRewardRate: AbiParameterToPrimitiveType<{"name":"_stakingRewardRate","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StakeContract$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/StakeContract.sol:StakeContract",
    constructorArgs: [_tokenAddress: AbiParameterToPrimitiveType<{"name":"_tokenAddress","type":"address"}>, _stakingRewardRate: AbiParameterToPrimitiveType<{"name":"_stakingRewardRate","type":"uint256"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<StakeContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "StakeContract",
    constructorArgs: [_tokenAddress: AbiParameterToPrimitiveType<{"name":"_tokenAddress","type":"address"}>, _stakingRewardRate: AbiParameterToPrimitiveType<{"name":"_stakingRewardRate","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StakeContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/StakeContract.sol:StakeContract",
    constructorArgs: [_tokenAddress: AbiParameterToPrimitiveType<{"name":"_tokenAddress","type":"address"}>, _stakingRewardRate: AbiParameterToPrimitiveType<{"name":"_stakingRewardRate","type":"uint256"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<StakeContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "StakeContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StakeContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/StakeContract.sol:StakeContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<StakeContract$Type["abi"]>>;
}
