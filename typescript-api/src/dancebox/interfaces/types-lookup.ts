// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/lookup";

import type { Data } from "@polkadot/types";
import type {
    BTreeMap,
    BTreeSet,
    Bytes,
    Compact,
    Enum,
    Null,
    Option,
    Result,
    Set,
    Struct,
    Text,
    U8aFixed,
    Vec,
    bool,
    u128,
    u16,
    u32,
    u64,
    u8,
} from "@polkadot/types-codec";
import type { ITuple } from "@polkadot/types-codec/types";
import type { AccountId32, Call, H256, MultiAddress, Perbill } from "@polkadot/types/interfaces/runtime";
import type { Event } from "@polkadot/types/interfaces/system";

declare module "@polkadot/types/lookup" {
    /** @name FrameSystemAccountInfo (3) */
    interface FrameSystemAccountInfo extends Struct {
        readonly nonce: u32;
        readonly consumers: u32;
        readonly providers: u32;
        readonly sufficients: u32;
        readonly data: PalletBalancesAccountData;
    }

    /** @name PalletBalancesAccountData (5) */
    interface PalletBalancesAccountData extends Struct {
        readonly free: u128;
        readonly reserved: u128;
        readonly frozen: u128;
        readonly flags: u128;
    }

    /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
    interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
        readonly normal: SpWeightsWeightV2Weight;
        readonly operational: SpWeightsWeightV2Weight;
        readonly mandatory: SpWeightsWeightV2Weight;
    }

    /** @name SpWeightsWeightV2Weight (9) */
    interface SpWeightsWeightV2Weight extends Struct {
        readonly refTime: Compact<u64>;
        readonly proofSize: Compact<u64>;
    }

    /** @name SpRuntimeDigest (14) */
    interface SpRuntimeDigest extends Struct {
        readonly logs: Vec<SpRuntimeDigestDigestItem>;
    }

    /** @name SpRuntimeDigestDigestItem (16) */
    interface SpRuntimeDigestDigestItem extends Enum {
        readonly isOther: boolean;
        readonly asOther: Bytes;
        readonly isConsensus: boolean;
        readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
        readonly isSeal: boolean;
        readonly asSeal: ITuple<[U8aFixed, Bytes]>;
        readonly isPreRuntime: boolean;
        readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
        readonly isRuntimeEnvironmentUpdated: boolean;
        readonly type: "Other" | "Consensus" | "Seal" | "PreRuntime" | "RuntimeEnvironmentUpdated";
    }

    /** @name FrameSystemEventRecord (19) */
    interface FrameSystemEventRecord extends Struct {
        readonly phase: FrameSystemPhase;
        readonly event: Event;
        readonly topics: Vec<H256>;
    }

    /** @name FrameSystemEvent (21) */
    interface FrameSystemEvent extends Enum {
        readonly isExtrinsicSuccess: boolean;
        readonly asExtrinsicSuccess: {
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isExtrinsicFailed: boolean;
        readonly asExtrinsicFailed: {
            readonly dispatchError: SpRuntimeDispatchError;
            readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
        } & Struct;
        readonly isCodeUpdated: boolean;
        readonly isNewAccount: boolean;
        readonly asNewAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isKilledAccount: boolean;
        readonly asKilledAccount: {
            readonly account: AccountId32;
        } & Struct;
        readonly isRemarked: boolean;
        readonly asRemarked: {
            readonly sender: AccountId32;
            readonly hash_: H256;
        } & Struct;
        readonly type:
            | "ExtrinsicSuccess"
            | "ExtrinsicFailed"
            | "CodeUpdated"
            | "NewAccount"
            | "KilledAccount"
            | "Remarked";
    }

    /** @name FrameSupportDispatchDispatchInfo (22) */
    interface FrameSupportDispatchDispatchInfo extends Struct {
        readonly weight: SpWeightsWeightV2Weight;
        readonly class: FrameSupportDispatchDispatchClass;
        readonly paysFee: FrameSupportDispatchPays;
    }

    /** @name FrameSupportDispatchDispatchClass (23) */
    interface FrameSupportDispatchDispatchClass extends Enum {
        readonly isNormal: boolean;
        readonly isOperational: boolean;
        readonly isMandatory: boolean;
        readonly type: "Normal" | "Operational" | "Mandatory";
    }

    /** @name FrameSupportDispatchPays (24) */
    interface FrameSupportDispatchPays extends Enum {
        readonly isYes: boolean;
        readonly isNo: boolean;
        readonly type: "Yes" | "No";
    }

    /** @name SpRuntimeDispatchError (25) */
    interface SpRuntimeDispatchError extends Enum {
        readonly isOther: boolean;
        readonly isCannotLookup: boolean;
        readonly isBadOrigin: boolean;
        readonly isModule: boolean;
        readonly asModule: SpRuntimeModuleError;
        readonly isConsumerRemaining: boolean;
        readonly isNoProviders: boolean;
        readonly isTooManyConsumers: boolean;
        readonly isToken: boolean;
        readonly asToken: SpRuntimeTokenError;
        readonly isArithmetic: boolean;
        readonly asArithmetic: SpArithmeticArithmeticError;
        readonly isTransactional: boolean;
        readonly asTransactional: SpRuntimeTransactionalError;
        readonly isExhausted: boolean;
        readonly isCorruption: boolean;
        readonly isUnavailable: boolean;
        readonly isRootNotAllowed: boolean;
        readonly type:
            | "Other"
            | "CannotLookup"
            | "BadOrigin"
            | "Module"
            | "ConsumerRemaining"
            | "NoProviders"
            | "TooManyConsumers"
            | "Token"
            | "Arithmetic"
            | "Transactional"
            | "Exhausted"
            | "Corruption"
            | "Unavailable"
            | "RootNotAllowed";
    }

    /** @name SpRuntimeModuleError (26) */
    interface SpRuntimeModuleError extends Struct {
        readonly index: u8;
        readonly error: U8aFixed;
    }

    /** @name SpRuntimeTokenError (27) */
    interface SpRuntimeTokenError extends Enum {
        readonly isFundsUnavailable: boolean;
        readonly isOnlyProvider: boolean;
        readonly isBelowMinimum: boolean;
        readonly isCannotCreate: boolean;
        readonly isUnknownAsset: boolean;
        readonly isFrozen: boolean;
        readonly isUnsupported: boolean;
        readonly isCannotCreateHold: boolean;
        readonly isNotExpendable: boolean;
        readonly isBlocked: boolean;
        readonly type:
            | "FundsUnavailable"
            | "OnlyProvider"
            | "BelowMinimum"
            | "CannotCreate"
            | "UnknownAsset"
            | "Frozen"
            | "Unsupported"
            | "CannotCreateHold"
            | "NotExpendable"
            | "Blocked";
    }

    /** @name SpArithmeticArithmeticError (28) */
    interface SpArithmeticArithmeticError extends Enum {
        readonly isUnderflow: boolean;
        readonly isOverflow: boolean;
        readonly isDivisionByZero: boolean;
        readonly type: "Underflow" | "Overflow" | "DivisionByZero";
    }

    /** @name SpRuntimeTransactionalError (29) */
    interface SpRuntimeTransactionalError extends Enum {
        readonly isLimitReached: boolean;
        readonly isNoLayer: boolean;
        readonly type: "LimitReached" | "NoLayer";
    }

    /** @name CumulusPalletParachainSystemEvent (30) */
    interface CumulusPalletParachainSystemEvent extends Enum {
        readonly isValidationFunctionStored: boolean;
        readonly isValidationFunctionApplied: boolean;
        readonly asValidationFunctionApplied: {
            readonly relayChainBlockNum: u32;
        } & Struct;
        readonly isValidationFunctionDiscarded: boolean;
        readonly isUpgradeAuthorized: boolean;
        readonly asUpgradeAuthorized: {
            readonly codeHash: H256;
        } & Struct;
        readonly isDownwardMessagesReceived: boolean;
        readonly asDownwardMessagesReceived: {
            readonly count: u32;
        } & Struct;
        readonly isDownwardMessagesProcessed: boolean;
        readonly asDownwardMessagesProcessed: {
            readonly weightUsed: SpWeightsWeightV2Weight;
            readonly dmqHead: H256;
        } & Struct;
        readonly isUpwardMessageSent: boolean;
        readonly asUpwardMessageSent: {
            readonly messageHash: Option<U8aFixed>;
        } & Struct;
        readonly type:
            | "ValidationFunctionStored"
            | "ValidationFunctionApplied"
            | "ValidationFunctionDiscarded"
            | "UpgradeAuthorized"
            | "DownwardMessagesReceived"
            | "DownwardMessagesProcessed"
            | "UpwardMessageSent";
    }

    /** @name PalletSudoEvent (32) */
    interface PalletSudoEvent extends Enum {
        readonly isSudid: boolean;
        readonly asSudid: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isKeyChanged: boolean;
        readonly asKeyChanged: {
            readonly oldSudoer: Option<AccountId32>;
        } & Struct;
        readonly isSudoAsDone: boolean;
        readonly asSudoAsDone: {
            readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type: "Sudid" | "KeyChanged" | "SudoAsDone";
    }

    /** @name PalletUtilityEvent (36) */
    interface PalletUtilityEvent extends Enum {
        readonly isBatchInterrupted: boolean;
        readonly asBatchInterrupted: {
            readonly index: u32;
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isBatchCompleted: boolean;
        readonly isBatchCompletedWithErrors: boolean;
        readonly isItemCompleted: boolean;
        readonly isItemFailed: boolean;
        readonly asItemFailed: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isDispatchedAs: boolean;
        readonly asDispatchedAs: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly type:
            | "BatchInterrupted"
            | "BatchCompleted"
            | "BatchCompletedWithErrors"
            | "ItemCompleted"
            | "ItemFailed"
            | "DispatchedAs";
    }

    /** @name PalletProxyEvent (37) */
    interface PalletProxyEvent extends Enum {
        readonly isProxyExecuted: boolean;
        readonly asProxyExecuted: {
            readonly result: Result<Null, SpRuntimeDispatchError>;
        } & Struct;
        readonly isPureCreated: boolean;
        readonly asPureCreated: {
            readonly pure: AccountId32;
            readonly who: AccountId32;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly disambiguationIndex: u16;
        } & Struct;
        readonly isAnnounced: boolean;
        readonly asAnnounced: {
            readonly real: AccountId32;
            readonly proxy: AccountId32;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAdded: boolean;
        readonly asProxyAdded: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isProxyRemoved: boolean;
        readonly asProxyRemoved: {
            readonly delegator: AccountId32;
            readonly delegatee: AccountId32;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly type: "ProxyExecuted" | "PureCreated" | "Announced" | "ProxyAdded" | "ProxyRemoved";
    }

    /** @name DanceboxRuntimeProxyType (38) */
    interface DanceboxRuntimeProxyType extends Enum {
        readonly isAny: boolean;
        readonly isNonTransfer: boolean;
        readonly isGovernance: boolean;
        readonly isStaking: boolean;
        readonly isCancelProxy: boolean;
        readonly isBalances: boolean;
        readonly isRegistrar: boolean;
        readonly isSudoRegistrar: boolean;
        readonly type:
            | "Any"
            | "NonTransfer"
            | "Governance"
            | "Staking"
            | "CancelProxy"
            | "Balances"
            | "Registrar"
            | "SudoRegistrar";
    }

    /** @name PalletMigrationsEvent (40) */
    interface PalletMigrationsEvent extends Enum {
        readonly isRuntimeUpgradeStarted: boolean;
        readonly isRuntimeUpgradeCompleted: boolean;
        readonly asRuntimeUpgradeCompleted: {
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isMigrationStarted: boolean;
        readonly asMigrationStarted: {
            readonly migrationName: Bytes;
        } & Struct;
        readonly isMigrationCompleted: boolean;
        readonly asMigrationCompleted: {
            readonly migrationName: Bytes;
            readonly consumedWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isFailedToSuspendIdleXcmExecution: boolean;
        readonly asFailedToSuspendIdleXcmExecution: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isFailedToResumeIdleXcmExecution: boolean;
        readonly asFailedToResumeIdleXcmExecution: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly type:
            | "RuntimeUpgradeStarted"
            | "RuntimeUpgradeCompleted"
            | "MigrationStarted"
            | "MigrationCompleted"
            | "FailedToSuspendIdleXcmExecution"
            | "FailedToResumeIdleXcmExecution";
    }

    /** @name PalletMaintenanceModeEvent (41) */
    interface PalletMaintenanceModeEvent extends Enum {
        readonly isEnteredMaintenanceMode: boolean;
        readonly isNormalOperationResumed: boolean;
        readonly isFailedToSuspendIdleXcmExecution: boolean;
        readonly asFailedToSuspendIdleXcmExecution: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly isFailedToResumeIdleXcmExecution: boolean;
        readonly asFailedToResumeIdleXcmExecution: {
            readonly error: SpRuntimeDispatchError;
        } & Struct;
        readonly type:
            | "EnteredMaintenanceMode"
            | "NormalOperationResumed"
            | "FailedToSuspendIdleXcmExecution"
            | "FailedToResumeIdleXcmExecution";
    }

    /** @name PalletTxPauseEvent (42) */
    interface PalletTxPauseEvent extends Enum {
        readonly isCallPaused: boolean;
        readonly asCallPaused: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly isCallUnpaused: boolean;
        readonly asCallUnpaused: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly type: "CallPaused" | "CallUnpaused";
    }

    /** @name PalletBalancesEvent (45) */
    interface PalletBalancesEvent extends Enum {
        readonly isEndowed: boolean;
        readonly asEndowed: {
            readonly account: AccountId32;
            readonly freeBalance: u128;
        } & Struct;
        readonly isDustLost: boolean;
        readonly asDustLost: {
            readonly account: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBalanceSet: boolean;
        readonly asBalanceSet: {
            readonly who: AccountId32;
            readonly free: u128;
        } & Struct;
        readonly isReserved: boolean;
        readonly asReserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnreserved: boolean;
        readonly asUnreserved: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isReserveRepatriated: boolean;
        readonly asReserveRepatriated: {
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
            readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
        } & Struct;
        readonly isDeposit: boolean;
        readonly asDeposit: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isWithdraw: boolean;
        readonly asWithdraw: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSlashed: boolean;
        readonly asSlashed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isMinted: boolean;
        readonly asMinted: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBurned: boolean;
        readonly asBurned: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isSuspended: boolean;
        readonly asSuspended: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isRestored: boolean;
        readonly asRestored: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUpgraded: boolean;
        readonly asUpgraded: {
            readonly who: AccountId32;
        } & Struct;
        readonly isIssued: boolean;
        readonly asIssued: {
            readonly amount: u128;
        } & Struct;
        readonly isRescinded: boolean;
        readonly asRescinded: {
            readonly amount: u128;
        } & Struct;
        readonly isLocked: boolean;
        readonly asLocked: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isUnlocked: boolean;
        readonly asUnlocked: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isFrozen: boolean;
        readonly asFrozen: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isThawed: boolean;
        readonly asThawed: {
            readonly who: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly type:
            | "Endowed"
            | "DustLost"
            | "Transfer"
            | "BalanceSet"
            | "Reserved"
            | "Unreserved"
            | "ReserveRepatriated"
            | "Deposit"
            | "Withdraw"
            | "Slashed"
            | "Minted"
            | "Burned"
            | "Suspended"
            | "Restored"
            | "Upgraded"
            | "Issued"
            | "Rescinded"
            | "Locked"
            | "Unlocked"
            | "Frozen"
            | "Thawed";
    }

    /** @name FrameSupportTokensMiscBalanceStatus (46) */
    interface FrameSupportTokensMiscBalanceStatus extends Enum {
        readonly isFree: boolean;
        readonly isReserved: boolean;
        readonly type: "Free" | "Reserved";
    }

    /** @name PalletTransactionPaymentEvent (47) */
    interface PalletTransactionPaymentEvent extends Enum {
        readonly isTransactionFeePaid: boolean;
        readonly asTransactionFeePaid: {
            readonly who: AccountId32;
            readonly actualFee: u128;
            readonly tip: u128;
        } & Struct;
        readonly type: "TransactionFeePaid";
    }

    /** @name PalletIdentityEvent (48) */
    interface PalletIdentityEvent extends Enum {
        readonly isIdentitySet: boolean;
        readonly asIdentitySet: {
            readonly who: AccountId32;
        } & Struct;
        readonly isIdentityCleared: boolean;
        readonly asIdentityCleared: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isIdentityKilled: boolean;
        readonly asIdentityKilled: {
            readonly who: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isJudgementRequested: boolean;
        readonly asJudgementRequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementUnrequested: boolean;
        readonly asJudgementUnrequested: {
            readonly who: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isJudgementGiven: boolean;
        readonly asJudgementGiven: {
            readonly target: AccountId32;
            readonly registrarIndex: u32;
        } & Struct;
        readonly isRegistrarAdded: boolean;
        readonly asRegistrarAdded: {
            readonly registrarIndex: u32;
        } & Struct;
        readonly isSubIdentityAdded: boolean;
        readonly asSubIdentityAdded: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRemoved: boolean;
        readonly asSubIdentityRemoved: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly isSubIdentityRevoked: boolean;
        readonly asSubIdentityRevoked: {
            readonly sub: AccountId32;
            readonly main: AccountId32;
            readonly deposit: u128;
        } & Struct;
        readonly type:
            | "IdentitySet"
            | "IdentityCleared"
            | "IdentityKilled"
            | "JudgementRequested"
            | "JudgementUnrequested"
            | "JudgementGiven"
            | "RegistrarAdded"
            | "SubIdentityAdded"
            | "SubIdentityRemoved"
            | "SubIdentityRevoked";
    }

    /** @name PalletRegistrarEvent (49) */
    interface PalletRegistrarEvent extends Enum {
        readonly isParaIdRegistered: boolean;
        readonly asParaIdRegistered: {
            readonly paraId: u32;
        } & Struct;
        readonly isParaIdDeregistered: boolean;
        readonly asParaIdDeregistered: {
            readonly paraId: u32;
        } & Struct;
        readonly isParaIdValidForCollating: boolean;
        readonly asParaIdValidForCollating: {
            readonly paraId: u32;
        } & Struct;
        readonly isParaIdPaused: boolean;
        readonly asParaIdPaused: {
            readonly paraId: u32;
        } & Struct;
        readonly isParaIdUnpaused: boolean;
        readonly asParaIdUnpaused: {
            readonly paraId: u32;
        } & Struct;
        readonly isParathreadParamsChanged: boolean;
        readonly asParathreadParamsChanged: {
            readonly paraId: u32;
        } & Struct;
        readonly type:
            | "ParaIdRegistered"
            | "ParaIdDeregistered"
            | "ParaIdValidForCollating"
            | "ParaIdPaused"
            | "ParaIdUnpaused"
            | "ParathreadParamsChanged";
    }

    /** @name PalletCollatorAssignmentEvent (51) */
    interface PalletCollatorAssignmentEvent extends Enum {
        readonly isNewPendingAssignment: boolean;
        readonly asNewPendingAssignment: {
            readonly randomSeed: U8aFixed;
            readonly fullRotation: bool;
            readonly targetSession: u32;
        } & Struct;
        readonly type: "NewPendingAssignment";
    }

    /** @name PalletAuthorNotingEvent (53) */
    interface PalletAuthorNotingEvent extends Enum {
        readonly isLatestAuthorChanged: boolean;
        readonly asLatestAuthorChanged: {
            readonly paraId: u32;
            readonly blockNumber: u32;
            readonly newAuthor: AccountId32;
        } & Struct;
        readonly isRemovedAuthorData: boolean;
        readonly asRemovedAuthorData: {
            readonly paraId: u32;
        } & Struct;
        readonly type: "LatestAuthorChanged" | "RemovedAuthorData";
    }

    /** @name PalletServicesPaymentEvent (54) */
    interface PalletServicesPaymentEvent extends Enum {
        readonly isCreditsPurchased: boolean;
        readonly asCreditsPurchased: {
            readonly paraId: u32;
            readonly payer: AccountId32;
            readonly credit: u128;
        } & Struct;
        readonly isCreditBurned: boolean;
        readonly asCreditBurned: {
            readonly paraId: u32;
            readonly creditsRemaining: u32;
        } & Struct;
        readonly isCreditsSet: boolean;
        readonly asCreditsSet: {
            readonly paraId: u32;
            readonly credits: u32;
        } & Struct;
        readonly type: "CreditsPurchased" | "CreditBurned" | "CreditsSet";
    }

    /** @name PalletDataPreserversEvent (55) */
    interface PalletDataPreserversEvent extends Enum {
        readonly isBootNodesChanged: boolean;
        readonly asBootNodesChanged: {
            readonly paraId: u32;
        } & Struct;
        readonly type: "BootNodesChanged";
    }

    /** @name PalletInvulnerablesEvent (56) */
    interface PalletInvulnerablesEvent extends Enum {
        readonly isNewInvulnerables: boolean;
        readonly asNewInvulnerables: {
            readonly invulnerables: Vec<AccountId32>;
        } & Struct;
        readonly isInvulnerableAdded: boolean;
        readonly asInvulnerableAdded: {
            readonly accountId: AccountId32;
        } & Struct;
        readonly isInvulnerableRemoved: boolean;
        readonly asInvulnerableRemoved: {
            readonly accountId: AccountId32;
        } & Struct;
        readonly isInvalidInvulnerableSkipped: boolean;
        readonly asInvalidInvulnerableSkipped: {
            readonly accountId: AccountId32;
        } & Struct;
        readonly type: "NewInvulnerables" | "InvulnerableAdded" | "InvulnerableRemoved" | "InvalidInvulnerableSkipped";
    }

    /** @name PalletSessionEvent (58) */
    interface PalletSessionEvent extends Enum {
        readonly isNewSession: boolean;
        readonly asNewSession: {
            readonly sessionIndex: u32;
        } & Struct;
        readonly type: "NewSession";
    }

    /** @name PalletPooledStakingEvent (59) */
    interface PalletPooledStakingEvent extends Enum {
        readonly isUpdatedCandidatePosition: boolean;
        readonly asUpdatedCandidatePosition: {
            readonly candidate: AccountId32;
            readonly stake: u128;
            readonly selfDelegation: u128;
            readonly before: Option<u32>;
            readonly after: Option<u32>;
        } & Struct;
        readonly isRequestedDelegate: boolean;
        readonly asRequestedDelegate: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly pool: PalletPooledStakingTargetPool;
            readonly pending: u128;
        } & Struct;
        readonly isExecutedDelegate: boolean;
        readonly asExecutedDelegate: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly pool: PalletPooledStakingTargetPool;
            readonly staked: u128;
            readonly released: u128;
        } & Struct;
        readonly isRequestedUndelegate: boolean;
        readonly asRequestedUndelegate: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly from: PalletPooledStakingTargetPool;
            readonly pending: u128;
            readonly released: u128;
        } & Struct;
        readonly isExecutedUndelegate: boolean;
        readonly asExecutedUndelegate: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly released: u128;
        } & Struct;
        readonly isIncreasedStake: boolean;
        readonly asIncreasedStake: {
            readonly candidate: AccountId32;
            readonly stakeDiff: u128;
        } & Struct;
        readonly isDecreasedStake: boolean;
        readonly asDecreasedStake: {
            readonly candidate: AccountId32;
            readonly stakeDiff: u128;
        } & Struct;
        readonly isStakedAutoCompounding: boolean;
        readonly asStakedAutoCompounding: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly shares: u128;
            readonly stake: u128;
        } & Struct;
        readonly isUnstakedAutoCompounding: boolean;
        readonly asUnstakedAutoCompounding: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly shares: u128;
            readonly stake: u128;
        } & Struct;
        readonly isStakedManualRewards: boolean;
        readonly asStakedManualRewards: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly shares: u128;
            readonly stake: u128;
        } & Struct;
        readonly isUnstakedManualRewards: boolean;
        readonly asUnstakedManualRewards: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly shares: u128;
            readonly stake: u128;
        } & Struct;
        readonly isRewardedCollator: boolean;
        readonly asRewardedCollator: {
            readonly collator: AccountId32;
            readonly autoCompoundingRewards: u128;
            readonly manualClaimRewards: u128;
        } & Struct;
        readonly isRewardedDelegators: boolean;
        readonly asRewardedDelegators: {
            readonly collator: AccountId32;
            readonly autoCompoundingRewards: u128;
            readonly manualClaimRewards: u128;
        } & Struct;
        readonly isClaimedManualRewards: boolean;
        readonly asClaimedManualRewards: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly rewards: u128;
        } & Struct;
        readonly isSwappedPool: boolean;
        readonly asSwappedPool: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly sourcePool: PalletPooledStakingTargetPool;
            readonly sourceShares: u128;
            readonly sourceStake: u128;
            readonly targetShares: u128;
            readonly targetStake: u128;
            readonly pendingLeaving: u128;
            readonly released: u128;
        } & Struct;
        readonly type:
            | "UpdatedCandidatePosition"
            | "RequestedDelegate"
            | "ExecutedDelegate"
            | "RequestedUndelegate"
            | "ExecutedUndelegate"
            | "IncreasedStake"
            | "DecreasedStake"
            | "StakedAutoCompounding"
            | "UnstakedAutoCompounding"
            | "StakedManualRewards"
            | "UnstakedManualRewards"
            | "RewardedCollator"
            | "RewardedDelegators"
            | "ClaimedManualRewards"
            | "SwappedPool";
    }

    /** @name PalletPooledStakingTargetPool (61) */
    interface PalletPooledStakingTargetPool extends Enum {
        readonly isAutoCompounding: boolean;
        readonly isManualRewards: boolean;
        readonly type: "AutoCompounding" | "ManualRewards";
    }

    /** @name PalletInflationRewardsEvent (62) */
    interface PalletInflationRewardsEvent extends Enum {
        readonly isRewardedOrchestrator: boolean;
        readonly asRewardedOrchestrator: {
            readonly accountId: AccountId32;
            readonly balance: u128;
        } & Struct;
        readonly isRewardedContainer: boolean;
        readonly asRewardedContainer: {
            readonly accountId: AccountId32;
            readonly paraId: u32;
            readonly balance: u128;
        } & Struct;
        readonly type: "RewardedOrchestrator" | "RewardedContainer";
    }

    /** @name CumulusPalletXcmpQueueEvent (63) */
    interface CumulusPalletXcmpQueueEvent extends Enum {
        readonly isSuccess: boolean;
        readonly asSuccess: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isFail: boolean;
        readonly asFail: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly error: XcmV3TraitsError;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isBadVersion: boolean;
        readonly asBadVersion: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isBadFormat: boolean;
        readonly asBadFormat: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isXcmpMessageSent: boolean;
        readonly asXcmpMessageSent: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly sender: u32;
            readonly sentAt: u32;
            readonly index: u64;
            readonly required: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly index: u64;
            readonly used: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type:
            | "Success"
            | "Fail"
            | "BadVersion"
            | "BadFormat"
            | "XcmpMessageSent"
            | "OverweightEnqueued"
            | "OverweightServiced";
    }

    /** @name XcmV3TraitsError (64) */
    interface XcmV3TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isLocationFull: boolean;
        readonly isLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isExpectationFalse: boolean;
        readonly isPalletNotFound: boolean;
        readonly isNameMismatch: boolean;
        readonly isVersionIncompatible: boolean;
        readonly isHoldingWouldOverflow: boolean;
        readonly isExportError: boolean;
        readonly isReanchorFailed: boolean;
        readonly isNoDeal: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockError: boolean;
        readonly isNoPermission: boolean;
        readonly isUnanchored: boolean;
        readonly isNotDepositable: boolean;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: SpWeightsWeightV2Weight;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly isExceedsStackLimit: boolean;
        readonly type:
            | "Overflow"
            | "Unimplemented"
            | "UntrustedReserveLocation"
            | "UntrustedTeleportLocation"
            | "LocationFull"
            | "LocationNotInvertible"
            | "BadOrigin"
            | "InvalidLocation"
            | "AssetNotFound"
            | "FailedToTransactAsset"
            | "NotWithdrawable"
            | "LocationCannotHold"
            | "ExceedsMaxMessageSize"
            | "DestinationUnsupported"
            | "Transport"
            | "Unroutable"
            | "UnknownClaim"
            | "FailedToDecode"
            | "MaxWeightInvalid"
            | "NotHoldingFees"
            | "TooExpensive"
            | "Trap"
            | "ExpectationFalse"
            | "PalletNotFound"
            | "NameMismatch"
            | "VersionIncompatible"
            | "HoldingWouldOverflow"
            | "ExportError"
            | "ReanchorFailed"
            | "NoDeal"
            | "FeesNotMet"
            | "LockError"
            | "NoPermission"
            | "Unanchored"
            | "NotDepositable"
            | "UnhandledXcmVersion"
            | "WeightLimitReached"
            | "Barrier"
            | "WeightNotComputable"
            | "ExceedsStackLimit";
    }

    /** @name CumulusPalletXcmEvent (65) */
    interface CumulusPalletXcmEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: U8aFixed;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: U8aFixed;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
        readonly type: "InvalidFormat" | "UnsupportedVersion" | "ExecutedDownward";
    }

    /** @name XcmV3TraitsOutcome (66) */
    interface XcmV3TraitsOutcome extends Enum {
        readonly isComplete: boolean;
        readonly asComplete: SpWeightsWeightV2Weight;
        readonly isIncomplete: boolean;
        readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
        readonly isError: boolean;
        readonly asError: XcmV3TraitsError;
        readonly type: "Complete" | "Incomplete" | "Error";
    }

    /** @name CumulusPalletDmpQueueEvent (67) */
    interface CumulusPalletDmpQueueEvent extends Enum {
        readonly isInvalidFormat: boolean;
        readonly asInvalidFormat: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isUnsupportedVersion: boolean;
        readonly asUnsupportedVersion: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly isExecutedDownward: boolean;
        readonly asExecutedDownward: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly outcome: XcmV3TraitsOutcome;
        } & Struct;
        readonly isWeightExhausted: boolean;
        readonly asWeightExhausted: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly remainingWeight: SpWeightsWeightV2Weight;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightEnqueued: boolean;
        readonly asOverweightEnqueued: {
            readonly messageHash: U8aFixed;
            readonly messageId: U8aFixed;
            readonly overweightIndex: u64;
            readonly requiredWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isOverweightServiced: boolean;
        readonly asOverweightServiced: {
            readonly overweightIndex: u64;
            readonly weightUsed: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isMaxMessagesExhausted: boolean;
        readonly asMaxMessagesExhausted: {
            readonly messageHash: U8aFixed;
        } & Struct;
        readonly type:
            | "InvalidFormat"
            | "UnsupportedVersion"
            | "ExecutedDownward"
            | "WeightExhausted"
            | "OverweightEnqueued"
            | "OverweightServiced"
            | "MaxMessagesExhausted";
    }

    /** @name PalletXcmEvent (68) */
    interface PalletXcmEvent extends Enum {
        readonly isAttempted: boolean;
        readonly asAttempted: {
            readonly outcome: XcmV3TraitsOutcome;
        } & Struct;
        readonly isSent: boolean;
        readonly asSent: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly destination: StagingXcmV3MultiLocation;
            readonly message: XcmV3Xcm;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isUnexpectedResponse: boolean;
        readonly asUnexpectedResponse: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isResponseReady: boolean;
        readonly asResponseReady: {
            readonly queryId: u64;
            readonly response: XcmV3Response;
        } & Struct;
        readonly isNotified: boolean;
        readonly asNotified: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isNotifyOverweight: boolean;
        readonly asNotifyOverweight: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
            readonly actualWeight: SpWeightsWeightV2Weight;
            readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isNotifyDispatchError: boolean;
        readonly asNotifyDispatchError: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isNotifyDecodeFailed: boolean;
        readonly asNotifyDecodeFailed: {
            readonly queryId: u64;
            readonly palletIndex: u8;
            readonly callIndex: u8;
        } & Struct;
        readonly isInvalidResponder: boolean;
        readonly asInvalidResponder: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isInvalidResponderVersion: boolean;
        readonly asInvalidResponderVersion: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isResponseTaken: boolean;
        readonly asResponseTaken: {
            readonly queryId: u64;
        } & Struct;
        readonly isAssetsTrapped: boolean;
        readonly asAssetsTrapped: {
            readonly hash_: H256;
            readonly origin: StagingXcmV3MultiLocation;
            readonly assets: XcmVersionedMultiAssets;
        } & Struct;
        readonly isVersionChangeNotified: boolean;
        readonly asVersionChangeNotified: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly result: u32;
            readonly cost: XcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isSupportedVersionChanged: boolean;
        readonly asSupportedVersionChanged: {
            readonly location: StagingXcmV3MultiLocation;
            readonly version: u32;
        } & Struct;
        readonly isNotifyTargetSendFail: boolean;
        readonly asNotifyTargetSendFail: {
            readonly location: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly error: XcmV3TraitsError;
        } & Struct;
        readonly isNotifyTargetMigrationFail: boolean;
        readonly asNotifyTargetMigrationFail: {
            readonly location: XcmVersionedMultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isInvalidQuerierVersion: boolean;
        readonly asInvalidQuerierVersion: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
        } & Struct;
        readonly isInvalidQuerier: boolean;
        readonly asInvalidQuerier: {
            readonly origin: StagingXcmV3MultiLocation;
            readonly queryId: u64;
            readonly expectedQuerier: StagingXcmV3MultiLocation;
            readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isVersionNotifyStarted: boolean;
        readonly asVersionNotifyStarted: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: XcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isVersionNotifyRequested: boolean;
        readonly asVersionNotifyRequested: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: XcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isVersionNotifyUnrequested: boolean;
        readonly asVersionNotifyUnrequested: {
            readonly destination: StagingXcmV3MultiLocation;
            readonly cost: XcmV3MultiassetMultiAssets;
            readonly messageId: U8aFixed;
        } & Struct;
        readonly isFeesPaid: boolean;
        readonly asFeesPaid: {
            readonly paying: StagingXcmV3MultiLocation;
            readonly fees: XcmV3MultiassetMultiAssets;
        } & Struct;
        readonly isAssetsClaimed: boolean;
        readonly asAssetsClaimed: {
            readonly hash_: H256;
            readonly origin: StagingXcmV3MultiLocation;
            readonly assets: XcmVersionedMultiAssets;
        } & Struct;
        readonly type:
            | "Attempted"
            | "Sent"
            | "UnexpectedResponse"
            | "ResponseReady"
            | "Notified"
            | "NotifyOverweight"
            | "NotifyDispatchError"
            | "NotifyDecodeFailed"
            | "InvalidResponder"
            | "InvalidResponderVersion"
            | "ResponseTaken"
            | "AssetsTrapped"
            | "VersionChangeNotified"
            | "SupportedVersionChanged"
            | "NotifyTargetSendFail"
            | "NotifyTargetMigrationFail"
            | "InvalidQuerierVersion"
            | "InvalidQuerier"
            | "VersionNotifyStarted"
            | "VersionNotifyRequested"
            | "VersionNotifyUnrequested"
            | "FeesPaid"
            | "AssetsClaimed";
    }

    /** @name StagingXcmV3MultiLocation (69) */
    interface StagingXcmV3MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV3Junctions;
    }

    /** @name XcmV3Junctions (70) */
    interface XcmV3Junctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV3Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<
            [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]
        >;
        readonly isX7: boolean;
        readonly asX7: ITuple<
            [XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]
        >;
        readonly isX8: boolean;
        readonly asX8: ITuple<
            [
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction,
                XcmV3Junction
            ]
        >;
        readonly type: "Here" | "X1" | "X2" | "X3" | "X4" | "X5" | "X6" | "X7" | "X8";
    }

    /** @name XcmV3Junction (71) */
    interface XcmV3Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: Option<XcmV3JunctionNetworkId>;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: {
            readonly length: u8;
            readonly data: U8aFixed;
        } & Struct;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV3JunctionBodyId;
            readonly part: XcmV3JunctionBodyPart;
        } & Struct;
        readonly isGlobalConsensus: boolean;
        readonly asGlobalConsensus: XcmV3JunctionNetworkId;
        readonly type:
            | "Parachain"
            | "AccountId32"
            | "AccountIndex64"
            | "AccountKey20"
            | "PalletInstance"
            | "GeneralIndex"
            | "GeneralKey"
            | "OnlyChild"
            | "Plurality"
            | "GlobalConsensus";
    }

    /** @name XcmV3JunctionNetworkId (74) */
    interface XcmV3JunctionNetworkId extends Enum {
        readonly isByGenesis: boolean;
        readonly asByGenesis: U8aFixed;
        readonly isByFork: boolean;
        readonly asByFork: {
            readonly blockNumber: u64;
            readonly blockHash: U8aFixed;
        } & Struct;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly isWestend: boolean;
        readonly isRococo: boolean;
        readonly isWococo: boolean;
        readonly isEthereum: boolean;
        readonly asEthereum: {
            readonly chainId: Compact<u64>;
        } & Struct;
        readonly isBitcoinCore: boolean;
        readonly isBitcoinCash: boolean;
        readonly type:
            | "ByGenesis"
            | "ByFork"
            | "Polkadot"
            | "Kusama"
            | "Westend"
            | "Rococo"
            | "Wococo"
            | "Ethereum"
            | "BitcoinCore"
            | "BitcoinCash";
    }

    /** @name XcmV3JunctionBodyId (77) */
    interface XcmV3JunctionBodyId extends Enum {
        readonly isUnit: boolean;
        readonly isMoniker: boolean;
        readonly asMoniker: U8aFixed;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type:
            | "Unit"
            | "Moniker"
            | "Index"
            | "Executive"
            | "Technical"
            | "Legislative"
            | "Judicial"
            | "Defense"
            | "Administration"
            | "Treasury";
    }

    /** @name XcmV3JunctionBodyPart (78) */
    interface XcmV3JunctionBodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: "Voice" | "Members" | "Fraction" | "AtLeastProportion" | "MoreThanProportion";
    }

    /** @name XcmV3Xcm (79) */
    interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

    /** @name XcmV3Instruction (81) */
    interface XcmV3Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV3Response;
            readonly maxWeight: SpWeightsWeightV2Weight;
            readonly querier: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly beneficiary: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originKind: XcmV2OriginKind;
            readonly requireWeightAtMost: SpWeightsWeightV2Weight;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV3Junctions;
        readonly isReportError: boolean;
        readonly asReportError: XcmV3QueryResponseInfo;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly beneficiary: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV3MultiassetMultiAssetFilter;
            readonly want: XcmV3MultiassetMultiAssets;
            readonly maximal: bool;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly reserve: StagingXcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV3MultiassetMultiAssetFilter;
            readonly dest: StagingXcmV3MultiLocation;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isReportHolding: boolean;
        readonly asReportHolding: {
            readonly responseInfo: XcmV3QueryResponseInfo;
            readonly assets: XcmV3MultiassetMultiAssetFilter;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV3MultiAsset;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV3Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV3Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV3MultiassetMultiAssets;
            readonly ticket: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly isBurnAsset: boolean;
        readonly asBurnAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectAsset: boolean;
        readonly asExpectAsset: XcmV3MultiassetMultiAssets;
        readonly isExpectOrigin: boolean;
        readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
        readonly isExpectError: boolean;
        readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isExpectTransactStatus: boolean;
        readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
        readonly isQueryPallet: boolean;
        readonly asQueryPallet: {
            readonly moduleName: Bytes;
            readonly responseInfo: XcmV3QueryResponseInfo;
        } & Struct;
        readonly isExpectPallet: boolean;
        readonly asExpectPallet: {
            readonly index: Compact<u32>;
            readonly name: Bytes;
            readonly moduleName: Bytes;
            readonly crateMajor: Compact<u32>;
            readonly minCrateMinor: Compact<u32>;
        } & Struct;
        readonly isReportTransactStatus: boolean;
        readonly asReportTransactStatus: XcmV3QueryResponseInfo;
        readonly isClearTransactStatus: boolean;
        readonly isUniversalOrigin: boolean;
        readonly asUniversalOrigin: XcmV3Junction;
        readonly isExportMessage: boolean;
        readonly asExportMessage: {
            readonly network: XcmV3JunctionNetworkId;
            readonly destination: XcmV3Junctions;
            readonly xcm: XcmV3Xcm;
        } & Struct;
        readonly isLockAsset: boolean;
        readonly asLockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly unlocker: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isUnlockAsset: boolean;
        readonly asUnlockAsset: {
            readonly asset: XcmV3MultiAsset;
            readonly target: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isNoteUnlockable: boolean;
        readonly asNoteUnlockable: {
            readonly asset: XcmV3MultiAsset;
            readonly owner: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isRequestUnlock: boolean;
        readonly asRequestUnlock: {
            readonly asset: XcmV3MultiAsset;
            readonly locker: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isSetFeesMode: boolean;
        readonly asSetFeesMode: {
            readonly jitWithdraw: bool;
        } & Struct;
        readonly isSetTopic: boolean;
        readonly asSetTopic: U8aFixed;
        readonly isClearTopic: boolean;
        readonly isAliasOrigin: boolean;
        readonly asAliasOrigin: StagingXcmV3MultiLocation;
        readonly isUnpaidExecution: boolean;
        readonly asUnpaidExecution: {
            readonly weightLimit: XcmV3WeightLimit;
            readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
        } & Struct;
        readonly type:
            | "WithdrawAsset"
            | "ReserveAssetDeposited"
            | "ReceiveTeleportedAsset"
            | "QueryResponse"
            | "TransferAsset"
            | "TransferReserveAsset"
            | "Transact"
            | "HrmpNewChannelOpenRequest"
            | "HrmpChannelAccepted"
            | "HrmpChannelClosing"
            | "ClearOrigin"
            | "DescendOrigin"
            | "ReportError"
            | "DepositAsset"
            | "DepositReserveAsset"
            | "ExchangeAsset"
            | "InitiateReserveWithdraw"
            | "InitiateTeleport"
            | "ReportHolding"
            | "BuyExecution"
            | "RefundSurplus"
            | "SetErrorHandler"
            | "SetAppendix"
            | "ClearError"
            | "ClaimAsset"
            | "Trap"
            | "SubscribeVersion"
            | "UnsubscribeVersion"
            | "BurnAsset"
            | "ExpectAsset"
            | "ExpectOrigin"
            | "ExpectError"
            | "ExpectTransactStatus"
            | "QueryPallet"
            | "ExpectPallet"
            | "ReportTransactStatus"
            | "ClearTransactStatus"
            | "UniversalOrigin"
            | "ExportMessage"
            | "LockAsset"
            | "UnlockAsset"
            | "NoteUnlockable"
            | "RequestUnlock"
            | "SetFeesMode"
            | "SetTopic"
            | "ClearTopic"
            | "AliasOrigin"
            | "UnpaidExecution";
    }

    /** @name XcmV3MultiassetMultiAssets (82) */
    interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

    /** @name XcmV3MultiAsset (84) */
    interface XcmV3MultiAsset extends Struct {
        readonly id: XcmV3MultiassetAssetId;
        readonly fun: XcmV3MultiassetFungibility;
    }

    /** @name XcmV3MultiassetAssetId (85) */
    interface XcmV3MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: StagingXcmV3MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: U8aFixed;
        readonly type: "Concrete" | "Abstract";
    }

    /** @name XcmV3MultiassetFungibility (86) */
    interface XcmV3MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV3MultiassetAssetInstance;
        readonly type: "Fungible" | "NonFungible";
    }

    /** @name XcmV3MultiassetAssetInstance (87) */
    interface XcmV3MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly type: "Undefined" | "Index" | "Array4" | "Array8" | "Array16" | "Array32";
    }

    /** @name XcmV3Response (90) */
    interface XcmV3Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV3MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly isPalletsInfo: boolean;
        readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
        readonly isDispatchResult: boolean;
        readonly asDispatchResult: XcmV3MaybeErrorCode;
        readonly type: "Null" | "Assets" | "ExecutionResult" | "Version" | "PalletsInfo" | "DispatchResult";
    }

    /** @name XcmV3PalletInfo (94) */
    interface XcmV3PalletInfo extends Struct {
        readonly index: Compact<u32>;
        readonly name: Bytes;
        readonly moduleName: Bytes;
        readonly major: Compact<u32>;
        readonly minor: Compact<u32>;
        readonly patch: Compact<u32>;
    }

    /** @name XcmV3MaybeErrorCode (97) */
    interface XcmV3MaybeErrorCode extends Enum {
        readonly isSuccess: boolean;
        readonly isError: boolean;
        readonly asError: Bytes;
        readonly isTruncatedError: boolean;
        readonly asTruncatedError: Bytes;
        readonly type: "Success" | "Error" | "TruncatedError";
    }

    /** @name XcmV2OriginKind (100) */
    interface XcmV2OriginKind extends Enum {
        readonly isNative: boolean;
        readonly isSovereignAccount: boolean;
        readonly isSuperuser: boolean;
        readonly isXcm: boolean;
        readonly type: "Native" | "SovereignAccount" | "Superuser" | "Xcm";
    }

    /** @name XcmDoubleEncoded (101) */
    interface XcmDoubleEncoded extends Struct {
        readonly encoded: Bytes;
    }

    /** @name XcmV3QueryResponseInfo (102) */
    interface XcmV3QueryResponseInfo extends Struct {
        readonly destination: StagingXcmV3MultiLocation;
        readonly queryId: Compact<u64>;
        readonly maxWeight: SpWeightsWeightV2Weight;
    }

    /** @name XcmV3MultiassetMultiAssetFilter (103) */
    interface XcmV3MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV3MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV3MultiassetWildMultiAsset;
        readonly type: "Definite" | "Wild";
    }

    /** @name XcmV3MultiassetWildMultiAsset (104) */
    interface XcmV3MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
        } & Struct;
        readonly isAllCounted: boolean;
        readonly asAllCounted: Compact<u32>;
        readonly isAllOfCounted: boolean;
        readonly asAllOfCounted: {
            readonly id: XcmV3MultiassetAssetId;
            readonly fun: XcmV3MultiassetWildFungibility;
            readonly count: Compact<u32>;
        } & Struct;
        readonly type: "All" | "AllOf" | "AllCounted" | "AllOfCounted";
    }

    /** @name XcmV3MultiassetWildFungibility (105) */
    interface XcmV3MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: "Fungible" | "NonFungible";
    }

    /** @name XcmV3WeightLimit (106) */
    interface XcmV3WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: SpWeightsWeightV2Weight;
        readonly type: "Unlimited" | "Limited";
    }

    /** @name XcmVersionedMultiAssets (107) */
    interface XcmVersionedMultiAssets extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiassetMultiAssets;
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetMultiAssets;
        readonly type: "V2" | "V3";
    }

    /** @name XcmV2MultiassetMultiAssets (108) */
    interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

    /** @name XcmV2MultiAsset (110) */
    interface XcmV2MultiAsset extends Struct {
        readonly id: XcmV2MultiassetAssetId;
        readonly fun: XcmV2MultiassetFungibility;
    }

    /** @name XcmV2MultiassetAssetId (111) */
    interface XcmV2MultiassetAssetId extends Enum {
        readonly isConcrete: boolean;
        readonly asConcrete: XcmV2MultiLocation;
        readonly isAbstract: boolean;
        readonly asAbstract: Bytes;
        readonly type: "Concrete" | "Abstract";
    }

    /** @name XcmV2MultiLocation (112) */
    interface XcmV2MultiLocation extends Struct {
        readonly parents: u8;
        readonly interior: XcmV2MultilocationJunctions;
    }

    /** @name XcmV2MultilocationJunctions (113) */
    interface XcmV2MultilocationJunctions extends Enum {
        readonly isHere: boolean;
        readonly isX1: boolean;
        readonly asX1: XcmV2Junction;
        readonly isX2: boolean;
        readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
        readonly isX3: boolean;
        readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX4: boolean;
        readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX5: boolean;
        readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
        readonly isX6: boolean;
        readonly asX6: ITuple<
            [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]
        >;
        readonly isX7: boolean;
        readonly asX7: ITuple<
            [XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]
        >;
        readonly isX8: boolean;
        readonly asX8: ITuple<
            [
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction,
                XcmV2Junction
            ]
        >;
        readonly type: "Here" | "X1" | "X2" | "X3" | "X4" | "X5" | "X6" | "X7" | "X8";
    }

    /** @name XcmV2Junction (114) */
    interface XcmV2Junction extends Enum {
        readonly isParachain: boolean;
        readonly asParachain: Compact<u32>;
        readonly isAccountId32: boolean;
        readonly asAccountId32: {
            readonly network: XcmV2NetworkId;
            readonly id: U8aFixed;
        } & Struct;
        readonly isAccountIndex64: boolean;
        readonly asAccountIndex64: {
            readonly network: XcmV2NetworkId;
            readonly index: Compact<u64>;
        } & Struct;
        readonly isAccountKey20: boolean;
        readonly asAccountKey20: {
            readonly network: XcmV2NetworkId;
            readonly key: U8aFixed;
        } & Struct;
        readonly isPalletInstance: boolean;
        readonly asPalletInstance: u8;
        readonly isGeneralIndex: boolean;
        readonly asGeneralIndex: Compact<u128>;
        readonly isGeneralKey: boolean;
        readonly asGeneralKey: Bytes;
        readonly isOnlyChild: boolean;
        readonly isPlurality: boolean;
        readonly asPlurality: {
            readonly id: XcmV2BodyId;
            readonly part: XcmV2BodyPart;
        } & Struct;
        readonly type:
            | "Parachain"
            | "AccountId32"
            | "AccountIndex64"
            | "AccountKey20"
            | "PalletInstance"
            | "GeneralIndex"
            | "GeneralKey"
            | "OnlyChild"
            | "Plurality";
    }

    /** @name XcmV2NetworkId (115) */
    interface XcmV2NetworkId extends Enum {
        readonly isAny: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isPolkadot: boolean;
        readonly isKusama: boolean;
        readonly type: "Any" | "Named" | "Polkadot" | "Kusama";
    }

    /** @name XcmV2BodyId (117) */
    interface XcmV2BodyId extends Enum {
        readonly isUnit: boolean;
        readonly isNamed: boolean;
        readonly asNamed: Bytes;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u32>;
        readonly isExecutive: boolean;
        readonly isTechnical: boolean;
        readonly isLegislative: boolean;
        readonly isJudicial: boolean;
        readonly isDefense: boolean;
        readonly isAdministration: boolean;
        readonly isTreasury: boolean;
        readonly type:
            | "Unit"
            | "Named"
            | "Index"
            | "Executive"
            | "Technical"
            | "Legislative"
            | "Judicial"
            | "Defense"
            | "Administration"
            | "Treasury";
    }

    /** @name XcmV2BodyPart (118) */
    interface XcmV2BodyPart extends Enum {
        readonly isVoice: boolean;
        readonly isMembers: boolean;
        readonly asMembers: {
            readonly count: Compact<u32>;
        } & Struct;
        readonly isFraction: boolean;
        readonly asFraction: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isAtLeastProportion: boolean;
        readonly asAtLeastProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly isMoreThanProportion: boolean;
        readonly asMoreThanProportion: {
            readonly nom: Compact<u32>;
            readonly denom: Compact<u32>;
        } & Struct;
        readonly type: "Voice" | "Members" | "Fraction" | "AtLeastProportion" | "MoreThanProportion";
    }

    /** @name XcmV2MultiassetFungibility (119) */
    interface XcmV2MultiassetFungibility extends Enum {
        readonly isFungible: boolean;
        readonly asFungible: Compact<u128>;
        readonly isNonFungible: boolean;
        readonly asNonFungible: XcmV2MultiassetAssetInstance;
        readonly type: "Fungible" | "NonFungible";
    }

    /** @name XcmV2MultiassetAssetInstance (120) */
    interface XcmV2MultiassetAssetInstance extends Enum {
        readonly isUndefined: boolean;
        readonly isIndex: boolean;
        readonly asIndex: Compact<u128>;
        readonly isArray4: boolean;
        readonly asArray4: U8aFixed;
        readonly isArray8: boolean;
        readonly asArray8: U8aFixed;
        readonly isArray16: boolean;
        readonly asArray16: U8aFixed;
        readonly isArray32: boolean;
        readonly asArray32: U8aFixed;
        readonly isBlob: boolean;
        readonly asBlob: Bytes;
        readonly type: "Undefined" | "Index" | "Array4" | "Array8" | "Array16" | "Array32" | "Blob";
    }

    /** @name XcmVersionedMultiLocation (121) */
    interface XcmVersionedMultiLocation extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2MultiLocation;
        readonly isV3: boolean;
        readonly asV3: StagingXcmV3MultiLocation;
        readonly type: "V2" | "V3";
    }

    /** @name PalletAssetsEvent (122) */
    interface PalletAssetsEvent extends Enum {
        readonly isCreated: boolean;
        readonly asCreated: {
            readonly assetId: u16;
            readonly creator: AccountId32;
            readonly owner: AccountId32;
        } & Struct;
        readonly isIssued: boolean;
        readonly asIssued: {
            readonly assetId: u16;
            readonly owner: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isTransferred: boolean;
        readonly asTransferred: {
            readonly assetId: u16;
            readonly from: AccountId32;
            readonly to: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isBurned: boolean;
        readonly asBurned: {
            readonly assetId: u16;
            readonly owner: AccountId32;
            readonly balance: u128;
        } & Struct;
        readonly isTeamChanged: boolean;
        readonly asTeamChanged: {
            readonly assetId: u16;
            readonly issuer: AccountId32;
            readonly admin: AccountId32;
            readonly freezer: AccountId32;
        } & Struct;
        readonly isOwnerChanged: boolean;
        readonly asOwnerChanged: {
            readonly assetId: u16;
            readonly owner: AccountId32;
        } & Struct;
        readonly isFrozen: boolean;
        readonly asFrozen: {
            readonly assetId: u16;
            readonly who: AccountId32;
        } & Struct;
        readonly isThawed: boolean;
        readonly asThawed: {
            readonly assetId: u16;
            readonly who: AccountId32;
        } & Struct;
        readonly isAssetFrozen: boolean;
        readonly asAssetFrozen: {
            readonly assetId: u16;
        } & Struct;
        readonly isAssetThawed: boolean;
        readonly asAssetThawed: {
            readonly assetId: u16;
        } & Struct;
        readonly isAccountsDestroyed: boolean;
        readonly asAccountsDestroyed: {
            readonly assetId: u16;
            readonly accountsDestroyed: u32;
            readonly accountsRemaining: u32;
        } & Struct;
        readonly isApprovalsDestroyed: boolean;
        readonly asApprovalsDestroyed: {
            readonly assetId: u16;
            readonly approvalsDestroyed: u32;
            readonly approvalsRemaining: u32;
        } & Struct;
        readonly isDestructionStarted: boolean;
        readonly asDestructionStarted: {
            readonly assetId: u16;
        } & Struct;
        readonly isDestroyed: boolean;
        readonly asDestroyed: {
            readonly assetId: u16;
        } & Struct;
        readonly isForceCreated: boolean;
        readonly asForceCreated: {
            readonly assetId: u16;
            readonly owner: AccountId32;
        } & Struct;
        readonly isMetadataSet: boolean;
        readonly asMetadataSet: {
            readonly assetId: u16;
            readonly name: Bytes;
            readonly symbol: Bytes;
            readonly decimals: u8;
            readonly isFrozen: bool;
        } & Struct;
        readonly isMetadataCleared: boolean;
        readonly asMetadataCleared: {
            readonly assetId: u16;
        } & Struct;
        readonly isApprovedTransfer: boolean;
        readonly asApprovedTransfer: {
            readonly assetId: u16;
            readonly source: AccountId32;
            readonly delegate: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isApprovalCancelled: boolean;
        readonly asApprovalCancelled: {
            readonly assetId: u16;
            readonly owner: AccountId32;
            readonly delegate: AccountId32;
        } & Struct;
        readonly isTransferredApproved: boolean;
        readonly asTransferredApproved: {
            readonly assetId: u16;
            readonly owner: AccountId32;
            readonly delegate: AccountId32;
            readonly destination: AccountId32;
            readonly amount: u128;
        } & Struct;
        readonly isAssetStatusChanged: boolean;
        readonly asAssetStatusChanged: {
            readonly assetId: u16;
        } & Struct;
        readonly isAssetMinBalanceChanged: boolean;
        readonly asAssetMinBalanceChanged: {
            readonly assetId: u16;
            readonly newMinBalance: u128;
        } & Struct;
        readonly isTouched: boolean;
        readonly asTouched: {
            readonly assetId: u16;
            readonly who: AccountId32;
            readonly depositor: AccountId32;
        } & Struct;
        readonly isBlocked: boolean;
        readonly asBlocked: {
            readonly assetId: u16;
            readonly who: AccountId32;
        } & Struct;
        readonly type:
            | "Created"
            | "Issued"
            | "Transferred"
            | "Burned"
            | "TeamChanged"
            | "OwnerChanged"
            | "Frozen"
            | "Thawed"
            | "AssetFrozen"
            | "AssetThawed"
            | "AccountsDestroyed"
            | "ApprovalsDestroyed"
            | "DestructionStarted"
            | "Destroyed"
            | "ForceCreated"
            | "MetadataSet"
            | "MetadataCleared"
            | "ApprovedTransfer"
            | "ApprovalCancelled"
            | "TransferredApproved"
            | "AssetStatusChanged"
            | "AssetMinBalanceChanged"
            | "Touched"
            | "Blocked";
    }

    /** @name PalletForeignAssetCreatorEvent (123) */
    interface PalletForeignAssetCreatorEvent extends Enum {
        readonly isForeignAssetCreated: boolean;
        readonly asForeignAssetCreated: {
            readonly assetId: u16;
            readonly foreignAsset: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isForeignAssetTypeChanged: boolean;
        readonly asForeignAssetTypeChanged: {
            readonly assetId: u16;
            readonly newForeignAsset: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isForeignAssetRemoved: boolean;
        readonly asForeignAssetRemoved: {
            readonly assetId: u16;
            readonly foreignAsset: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isForeignAssetDestroyed: boolean;
        readonly asForeignAssetDestroyed: {
            readonly assetId: u16;
            readonly foreignAsset: StagingXcmV3MultiLocation;
        } & Struct;
        readonly type:
            | "ForeignAssetCreated"
            | "ForeignAssetTypeChanged"
            | "ForeignAssetRemoved"
            | "ForeignAssetDestroyed";
    }

    /** @name PalletAssetRateEvent (124) */
    interface PalletAssetRateEvent extends Enum {
        readonly isAssetRateCreated: boolean;
        readonly asAssetRateCreated: {
            readonly assetKind: u16;
            readonly rate: u128;
        } & Struct;
        readonly isAssetRateRemoved: boolean;
        readonly asAssetRateRemoved: {
            readonly assetKind: u16;
        } & Struct;
        readonly isAssetRateUpdated: boolean;
        readonly asAssetRateUpdated: {
            readonly assetKind: u16;
            readonly old: u128;
            readonly new_: u128;
        } & Struct;
        readonly type: "AssetRateCreated" | "AssetRateRemoved" | "AssetRateUpdated";
    }

    /** @name FrameSystemPhase (126) */
    interface FrameSystemPhase extends Enum {
        readonly isApplyExtrinsic: boolean;
        readonly asApplyExtrinsic: u32;
        readonly isFinalization: boolean;
        readonly isInitialization: boolean;
        readonly type: "ApplyExtrinsic" | "Finalization" | "Initialization";
    }

    /** @name FrameSystemLastRuntimeUpgradeInfo (130) */
    interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
        readonly specVersion: Compact<u32>;
        readonly specName: Text;
    }

    /** @name FrameSystemCall (132) */
    interface FrameSystemCall extends Enum {
        readonly isRemark: boolean;
        readonly asRemark: {
            readonly remark: Bytes;
        } & Struct;
        readonly isSetHeapPages: boolean;
        readonly asSetHeapPages: {
            readonly pages: u64;
        } & Struct;
        readonly isSetCode: boolean;
        readonly asSetCode: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetCodeWithoutChecks: boolean;
        readonly asSetCodeWithoutChecks: {
            readonly code: Bytes;
        } & Struct;
        readonly isSetStorage: boolean;
        readonly asSetStorage: {
            readonly items: Vec<ITuple<[Bytes, Bytes]>>;
        } & Struct;
        readonly isKillStorage: boolean;
        readonly asKillStorage: {
            readonly keys_: Vec<Bytes>;
        } & Struct;
        readonly isKillPrefix: boolean;
        readonly asKillPrefix: {
            readonly prefix: Bytes;
            readonly subkeys: u32;
        } & Struct;
        readonly isRemarkWithEvent: boolean;
        readonly asRemarkWithEvent: {
            readonly remark: Bytes;
        } & Struct;
        readonly type:
            | "Remark"
            | "SetHeapPages"
            | "SetCode"
            | "SetCodeWithoutChecks"
            | "SetStorage"
            | "KillStorage"
            | "KillPrefix"
            | "RemarkWithEvent";
    }

    /** @name FrameSystemLimitsBlockWeights (136) */
    interface FrameSystemLimitsBlockWeights extends Struct {
        readonly baseBlock: SpWeightsWeightV2Weight;
        readonly maxBlock: SpWeightsWeightV2Weight;
        readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    }

    /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (137) */
    interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
        readonly normal: FrameSystemLimitsWeightsPerClass;
        readonly operational: FrameSystemLimitsWeightsPerClass;
        readonly mandatory: FrameSystemLimitsWeightsPerClass;
    }

    /** @name FrameSystemLimitsWeightsPerClass (138) */
    interface FrameSystemLimitsWeightsPerClass extends Struct {
        readonly baseExtrinsic: SpWeightsWeightV2Weight;
        readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
        readonly maxTotal: Option<SpWeightsWeightV2Weight>;
        readonly reserved: Option<SpWeightsWeightV2Weight>;
    }

    /** @name FrameSystemLimitsBlockLength (140) */
    interface FrameSystemLimitsBlockLength extends Struct {
        readonly max: FrameSupportDispatchPerDispatchClassU32;
    }

    /** @name FrameSupportDispatchPerDispatchClassU32 (141) */
    interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
        readonly normal: u32;
        readonly operational: u32;
        readonly mandatory: u32;
    }

    /** @name SpWeightsRuntimeDbWeight (142) */
    interface SpWeightsRuntimeDbWeight extends Struct {
        readonly read: u64;
        readonly write: u64;
    }

    /** @name SpVersionRuntimeVersion (143) */
    interface SpVersionRuntimeVersion extends Struct {
        readonly specName: Text;
        readonly implName: Text;
        readonly authoringVersion: u32;
        readonly specVersion: u32;
        readonly implVersion: u32;
        readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
        readonly transactionVersion: u32;
        readonly stateVersion: u8;
    }

    /** @name FrameSystemError (147) */
    interface FrameSystemError extends Enum {
        readonly isInvalidSpecName: boolean;
        readonly isSpecVersionNeedsToIncrease: boolean;
        readonly isFailedToExtractRuntimeVersion: boolean;
        readonly isNonDefaultComposite: boolean;
        readonly isNonZeroRefCount: boolean;
        readonly isCallFiltered: boolean;
        readonly type:
            | "InvalidSpecName"
            | "SpecVersionNeedsToIncrease"
            | "FailedToExtractRuntimeVersion"
            | "NonDefaultComposite"
            | "NonZeroRefCount"
            | "CallFiltered";
    }

    /** @name CumulusPalletParachainSystemUnincludedSegmentAncestor (149) */
    interface CumulusPalletParachainSystemUnincludedSegmentAncestor extends Struct {
        readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
        readonly paraHeadHash: Option<H256>;
        readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
    }

    /** @name CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth (150) */
    interface CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth extends Struct {
        readonly umpMsgCount: u32;
        readonly umpTotalBytes: u32;
        readonly hrmpOutgoing: BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>;
    }

    /** @name CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate (152) */
    interface CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate extends Struct {
        readonly msgCount: u32;
        readonly totalBytes: u32;
    }

    /** @name PolkadotPrimitivesV6UpgradeGoAhead (157) */
    interface PolkadotPrimitivesV6UpgradeGoAhead extends Enum {
        readonly isAbort: boolean;
        readonly isGoAhead: boolean;
        readonly type: "Abort" | "GoAhead";
    }

    /** @name CumulusPalletParachainSystemUnincludedSegmentSegmentTracker (158) */
    interface CumulusPalletParachainSystemUnincludedSegmentSegmentTracker extends Struct {
        readonly usedBandwidth: CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth;
        readonly hrmpWatermark: Option<u32>;
        readonly consumedGoAheadSignal: Option<PolkadotPrimitivesV6UpgradeGoAhead>;
    }

    /** @name PolkadotPrimitivesV6PersistedValidationData (159) */
    interface PolkadotPrimitivesV6PersistedValidationData extends Struct {
        readonly parentHead: Bytes;
        readonly relayParentNumber: u32;
        readonly relayParentStorageRoot: H256;
        readonly maxPovSize: u32;
    }

    /** @name PolkadotPrimitivesV6UpgradeRestriction (162) */
    interface PolkadotPrimitivesV6UpgradeRestriction extends Enum {
        readonly isPresent: boolean;
        readonly type: "Present";
    }

    /** @name SpTrieStorageProof (163) */
    interface SpTrieStorageProof extends Struct {
        readonly trieNodes: BTreeSet<Bytes>;
    }

    /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (165) */
    interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
        readonly dmqMqcHead: H256;
        readonly relayDispatchQueueRemainingCapacity: CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity;
        readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
        readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV6AbridgedHrmpChannel]>>;
    }

    /** @name CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity (166) */
    interface CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity extends Struct {
        readonly remainingCount: u32;
        readonly remainingSize: u32;
    }

    /** @name PolkadotPrimitivesV6AbridgedHrmpChannel (169) */
    interface PolkadotPrimitivesV6AbridgedHrmpChannel extends Struct {
        readonly maxCapacity: u32;
        readonly maxTotalSize: u32;
        readonly maxMessageSize: u32;
        readonly msgCount: u32;
        readonly totalSize: u32;
        readonly mqcHead: Option<H256>;
    }

    /** @name PolkadotPrimitivesV6AbridgedHostConfiguration (170) */
    interface PolkadotPrimitivesV6AbridgedHostConfiguration extends Struct {
        readonly maxCodeSize: u32;
        readonly maxHeadDataSize: u32;
        readonly maxUpwardQueueCount: u32;
        readonly maxUpwardQueueSize: u32;
        readonly maxUpwardMessageSize: u32;
        readonly maxUpwardMessageNumPerCandidate: u32;
        readonly hrmpMaxMessageNumPerCandidate: u32;
        readonly validationUpgradeCooldown: u32;
        readonly validationUpgradeDelay: u32;
        readonly asyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    }

    /** @name PolkadotPrimitivesV6AsyncBackingAsyncBackingParams (171) */
    interface PolkadotPrimitivesV6AsyncBackingAsyncBackingParams extends Struct {
        readonly maxCandidateDepth: u32;
        readonly allowedAncestryLen: u32;
    }

    /** @name PolkadotCorePrimitivesOutboundHrmpMessage (177) */
    interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
        readonly recipient: u32;
        readonly data: Bytes;
    }

    /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (178) */
    interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
        readonly codeHash: H256;
        readonly checkVersion: bool;
    }

    /** @name CumulusPalletParachainSystemCall (179) */
    interface CumulusPalletParachainSystemCall extends Enum {
        readonly isSetValidationData: boolean;
        readonly asSetValidationData: {
            readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
        } & Struct;
        readonly isSudoSendUpwardMessage: boolean;
        readonly asSudoSendUpwardMessage: {
            readonly message: Bytes;
        } & Struct;
        readonly isAuthorizeUpgrade: boolean;
        readonly asAuthorizeUpgrade: {
            readonly codeHash: H256;
            readonly checkVersion: bool;
        } & Struct;
        readonly isEnactAuthorizedUpgrade: boolean;
        readonly asEnactAuthorizedUpgrade: {
            readonly code: Bytes;
        } & Struct;
        readonly type: "SetValidationData" | "SudoSendUpwardMessage" | "AuthorizeUpgrade" | "EnactAuthorizedUpgrade";
    }

    /** @name CumulusPrimitivesParachainInherentParachainInherentData (180) */
    interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
        readonly validationData: PolkadotPrimitivesV6PersistedValidationData;
        readonly relayChainState: SpTrieStorageProof;
        readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
        readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
    }

    /** @name PolkadotCorePrimitivesInboundDownwardMessage (182) */
    interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
        readonly sentAt: u32;
        readonly msg: Bytes;
    }

    /** @name PolkadotCorePrimitivesInboundHrmpMessage (185) */
    interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
        readonly sentAt: u32;
        readonly data: Bytes;
    }

    /** @name CumulusPalletParachainSystemError (188) */
    interface CumulusPalletParachainSystemError extends Enum {
        readonly isOverlappingUpgrades: boolean;
        readonly isProhibitedByPolkadot: boolean;
        readonly isTooBig: boolean;
        readonly isValidationDataNotAvailable: boolean;
        readonly isHostConfigurationNotAvailable: boolean;
        readonly isNotScheduled: boolean;
        readonly isNothingAuthorized: boolean;
        readonly isUnauthorized: boolean;
        readonly type:
            | "OverlappingUpgrades"
            | "ProhibitedByPolkadot"
            | "TooBig"
            | "ValidationDataNotAvailable"
            | "HostConfigurationNotAvailable"
            | "NotScheduled"
            | "NothingAuthorized"
            | "Unauthorized";
    }

    /** @name PalletTimestampCall (189) */
    interface PalletTimestampCall extends Enum {
        readonly isSet: boolean;
        readonly asSet: {
            readonly now: Compact<u64>;
        } & Struct;
        readonly type: "Set";
    }

    /** @name ParachainInfoCall (190) */
    type ParachainInfoCall = Null;

    /** @name PalletSudoCall (191) */
    interface PalletSudoCall extends Enum {
        readonly isSudo: boolean;
        readonly asSudo: {
            readonly call: Call;
        } & Struct;
        readonly isSudoUncheckedWeight: boolean;
        readonly asSudoUncheckedWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSetKey: boolean;
        readonly asSetKey: {
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSudoAs: boolean;
        readonly asSudoAs: {
            readonly who: MultiAddress;
            readonly call: Call;
        } & Struct;
        readonly type: "Sudo" | "SudoUncheckedWeight" | "SetKey" | "SudoAs";
    }

    /** @name PalletUtilityCall (193) */
    interface PalletUtilityCall extends Enum {
        readonly isBatch: boolean;
        readonly asBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isAsDerivative: boolean;
        readonly asAsDerivative: {
            readonly index: u16;
            readonly call: Call;
        } & Struct;
        readonly isBatchAll: boolean;
        readonly asBatchAll: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isDispatchAs: boolean;
        readonly asDispatchAs: {
            readonly asOrigin: DanceboxRuntimeOriginCaller;
            readonly call: Call;
        } & Struct;
        readonly isForceBatch: boolean;
        readonly asForceBatch: {
            readonly calls: Vec<Call>;
        } & Struct;
        readonly isWithWeight: boolean;
        readonly asWithWeight: {
            readonly call: Call;
            readonly weight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: "Batch" | "AsDerivative" | "BatchAll" | "DispatchAs" | "ForceBatch" | "WithWeight";
    }

    /** @name DanceboxRuntimeOriginCaller (195) */
    interface DanceboxRuntimeOriginCaller extends Enum {
        readonly isSystem: boolean;
        readonly asSystem: FrameSupportDispatchRawOrigin;
        readonly isVoid: boolean;
        readonly isCumulusXcm: boolean;
        readonly asCumulusXcm: CumulusPalletXcmOrigin;
        readonly isPolkadotXcm: boolean;
        readonly asPolkadotXcm: PalletXcmOrigin;
        readonly type: "System" | "Void" | "CumulusXcm" | "PolkadotXcm";
    }

    /** @name FrameSupportDispatchRawOrigin (196) */
    interface FrameSupportDispatchRawOrigin extends Enum {
        readonly isRoot: boolean;
        readonly isSigned: boolean;
        readonly asSigned: AccountId32;
        readonly isNone: boolean;
        readonly type: "Root" | "Signed" | "None";
    }

    /** @name CumulusPalletXcmOrigin (197) */
    interface CumulusPalletXcmOrigin extends Enum {
        readonly isRelay: boolean;
        readonly isSiblingParachain: boolean;
        readonly asSiblingParachain: u32;
        readonly type: "Relay" | "SiblingParachain";
    }

    /** @name PalletXcmOrigin (198) */
    interface PalletXcmOrigin extends Enum {
        readonly isXcm: boolean;
        readonly asXcm: StagingXcmV3MultiLocation;
        readonly isResponse: boolean;
        readonly asResponse: StagingXcmV3MultiLocation;
        readonly type: "Xcm" | "Response";
    }

    /** @name SpCoreVoid (199) */
    type SpCoreVoid = Null;

    /** @name PalletProxyCall (200) */
    interface PalletProxyCall extends Enum {
        readonly isProxy: boolean;
        readonly asProxy: {
            readonly real: MultiAddress;
            readonly forceProxyType: Option<DanceboxRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly isAddProxy: boolean;
        readonly asAddProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxy: boolean;
        readonly asRemoveProxy: {
            readonly delegate: MultiAddress;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly delay: u32;
        } & Struct;
        readonly isRemoveProxies: boolean;
        readonly isCreatePure: boolean;
        readonly asCreatePure: {
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly delay: u32;
            readonly index: u16;
        } & Struct;
        readonly isKillPure: boolean;
        readonly asKillPure: {
            readonly spawner: MultiAddress;
            readonly proxyType: DanceboxRuntimeProxyType;
            readonly index: u16;
            readonly height: Compact<u32>;
            readonly extIndex: Compact<u32>;
        } & Struct;
        readonly isAnnounce: boolean;
        readonly asAnnounce: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRemoveAnnouncement: boolean;
        readonly asRemoveAnnouncement: {
            readonly real: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isRejectAnnouncement: boolean;
        readonly asRejectAnnouncement: {
            readonly delegate: MultiAddress;
            readonly callHash: H256;
        } & Struct;
        readonly isProxyAnnounced: boolean;
        readonly asProxyAnnounced: {
            readonly delegate: MultiAddress;
            readonly real: MultiAddress;
            readonly forceProxyType: Option<DanceboxRuntimeProxyType>;
            readonly call: Call;
        } & Struct;
        readonly type:
            | "Proxy"
            | "AddProxy"
            | "RemoveProxy"
            | "RemoveProxies"
            | "CreatePure"
            | "KillPure"
            | "Announce"
            | "RemoveAnnouncement"
            | "RejectAnnouncement"
            | "ProxyAnnounced";
    }

    /** @name PalletMaintenanceModeCall (204) */
    interface PalletMaintenanceModeCall extends Enum {
        readonly isEnterMaintenanceMode: boolean;
        readonly isResumeNormalOperation: boolean;
        readonly type: "EnterMaintenanceMode" | "ResumeNormalOperation";
    }

    /** @name PalletTxPauseCall (205) */
    interface PalletTxPauseCall extends Enum {
        readonly isPause: boolean;
        readonly asPause: {
            readonly fullName: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly isUnpause: boolean;
        readonly asUnpause: {
            readonly ident: ITuple<[Bytes, Bytes]>;
        } & Struct;
        readonly type: "Pause" | "Unpause";
    }

    /** @name PalletBalancesCall (206) */
    interface PalletBalancesCall extends Enum {
        readonly isTransferAllowDeath: boolean;
        readonly asTransferAllowDeath: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly dest: MultiAddress;
            readonly value: Compact<u128>;
        } & Struct;
        readonly isTransferAll: boolean;
        readonly asTransferAll: {
            readonly dest: MultiAddress;
            readonly keepAlive: bool;
        } & Struct;
        readonly isForceUnreserve: boolean;
        readonly asForceUnreserve: {
            readonly who: MultiAddress;
            readonly amount: u128;
        } & Struct;
        readonly isUpgradeAccounts: boolean;
        readonly asUpgradeAccounts: {
            readonly who: Vec<AccountId32>;
        } & Struct;
        readonly isForceSetBalance: boolean;
        readonly asForceSetBalance: {
            readonly who: MultiAddress;
            readonly newFree: Compact<u128>;
        } & Struct;
        readonly type:
            | "TransferAllowDeath"
            | "ForceTransfer"
            | "TransferKeepAlive"
            | "TransferAll"
            | "ForceUnreserve"
            | "UpgradeAccounts"
            | "ForceSetBalance";
    }

    /** @name PalletIdentityCall (207) */
    interface PalletIdentityCall extends Enum {
        readonly isAddRegistrar: boolean;
        readonly asAddRegistrar: {
            readonly account: MultiAddress;
        } & Struct;
        readonly isSetIdentity: boolean;
        readonly asSetIdentity: {
            readonly info: PalletIdentitySimpleIdentityInfo;
        } & Struct;
        readonly isSetSubs: boolean;
        readonly asSetSubs: {
            readonly subs: Vec<ITuple<[AccountId32, Data]>>;
        } & Struct;
        readonly isClearIdentity: boolean;
        readonly isRequestJudgement: boolean;
        readonly asRequestJudgement: {
            readonly regIndex: Compact<u32>;
            readonly maxFee: Compact<u128>;
        } & Struct;
        readonly isCancelRequest: boolean;
        readonly asCancelRequest: {
            readonly regIndex: u32;
        } & Struct;
        readonly isSetFee: boolean;
        readonly asSetFee: {
            readonly index: Compact<u32>;
            readonly fee: Compact<u128>;
        } & Struct;
        readonly isSetAccountId: boolean;
        readonly asSetAccountId: {
            readonly index: Compact<u32>;
            readonly new_: MultiAddress;
        } & Struct;
        readonly isSetFields: boolean;
        readonly asSetFields: {
            readonly index: Compact<u32>;
            readonly fields: PalletIdentityBitFlags;
        } & Struct;
        readonly isProvideJudgement: boolean;
        readonly asProvideJudgement: {
            readonly regIndex: Compact<u32>;
            readonly target: MultiAddress;
            readonly judgement: PalletIdentityJudgement;
            readonly identity: H256;
        } & Struct;
        readonly isKillIdentity: boolean;
        readonly asKillIdentity: {
            readonly target: MultiAddress;
        } & Struct;
        readonly isAddSub: boolean;
        readonly asAddSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRenameSub: boolean;
        readonly asRenameSub: {
            readonly sub: MultiAddress;
            readonly data: Data;
        } & Struct;
        readonly isRemoveSub: boolean;
        readonly asRemoveSub: {
            readonly sub: MultiAddress;
        } & Struct;
        readonly isQuitSub: boolean;
        readonly type:
            | "AddRegistrar"
            | "SetIdentity"
            | "SetSubs"
            | "ClearIdentity"
            | "RequestJudgement"
            | "CancelRequest"
            | "SetFee"
            | "SetAccountId"
            | "SetFields"
            | "ProvideJudgement"
            | "KillIdentity"
            | "AddSub"
            | "RenameSub"
            | "RemoveSub"
            | "QuitSub";
    }

    /** @name PalletIdentitySimpleIdentityInfo (208) */
    interface PalletIdentitySimpleIdentityInfo extends Struct {
        readonly additional: Vec<ITuple<[Data, Data]>>;
        readonly display: Data;
        readonly legal: Data;
        readonly web: Data;
        readonly riot: Data;
        readonly email: Data;
        readonly pgpFingerprint: Option<U8aFixed>;
        readonly image: Data;
        readonly twitter: Data;
    }

    /** @name PalletIdentityBitFlags (244) */
    interface PalletIdentityBitFlags extends Set {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
    }

    /** @name PalletIdentitySimpleIdentityField (245) */
    interface PalletIdentitySimpleIdentityField extends Enum {
        readonly isDisplay: boolean;
        readonly isLegal: boolean;
        readonly isWeb: boolean;
        readonly isRiot: boolean;
        readonly isEmail: boolean;
        readonly isPgpFingerprint: boolean;
        readonly isImage: boolean;
        readonly isTwitter: boolean;
        readonly type: "Display" | "Legal" | "Web" | "Riot" | "Email" | "PgpFingerprint" | "Image" | "Twitter";
    }

    /** @name PalletIdentityJudgement (246) */
    interface PalletIdentityJudgement extends Enum {
        readonly isUnknown: boolean;
        readonly isFeePaid: boolean;
        readonly asFeePaid: u128;
        readonly isReasonable: boolean;
        readonly isKnownGood: boolean;
        readonly isOutOfDate: boolean;
        readonly isLowQuality: boolean;
        readonly isErroneous: boolean;
        readonly type: "Unknown" | "FeePaid" | "Reasonable" | "KnownGood" | "OutOfDate" | "LowQuality" | "Erroneous";
    }

    /** @name PalletRegistrarCall (247) */
    interface PalletRegistrarCall extends Enum {
        readonly isRegister: boolean;
        readonly asRegister: {
            readonly paraId: u32;
            readonly genesisData: TpContainerChainGenesisDataContainerChainGenesisData;
        } & Struct;
        readonly isDeregister: boolean;
        readonly asDeregister: {
            readonly paraId: u32;
        } & Struct;
        readonly isMarkValidForCollating: boolean;
        readonly asMarkValidForCollating: {
            readonly paraId: u32;
        } & Struct;
        readonly isPauseContainerChain: boolean;
        readonly asPauseContainerChain: {
            readonly paraId: u32;
        } & Struct;
        readonly isUnpauseContainerChain: boolean;
        readonly asUnpauseContainerChain: {
            readonly paraId: u32;
        } & Struct;
        readonly isRegisterParathread: boolean;
        readonly asRegisterParathread: {
            readonly paraId: u32;
            readonly slotFrequency: TpTraitsSlotFrequency;
            readonly genesisData: TpContainerChainGenesisDataContainerChainGenesisData;
        } & Struct;
        readonly isSetParathreadParams: boolean;
        readonly asSetParathreadParams: {
            readonly paraId: u32;
            readonly slotFrequency: TpTraitsSlotFrequency;
        } & Struct;
        readonly type:
            | "Register"
            | "Deregister"
            | "MarkValidForCollating"
            | "PauseContainerChain"
            | "UnpauseContainerChain"
            | "RegisterParathread"
            | "SetParathreadParams";
    }

    /** @name TpContainerChainGenesisDataContainerChainGenesisData (248) */
    interface TpContainerChainGenesisDataContainerChainGenesisData extends Struct {
        readonly storage: Vec<TpContainerChainGenesisDataContainerChainGenesisDataItem>;
        readonly name: Bytes;
        readonly id: Bytes;
        readonly forkId: Option<Bytes>;
        readonly extensions: Bytes;
        readonly properties: TpContainerChainGenesisDataProperties;
    }

    /** @name TpContainerChainGenesisDataContainerChainGenesisDataItem (250) */
    interface TpContainerChainGenesisDataContainerChainGenesisDataItem extends Struct {
        readonly key: Bytes;
        readonly value: Bytes;
    }

    /** @name TpContainerChainGenesisDataProperties (252) */
    interface TpContainerChainGenesisDataProperties extends Struct {
        readonly tokenMetadata: TpContainerChainGenesisDataTokenMetadata;
        readonly isEthereum: bool;
    }

    /** @name TpContainerChainGenesisDataTokenMetadata (253) */
    interface TpContainerChainGenesisDataTokenMetadata extends Struct {
        readonly tokenSymbol: Bytes;
        readonly ss58Format: u32;
        readonly tokenDecimals: u32;
    }

    /** @name TpTraitsSlotFrequency (255) */
    interface TpTraitsSlotFrequency extends Struct {
        readonly min: u32;
        readonly max: u32;
    }

    /** @name PalletConfigurationCall (256) */
    interface PalletConfigurationCall extends Enum {
        readonly isSetMaxCollators: boolean;
        readonly asSetMaxCollators: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMinOrchestratorCollators: boolean;
        readonly asSetMinOrchestratorCollators: {
            readonly new_: u32;
        } & Struct;
        readonly isSetMaxOrchestratorCollators: boolean;
        readonly asSetMaxOrchestratorCollators: {
            readonly new_: u32;
        } & Struct;
        readonly isSetCollatorsPerContainer: boolean;
        readonly asSetCollatorsPerContainer: {
            readonly new_: u32;
        } & Struct;
        readonly isSetFullRotationPeriod: boolean;
        readonly asSetFullRotationPeriod: {
            readonly new_: u32;
        } & Struct;
        readonly isSetCollatorsPerParathread: boolean;
        readonly asSetCollatorsPerParathread: {
            readonly new_: u32;
        } & Struct;
        readonly isSetParathreadsPerCollator: boolean;
        readonly asSetParathreadsPerCollator: {
            readonly new_: u32;
        } & Struct;
        readonly isSetTargetContainerChainFullness: boolean;
        readonly asSetTargetContainerChainFullness: {
            readonly new_: Perbill;
        } & Struct;
        readonly isSetBypassConsistencyCheck: boolean;
        readonly asSetBypassConsistencyCheck: {
            readonly new_: bool;
        } & Struct;
        readonly type:
            | "SetMaxCollators"
            | "SetMinOrchestratorCollators"
            | "SetMaxOrchestratorCollators"
            | "SetCollatorsPerContainer"
            | "SetFullRotationPeriod"
            | "SetCollatorsPerParathread"
            | "SetParathreadsPerCollator"
            | "SetTargetContainerChainFullness"
            | "SetBypassConsistencyCheck";
    }

    /** @name PalletCollatorAssignmentCall (258) */
    type PalletCollatorAssignmentCall = Null;

    /** @name PalletAuthorNotingCall (259) */
    interface PalletAuthorNotingCall extends Enum {
        readonly isSetLatestAuthorData: boolean;
        readonly asSetLatestAuthorData: {
            readonly data: TpAuthorNotingInherentOwnParachainInherentData;
        } & Struct;
        readonly isSetAuthor: boolean;
        readonly asSetAuthor: {
            readonly paraId: u32;
            readonly blockNumber: u32;
            readonly author: AccountId32;
        } & Struct;
        readonly isKillAuthorData: boolean;
        readonly asKillAuthorData: {
            readonly paraId: u32;
        } & Struct;
        readonly type: "SetLatestAuthorData" | "SetAuthor" | "KillAuthorData";
    }

    /** @name TpAuthorNotingInherentOwnParachainInherentData (260) */
    interface TpAuthorNotingInherentOwnParachainInherentData extends Struct {
        readonly relayStorageProof: SpTrieStorageProof;
    }

    /** @name PalletAuthorityAssignmentCall (261) */
    type PalletAuthorityAssignmentCall = Null;

    /** @name PalletServicesPaymentCall (262) */
    interface PalletServicesPaymentCall extends Enum {
        readonly isPurchaseCredits: boolean;
        readonly asPurchaseCredits: {
            readonly paraId: u32;
            readonly credit: u128;
        } & Struct;
        readonly isSetCredits: boolean;
        readonly asSetCredits: {
            readonly paraId: u32;
            readonly credits: u32;
        } & Struct;
        readonly isSetGivenFreeCredits: boolean;
        readonly asSetGivenFreeCredits: {
            readonly paraId: u32;
            readonly givenFreeCredits: bool;
        } & Struct;
        readonly type: "PurchaseCredits" | "SetCredits" | "SetGivenFreeCredits";
    }

    /** @name PalletDataPreserversCall (263) */
    interface PalletDataPreserversCall extends Enum {
        readonly isSetBootNodes: boolean;
        readonly asSetBootNodes: {
            readonly paraId: u32;
            readonly bootNodes: Vec<Bytes>;
        } & Struct;
        readonly type: "SetBootNodes";
    }

    /** @name PalletInvulnerablesCall (267) */
    interface PalletInvulnerablesCall extends Enum {
        readonly isSetInvulnerables: boolean;
        readonly asSetInvulnerables: {
            readonly new_: Vec<AccountId32>;
        } & Struct;
        readonly isAddInvulnerable: boolean;
        readonly asAddInvulnerable: {
            readonly who: AccountId32;
        } & Struct;
        readonly isRemoveInvulnerable: boolean;
        readonly asRemoveInvulnerable: {
            readonly who: AccountId32;
        } & Struct;
        readonly type: "SetInvulnerables" | "AddInvulnerable" | "RemoveInvulnerable";
    }

    /** @name PalletSessionCall (268) */
    interface PalletSessionCall extends Enum {
        readonly isSetKeys: boolean;
        readonly asSetKeys: {
            readonly keys_: DanceboxRuntimeSessionKeys;
            readonly proof: Bytes;
        } & Struct;
        readonly isPurgeKeys: boolean;
        readonly type: "SetKeys" | "PurgeKeys";
    }

    /** @name DanceboxRuntimeSessionKeys (269) */
    interface DanceboxRuntimeSessionKeys extends Struct {
        readonly nimbus: NimbusPrimitivesNimbusCryptoPublic;
    }

    /** @name NimbusPrimitivesNimbusCryptoPublic (270) */
    interface NimbusPrimitivesNimbusCryptoPublic extends SpCoreSr25519Public {}

    /** @name SpCoreSr25519Public (271) */
    interface SpCoreSr25519Public extends U8aFixed {}

    /** @name PalletAuthorInherentCall (272) */
    interface PalletAuthorInherentCall extends Enum {
        readonly isKickOffAuthorshipValidation: boolean;
        readonly type: "KickOffAuthorshipValidation";
    }

    /** @name PalletPooledStakingCall (273) */
    interface PalletPooledStakingCall extends Enum {
        readonly isRebalanceHold: boolean;
        readonly asRebalanceHold: {
            readonly candidate: AccountId32;
            readonly delegator: AccountId32;
            readonly pool: PalletPooledStakingAllTargetPool;
        } & Struct;
        readonly isRequestDelegate: boolean;
        readonly asRequestDelegate: {
            readonly candidate: AccountId32;
            readonly pool: PalletPooledStakingTargetPool;
            readonly stake: u128;
        } & Struct;
        readonly isExecutePendingOperations: boolean;
        readonly asExecutePendingOperations: {
            readonly operations: Vec<PalletPooledStakingPendingOperationQuery>;
        } & Struct;
        readonly isRequestUndelegate: boolean;
        readonly asRequestUndelegate: {
            readonly candidate: AccountId32;
            readonly pool: PalletPooledStakingTargetPool;
            readonly amount: PalletPooledStakingSharesOrStake;
        } & Struct;
        readonly isClaimManualRewards: boolean;
        readonly asClaimManualRewards: {
            readonly pairs: Vec<ITuple<[AccountId32, AccountId32]>>;
        } & Struct;
        readonly isUpdateCandidatePosition: boolean;
        readonly asUpdateCandidatePosition: {
            readonly candidates: Vec<AccountId32>;
        } & Struct;
        readonly isSwapPool: boolean;
        readonly asSwapPool: {
            readonly candidate: AccountId32;
            readonly sourcePool: PalletPooledStakingTargetPool;
            readonly amount: PalletPooledStakingSharesOrStake;
        } & Struct;
        readonly type:
            | "RebalanceHold"
            | "RequestDelegate"
            | "ExecutePendingOperations"
            | "RequestUndelegate"
            | "ClaimManualRewards"
            | "UpdateCandidatePosition"
            | "SwapPool";
    }

    /** @name PalletPooledStakingAllTargetPool (274) */
    interface PalletPooledStakingAllTargetPool extends Enum {
        readonly isJoining: boolean;
        readonly isAutoCompounding: boolean;
        readonly isManualRewards: boolean;
        readonly isLeaving: boolean;
        readonly type: "Joining" | "AutoCompounding" | "ManualRewards" | "Leaving";
    }

    /** @name PalletPooledStakingPendingOperationQuery (276) */
    interface PalletPooledStakingPendingOperationQuery extends Struct {
        readonly delegator: AccountId32;
        readonly operation: PalletPooledStakingPendingOperationKey;
    }

    /** @name PalletPooledStakingPendingOperationKey (277) */
    interface PalletPooledStakingPendingOperationKey extends Enum {
        readonly isJoiningAutoCompounding: boolean;
        readonly asJoiningAutoCompounding: {
            readonly candidate: AccountId32;
            readonly at: u32;
        } & Struct;
        readonly isJoiningManualRewards: boolean;
        readonly asJoiningManualRewards: {
            readonly candidate: AccountId32;
            readonly at: u32;
        } & Struct;
        readonly isLeaving: boolean;
        readonly asLeaving: {
            readonly candidate: AccountId32;
            readonly at: u32;
        } & Struct;
        readonly type: "JoiningAutoCompounding" | "JoiningManualRewards" | "Leaving";
    }

    /** @name PalletPooledStakingSharesOrStake (278) */
    interface PalletPooledStakingSharesOrStake extends Enum {
        readonly isShares: boolean;
        readonly asShares: u128;
        readonly isStake: boolean;
        readonly asStake: u128;
        readonly type: "Shares" | "Stake";
    }

    /** @name CumulusPalletXcmpQueueCall (281) */
    interface CumulusPalletXcmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isSuspendXcmExecution: boolean;
        readonly isResumeXcmExecution: boolean;
        readonly isUpdateSuspendThreshold: boolean;
        readonly asUpdateSuspendThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateDropThreshold: boolean;
        readonly asUpdateDropThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateResumeThreshold: boolean;
        readonly asUpdateResumeThreshold: {
            readonly new_: u32;
        } & Struct;
        readonly isUpdateThresholdWeight: boolean;
        readonly asUpdateThresholdWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateWeightRestrictDecay: boolean;
        readonly asUpdateWeightRestrictDecay: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isUpdateXcmpMaxIndividualWeight: boolean;
        readonly asUpdateXcmpMaxIndividualWeight: {
            readonly new_: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type:
            | "ServiceOverweight"
            | "SuspendXcmExecution"
            | "ResumeXcmExecution"
            | "UpdateSuspendThreshold"
            | "UpdateDropThreshold"
            | "UpdateResumeThreshold"
            | "UpdateThresholdWeight"
            | "UpdateWeightRestrictDecay"
            | "UpdateXcmpMaxIndividualWeight";
    }

    /** @name CumulusPalletDmpQueueCall (282) */
    interface CumulusPalletDmpQueueCall extends Enum {
        readonly isServiceOverweight: boolean;
        readonly asServiceOverweight: {
            readonly index: u64;
            readonly weightLimit: SpWeightsWeightV2Weight;
        } & Struct;
        readonly type: "ServiceOverweight";
    }

    /** @name PalletXcmCall (283) */
    interface PalletXcmCall extends Enum {
        readonly isSend: boolean;
        readonly asSend: {
            readonly dest: XcmVersionedMultiLocation;
            readonly message: XcmVersionedXcm;
        } & Struct;
        readonly isTeleportAssets: boolean;
        readonly asTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isReserveTransferAssets: boolean;
        readonly asReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
        } & Struct;
        readonly isExecute: boolean;
        readonly asExecute: {
            readonly message: XcmVersionedXcm;
            readonly maxWeight: SpWeightsWeightV2Weight;
        } & Struct;
        readonly isForceXcmVersion: boolean;
        readonly asForceXcmVersion: {
            readonly location: StagingXcmV3MultiLocation;
            readonly version: u32;
        } & Struct;
        readonly isForceDefaultXcmVersion: boolean;
        readonly asForceDefaultXcmVersion: {
            readonly maybeXcmVersion: Option<u32>;
        } & Struct;
        readonly isForceSubscribeVersionNotify: boolean;
        readonly asForceSubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isForceUnsubscribeVersionNotify: boolean;
        readonly asForceUnsubscribeVersionNotify: {
            readonly location: XcmVersionedMultiLocation;
        } & Struct;
        readonly isLimitedReserveTransferAssets: boolean;
        readonly asLimitedReserveTransferAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isLimitedTeleportAssets: boolean;
        readonly asLimitedTeleportAssets: {
            readonly dest: XcmVersionedMultiLocation;
            readonly beneficiary: XcmVersionedMultiLocation;
            readonly assets: XcmVersionedMultiAssets;
            readonly feeAssetItem: u32;
            readonly weightLimit: XcmV3WeightLimit;
        } & Struct;
        readonly isForceSuspension: boolean;
        readonly asForceSuspension: {
            readonly suspended: bool;
        } & Struct;
        readonly type:
            | "Send"
            | "TeleportAssets"
            | "ReserveTransferAssets"
            | "Execute"
            | "ForceXcmVersion"
            | "ForceDefaultXcmVersion"
            | "ForceSubscribeVersionNotify"
            | "ForceUnsubscribeVersionNotify"
            | "LimitedReserveTransferAssets"
            | "LimitedTeleportAssets"
            | "ForceSuspension";
    }

    /** @name XcmVersionedXcm (284) */
    interface XcmVersionedXcm extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Xcm;
        readonly isV3: boolean;
        readonly asV3: XcmV3Xcm;
        readonly type: "V2" | "V3";
    }

    /** @name XcmV2Xcm (285) */
    interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

    /** @name XcmV2Instruction (287) */
    interface XcmV2Instruction extends Enum {
        readonly isWithdrawAsset: boolean;
        readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
        readonly isReserveAssetDeposited: boolean;
        readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
        readonly isReceiveTeleportedAsset: boolean;
        readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
        readonly isQueryResponse: boolean;
        readonly asQueryResponse: {
            readonly queryId: Compact<u64>;
            readonly response: XcmV2Response;
            readonly maxWeight: Compact<u64>;
        } & Struct;
        readonly isTransferAsset: boolean;
        readonly asTransferAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isTransferReserveAsset: boolean;
        readonly asTransferReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isTransact: boolean;
        readonly asTransact: {
            readonly originType: XcmV2OriginKind;
            readonly requireWeightAtMost: Compact<u64>;
            readonly call: XcmDoubleEncoded;
        } & Struct;
        readonly isHrmpNewChannelOpenRequest: boolean;
        readonly asHrmpNewChannelOpenRequest: {
            readonly sender: Compact<u32>;
            readonly maxMessageSize: Compact<u32>;
            readonly maxCapacity: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelAccepted: boolean;
        readonly asHrmpChannelAccepted: {
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isHrmpChannelClosing: boolean;
        readonly asHrmpChannelClosing: {
            readonly initiator: Compact<u32>;
            readonly sender: Compact<u32>;
            readonly recipient: Compact<u32>;
        } & Struct;
        readonly isClearOrigin: boolean;
        readonly isDescendOrigin: boolean;
        readonly asDescendOrigin: XcmV2MultilocationJunctions;
        readonly isReportError: boolean;
        readonly asReportError: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isDepositAsset: boolean;
        readonly asDepositAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly beneficiary: XcmV2MultiLocation;
        } & Struct;
        readonly isDepositReserveAsset: boolean;
        readonly asDepositReserveAsset: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxAssets: Compact<u32>;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isExchangeAsset: boolean;
        readonly asExchangeAsset: {
            readonly give: XcmV2MultiassetMultiAssetFilter;
            readonly receive: XcmV2MultiassetMultiAssets;
        } & Struct;
        readonly isInitiateReserveWithdraw: boolean;
        readonly asInitiateReserveWithdraw: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly reserve: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isInitiateTeleport: boolean;
        readonly asInitiateTeleport: {
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly dest: XcmV2MultiLocation;
            readonly xcm: XcmV2Xcm;
        } & Struct;
        readonly isQueryHolding: boolean;
        readonly asQueryHolding: {
            readonly queryId: Compact<u64>;
            readonly dest: XcmV2MultiLocation;
            readonly assets: XcmV2MultiassetMultiAssetFilter;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isBuyExecution: boolean;
        readonly asBuyExecution: {
            readonly fees: XcmV2MultiAsset;
            readonly weightLimit: XcmV2WeightLimit;
        } & Struct;
        readonly isRefundSurplus: boolean;
        readonly isSetErrorHandler: boolean;
        readonly asSetErrorHandler: XcmV2Xcm;
        readonly isSetAppendix: boolean;
        readonly asSetAppendix: XcmV2Xcm;
        readonly isClearError: boolean;
        readonly isClaimAsset: boolean;
        readonly asClaimAsset: {
            readonly assets: XcmV2MultiassetMultiAssets;
            readonly ticket: XcmV2MultiLocation;
        } & Struct;
        readonly isTrap: boolean;
        readonly asTrap: Compact<u64>;
        readonly isSubscribeVersion: boolean;
        readonly asSubscribeVersion: {
            readonly queryId: Compact<u64>;
            readonly maxResponseWeight: Compact<u64>;
        } & Struct;
        readonly isUnsubscribeVersion: boolean;
        readonly type:
            | "WithdrawAsset"
            | "ReserveAssetDeposited"
            | "ReceiveTeleportedAsset"
            | "QueryResponse"
            | "TransferAsset"
            | "TransferReserveAsset"
            | "Transact"
            | "HrmpNewChannelOpenRequest"
            | "HrmpChannelAccepted"
            | "HrmpChannelClosing"
            | "ClearOrigin"
            | "DescendOrigin"
            | "ReportError"
            | "DepositAsset"
            | "DepositReserveAsset"
            | "ExchangeAsset"
            | "InitiateReserveWithdraw"
            | "InitiateTeleport"
            | "QueryHolding"
            | "BuyExecution"
            | "RefundSurplus"
            | "SetErrorHandler"
            | "SetAppendix"
            | "ClearError"
            | "ClaimAsset"
            | "Trap"
            | "SubscribeVersion"
            | "UnsubscribeVersion";
    }

    /** @name XcmV2Response (288) */
    interface XcmV2Response extends Enum {
        readonly isNull: boolean;
        readonly isAssets: boolean;
        readonly asAssets: XcmV2MultiassetMultiAssets;
        readonly isExecutionResult: boolean;
        readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
        readonly isVersion: boolean;
        readonly asVersion: u32;
        readonly type: "Null" | "Assets" | "ExecutionResult" | "Version";
    }

    /** @name XcmV2TraitsError (291) */
    interface XcmV2TraitsError extends Enum {
        readonly isOverflow: boolean;
        readonly isUnimplemented: boolean;
        readonly isUntrustedReserveLocation: boolean;
        readonly isUntrustedTeleportLocation: boolean;
        readonly isMultiLocationFull: boolean;
        readonly isMultiLocationNotInvertible: boolean;
        readonly isBadOrigin: boolean;
        readonly isInvalidLocation: boolean;
        readonly isAssetNotFound: boolean;
        readonly isFailedToTransactAsset: boolean;
        readonly isNotWithdrawable: boolean;
        readonly isLocationCannotHold: boolean;
        readonly isExceedsMaxMessageSize: boolean;
        readonly isDestinationUnsupported: boolean;
        readonly isTransport: boolean;
        readonly isUnroutable: boolean;
        readonly isUnknownClaim: boolean;
        readonly isFailedToDecode: boolean;
        readonly isMaxWeightInvalid: boolean;
        readonly isNotHoldingFees: boolean;
        readonly isTooExpensive: boolean;
        readonly isTrap: boolean;
        readonly asTrap: u64;
        readonly isUnhandledXcmVersion: boolean;
        readonly isWeightLimitReached: boolean;
        readonly asWeightLimitReached: u64;
        readonly isBarrier: boolean;
        readonly isWeightNotComputable: boolean;
        readonly type:
            | "Overflow"
            | "Unimplemented"
            | "UntrustedReserveLocation"
            | "UntrustedTeleportLocation"
            | "MultiLocationFull"
            | "MultiLocationNotInvertible"
            | "BadOrigin"
            | "InvalidLocation"
            | "AssetNotFound"
            | "FailedToTransactAsset"
            | "NotWithdrawable"
            | "LocationCannotHold"
            | "ExceedsMaxMessageSize"
            | "DestinationUnsupported"
            | "Transport"
            | "Unroutable"
            | "UnknownClaim"
            | "FailedToDecode"
            | "MaxWeightInvalid"
            | "NotHoldingFees"
            | "TooExpensive"
            | "Trap"
            | "UnhandledXcmVersion"
            | "WeightLimitReached"
            | "Barrier"
            | "WeightNotComputable";
    }

    /** @name XcmV2MultiassetMultiAssetFilter (292) */
    interface XcmV2MultiassetMultiAssetFilter extends Enum {
        readonly isDefinite: boolean;
        readonly asDefinite: XcmV2MultiassetMultiAssets;
        readonly isWild: boolean;
        readonly asWild: XcmV2MultiassetWildMultiAsset;
        readonly type: "Definite" | "Wild";
    }

    /** @name XcmV2MultiassetWildMultiAsset (293) */
    interface XcmV2MultiassetWildMultiAsset extends Enum {
        readonly isAll: boolean;
        readonly isAllOf: boolean;
        readonly asAllOf: {
            readonly id: XcmV2MultiassetAssetId;
            readonly fun: XcmV2MultiassetWildFungibility;
        } & Struct;
        readonly type: "All" | "AllOf";
    }

    /** @name XcmV2MultiassetWildFungibility (294) */
    interface XcmV2MultiassetWildFungibility extends Enum {
        readonly isFungible: boolean;
        readonly isNonFungible: boolean;
        readonly type: "Fungible" | "NonFungible";
    }

    /** @name XcmV2WeightLimit (295) */
    interface XcmV2WeightLimit extends Enum {
        readonly isUnlimited: boolean;
        readonly isLimited: boolean;
        readonly asLimited: Compact<u64>;
        readonly type: "Unlimited" | "Limited";
    }

    /** @name PalletAssetsCall (304) */
    interface PalletAssetsCall extends Enum {
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly id: u16;
            readonly admin: MultiAddress;
            readonly minBalance: u128;
        } & Struct;
        readonly isForceCreate: boolean;
        readonly asForceCreate: {
            readonly id: u16;
            readonly owner: MultiAddress;
            readonly isSufficient: bool;
            readonly minBalance: Compact<u128>;
        } & Struct;
        readonly isStartDestroy: boolean;
        readonly asStartDestroy: {
            readonly id: u16;
        } & Struct;
        readonly isDestroyAccounts: boolean;
        readonly asDestroyAccounts: {
            readonly id: u16;
        } & Struct;
        readonly isDestroyApprovals: boolean;
        readonly asDestroyApprovals: {
            readonly id: u16;
        } & Struct;
        readonly isFinishDestroy: boolean;
        readonly asFinishDestroy: {
            readonly id: u16;
        } & Struct;
        readonly isMint: boolean;
        readonly asMint: {
            readonly id: u16;
            readonly beneficiary: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isBurn: boolean;
        readonly asBurn: {
            readonly id: u16;
            readonly who: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransfer: boolean;
        readonly asTransfer: {
            readonly id: u16;
            readonly target: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTransferKeepAlive: boolean;
        readonly asTransferKeepAlive: {
            readonly id: u16;
            readonly target: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isForceTransfer: boolean;
        readonly asForceTransfer: {
            readonly id: u16;
            readonly source: MultiAddress;
            readonly dest: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isFreeze: boolean;
        readonly asFreeze: {
            readonly id: u16;
            readonly who: MultiAddress;
        } & Struct;
        readonly isThaw: boolean;
        readonly asThaw: {
            readonly id: u16;
            readonly who: MultiAddress;
        } & Struct;
        readonly isFreezeAsset: boolean;
        readonly asFreezeAsset: {
            readonly id: u16;
        } & Struct;
        readonly isThawAsset: boolean;
        readonly asThawAsset: {
            readonly id: u16;
        } & Struct;
        readonly isTransferOwnership: boolean;
        readonly asTransferOwnership: {
            readonly id: u16;
            readonly owner: MultiAddress;
        } & Struct;
        readonly isSetTeam: boolean;
        readonly asSetTeam: {
            readonly id: u16;
            readonly issuer: MultiAddress;
            readonly admin: MultiAddress;
            readonly freezer: MultiAddress;
        } & Struct;
        readonly isSetMetadata: boolean;
        readonly asSetMetadata: {
            readonly id: u16;
            readonly name: Bytes;
            readonly symbol: Bytes;
            readonly decimals: u8;
        } & Struct;
        readonly isClearMetadata: boolean;
        readonly asClearMetadata: {
            readonly id: u16;
        } & Struct;
        readonly isForceSetMetadata: boolean;
        readonly asForceSetMetadata: {
            readonly id: u16;
            readonly name: Bytes;
            readonly symbol: Bytes;
            readonly decimals: u8;
            readonly isFrozen: bool;
        } & Struct;
        readonly isForceClearMetadata: boolean;
        readonly asForceClearMetadata: {
            readonly id: u16;
        } & Struct;
        readonly isForceAssetStatus: boolean;
        readonly asForceAssetStatus: {
            readonly id: u16;
            readonly owner: MultiAddress;
            readonly issuer: MultiAddress;
            readonly admin: MultiAddress;
            readonly freezer: MultiAddress;
            readonly minBalance: Compact<u128>;
            readonly isSufficient: bool;
            readonly isFrozen: bool;
        } & Struct;
        readonly isApproveTransfer: boolean;
        readonly asApproveTransfer: {
            readonly id: u16;
            readonly delegate: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isCancelApproval: boolean;
        readonly asCancelApproval: {
            readonly id: u16;
            readonly delegate: MultiAddress;
        } & Struct;
        readonly isForceCancelApproval: boolean;
        readonly asForceCancelApproval: {
            readonly id: u16;
            readonly owner: MultiAddress;
            readonly delegate: MultiAddress;
        } & Struct;
        readonly isTransferApproved: boolean;
        readonly asTransferApproved: {
            readonly id: u16;
            readonly owner: MultiAddress;
            readonly destination: MultiAddress;
            readonly amount: Compact<u128>;
        } & Struct;
        readonly isTouch: boolean;
        readonly asTouch: {
            readonly id: u16;
        } & Struct;
        readonly isRefund: boolean;
        readonly asRefund: {
            readonly id: u16;
            readonly allowBurn: bool;
        } & Struct;
        readonly isSetMinBalance: boolean;
        readonly asSetMinBalance: {
            readonly id: u16;
            readonly minBalance: u128;
        } & Struct;
        readonly isTouchOther: boolean;
        readonly asTouchOther: {
            readonly id: u16;
            readonly who: MultiAddress;
        } & Struct;
        readonly isRefundOther: boolean;
        readonly asRefundOther: {
            readonly id: u16;
            readonly who: MultiAddress;
        } & Struct;
        readonly isBlock: boolean;
        readonly asBlock: {
            readonly id: u16;
            readonly who: MultiAddress;
        } & Struct;
        readonly type:
            | "Create"
            | "ForceCreate"
            | "StartDestroy"
            | "DestroyAccounts"
            | "DestroyApprovals"
            | "FinishDestroy"
            | "Mint"
            | "Burn"
            | "Transfer"
            | "TransferKeepAlive"
            | "ForceTransfer"
            | "Freeze"
            | "Thaw"
            | "FreezeAsset"
            | "ThawAsset"
            | "TransferOwnership"
            | "SetTeam"
            | "SetMetadata"
            | "ClearMetadata"
            | "ForceSetMetadata"
            | "ForceClearMetadata"
            | "ForceAssetStatus"
            | "ApproveTransfer"
            | "CancelApproval"
            | "ForceCancelApproval"
            | "TransferApproved"
            | "Touch"
            | "Refund"
            | "SetMinBalance"
            | "TouchOther"
            | "RefundOther"
            | "Block";
    }

    /** @name PalletForeignAssetCreatorCall (305) */
    interface PalletForeignAssetCreatorCall extends Enum {
        readonly isCreateForeignAsset: boolean;
        readonly asCreateForeignAsset: {
            readonly foreignAsset: StagingXcmV3MultiLocation;
            readonly assetId: u16;
            readonly admin: AccountId32;
            readonly isSufficient: bool;
            readonly minBalance: u128;
        } & Struct;
        readonly isChangeExistingAssetType: boolean;
        readonly asChangeExistingAssetType: {
            readonly assetId: u16;
            readonly newForeignAsset: StagingXcmV3MultiLocation;
        } & Struct;
        readonly isRemoveExistingAssetType: boolean;
        readonly asRemoveExistingAssetType: {
            readonly assetId: u16;
        } & Struct;
        readonly isDestroyForeignAsset: boolean;
        readonly asDestroyForeignAsset: {
            readonly assetId: u16;
        } & Struct;
        readonly type:
            | "CreateForeignAsset"
            | "ChangeExistingAssetType"
            | "RemoveExistingAssetType"
            | "DestroyForeignAsset";
    }

    /** @name PalletAssetRateCall (306) */
    interface PalletAssetRateCall extends Enum {
        readonly isCreate: boolean;
        readonly asCreate: {
            readonly assetKind: u16;
            readonly rate: u128;
        } & Struct;
        readonly isUpdate: boolean;
        readonly asUpdate: {
            readonly assetKind: u16;
            readonly rate: u128;
        } & Struct;
        readonly isRemove: boolean;
        readonly asRemove: {
            readonly assetKind: u16;
        } & Struct;
        readonly type: "Create" | "Update" | "Remove";
    }

    /** @name PalletRootTestingCall (307) */
    interface PalletRootTestingCall extends Enum {
        readonly isFillBlock: boolean;
        readonly asFillBlock: {
            readonly ratio: Perbill;
        } & Struct;
        readonly type: "FillBlock";
    }

    /** @name PalletSudoError (308) */
    interface PalletSudoError extends Enum {
        readonly isRequireSudo: boolean;
        readonly type: "RequireSudo";
    }

    /** @name PalletUtilityError (309) */
    interface PalletUtilityError extends Enum {
        readonly isTooManyCalls: boolean;
        readonly type: "TooManyCalls";
    }

    /** @name PalletProxyProxyDefinition (312) */
    interface PalletProxyProxyDefinition extends Struct {
        readonly delegate: AccountId32;
        readonly proxyType: DanceboxRuntimeProxyType;
        readonly delay: u32;
    }

    /** @name PalletProxyAnnouncement (316) */
    interface PalletProxyAnnouncement extends Struct {
        readonly real: AccountId32;
        readonly callHash: H256;
        readonly height: u32;
    }

    /** @name PalletProxyError (318) */
    interface PalletProxyError extends Enum {
        readonly isTooMany: boolean;
        readonly isNotFound: boolean;
        readonly isNotProxy: boolean;
        readonly isUnproxyable: boolean;
        readonly isDuplicate: boolean;
        readonly isNoPermission: boolean;
        readonly isUnannounced: boolean;
        readonly isNoSelfProxy: boolean;
        readonly type:
            | "TooMany"
            | "NotFound"
            | "NotProxy"
            | "Unproxyable"
            | "Duplicate"
            | "NoPermission"
            | "Unannounced"
            | "NoSelfProxy";
    }

    /** @name PalletMigrationsError (319) */
    interface PalletMigrationsError extends Enum {
        readonly isPreimageMissing: boolean;
        readonly isWrongUpperBound: boolean;
        readonly isPreimageIsTooBig: boolean;
        readonly isPreimageAlreadyExists: boolean;
        readonly type: "PreimageMissing" | "WrongUpperBound" | "PreimageIsTooBig" | "PreimageAlreadyExists";
    }

    /** @name PalletMaintenanceModeError (320) */
    interface PalletMaintenanceModeError extends Enum {
        readonly isAlreadyInMaintenanceMode: boolean;
        readonly isNotInMaintenanceMode: boolean;
        readonly type: "AlreadyInMaintenanceMode" | "NotInMaintenanceMode";
    }

    /** @name PalletTxPauseError (321) */
    interface PalletTxPauseError extends Enum {
        readonly isIsPaused: boolean;
        readonly isIsUnpaused: boolean;
        readonly isUnpausable: boolean;
        readonly isNotFound: boolean;
        readonly type: "IsPaused" | "IsUnpaused" | "Unpausable" | "NotFound";
    }

    /** @name PalletBalancesBalanceLock (323) */
    interface PalletBalancesBalanceLock extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
        readonly reasons: PalletBalancesReasons;
    }

    /** @name PalletBalancesReasons (324) */
    interface PalletBalancesReasons extends Enum {
        readonly isFee: boolean;
        readonly isMisc: boolean;
        readonly isAll: boolean;
        readonly type: "Fee" | "Misc" | "All";
    }

    /** @name PalletBalancesReserveData (327) */
    interface PalletBalancesReserveData extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }

    /** @name DanceboxRuntimeRuntimeHoldReason (331) */
    interface DanceboxRuntimeRuntimeHoldReason extends Enum {
        readonly isPooledStaking: boolean;
        readonly asPooledStaking: PalletPooledStakingHoldReason;
        readonly type: "PooledStaking";
    }

    /** @name PalletPooledStakingHoldReason (332) */
    interface PalletPooledStakingHoldReason extends Enum {
        readonly isPooledStake: boolean;
        readonly type: "PooledStake";
    }

    /** @name PalletBalancesIdAmount (335) */
    interface PalletBalancesIdAmount extends Struct {
        readonly id: U8aFixed;
        readonly amount: u128;
    }

    /** @name PalletBalancesError (337) */
    interface PalletBalancesError extends Enum {
        readonly isVestingBalance: boolean;
        readonly isLiquidityRestrictions: boolean;
        readonly isInsufficientBalance: boolean;
        readonly isExistentialDeposit: boolean;
        readonly isExpendability: boolean;
        readonly isExistingVestingSchedule: boolean;
        readonly isDeadAccount: boolean;
        readonly isTooManyReserves: boolean;
        readonly isTooManyHolds: boolean;
        readonly isTooManyFreezes: boolean;
        readonly type:
            | "VestingBalance"
            | "LiquidityRestrictions"
            | "InsufficientBalance"
            | "ExistentialDeposit"
            | "Expendability"
            | "ExistingVestingSchedule"
            | "DeadAccount"
            | "TooManyReserves"
            | "TooManyHolds"
            | "TooManyFreezes";
    }

    /** @name PalletTransactionPaymentReleases (338) */
    interface PalletTransactionPaymentReleases extends Enum {
        readonly isV1Ancient: boolean;
        readonly isV2: boolean;
        readonly type: "V1Ancient" | "V2";
    }

    /** @name PalletIdentityRegistration (339) */
    interface PalletIdentityRegistration extends Struct {
        readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
        readonly deposit: u128;
        readonly info: PalletIdentitySimpleIdentityInfo;
    }

    /** @name PalletIdentityRegistrarInfo (347) */
    interface PalletIdentityRegistrarInfo extends Struct {
        readonly account: AccountId32;
        readonly fee: u128;
        readonly fields: PalletIdentityBitFlags;
    }

    /** @name PalletIdentityError (349) */
    interface PalletIdentityError extends Enum {
        readonly isTooManySubAccounts: boolean;
        readonly isNotFound: boolean;
        readonly isNotNamed: boolean;
        readonly isEmptyIndex: boolean;
        readonly isFeeChanged: boolean;
        readonly isNoIdentity: boolean;
        readonly isStickyJudgement: boolean;
        readonly isJudgementGiven: boolean;
        readonly isInvalidJudgement: boolean;
        readonly isInvalidIndex: boolean;
        readonly isInvalidTarget: boolean;
        readonly isTooManyFields: boolean;
        readonly isTooManyRegistrars: boolean;
        readonly isAlreadyClaimed: boolean;
        readonly isNotSub: boolean;
        readonly isNotOwned: boolean;
        readonly isJudgementForDifferentIdentity: boolean;
        readonly isJudgementPaymentFailed: boolean;
        readonly type:
            | "TooManySubAccounts"
            | "NotFound"
            | "NotNamed"
            | "EmptyIndex"
            | "FeeChanged"
            | "NoIdentity"
            | "StickyJudgement"
            | "JudgementGiven"
            | "InvalidJudgement"
            | "InvalidIndex"
            | "InvalidTarget"
            | "TooManyFields"
            | "TooManyRegistrars"
            | "AlreadyClaimed"
            | "NotSub"
            | "NotOwned"
            | "JudgementForDifferentIdentity"
            | "JudgementPaymentFailed";
    }

    /** @name TpTraitsParathreadParams (354) */
    interface TpTraitsParathreadParams extends Struct {
        readonly slotFrequency: TpTraitsSlotFrequency;
    }

    /** @name PalletRegistrarDepositInfo (360) */
    interface PalletRegistrarDepositInfo extends Struct {
        readonly creator: AccountId32;
        readonly deposit: u128;
    }

    /** @name PalletRegistrarError (361) */
    interface PalletRegistrarError extends Enum {
        readonly isParaIdAlreadyRegistered: boolean;
        readonly isParaIdNotRegistered: boolean;
        readonly isParaIdAlreadyDeregistered: boolean;
        readonly isParaIdAlreadyPaused: boolean;
        readonly isParaIdNotPaused: boolean;
        readonly isParaIdListFull: boolean;
        readonly isGenesisDataTooBig: boolean;
        readonly isParaIdNotInPendingVerification: boolean;
        readonly isNotSufficientDeposit: boolean;
        readonly isNotAParathread: boolean;
        readonly type:
            | "ParaIdAlreadyRegistered"
            | "ParaIdNotRegistered"
            | "ParaIdAlreadyDeregistered"
            | "ParaIdAlreadyPaused"
            | "ParaIdNotPaused"
            | "ParaIdListFull"
            | "GenesisDataTooBig"
            | "ParaIdNotInPendingVerification"
            | "NotSufficientDeposit"
            | "NotAParathread";
    }

    /** @name PalletConfigurationHostConfiguration (362) */
    interface PalletConfigurationHostConfiguration extends Struct {
        readonly maxCollators: u32;
        readonly minOrchestratorCollators: u32;
        readonly maxOrchestratorCollators: u32;
        readonly collatorsPerContainer: u32;
        readonly fullRotationPeriod: u32;
        readonly collatorsPerParathread: u32;
        readonly parathreadsPerCollator: u32;
        readonly targetContainerChainFullness: Perbill;
    }

    /** @name PalletConfigurationError (365) */
    interface PalletConfigurationError extends Enum {
        readonly isInvalidNewValue: boolean;
        readonly type: "InvalidNewValue";
    }

    /** @name DpCollatorAssignmentAssignedCollatorsAccountId32 (366) */
    interface DpCollatorAssignmentAssignedCollatorsAccountId32 extends Struct {
        readonly orchestratorChain: Vec<AccountId32>;
        readonly containerChains: BTreeMap<u32, Vec<AccountId32>>;
    }

    /** @name PalletAuthorNotingContainerChainBlockInfo (371) */
    interface PalletAuthorNotingContainerChainBlockInfo extends Struct {
        readonly blockNumber: u32;
        readonly author: AccountId32;
    }

    /** @name PalletAuthorNotingError (372) */
    interface PalletAuthorNotingError extends Enum {
        readonly isFailedReading: boolean;
        readonly isFailedDecodingHeader: boolean;
        readonly isAuraDigestFirstItem: boolean;
        readonly isAsPreRuntimeError: boolean;
        readonly isNonDecodableSlot: boolean;
        readonly isAuthorNotFound: boolean;
        readonly isNonAuraDigest: boolean;
        readonly type:
            | "FailedReading"
            | "FailedDecodingHeader"
            | "AuraDigestFirstItem"
            | "AsPreRuntimeError"
            | "NonDecodableSlot"
            | "AuthorNotFound"
            | "NonAuraDigest";
    }

    /** @name DpCollatorAssignmentAssignedCollatorsPublic (373) */
    interface DpCollatorAssignmentAssignedCollatorsPublic extends Struct {
        readonly orchestratorChain: Vec<NimbusPrimitivesNimbusCryptoPublic>;
        readonly containerChains: BTreeMap<u32, Vec<NimbusPrimitivesNimbusCryptoPublic>>;
    }

    /** @name PalletServicesPaymentError (378) */
    interface PalletServicesPaymentError extends Enum {
        readonly isInsufficientFundsToPurchaseCredits: boolean;
        readonly isInsufficientCredits: boolean;
        readonly isCreditPriceTooExpensive: boolean;
        readonly type: "InsufficientFundsToPurchaseCredits" | "InsufficientCredits" | "CreditPriceTooExpensive";
    }

    /** @name PalletDataPreserversError (379) */
    interface PalletDataPreserversError extends Enum {
        readonly isNoBootNodes: boolean;
        readonly type: "NoBootNodes";
    }

    /** @name PalletInvulnerablesError (381) */
    interface PalletInvulnerablesError extends Enum {
        readonly isTooManyInvulnerables: boolean;
        readonly isAlreadyInvulnerable: boolean;
        readonly isNotInvulnerable: boolean;
        readonly type: "TooManyInvulnerables" | "AlreadyInvulnerable" | "NotInvulnerable";
    }

    /** @name SpCoreCryptoKeyTypeId (386) */
    interface SpCoreCryptoKeyTypeId extends U8aFixed {}

    /** @name PalletSessionError (387) */
    interface PalletSessionError extends Enum {
        readonly isInvalidProof: boolean;
        readonly isNoAssociatedValidatorId: boolean;
        readonly isDuplicatedKey: boolean;
        readonly isNoKeys: boolean;
        readonly isNoAccount: boolean;
        readonly type: "InvalidProof" | "NoAssociatedValidatorId" | "DuplicatedKey" | "NoKeys" | "NoAccount";
    }

    /** @name PalletAuthorInherentError (391) */
    interface PalletAuthorInherentError extends Enum {
        readonly isAuthorAlreadySet: boolean;
        readonly isNoAccountId: boolean;
        readonly isCannotBeAuthor: boolean;
        readonly type: "AuthorAlreadySet" | "NoAccountId" | "CannotBeAuthor";
    }

    /** @name PalletPooledStakingCandidateEligibleCandidate (393) */
    interface PalletPooledStakingCandidateEligibleCandidate extends Struct {
        readonly candidate: AccountId32;
        readonly stake: u128;
    }

    /** @name PalletPooledStakingPoolsKey (396) */
    interface PalletPooledStakingPoolsKey extends Enum {
        readonly isCandidateTotalStake: boolean;
        readonly isJoiningShares: boolean;
        readonly asJoiningShares: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isJoiningSharesSupply: boolean;
        readonly isJoiningSharesTotalStaked: boolean;
        readonly isJoiningSharesHeldStake: boolean;
        readonly asJoiningSharesHeldStake: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isAutoCompoundingShares: boolean;
        readonly asAutoCompoundingShares: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isAutoCompoundingSharesSupply: boolean;
        readonly isAutoCompoundingSharesTotalStaked: boolean;
        readonly isAutoCompoundingSharesHeldStake: boolean;
        readonly asAutoCompoundingSharesHeldStake: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isManualRewardsShares: boolean;
        readonly asManualRewardsShares: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isManualRewardsSharesSupply: boolean;
        readonly isManualRewardsSharesTotalStaked: boolean;
        readonly isManualRewardsSharesHeldStake: boolean;
        readonly asManualRewardsSharesHeldStake: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isManualRewardsCounter: boolean;
        readonly isManualRewardsCheckpoint: boolean;
        readonly asManualRewardsCheckpoint: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isLeavingShares: boolean;
        readonly asLeavingShares: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly isLeavingSharesSupply: boolean;
        readonly isLeavingSharesTotalStaked: boolean;
        readonly isLeavingSharesHeldStake: boolean;
        readonly asLeavingSharesHeldStake: {
            readonly delegator: AccountId32;
        } & Struct;
        readonly type:
            | "CandidateTotalStake"
            | "JoiningShares"
            | "JoiningSharesSupply"
            | "JoiningSharesTotalStaked"
            | "JoiningSharesHeldStake"
            | "AutoCompoundingShares"
            | "AutoCompoundingSharesSupply"
            | "AutoCompoundingSharesTotalStaked"
            | "AutoCompoundingSharesHeldStake"
            | "ManualRewardsShares"
            | "ManualRewardsSharesSupply"
            | "ManualRewardsSharesTotalStaked"
            | "ManualRewardsSharesHeldStake"
            | "ManualRewardsCounter"
            | "ManualRewardsCheckpoint"
            | "LeavingShares"
            | "LeavingSharesSupply"
            | "LeavingSharesTotalStaked"
            | "LeavingSharesHeldStake";
    }

    /** @name PalletPooledStakingError (398) */
    interface PalletPooledStakingError extends Enum {
        readonly isInvalidPalletSetting: boolean;
        readonly isDisabledFeature: boolean;
        readonly isNoOneIsStaking: boolean;
        readonly isStakeMustBeNonZero: boolean;
        readonly isRewardsMustBeNonZero: boolean;
        readonly isMathUnderflow: boolean;
        readonly isMathOverflow: boolean;
        readonly isNotEnoughShares: boolean;
        readonly isTryingToLeaveTooSoon: boolean;
        readonly isInconsistentState: boolean;
        readonly isUnsufficientSharesForTransfer: boolean;
        readonly isCandidateTransferingOwnSharesForbidden: boolean;
        readonly isRequestCannotBeExecuted: boolean;
        readonly asRequestCannotBeExecuted: u16;
        readonly isSwapResultsInZeroShares: boolean;
        readonly type:
            | "InvalidPalletSetting"
            | "DisabledFeature"
            | "NoOneIsStaking"
            | "StakeMustBeNonZero"
            | "RewardsMustBeNonZero"
            | "MathUnderflow"
            | "MathOverflow"
            | "NotEnoughShares"
            | "TryingToLeaveTooSoon"
            | "InconsistentState"
            | "UnsufficientSharesForTransfer"
            | "CandidateTransferingOwnSharesForbidden"
            | "RequestCannotBeExecuted"
            | "SwapResultsInZeroShares";
    }

    /** @name PalletInflationRewardsChainsToRewardValue (399) */
    interface PalletInflationRewardsChainsToRewardValue extends Struct {
        readonly paraIds: Vec<u32>;
        readonly rewardsPerChain: u128;
    }

    /** @name CumulusPalletXcmpQueueInboundChannelDetails (401) */
    interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
        readonly sender: u32;
        readonly state: CumulusPalletXcmpQueueInboundState;
        readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat]>>;
    }

    /** @name CumulusPalletXcmpQueueInboundState (402) */
    interface CumulusPalletXcmpQueueInboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: "Ok" | "Suspended";
    }

    /** @name PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat (405) */
    interface PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat extends Enum {
        readonly isConcatenatedVersionedXcm: boolean;
        readonly isConcatenatedEncodedBlob: boolean;
        readonly isSignals: boolean;
        readonly type: "ConcatenatedVersionedXcm" | "ConcatenatedEncodedBlob" | "Signals";
    }

    /** @name CumulusPalletXcmpQueueOutboundChannelDetails (408) */
    interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
        readonly recipient: u32;
        readonly state: CumulusPalletXcmpQueueOutboundState;
        readonly signalsExist: bool;
        readonly firstIndex: u16;
        readonly lastIndex: u16;
    }

    /** @name CumulusPalletXcmpQueueOutboundState (409) */
    interface CumulusPalletXcmpQueueOutboundState extends Enum {
        readonly isOk: boolean;
        readonly isSuspended: boolean;
        readonly type: "Ok" | "Suspended";
    }

    /** @name CumulusPalletXcmpQueueQueueConfigData (411) */
    interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
        readonly suspendThreshold: u32;
        readonly dropThreshold: u32;
        readonly resumeThreshold: u32;
        readonly thresholdWeight: SpWeightsWeightV2Weight;
        readonly weightRestrictDecay: SpWeightsWeightV2Weight;
        readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
    }

    /** @name CumulusPalletXcmpQueueError (413) */
    interface CumulusPalletXcmpQueueError extends Enum {
        readonly isFailedToSend: boolean;
        readonly isBadXcmOrigin: boolean;
        readonly isBadXcm: boolean;
        readonly isBadOverweightIndex: boolean;
        readonly isWeightOverLimit: boolean;
        readonly type: "FailedToSend" | "BadXcmOrigin" | "BadXcm" | "BadOverweightIndex" | "WeightOverLimit";
    }

    /** @name CumulusPalletXcmError (414) */
    type CumulusPalletXcmError = Null;

    /** @name CumulusPalletDmpQueueConfigData (415) */
    interface CumulusPalletDmpQueueConfigData extends Struct {
        readonly maxIndividual: SpWeightsWeightV2Weight;
    }

    /** @name CumulusPalletDmpQueuePageIndexData (416) */
    interface CumulusPalletDmpQueuePageIndexData extends Struct {
        readonly beginUsed: u32;
        readonly endUsed: u32;
        readonly overweightCount: u64;
    }

    /** @name CumulusPalletDmpQueueError (419) */
    interface CumulusPalletDmpQueueError extends Enum {
        readonly isUnknown: boolean;
        readonly isOverLimit: boolean;
        readonly type: "Unknown" | "OverLimit";
    }

    /** @name PalletXcmQueryStatus (420) */
    interface PalletXcmQueryStatus extends Enum {
        readonly isPending: boolean;
        readonly asPending: {
            readonly responder: XcmVersionedMultiLocation;
            readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
            readonly maybeNotify: Option<ITuple<[u8, u8]>>;
            readonly timeout: u32;
        } & Struct;
        readonly isVersionNotifier: boolean;
        readonly asVersionNotifier: {
            readonly origin: XcmVersionedMultiLocation;
            readonly isActive: bool;
        } & Struct;
        readonly isReady: boolean;
        readonly asReady: {
            readonly response: XcmVersionedResponse;
            readonly at: u32;
        } & Struct;
        readonly type: "Pending" | "VersionNotifier" | "Ready";
    }

    /** @name XcmVersionedResponse (424) */
    interface XcmVersionedResponse extends Enum {
        readonly isV2: boolean;
        readonly asV2: XcmV2Response;
        readonly isV3: boolean;
        readonly asV3: XcmV3Response;
        readonly type: "V2" | "V3";
    }

    /** @name PalletXcmVersionMigrationStage (430) */
    interface PalletXcmVersionMigrationStage extends Enum {
        readonly isMigrateSupportedVersion: boolean;
        readonly isMigrateVersionNotifiers: boolean;
        readonly isNotifyCurrentTargets: boolean;
        readonly asNotifyCurrentTargets: Option<Bytes>;
        readonly isMigrateAndNotifyOldTargets: boolean;
        readonly type:
            | "MigrateSupportedVersion"
            | "MigrateVersionNotifiers"
            | "NotifyCurrentTargets"
            | "MigrateAndNotifyOldTargets";
    }

    /** @name XcmVersionedAssetId (432) */
    interface XcmVersionedAssetId extends Enum {
        readonly isV3: boolean;
        readonly asV3: XcmV3MultiassetAssetId;
        readonly type: "V3";
    }

    /** @name PalletXcmRemoteLockedFungibleRecord (433) */
    interface PalletXcmRemoteLockedFungibleRecord extends Struct {
        readonly amount: u128;
        readonly owner: XcmVersionedMultiLocation;
        readonly locker: XcmVersionedMultiLocation;
        readonly consumers: Vec<ITuple<[Null, u128]>>;
    }

    /** @name PalletXcmError (440) */
    interface PalletXcmError extends Enum {
        readonly isUnreachable: boolean;
        readonly isSendFailure: boolean;
        readonly isFiltered: boolean;
        readonly isUnweighableMessage: boolean;
        readonly isDestinationNotInvertible: boolean;
        readonly isEmpty: boolean;
        readonly isCannotReanchor: boolean;
        readonly isTooManyAssets: boolean;
        readonly isInvalidOrigin: boolean;
        readonly isBadVersion: boolean;
        readonly isBadLocation: boolean;
        readonly isNoSubscription: boolean;
        readonly isAlreadySubscribed: boolean;
        readonly isInvalidAsset: boolean;
        readonly isLowBalance: boolean;
        readonly isTooManyLocks: boolean;
        readonly isAccountNotSovereign: boolean;
        readonly isFeesNotMet: boolean;
        readonly isLockNotFound: boolean;
        readonly isInUse: boolean;
        readonly type:
            | "Unreachable"
            | "SendFailure"
            | "Filtered"
            | "UnweighableMessage"
            | "DestinationNotInvertible"
            | "Empty"
            | "CannotReanchor"
            | "TooManyAssets"
            | "InvalidOrigin"
            | "BadVersion"
            | "BadLocation"
            | "NoSubscription"
            | "AlreadySubscribed"
            | "InvalidAsset"
            | "LowBalance"
            | "TooManyLocks"
            | "AccountNotSovereign"
            | "FeesNotMet"
            | "LockNotFound"
            | "InUse";
    }

    /** @name PalletAssetsAssetDetails (441) */
    interface PalletAssetsAssetDetails extends Struct {
        readonly owner: AccountId32;
        readonly issuer: AccountId32;
        readonly admin: AccountId32;
        readonly freezer: AccountId32;
        readonly supply: u128;
        readonly deposit: u128;
        readonly minBalance: u128;
        readonly isSufficient: bool;
        readonly accounts: u32;
        readonly sufficients: u32;
        readonly approvals: u32;
        readonly status: PalletAssetsAssetStatus;
    }

    /** @name PalletAssetsAssetStatus (442) */
    interface PalletAssetsAssetStatus extends Enum {
        readonly isLive: boolean;
        readonly isFrozen: boolean;
        readonly isDestroying: boolean;
        readonly type: "Live" | "Frozen" | "Destroying";
    }

    /** @name PalletAssetsAssetAccount (444) */
    interface PalletAssetsAssetAccount extends Struct {
        readonly balance: u128;
        readonly status: PalletAssetsAccountStatus;
        readonly reason: PalletAssetsExistenceReason;
        readonly extra: Null;
    }

    /** @name PalletAssetsAccountStatus (445) */
    interface PalletAssetsAccountStatus extends Enum {
        readonly isLiquid: boolean;
        readonly isFrozen: boolean;
        readonly isBlocked: boolean;
        readonly type: "Liquid" | "Frozen" | "Blocked";
    }

    /** @name PalletAssetsExistenceReason (446) */
    interface PalletAssetsExistenceReason extends Enum {
        readonly isConsumer: boolean;
        readonly isSufficient: boolean;
        readonly isDepositHeld: boolean;
        readonly asDepositHeld: u128;
        readonly isDepositRefunded: boolean;
        readonly isDepositFrom: boolean;
        readonly asDepositFrom: ITuple<[AccountId32, u128]>;
        readonly type: "Consumer" | "Sufficient" | "DepositHeld" | "DepositRefunded" | "DepositFrom";
    }

    /** @name PalletAssetsApproval (448) */
    interface PalletAssetsApproval extends Struct {
        readonly amount: u128;
        readonly deposit: u128;
    }

    /** @name PalletAssetsAssetMetadata (449) */
    interface PalletAssetsAssetMetadata extends Struct {
        readonly deposit: u128;
        readonly name: Bytes;
        readonly symbol: Bytes;
        readonly decimals: u8;
        readonly isFrozen: bool;
    }

    /** @name PalletAssetsError (451) */
    interface PalletAssetsError extends Enum {
        readonly isBalanceLow: boolean;
        readonly isNoAccount: boolean;
        readonly isNoPermission: boolean;
        readonly isUnknown: boolean;
        readonly isFrozen: boolean;
        readonly isInUse: boolean;
        readonly isBadWitness: boolean;
        readonly isMinBalanceZero: boolean;
        readonly isUnavailableConsumer: boolean;
        readonly isBadMetadata: boolean;
        readonly isUnapproved: boolean;
        readonly isWouldDie: boolean;
        readonly isAlreadyExists: boolean;
        readonly isNoDeposit: boolean;
        readonly isWouldBurn: boolean;
        readonly isLiveAsset: boolean;
        readonly isAssetNotLive: boolean;
        readonly isIncorrectStatus: boolean;
        readonly isNotFrozen: boolean;
        readonly isCallbackFailed: boolean;
        readonly type:
            | "BalanceLow"
            | "NoAccount"
            | "NoPermission"
            | "Unknown"
            | "Frozen"
            | "InUse"
            | "BadWitness"
            | "MinBalanceZero"
            | "UnavailableConsumer"
            | "BadMetadata"
            | "Unapproved"
            | "WouldDie"
            | "AlreadyExists"
            | "NoDeposit"
            | "WouldBurn"
            | "LiveAsset"
            | "AssetNotLive"
            | "IncorrectStatus"
            | "NotFrozen"
            | "CallbackFailed";
    }

    /** @name PalletForeignAssetCreatorError (452) */
    interface PalletForeignAssetCreatorError extends Enum {
        readonly isAssetAlreadyExists: boolean;
        readonly isAssetDoesNotExist: boolean;
        readonly type: "AssetAlreadyExists" | "AssetDoesNotExist";
    }

    /** @name PalletAssetRateError (453) */
    interface PalletAssetRateError extends Enum {
        readonly isUnknownAssetKind: boolean;
        readonly isAlreadyExists: boolean;
        readonly type: "UnknownAssetKind" | "AlreadyExists";
    }

    /** @name SpRuntimeMultiSignature (458) */
    interface SpRuntimeMultiSignature extends Enum {
        readonly isEd25519: boolean;
        readonly asEd25519: SpCoreEd25519Signature;
        readonly isSr25519: boolean;
        readonly asSr25519: SpCoreSr25519Signature;
        readonly isEcdsa: boolean;
        readonly asEcdsa: SpCoreEcdsaSignature;
        readonly type: "Ed25519" | "Sr25519" | "Ecdsa";
    }

    /** @name SpCoreEd25519Signature (459) */
    interface SpCoreEd25519Signature extends U8aFixed {}

    /** @name SpCoreSr25519Signature (461) */
    interface SpCoreSr25519Signature extends U8aFixed {}

    /** @name SpCoreEcdsaSignature (462) */
    interface SpCoreEcdsaSignature extends U8aFixed {}

    /** @name FrameSystemExtensionsCheckNonZeroSender (465) */
    type FrameSystemExtensionsCheckNonZeroSender = Null;

    /** @name FrameSystemExtensionsCheckSpecVersion (466) */
    type FrameSystemExtensionsCheckSpecVersion = Null;

    /** @name FrameSystemExtensionsCheckTxVersion (467) */
    type FrameSystemExtensionsCheckTxVersion = Null;

    /** @name FrameSystemExtensionsCheckGenesis (468) */
    type FrameSystemExtensionsCheckGenesis = Null;

    /** @name FrameSystemExtensionsCheckNonce (471) */
    interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

    /** @name FrameSystemExtensionsCheckWeight (472) */
    type FrameSystemExtensionsCheckWeight = Null;

    /** @name PalletTransactionPaymentChargeTransactionPayment (473) */
    interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

    /** @name DanceboxRuntimeRuntime (474) */
    type DanceboxRuntimeRuntime = Null;
} // declare module
