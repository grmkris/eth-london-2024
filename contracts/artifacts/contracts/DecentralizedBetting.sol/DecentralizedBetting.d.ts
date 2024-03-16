// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface DecentralizedBetting$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "DecentralizedBetting",
  "sourceName": "contracts/DecentralizedBetting.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_socialOracleAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_matchNFTAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "bets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "prediction",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "claimWinnings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "createEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "events",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "outcome",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "resolved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "totalPot",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "winningPot",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "emergencyStop",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "matchNFTAddress",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "prediction",
          "type": "bool"
        }
      ],
      "name": "placeBet",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "resolveEvent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "socialOracleAddress",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "eventId",
          "type": "uint256"
        }
      ],
      "name": "toggleEmergencyStop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523462000031576200001f62000018620000e5565b90620001a4565b604051610fba620001e48239610fba90f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b038211176200006e57604052565b62000036565b906200008b6200008360405190565b92836200004c565b565b6001600160a01b031690565b90565b6001600160a01b038116036200003157565b905051906200008b826200009c565b9190604083820312620000315762000099906020620000dd8286620000ae565b9401620000ae565b620001086200119e80380380620000fc8162000074565b928339810190620000bd565b9091565b906001600160a01b03905b9181191691161790565b62000099906200008d906001600160a01b031682565b620000999062000121565b620000999062000137565b906200016162000099620001699262000142565b82546200010c565b9055565b6200009962000099620000999290565b906000199062000117565b906200019c6200009962000169926200016d565b82546200017d565b90620001db6200008b92620001bb3360006200014d565b620001d3620001cb60016200016d565b600162000188565b60046200014d565b60056200014d56fe6080604052600436101561001257600080fd5b60003560e01c80630b791430146100c257806330658198146100bd5780633ccfd60b146100b8578063677bd9ff146100b35780638822e6fd146100ae5780638da5cb5b146100a9578063977d996d146100a45780639a2e82401461009f5780639ed9c74d1461009a578063bed524d6146100955763f644b3bb036100d05761044e565b6103aa565b610396565b610343565b61031f565b610304565b6102e1565b6102c9565b6102ac565b610285565b6101fd565b805b036100d057565b600080fd5b905035906100e2826100c7565b565b906020828203126100d0576100f8916100d5565b90565b6100f86100f86100f89290565b90610112906100fb565b600052602052604060002090565b6100f89081565b6100f89054610120565b6100f8905b60ff1690565b6100f89054610131565b6100f89060081c610136565b6100f89054610146565b610167906002610108565b61017081610127565b9161017d60018301610127565b9161018a6002820161013c565b9161019760028301610152565b916101a460038201610127565b916100f860056101b660048501610127565b930161013c565b9052565b90815260e08101979695909490939092909160208601521515604085015215156060840152608083015260a082015260c0016100e29115159052565b346100d0576102316102186102133660046100e4565b61015c565b9361022897959793919360405190565b978897886101c1565b0390f35b60009103126100d057565b6100f8916008021c5b6001600160a01b031690565b906100f89154610240565b6100f860006004610255565b6101bd90610249565b6020810192916100e2919061026c565b346100d057610295366004610235565b6102316102a0610260565b60405191829182610275565b346100d0576102bc366004610235565b6102c461056c565b604051005b346100d0576102c46102dc3660046100e4565b610891565b346100d0576102c46102f43660046100e4565b6108fc565b6100f8600080610255565b346100d057610314366004610235565b6102316102a06102f9565b346100d0576102c46103323660046100e4565b610ab3565b6100f860006005610255565b346100d057610353366004610235565b6102316102a0610337565b8015156100c9565b905035906100e28261035e565b91906040838203126100d0576100f890602061038f82866100d5565b9401610366565b6102c46103a4366004610373565b90610d5d565b346100d0576102c46103bd3660046100e4565b610f7b565b6100c981610249565b905035906100e2826103c2565b91906040838203126100d0576100f89060206103f482866100d5565b94016103cb565b6100f890610249906001600160a01b031682565b6100f8906103fb565b6100f89061040f565b9061011290610418565b9061043a61043f926003610108565b610421565b906100f860016101b684610127565b346100d0576104676104613660046103d8565b9061042b565b9061023161047460405190565b92839283908152901515602082015260400190565b6100f890610249565b6100f89054610489565b156104a357565b60405162461bcd60e51b815260206004820152602260248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f604482015261371760f11b6064820152608490fd5b6105176105086105036000610492565b610249565b61051133610249565b1461049c565b6100e261052b565b6040513d6000823e3d90fd5b600080808061053930610418565b3161054e61054961054984610492565b610418565b828215610563575bf11561055e57565b61051f565b506108fc610556565b6100e26104f3565b1561057b57565b60405162461bcd60e51b815260206004820152601860248201527f4576656e7420686173206265656e207265736f6c7665642e00000000000000006044820152606490fd5b6100e2906105e86105e36105df60026105d98582610108565b01610152565b1590565b610574565b610775565b156105f457565b60405162461bcd60e51b815260206004820152601c60248201527f4576656e7420686173206e6f74206265656e207265736f6c7665642e000000006044820152606490fd5b1561064057565b60405162461bcd60e51b815260206004820152601960248201527f5573657220686173206e6f2062657420746f20636c61696d2e000000000000006044820152606490fd5b90600019905b9181191691161790565b906106a56100f86106ac926100fb565b8254610685565b9055565b634e487b7160e01b600052601160045260246000fd5b818102929181159184041417156106d957565b6106b0565b634e487b7160e01b600052601260045260246000fd5b906106fe565b9190565b908115610709570490565b6106de565b1561071557565b60405162461bcd60e51b815260206004820152603260248201527f496e73756666696369656e7420636f6e74726163742062616c616e636520746f604482015271103830bc9037baba103bb4b73734b733b99760711b6064820152608490fd5b600261078d610788826105d98582610108565b6105ed565b6107a56100f861079e846003610108565b3390610421565b6107ae81610127565b926107c76000946107c16106fa876100fb565b11610639565b6107d36001830161013c565b6107f86107f26107ed866107e78682610108565b0161013c565b151590565b91151590565b0361087a57826108586108488695946108438761083260046108268961082c6003610826879e9d889e610108565b01610127565b99610108565b92019461083e86610127565b6106c6565b6106f4565b91610852846100fb565b90610695565b61086e61086430610418565b829031101561070e565b61054e61054933610418565b5090508161088a6100e2936100fb565b9101610695565b6100e2906105c0565b6100e2906108ae6105086105036000610492565b6108d3565b9060ff9061068b565b906108cc6100f86106ac926107ed565b82546108b3565b6100e29060056108f66108ee6105df836107e7866002610108565b926002610108565b016108bc565b6100e29061089a565b6100e2906109196105086105036000610492565b610993565b60001981146106d95760010190565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff82111761096557604052565b61092d565b9081526040810192916100e29160200152565b9081526040810192916100e2916020019061026c565b61099d6001610127565b906109b16109aa8361091e565b6001610695565b6109c88260006109c2826002610108565b01610695565b6109d98160016109c2856002610108565b6109e96105496105496004610492565b803b156100d057610a1e600092918392610a0260405190565b948593849283919063938cfd6760e01b8352896004840161096a565b03925af1801561055e57610a9d575b50610a3e6105496105496005610492565b803b156100d057610a74600092918392610a5760405190565b94859384928391906394bf804d60e01b835233906004840161097d565b03925af1801561055e57610a855750565b6100e2906000610a958183610943565b810190610235565b610aad906000610a958183610943565b38610a2d565b6100e290610905565b906100e291610ad66105e36105df60026105d98582610108565b610c76565b15610ae257565b60405162461bcd60e51b815260206004820152602160248201527f42657474696e672069732074656d706f726172696c792073757370656e6465646044820152601760f91b6064820152608490fd5b15610b3857565b60405162461bcd60e51b815260206004820152602260248201527f42657420616d6f756e74206d7573742062652067726561746572207468616e20604482015261181760f11b6064820152608490fd5b15610b8f57565b60405162461bcd60e51b815260206004820152601e60248201527f557365722068617320616c726561647920706c616365642061206265742e00006044820152606490fd5b15610bdb57565b60405162461bcd60e51b815260206004820152601160248201527024b73b30b634b21032bb32b73a1024a21760791b6044820152606490fd5b906100e2610c2160405190565b9283610943565b6100f86040610c14565b6001610c5860206100e294610c51610c4b600083015190565b86610695565b0151151590565b91016108bc565b906100e291610c32565b919082018092116106d957565b600291610c93610c8e6105df60056107e78688610108565b610adb565b610d466000610cab610ca4826100fb565b3411610b31565b610d28600391610cd7610cc58261082661079e8a88610108565b610cd16106fa846100fb565b14610b88565b610cfb610ce882610826898b610108565b610cf46106fa846100fb565b1415610bd4565b610d0e610d06610c28565b913490830152565b8415156020820152610d2361079e8785610108565b610c5f565b610d328486610108565b01610852610d3f82610127565b3490610c69565b610d4e575050565b610d326004916100e293610108565b906100e291610abc565b6100e290610d7b6105086105036000610492565b6100e290610d946105e36105df60026105d98582610108565b610e91565b15610da057565b60405162461bcd60e51b815260206004820152601b60248201527f4576656e7420686173206e6f74206f63637572726564207965742e00000000006044820152606490fd5b905051906100e28261035e565b91906040838203126100d0576100f8906020610e0e8286610de5565b9401610de5565b15610e1c57565b60405162461bcd60e51b8152602060048201526024808201527f5175657374696f6e206f7574636f6d65206e6f742064657465726d696e6564206044820152633cb2ba1760e11b6064820152608490fd5b9061ff009060081b61068b565b90610e8a6100f86106ac926107ed565b8254610e6d565b6002610eb2610ea560006108268585610108565b610cf46106fa60006100fb565b610ecf610ec76100f860016108268686610108565b421015610d99565b610edf6105496105496004610492565b906040610eeb60405190565b6325aaf90560e01b81526004810185905292839060249082905afa801561055e576100e293610f3a610f4092600195600080919092610f46575b50610f2f90610e15565b846108f68482610108565b82610108565b01610e7a565b610f2f9250610f6d915060403d604011610f74575b610f658183610943565b810190610df2565b9091610f25565b503d610f5b565b6100e290610d6756fea26469706673582212209c28f7c01aac02ba9936bda73d4815d9b547abd3e2ffd0a2183f469576d192d464736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b60003560e01c80630b791430146100c257806330658198146100bd5780633ccfd60b146100b8578063677bd9ff146100b35780638822e6fd146100ae5780638da5cb5b146100a9578063977d996d146100a45780639a2e82401461009f5780639ed9c74d1461009a578063bed524d6146100955763f644b3bb036100d05761044e565b6103aa565b610396565b610343565b61031f565b610304565b6102e1565b6102c9565b6102ac565b610285565b6101fd565b805b036100d057565b600080fd5b905035906100e2826100c7565b565b906020828203126100d0576100f8916100d5565b90565b6100f86100f86100f89290565b90610112906100fb565b600052602052604060002090565b6100f89081565b6100f89054610120565b6100f8905b60ff1690565b6100f89054610131565b6100f89060081c610136565b6100f89054610146565b610167906002610108565b61017081610127565b9161017d60018301610127565b9161018a6002820161013c565b9161019760028301610152565b916101a460038201610127565b916100f860056101b660048501610127565b930161013c565b9052565b90815260e08101979695909490939092909160208601521515604085015215156060840152608083015260a082015260c0016100e29115159052565b346100d0576102316102186102133660046100e4565b61015c565b9361022897959793919360405190565b978897886101c1565b0390f35b60009103126100d057565b6100f8916008021c5b6001600160a01b031690565b906100f89154610240565b6100f860006004610255565b6101bd90610249565b6020810192916100e2919061026c565b346100d057610295366004610235565b6102316102a0610260565b60405191829182610275565b346100d0576102bc366004610235565b6102c461056c565b604051005b346100d0576102c46102dc3660046100e4565b610891565b346100d0576102c46102f43660046100e4565b6108fc565b6100f8600080610255565b346100d057610314366004610235565b6102316102a06102f9565b346100d0576102c46103323660046100e4565b610ab3565b6100f860006005610255565b346100d057610353366004610235565b6102316102a0610337565b8015156100c9565b905035906100e28261035e565b91906040838203126100d0576100f890602061038f82866100d5565b9401610366565b6102c46103a4366004610373565b90610d5d565b346100d0576102c46103bd3660046100e4565b610f7b565b6100c981610249565b905035906100e2826103c2565b91906040838203126100d0576100f89060206103f482866100d5565b94016103cb565b6100f890610249906001600160a01b031682565b6100f8906103fb565b6100f89061040f565b9061011290610418565b9061043a61043f926003610108565b610421565b906100f860016101b684610127565b346100d0576104676104613660046103d8565b9061042b565b9061023161047460405190565b92839283908152901515602082015260400190565b6100f890610249565b6100f89054610489565b156104a357565b60405162461bcd60e51b815260206004820152602260248201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f604482015261371760f11b6064820152608490fd5b6105176105086105036000610492565b610249565b61051133610249565b1461049c565b6100e261052b565b6040513d6000823e3d90fd5b600080808061053930610418565b3161054e61054961054984610492565b610418565b828215610563575bf11561055e57565b61051f565b506108fc610556565b6100e26104f3565b1561057b57565b60405162461bcd60e51b815260206004820152601860248201527f4576656e7420686173206265656e207265736f6c7665642e00000000000000006044820152606490fd5b6100e2906105e86105e36105df60026105d98582610108565b01610152565b1590565b610574565b610775565b156105f457565b60405162461bcd60e51b815260206004820152601c60248201527f4576656e7420686173206e6f74206265656e207265736f6c7665642e000000006044820152606490fd5b1561064057565b60405162461bcd60e51b815260206004820152601960248201527f5573657220686173206e6f2062657420746f20636c61696d2e000000000000006044820152606490fd5b90600019905b9181191691161790565b906106a56100f86106ac926100fb565b8254610685565b9055565b634e487b7160e01b600052601160045260246000fd5b818102929181159184041417156106d957565b6106b0565b634e487b7160e01b600052601260045260246000fd5b906106fe565b9190565b908115610709570490565b6106de565b1561071557565b60405162461bcd60e51b815260206004820152603260248201527f496e73756666696369656e7420636f6e74726163742062616c616e636520746f604482015271103830bc9037baba103bb4b73734b733b99760711b6064820152608490fd5b600261078d610788826105d98582610108565b6105ed565b6107a56100f861079e846003610108565b3390610421565b6107ae81610127565b926107c76000946107c16106fa876100fb565b11610639565b6107d36001830161013c565b6107f86107f26107ed866107e78682610108565b0161013c565b151590565b91151590565b0361087a57826108586108488695946108438761083260046108268961082c6003610826879e9d889e610108565b01610127565b99610108565b92019461083e86610127565b6106c6565b6106f4565b91610852846100fb565b90610695565b61086e61086430610418565b829031101561070e565b61054e61054933610418565b5090508161088a6100e2936100fb565b9101610695565b6100e2906105c0565b6100e2906108ae6105086105036000610492565b6108d3565b9060ff9061068b565b906108cc6100f86106ac926107ed565b82546108b3565b6100e29060056108f66108ee6105df836107e7866002610108565b926002610108565b016108bc565b6100e29061089a565b6100e2906109196105086105036000610492565b610993565b60001981146106d95760010190565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff82111761096557604052565b61092d565b9081526040810192916100e29160200152565b9081526040810192916100e2916020019061026c565b61099d6001610127565b906109b16109aa8361091e565b6001610695565b6109c88260006109c2826002610108565b01610695565b6109d98160016109c2856002610108565b6109e96105496105496004610492565b803b156100d057610a1e600092918392610a0260405190565b948593849283919063938cfd6760e01b8352896004840161096a565b03925af1801561055e57610a9d575b50610a3e6105496105496005610492565b803b156100d057610a74600092918392610a5760405190565b94859384928391906394bf804d60e01b835233906004840161097d565b03925af1801561055e57610a855750565b6100e2906000610a958183610943565b810190610235565b610aad906000610a958183610943565b38610a2d565b6100e290610905565b906100e291610ad66105e36105df60026105d98582610108565b610c76565b15610ae257565b60405162461bcd60e51b815260206004820152602160248201527f42657474696e672069732074656d706f726172696c792073757370656e6465646044820152601760f91b6064820152608490fd5b15610b3857565b60405162461bcd60e51b815260206004820152602260248201527f42657420616d6f756e74206d7573742062652067726561746572207468616e20604482015261181760f11b6064820152608490fd5b15610b8f57565b60405162461bcd60e51b815260206004820152601e60248201527f557365722068617320616c726561647920706c616365642061206265742e00006044820152606490fd5b15610bdb57565b60405162461bcd60e51b815260206004820152601160248201527024b73b30b634b21032bb32b73a1024a21760791b6044820152606490fd5b906100e2610c2160405190565b9283610943565b6100f86040610c14565b6001610c5860206100e294610c51610c4b600083015190565b86610695565b0151151590565b91016108bc565b906100e291610c32565b919082018092116106d957565b600291610c93610c8e6105df60056107e78688610108565b610adb565b610d466000610cab610ca4826100fb565b3411610b31565b610d28600391610cd7610cc58261082661079e8a88610108565b610cd16106fa846100fb565b14610b88565b610cfb610ce882610826898b610108565b610cf46106fa846100fb565b1415610bd4565b610d0e610d06610c28565b913490830152565b8415156020820152610d2361079e8785610108565b610c5f565b610d328486610108565b01610852610d3f82610127565b3490610c69565b610d4e575050565b610d326004916100e293610108565b906100e291610abc565b6100e290610d7b6105086105036000610492565b6100e290610d946105e36105df60026105d98582610108565b610e91565b15610da057565b60405162461bcd60e51b815260206004820152601b60248201527f4576656e7420686173206e6f74206f63637572726564207965742e00000000006044820152606490fd5b905051906100e28261035e565b91906040838203126100d0576100f8906020610e0e8286610de5565b9401610de5565b15610e1c57565b60405162461bcd60e51b8152602060048201526024808201527f5175657374696f6e206f7574636f6d65206e6f742064657465726d696e6564206044820152633cb2ba1760e11b6064820152608490fd5b9061ff009060081b61068b565b90610e8a6100f86106ac926107ed565b8254610e6d565b6002610eb2610ea560006108268585610108565b610cf46106fa60006100fb565b610ecf610ec76100f860016108268686610108565b421015610d99565b610edf6105496105496004610492565b906040610eeb60405190565b6325aaf90560e01b81526004810185905292839060249082905afa801561055e576100e293610f3a610f4092600195600080919092610f46575b50610f2f90610e15565b846108f68482610108565b82610108565b01610e7a565b610f2f9250610f6d915060403d604011610f74575b610f658183610943565b810190610df2565b9091610f25565b503d610f5b565b6100e290610d6756fea26469706673582212209c28f7c01aac02ba9936bda73d4815d9b547abd3e2ffd0a2183f469576d192d464736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "DecentralizedBetting",
    constructorArgs: [_socialOracleAddress: AbiParameterToPrimitiveType<{"name":"_socialOracleAddress","type":"address"}>, _matchNFTAddress: AbiParameterToPrimitiveType<{"name":"_matchNFTAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DecentralizedBetting$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/DecentralizedBetting.sol:DecentralizedBetting",
    constructorArgs: [_socialOracleAddress: AbiParameterToPrimitiveType<{"name":"_socialOracleAddress","type":"address"}>, _matchNFTAddress: AbiParameterToPrimitiveType<{"name":"_matchNFTAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<DecentralizedBetting$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "DecentralizedBetting",
    constructorArgs: [_socialOracleAddress: AbiParameterToPrimitiveType<{"name":"_socialOracleAddress","type":"address"}>, _matchNFTAddress: AbiParameterToPrimitiveType<{"name":"_matchNFTAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DecentralizedBetting$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/DecentralizedBetting.sol:DecentralizedBetting",
    constructorArgs: [_socialOracleAddress: AbiParameterToPrimitiveType<{"name":"_socialOracleAddress","type":"address"}>, _matchNFTAddress: AbiParameterToPrimitiveType<{"name":"_matchNFTAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<DecentralizedBetting$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "DecentralizedBetting",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DecentralizedBetting$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/DecentralizedBetting.sol:DecentralizedBetting",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<DecentralizedBetting$Type["abi"]>>;
}