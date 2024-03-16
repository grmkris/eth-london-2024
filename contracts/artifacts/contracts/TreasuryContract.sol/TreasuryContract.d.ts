// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { AbiParameterToPrimitiveType, GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface TreasuryContract$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "TreasuryContract",
  "sourceName": "contracts/TreasuryContract.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_usdcAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "bettingContract",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "pullUSDC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_bettingContract",
          "type": "address"
        }
      ],
      "name": "setBettingContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_stakeContract",
          "type": "address"
        }
      ],
      "name": "setStakeContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakeContract",
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
      "name": "usdc",
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
      "name": "withdrawUSDC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523461002a576100196100146100c2565b610136565b6040516105d261014a82396105d290f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b90601f01601f191681019081106001600160401b0382111761006657604052565b61002f565b9061007f61007860405190565b9283610045565b565b6001600160a01b031690565b90565b6001600160a01b0381160361002a57565b9050519061007f82610090565b9060208282031261002a5761008d916100a1565b61008d61071c803803806100d58161006b565b9283398101906100ae565b61008d90610081906001600160a01b031682565b61008d906100e0565b61008d906100f4565b9061011661008d610132926100fd565b82546001600160a01b0319166001600160a01b03919091161790565b9055565b61014261007f916100fd565b600061010656fe6080604052600436101561001257600080fd5b60003560e01c80631a1862271461008257806321cb48311461007d57806330fce48b146100785780633e413bee1461007357806344471fd91461006e578063509484d5146100695763dd28505d0361009257610271565b610245565b61022c565b6101cf565b610168565b61011c565b6100e5565b600091031261009257565b600080fd5b6100ac916008021c5b6001600160a01b031690565b90565b906100ac9154610097565b6100ac600060026100af565b6100cf906100a0565b9052565b6020810192916100e391906100c6565b565b34610092576100f5366004610087565b61010c6101006100ba565b604051918291826100d3565b0390f35b6100ac600060016100af565b346100925761012c366004610087565b61010c610100610110565b610140816100a0565b0361009257565b905035906100e382610137565b90602082820312610092576100ac91610147565b346100925761018061017b366004610154565b6102b9565b604051005b6100ac6000806100af565b6100ac906100a0906001600160a01b031682565b6100ac90610190565b6100ac906101a4565b6100cf906101ad565b6020810192916100e391906101b6565b34610092576101df366004610087565b61010c6101ea610185565b604051918291826101bf565b80610140565b905035906100e3826101f6565b9190604083820312610092576100ac9060206102258286610147565b94016101fc565b346100925761018061023f366004610209565b906104d1565b3461009257610180610258366004610154565b6104db565b90602082820312610092576100ac916101fc565b346100925761018061028436600461025d565b610593565b906102996100ac6102b5926101ad565b82546001600160a01b0319166001600160a01b03919091161790565b9055565b6100e3906001610289565b6100ac906100a0565b6100ac90546102c4565b6020808252818101527f43616c6c6572206973206e6f7420746865207374616b6520636f6e7472616374604082015260600190565b1561031357565b60405162461bcd60e51b81528061032c600482016102d7565b0390fd5b906100e39161035961034a61034560026102cd565b6100a0565b610353336100a0565b1461030c565b61043d565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff82111761039657604052565b61035e565b801515610140565b905051906100e38261039b565b90602082820312610092576100ac916103a3565b9160206100e39294936103df604082019660008301906100c6565b0152565b6040513d6000823e3d90fd5b6020808252601490820152731554d110c81d1c985b9cd9995c8819985a5b195960621b604082015260600190565b1561042457565b60405162461bcd60e51b81528061032c600482016103ef565b6104819160209161045661045160006102cd565b6101ad565b90600061046260405190565b80968195829461047663a9059cbb60e01b90565b8452600484016103c4565b03925af180156104cc576100e39160009161049d575b5061041d565b6104bf915060203d6020116104c5575b6104b78183610374565b8101906103b0565b38610497565b503d6104ad565b6103e3565b906100e391610330565b6100e3906002610289565b60208082526022908201527f43616c6c6572206973206e6f74207468652062657474696e6720636f6e74726160408201526118dd60f21b606082015260800190565b1561052f57565b60405162461bcd60e51b81528061032c600482016104e6565b6100e39061056b61055c61034560016102cd565b610565336100a0565b14610528565b60206104819161057e61045160006102cd565b61058860016102cd565b600061046260405190565b6100e39061054856fea2646970667358221220c3802c40578a324f267b0aaf677451895df8bdd853f5a169849c9310480ea2f264736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b60003560e01c80631a1862271461008257806321cb48311461007d57806330fce48b146100785780633e413bee1461007357806344471fd91461006e578063509484d5146100695763dd28505d0361009257610271565b610245565b61022c565b6101cf565b610168565b61011c565b6100e5565b600091031261009257565b600080fd5b6100ac916008021c5b6001600160a01b031690565b90565b906100ac9154610097565b6100ac600060026100af565b6100cf906100a0565b9052565b6020810192916100e391906100c6565b565b34610092576100f5366004610087565b61010c6101006100ba565b604051918291826100d3565b0390f35b6100ac600060016100af565b346100925761012c366004610087565b61010c610100610110565b610140816100a0565b0361009257565b905035906100e382610137565b90602082820312610092576100ac91610147565b346100925761018061017b366004610154565b6102b9565b604051005b6100ac6000806100af565b6100ac906100a0906001600160a01b031682565b6100ac90610190565b6100ac906101a4565b6100cf906101ad565b6020810192916100e391906101b6565b34610092576101df366004610087565b61010c6101ea610185565b604051918291826101bf565b80610140565b905035906100e3826101f6565b9190604083820312610092576100ac9060206102258286610147565b94016101fc565b346100925761018061023f366004610209565b906104d1565b3461009257610180610258366004610154565b6104db565b90602082820312610092576100ac916101fc565b346100925761018061028436600461025d565b610593565b906102996100ac6102b5926101ad565b82546001600160a01b0319166001600160a01b03919091161790565b9055565b6100e3906001610289565b6100ac906100a0565b6100ac90546102c4565b6020808252818101527f43616c6c6572206973206e6f7420746865207374616b6520636f6e7472616374604082015260600190565b1561031357565b60405162461bcd60e51b81528061032c600482016102d7565b0390fd5b906100e39161035961034a61034560026102cd565b6100a0565b610353336100a0565b1461030c565b61043d565b634e487b7160e01b600052604160045260246000fd5b90601f01601f1916810190811067ffffffffffffffff82111761039657604052565b61035e565b801515610140565b905051906100e38261039b565b90602082820312610092576100ac916103a3565b9160206100e39294936103df604082019660008301906100c6565b0152565b6040513d6000823e3d90fd5b6020808252601490820152731554d110c81d1c985b9cd9995c8819985a5b195960621b604082015260600190565b1561042457565b60405162461bcd60e51b81528061032c600482016103ef565b6104819160209161045661045160006102cd565b6101ad565b90600061046260405190565b80968195829461047663a9059cbb60e01b90565b8452600484016103c4565b03925af180156104cc576100e39160009161049d575b5061041d565b6104bf915060203d6020116104c5575b6104b78183610374565b8101906103b0565b38610497565b503d6104ad565b6103e3565b906100e391610330565b6100e3906002610289565b60208082526022908201527f43616c6c6572206973206e6f74207468652062657474696e6720636f6e74726160408201526118dd60f21b606082015260800190565b1561052f57565b60405162461bcd60e51b81528061032c600482016104e6565b6100e39061056b61055c61034560016102cd565b610565336100a0565b14610528565b60206104819161057e61045160006102cd565b61058860016102cd565b600061046260405190565b6100e39061054856fea2646970667358221220c3802c40578a324f267b0aaf677451895df8bdd853f5a169849c9310480ea2f264736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "TreasuryContract",
    constructorArgs: [_usdcAddress: AbiParameterToPrimitiveType<{"name":"_usdcAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TreasuryContract$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/TreasuryContract.sol:TreasuryContract",
    constructorArgs: [_usdcAddress: AbiParameterToPrimitiveType<{"name":"_usdcAddress","type":"address"}>],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<TreasuryContract$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "TreasuryContract",
    constructorArgs: [_usdcAddress: AbiParameterToPrimitiveType<{"name":"_usdcAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TreasuryContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/TreasuryContract.sol:TreasuryContract",
    constructorArgs: [_usdcAddress: AbiParameterToPrimitiveType<{"name":"_usdcAddress","type":"address"}>],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<TreasuryContract$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "TreasuryContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TreasuryContract$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/TreasuryContract.sol:TreasuryContract",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<TreasuryContract$Type["abi"]>>;
}