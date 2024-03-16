// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TEST_LiqudityToken$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TEST_LiqudityToken",
  "sourceName": "contracts/TEST_LiqudityToken.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
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
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
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
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
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
    }
  ],
  "bytecode": "0x60806040523462000026576200001462000116565b604051610fa9620004428239610fa990f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b038211176200006357604052565b6200002b565b90620000806200007860405190565b928362000041565b565b6001600160401b0381116200006357602090601f01601f19160190565b90620000b5620000af8362000082565b62000069565b918252565b620000c660126200009f565b712a32b9ba2634b8bab4b234ba3caa37b5b2b760711b602082015290565b620000ee620000ba565b90565b620000fd60036200009f565b6215131560ea1b602082015290565b620000ee620000f1565b6200008062000124620000e4565b6200012e6200010c565b620001399162000144565b6200008033620003e1565b90620000809162000351565b634e487b7160e01b600052602260045260246000fd5b906001600283049216801562000189575b60208310146200018357565b62000150565b91607f169162000177565b9160001960089290920291821b911b5b9181191691161790565b620000ee620000ee620000ee9290565b9190620001d3620000ee620001dc93620001ae565b90835462000194565b9055565b6200008091600091620001be565b818110620001fa575050565b806200020a6000600193620001e0565b01620001ee565b9190601f81116200022157505050565b620002356200008093600052602060002090565b906020601f84018190048301931062000259575b6020601f909101040190620001ee565b909150819062000249565b906200026e815190565b906001600160401b038211620000635762000296826200028f855462000166565b8562000211565b602090601f8311600114620002d557620001dc929160009183620002c9575b5050600019600883021c1916906002021790565b015190503880620002b5565b601f19831691620002eb85600052602060002090565b9260005b8181106200032c5750916002939185600196941062000312575b50505002019055565b01516000196008601f8516021c1916905538808062000309565b91936020600181928787015181550195019201620002ef565b90620000809162000264565b90620003636200008092600362000345565b600462000345565b620000ee905b6001600160a01b031690565b620000ee90546200036b565b906001600160a01b0390620001a4565b620000ee9062000371906001600160a01b031682565b620000ee9062000399565b620000ee90620003af565b90620003d9620000ee620001dc92620003ba565b825462000389565b6200040f62000408620003f560056200037d565b62000402846005620003c5565b620003ba565b91620003ba565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e06200043b60405190565b600090a356fe6080604052600436101561001257600080fd5b60003560e01c806306fdde0314610122578063095ea7b31461011d57806318160ddd1461011857806323b872dd14610113578063313ce5671461010e578063395093511461010957806340c10f191461010457806342966c68146100ff57806370a08231146100fa578063715018a6146100f557806379cc6790146100f05780638da5cb5b146100eb57806395d89b41146100e6578063a457c2d7146100e1578063a9059cbb146100dc578063dd62ed3e146100d75763f2fde38b036101325761048f565b610473565b610434565b610418565b6103fd565b6103c8565b6103af565b610397565b61037c565b610350565b61031e565b610302565b6102d3565b6102b7565b610262565b610234565b6101a6565b600091031261013257565b600080fd5b60005b83811061014a5750506000910152565b818101518382015260200161013a565b61017b61018460209361018e9361016f815190565b80835293849260200190565b95869101610137565b601f01601f191690565b0190565b60208082526101a39291019061015a565b90565b34610132576101b6366004610127565b6101cd6101c16105dc565b60405191829182610192565b0390f35b6001600160a01b031690565b6001600160a01b0381165b0361013257565b905035906101fc826101dd565b565b806101e8565b905035906101fc826101fe565b9190604083820312610132576101a390602061022d82866101ef565b9401610204565b34610132576101cd61025061024a366004610211565b906105e6565b60405191829182901515815260200190565b3461013257610272366004610127565b6101cd61027d610607565b6040515b9182918290815260200190565b9091606082840312610132576101a36102a784846101ef565b93604061022d82602087016101ef565b34610132576101cd6102506102cd36600461028e565b91610611565b34610132576102e3366004610127565b6101cd6102ee61063b565b6040519182918260ff909116815260200190565b34610132576101cd610250610318366004610211565b9061066d565b3461013257610337610331366004610211565b9061068c565b604051005b90602082820312610132576101a391610204565b346101325761033761036336600461033c565b610696565b90602082820312610132576101a3916101ef565b34610132576101cd61027d610392366004610368565b6106e3565b34610132576103a7366004610127565b610337610737565b34610132576103376103c2366004610211565b9061073f565b34610132576103d8366004610127565b6101cd6103e3610761565b604051918291826001600160a01b03909116815260200190565b346101325761040d366004610127565b6101cd6101c161076b565b34610132576101cd61025061042e366004610211565b906107d3565b34610132576101cd61025061044a366004610211565b906107f7565b9190604083820312610132576101a390602061046c82866101ef565b94016101ef565b34610132576101cd61027d610489366004610450565b90610802565b34610132576103376104a2366004610368565b6108b3565b634e487b7160e01b600052602260045260246000fd5b90600160028304921680156104dd575b60208310146104d857565b6104a7565b91607f16916104cd565b805460009392916105046104fa836104bd565b8085529360200190565b9160018116908115610556575060011461051d57505050565b6105309192939450600052602060002090565b916000925b8184106105425750500190565b805484840152602090930192600101610535565b92949550505060ff1916825215156020020190565b906101a3916104e7565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176105ad57604052565b610575565b906101fc6105cc926105c360405190565b9384809261056b565b038361058b565b6101a3906105b2565b6101a360036105d3565b6105f19190336109a3565b600190565b6101a39081565b6101a390546105f6565b6101a360026105fd565b6105f192919061062383335b83610a8b565b610bd0565b6106356101a36101a39290565b60ff1690565b6101a36012610628565b634e487b7160e01b600052601160045260246000fd5b9190820180921161066857565b610645565b6105f1919061068633926106818385610802565b61065b565b916109a3565b906101fc91610ccb565b6101fc9033610df0565b610df0565b6101a3906101d1906001600160a01b031682565b6101a3906106a5565b6101a3906106b9565b906106d5906106c2565b600052602052604060002090565b6106fa6101a3916106f2600090565b5060006106cb565b6105fd565b610707610ed0565b6101fc610725565b6101d16101a36101a39290565b6101a39061070f565b6101fc610732600061071c565b610f20565b6101fc6106ff565b6101fc91906106a0823361061d565b6101a3906101d1565b6101a3905461074e565b6101a36005610757565b6101a360046105d3565b1561077c57565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b0390fd5b6105f1919061068633926107e78385610802565b6107f382821015610775565b0390565b6105f1919033610bd0565b6101a39161081d6106fa92610815600090565b5060016106cb565b6106cb565b6101fc9061082e610ed0565b61088e565b1561083a57565b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6101fc906107326108a26101d1600061071c565b6001600160a01b0383161415610833565b6101fc90610822565b156108c357565b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b1561091b57565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b90600019905b9181191691161790565b6101a36101a36101a39290565b906109986101a361099f9261097b565b825461096b565b9055565b610a3a610a30610a2a7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593610a0d6109fc6109de600061071c565b6101d16001600160a01b0382166001600160a01b03861614156108bc565b6001600160a01b0388161415610914565b610a2587610a208861081d8560016106cb565b610988565b6106c2565b936106c2565b9361028160405190565b0390a3565b15610a4657565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b90610a968183610802565b6000198103610aa6575b50505050565b610aba93610686916107f382821015610a3f565b38808080610aa0565b15610aca57565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b15610b2457565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b15610b7c57565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b610a3a610a30610a2a7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef93610a25610c6c876000610c42610c31610c138361071c565b6101d16001600160a01b0382166001600160a01b038a161415610ac3565b6001600160a01b0384161415610b1d565b61081d610c628c610c566106fa89866106cb565b6107f382821015610b75565b610a2087846106cb565b610c798961018e836105fd565b90610988565b15610c8657565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610a3a610a30610a2a610cff600061071c565b610d1d6001600160a01b0382166001600160a01b0388161415610c7f565b610d35610d2e8861068160026105fd565b6002610988565b610a25610c6c8760006106cb565b15610d4a57565b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b15610da057565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610a3a610a30610a2a600094610e6f610e298761071c565b96610e486001600160a01b0389166001600160a01b0385161415610d43565b610a2083610e698b610e5d6106fa84876106cb565b6107f382821015610d99565b926106cb565b610a25610d2e886107f360026105fd565b15610e8757565b60405162461bcd60e51b8152806107cf600482016020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6101fc610edb610761565b610ef4610ee7336101d1565b916001600160a01b031690565b14610e80565b906001600160a01b0390610971565b90610f196101a361099f926106c2565b8254610efa565b610f41610f3b610f306005610757565b610a25846005610f09565b916106c2565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610f6c60405190565b8080610a3a56fea26469706673582212207abade1c23efe61dd174d6ca6ec1f885503745d090f64d7dc5db6ef884233a3964736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b60003560e01c806306fdde0314610122578063095ea7b31461011d57806318160ddd1461011857806323b872dd14610113578063313ce5671461010e578063395093511461010957806340c10f191461010457806342966c68146100ff57806370a08231146100fa578063715018a6146100f557806379cc6790146100f05780638da5cb5b146100eb57806395d89b41146100e6578063a457c2d7146100e1578063a9059cbb146100dc578063dd62ed3e146100d75763f2fde38b036101325761048f565b610473565b610434565b610418565b6103fd565b6103c8565b6103af565b610397565b61037c565b610350565b61031e565b610302565b6102d3565b6102b7565b610262565b610234565b6101a6565b600091031261013257565b600080fd5b60005b83811061014a5750506000910152565b818101518382015260200161013a565b61017b61018460209361018e9361016f815190565b80835293849260200190565b95869101610137565b601f01601f191690565b0190565b60208082526101a39291019061015a565b90565b34610132576101b6366004610127565b6101cd6101c16105dc565b60405191829182610192565b0390f35b6001600160a01b031690565b6001600160a01b0381165b0361013257565b905035906101fc826101dd565b565b806101e8565b905035906101fc826101fe565b9190604083820312610132576101a390602061022d82866101ef565b9401610204565b34610132576101cd61025061024a366004610211565b906105e6565b60405191829182901515815260200190565b3461013257610272366004610127565b6101cd61027d610607565b6040515b9182918290815260200190565b9091606082840312610132576101a36102a784846101ef565b93604061022d82602087016101ef565b34610132576101cd6102506102cd36600461028e565b91610611565b34610132576102e3366004610127565b6101cd6102ee61063b565b6040519182918260ff909116815260200190565b34610132576101cd610250610318366004610211565b9061066d565b3461013257610337610331366004610211565b9061068c565b604051005b90602082820312610132576101a391610204565b346101325761033761036336600461033c565b610696565b90602082820312610132576101a3916101ef565b34610132576101cd61027d610392366004610368565b6106e3565b34610132576103a7366004610127565b610337610737565b34610132576103376103c2366004610211565b9061073f565b34610132576103d8366004610127565b6101cd6103e3610761565b604051918291826001600160a01b03909116815260200190565b346101325761040d366004610127565b6101cd6101c161076b565b34610132576101cd61025061042e366004610211565b906107d3565b34610132576101cd61025061044a366004610211565b906107f7565b9190604083820312610132576101a390602061046c82866101ef565b94016101ef565b34610132576101cd61027d610489366004610450565b90610802565b34610132576103376104a2366004610368565b6108b3565b634e487b7160e01b600052602260045260246000fd5b90600160028304921680156104dd575b60208310146104d857565b6104a7565b91607f16916104cd565b805460009392916105046104fa836104bd565b8085529360200190565b9160018116908115610556575060011461051d57505050565b6105309192939450600052602060002090565b916000925b8184106105425750500190565b805484840152602090930192600101610535565b92949550505060ff1916825215156020020190565b906101a3916104e7565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff8211176105ad57604052565b610575565b906101fc6105cc926105c360405190565b9384809261056b565b038361058b565b6101a3906105b2565b6101a360036105d3565b6105f19190336109a3565b600190565b6101a39081565b6101a390546105f6565b6101a360026105fd565b6105f192919061062383335b83610a8b565b610bd0565b6106356101a36101a39290565b60ff1690565b6101a36012610628565b634e487b7160e01b600052601160045260246000fd5b9190820180921161066857565b610645565b6105f1919061068633926106818385610802565b61065b565b916109a3565b906101fc91610ccb565b6101fc9033610df0565b610df0565b6101a3906101d1906001600160a01b031682565b6101a3906106a5565b6101a3906106b9565b906106d5906106c2565b600052602052604060002090565b6106fa6101a3916106f2600090565b5060006106cb565b6105fd565b610707610ed0565b6101fc610725565b6101d16101a36101a39290565b6101a39061070f565b6101fc610732600061071c565b610f20565b6101fc6106ff565b6101fc91906106a0823361061d565b6101a3906101d1565b6101a3905461074e565b6101a36005610757565b6101a360046105d3565b1561077c57565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b0390fd5b6105f1919061068633926107e78385610802565b6107f382821015610775565b0390565b6105f1919033610bd0565b6101a39161081d6106fa92610815600090565b5060016106cb565b6106cb565b6101fc9061082e610ed0565b61088e565b1561083a57565b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6101fc906107326108a26101d1600061071c565b6001600160a01b0383161415610833565b6101fc90610822565b156108c357565b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b1561091b57565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b90600019905b9181191691161790565b6101a36101a36101a39290565b906109986101a361099f9261097b565b825461096b565b9055565b610a3a610a30610a2a7f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92593610a0d6109fc6109de600061071c565b6101d16001600160a01b0382166001600160a01b03861614156108bc565b6001600160a01b0388161415610914565b610a2587610a208861081d8560016106cb565b610988565b6106c2565b936106c2565b9361028160405190565b0390a3565b15610a4657565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b90610a968183610802565b6000198103610aa6575b50505050565b610aba93610686916107f382821015610a3f565b38808080610aa0565b15610aca57565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b15610b2457565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b15610b7c57565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b610a3a610a30610a2a7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef93610a25610c6c876000610c42610c31610c138361071c565b6101d16001600160a01b0382166001600160a01b038a161415610ac3565b6001600160a01b0384161415610b1d565b61081d610c628c610c566106fa89866106cb565b6107f382821015610b75565b610a2087846106cb565b610c798961018e836105fd565b90610988565b15610c8657565b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610a3a610a30610a2a610cff600061071c565b610d1d6001600160a01b0382166001600160a01b0388161415610c7f565b610d35610d2e8861068160026105fd565b6002610988565b610a25610c6c8760006106cb565b15610d4a57565b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b15610da057565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef610a3a610a30610a2a600094610e6f610e298761071c565b96610e486001600160a01b0389166001600160a01b0385161415610d43565b610a2083610e698b610e5d6106fa84876106cb565b6107f382821015610d99565b926106cb565b610a25610d2e886107f360026105fd565b15610e8757565b60405162461bcd60e51b8152806107cf600482016020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6101fc610edb610761565b610ef4610ee7336101d1565b916001600160a01b031690565b14610e80565b906001600160a01b0390610971565b90610f196101a361099f926106c2565b8254610efa565b610f41610f3b610f306005610757565b610a25846005610f09565b916106c2565b907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0610f6c60405190565b8080610a3a56fea26469706673582212207abade1c23efe61dd174d6ca6ec1f885503745d090f64d7dc5db6ef884233a3964736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TEST_LiqudityToken",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TEST_LiqudityToken$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/TEST_LiqudityToken.sol:TEST_LiqudityToken",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TEST_LiqudityToken$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TEST_LiqudityToken",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TEST_LiqudityToken$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/TEST_LiqudityToken.sol:TEST_LiqudityToken",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TEST_LiqudityToken$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TEST_LiqudityToken",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TEST_LiqudityToken$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/TEST_LiqudityToken.sol:TEST_LiqudityToken",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TEST_LiqudityToken$Type["abi"]>>;
}