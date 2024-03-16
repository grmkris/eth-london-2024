import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DecentralizedBetting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const decentralizedBettingAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_socialOracleAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_matchNFTAddress', internalType: 'address', type: 'address' },
      {
        name: '_bettingTokenAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'bets',
    outputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'prediction', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bettingToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimWinnings',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'createEvent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'events',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'outcome', internalType: 'bool', type: 'bool' },
      { name: 'resolved', internalType: 'bool', type: 'bool' },
      { name: 'totalPot', internalType: 'uint256', type: 'uint256' },
      { name: 'winningPot', internalType: 'uint256', type: 'uint256' },
      { name: 'emergencyStop', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'matchNFTAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'uint256', type: 'uint256' },
      { name: 'prediction', internalType: 'bool', type: 'bool' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'placeBet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'uint256', type: 'uint256' }],
    name: 'resolveEvent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'socialOracleAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'eventId', internalType: 'uint256', type: 'uint256' }],
    name: 'toggleEmergencyStop',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// matchNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const matchNftAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_baseURI', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eventId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_baseURI', internalType: 'string', type: 'string' }],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// socialOracle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const socialOracleAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_stakeContractAddress',
        internalType: 'address',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'questionId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      { name: 'answer', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'AnswerSubmitted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'correctAnswer',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'QuestionAnswered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'deadline',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'QuestionCreated',
  },
  {
    type: 'function',
    inputs: [
      { name: '_id', internalType: 'uint256', type: 'uint256' },
      { name: '_deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addQuestion',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'answers',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_questionId', internalType: 'uint256', type: 'uint256' }],
    name: 'determineCorrectAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_questionId', internalType: 'uint256', type: 'uint256' }],
    name: 'getQuestionOutcome',
    outputs: [
      { name: 'outcome', internalType: 'bool', type: 'bool' },
      { name: 'determined', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'hasAnswered',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'questions',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'isAnswered', internalType: 'bool', type: 'bool' },
      { name: 'correctAnswer', internalType: 'bool', type: 'bool' },
      { name: 'answerDetermined', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeContract',
    outputs: [
      { name: '', internalType: 'contract IStakeContract', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_questionId', internalType: 'uint256', type: 'uint256' },
      { name: '_answer', internalType: 'bool', type: 'bool' },
    ],
    name: 'submitAnswer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stakeContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakeContractAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_betStakingToken', internalType: 'address', type: 'address' },
      {
        name: '_liquidityTokenAddress',
        internalType: 'address',
        type: 'address',
      },
      {
        name: '_stakingTokenAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_treasuryAddress', internalType: 'address', type: 'address' },
      { name: '_penaltyRate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'penaltyAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Penalized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'stakeAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'liquidityAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Staked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'stakeAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'liquidityAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawn',
  },
  {
    type: 'function',
    inputs: [],
    name: 'betStakingToken',
    outputs: [
      { name: '', internalType: 'contract BetStakingToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'getStakeAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidityToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'penalize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'penaltyRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stakeAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidityAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakingToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalStaked',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'treasuryAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'stakeAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// testTokens
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testTokensAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__
 */
export const useReadDecentralizedBetting = /*#__PURE__*/ createUseReadContract({
  abi: decentralizedBettingAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"bets"`
 */
export const useReadDecentralizedBettingBets =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'bets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"bettingToken"`
 */
export const useReadDecentralizedBettingBettingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'bettingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"events"`
 */
export const useReadDecentralizedBettingEvents =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'events',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"matchNFTAddress"`
 */
export const useReadDecentralizedBettingMatchNftAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'matchNFTAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDecentralizedBettingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"socialOracleAddress"`
 */
export const useReadDecentralizedBettingSocialOracleAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: decentralizedBettingAbi,
    functionName: 'socialOracleAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__
 */
export const useWriteDecentralizedBetting =
  /*#__PURE__*/ createUseWriteContract({ abi: decentralizedBettingAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"claimWinnings"`
 */
export const useWriteDecentralizedBettingClaimWinnings =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'claimWinnings',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"createEvent"`
 */
export const useWriteDecentralizedBettingCreateEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'createEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"placeBet"`
 */
export const useWriteDecentralizedBettingPlaceBet =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'placeBet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"resolveEvent"`
 */
export const useWriteDecentralizedBettingResolveEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'resolveEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"toggleEmergencyStop"`
 */
export const useWriteDecentralizedBettingToggleEmergencyStop =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'toggleEmergencyStop',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteDecentralizedBettingWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: decentralizedBettingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__
 */
export const useSimulateDecentralizedBetting =
  /*#__PURE__*/ createUseSimulateContract({ abi: decentralizedBettingAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"claimWinnings"`
 */
export const useSimulateDecentralizedBettingClaimWinnings =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'claimWinnings',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"createEvent"`
 */
export const useSimulateDecentralizedBettingCreateEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'createEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"placeBet"`
 */
export const useSimulateDecentralizedBettingPlaceBet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'placeBet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"resolveEvent"`
 */
export const useSimulateDecentralizedBettingResolveEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'resolveEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"toggleEmergencyStop"`
 */
export const useSimulateDecentralizedBettingToggleEmergencyStop =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'toggleEmergencyStop',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link decentralizedBettingAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateDecentralizedBettingWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: decentralizedBettingAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__
 */
export const useReadMatchNft = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadMatchNftBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadMatchNftGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadMatchNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: matchNftAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"name"`
 */
export const useReadMatchNftName = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadMatchNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadMatchNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: matchNftAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadMatchNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadMatchNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: matchNftAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__
 */
export const useWriteMatchNft = /*#__PURE__*/ createUseWriteContract({
  abi: matchNftAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteMatchNftApprove = /*#__PURE__*/ createUseWriteContract({
  abi: matchNftAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteMatchNftMint = /*#__PURE__*/ createUseWriteContract({
  abi: matchNftAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteMatchNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: matchNftAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteMatchNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: matchNftAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useWriteMatchNftSetBaseUri = /*#__PURE__*/ createUseWriteContract({
  abi: matchNftAbi,
  functionName: 'setBaseURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteMatchNftTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: matchNftAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__
 */
export const useSimulateMatchNft = /*#__PURE__*/ createUseSimulateContract({
  abi: matchNftAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateMatchNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: matchNftAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateMatchNftMint = /*#__PURE__*/ createUseSimulateContract({
  abi: matchNftAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateMatchNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: matchNftAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateMatchNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: matchNftAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"setBaseURI"`
 */
export const useSimulateMatchNftSetBaseUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: matchNftAbi,
    functionName: 'setBaseURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link matchNftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateMatchNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: matchNftAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link matchNftAbi}__
 */
export const useWatchMatchNftEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: matchNftAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link matchNftAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchMatchNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: matchNftAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link matchNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchMatchNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: matchNftAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link matchNftAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchMatchNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: matchNftAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__
 */
export const useReadSocialOracle = /*#__PURE__*/ createUseReadContract({
  abi: socialOracleAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"answers"`
 */
export const useReadSocialOracleAnswers = /*#__PURE__*/ createUseReadContract({
  abi: socialOracleAbi,
  functionName: 'answers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"getQuestionOutcome"`
 */
export const useReadSocialOracleGetQuestionOutcome =
  /*#__PURE__*/ createUseReadContract({
    abi: socialOracleAbi,
    functionName: 'getQuestionOutcome',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"hasAnswered"`
 */
export const useReadSocialOracleHasAnswered =
  /*#__PURE__*/ createUseReadContract({
    abi: socialOracleAbi,
    functionName: 'hasAnswered',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"questions"`
 */
export const useReadSocialOracleQuestions = /*#__PURE__*/ createUseReadContract(
  { abi: socialOracleAbi, functionName: 'questions' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"stakeContract"`
 */
export const useReadSocialOracleStakeContract =
  /*#__PURE__*/ createUseReadContract({
    abi: socialOracleAbi,
    functionName: 'stakeContract',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link socialOracleAbi}__
 */
export const useWriteSocialOracle = /*#__PURE__*/ createUseWriteContract({
  abi: socialOracleAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"addQuestion"`
 */
export const useWriteSocialOracleAddQuestion =
  /*#__PURE__*/ createUseWriteContract({
    abi: socialOracleAbi,
    functionName: 'addQuestion',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"determineCorrectAnswer"`
 */
export const useWriteSocialOracleDetermineCorrectAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: socialOracleAbi,
    functionName: 'determineCorrectAnswer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"submitAnswer"`
 */
export const useWriteSocialOracleSubmitAnswer =
  /*#__PURE__*/ createUseWriteContract({
    abi: socialOracleAbi,
    functionName: 'submitAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link socialOracleAbi}__
 */
export const useSimulateSocialOracle = /*#__PURE__*/ createUseSimulateContract({
  abi: socialOracleAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"addQuestion"`
 */
export const useSimulateSocialOracleAddQuestion =
  /*#__PURE__*/ createUseSimulateContract({
    abi: socialOracleAbi,
    functionName: 'addQuestion',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"determineCorrectAnswer"`
 */
export const useSimulateSocialOracleDetermineCorrectAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: socialOracleAbi,
    functionName: 'determineCorrectAnswer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link socialOracleAbi}__ and `functionName` set to `"submitAnswer"`
 */
export const useSimulateSocialOracleSubmitAnswer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: socialOracleAbi,
    functionName: 'submitAnswer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link socialOracleAbi}__
 */
export const useWatchSocialOracleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: socialOracleAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link socialOracleAbi}__ and `eventName` set to `"AnswerSubmitted"`
 */
export const useWatchSocialOracleAnswerSubmittedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: socialOracleAbi,
    eventName: 'AnswerSubmitted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link socialOracleAbi}__ and `eventName` set to `"QuestionAnswered"`
 */
export const useWatchSocialOracleQuestionAnsweredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: socialOracleAbi,
    eventName: 'QuestionAnswered',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link socialOracleAbi}__ and `eventName` set to `"QuestionCreated"`
 */
export const useWatchSocialOracleQuestionCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: socialOracleAbi,
    eventName: 'QuestionCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__
 */
export const useReadStakeContract = /*#__PURE__*/ createUseReadContract({
  abi: stakeContractAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"betStakingToken"`
 */
export const useReadStakeContractBetStakingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'betStakingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"getStakeAmount"`
 */
export const useReadStakeContractGetStakeAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'getStakeAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"liquidityToken"`
 */
export const useReadStakeContractLiquidityToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'liquidityToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStakeContractOwner = /*#__PURE__*/ createUseReadContract({
  abi: stakeContractAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"penaltyRate"`
 */
export const useReadStakeContractPenaltyRate =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'penaltyRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stakingToken"`
 */
export const useReadStakeContractStakingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'stakingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"totalStaked"`
 */
export const useReadStakeContractTotalStaked =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'totalStaked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"treasuryAddress"`
 */
export const useReadStakeContractTreasuryAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: stakeContractAbi,
    functionName: 'treasuryAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__
 */
export const useWriteStakeContract = /*#__PURE__*/ createUseWriteContract({
  abi: stakeContractAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"penalize"`
 */
export const useWriteStakeContractPenalize =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    functionName: 'penalize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStakeContractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stake"`
 */
export const useWriteStakeContractStake = /*#__PURE__*/ createUseWriteContract({
  abi: stakeContractAbi,
  functionName: 'stake',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStakeContractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteStakeContractWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakeContractAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__
 */
export const useSimulateStakeContract = /*#__PURE__*/ createUseSimulateContract(
  { abi: stakeContractAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"penalize"`
 */
export const useSimulateStakeContractPenalize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    functionName: 'penalize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStakeContractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"stake"`
 */
export const useSimulateStakeContractStake =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    functionName: 'stake',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStakeContractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakeContractAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateStakeContractWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakeContractAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__
 */
export const useWatchStakeContractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stakeContractAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStakeContractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"Penalized"`
 */
export const useWatchStakeContractPenalizedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    eventName: 'Penalized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"Staked"`
 */
export const useWatchStakeContractStakedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    eventName: 'Staked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakeContractAbi}__ and `eventName` set to `"Withdrawn"`
 */
export const useWatchStakeContractWithdrawnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakeContractAbi,
    eventName: 'Withdrawn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__
 */
export const useReadTestTokens = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadTestTokensAllowance = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadTestTokensBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadTestTokensDecimals = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"name"`
 */
export const useReadTestTokensName = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"owner"`
 */
export const useReadTestTokensOwner = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadTestTokensSymbol = /*#__PURE__*/ createUseReadContract({
  abi: testTokensAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadTestTokensTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: testTokensAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__
 */
export const useWriteTestTokens = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteTestTokensApprove = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteTestTokensBurn = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useWriteTestTokensBurnFrom = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
  functionName: 'burnFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteTestTokensDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokensAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteTestTokensIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokensAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteTestTokensMint = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteTestTokensRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokensAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteTestTokensTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: testTokensAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteTestTokensTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokensAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteTestTokensTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: testTokensAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__
 */
export const useSimulateTestTokens = /*#__PURE__*/ createUseSimulateContract({
  abi: testTokensAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateTestTokensApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateTestTokensBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"burnFrom"`
 */
export const useSimulateTestTokensBurnFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'burnFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateTestTokensDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateTestTokensIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateTestTokensMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateTestTokensRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateTestTokensTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateTestTokensTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link testTokensAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateTestTokensTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: testTokensAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokensAbi}__
 */
export const useWatchTestTokensEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: testTokensAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokensAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchTestTokensApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testTokensAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokensAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchTestTokensOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testTokensAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link testTokensAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchTestTokensTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: testTokensAbi,
    eventName: 'Transfer',
  })
