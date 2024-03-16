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
    ],
    name: 'placeBet',
    outputs: [],
    stateMutability: 'payable',
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
