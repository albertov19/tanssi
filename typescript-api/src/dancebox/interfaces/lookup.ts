// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
    /** Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>> */
    FrameSystemAccountInfo: {
        nonce: "u32",
        consumers: "u32",
        providers: "u32",
        sufficients: "u32",
        data: "PalletBalancesAccountData",
    },
    /** Lookup5: pallet_balances::types::AccountData<Balance> */
    PalletBalancesAccountData: {
        free: "u128",
        reserved: "u128",
        frozen: "u128",
        flags: "u128",
    },
    /** Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight> */
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: "SpWeightsWeightV2Weight",
        operational: "SpWeightsWeightV2Weight",
        mandatory: "SpWeightsWeightV2Weight",
    },
    /** Lookup9: sp_weights::weight_v2::Weight */
    SpWeightsWeightV2Weight: {
        refTime: "Compact<u64>",
        proofSize: "Compact<u64>",
    },
    /** Lookup14: sp_runtime::generic::digest::Digest */
    SpRuntimeDigest: {
        logs: "Vec<SpRuntimeDigestDigestItem>",
    },
    /** Lookup16: sp_runtime::generic::digest::DigestItem */
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: "Bytes",
            __Unused1: "Null",
            __Unused2: "Null",
            __Unused3: "Null",
            Consensus: "([u8;4],Bytes)",
            Seal: "([u8;4],Bytes)",
            PreRuntime: "([u8;4],Bytes)",
            __Unused7: "Null",
            RuntimeEnvironmentUpdated: "Null",
        },
    },
    /** Lookup19: frame_system::EventRecord<dancebox_runtime::RuntimeEvent, primitive_types::H256> */
    FrameSystemEventRecord: {
        phase: "FrameSystemPhase",
        event: "Event",
        topics: "Vec<H256>",
    },
    /** Lookup21: frame_system::pallet::Event<T> */
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: "FrameSupportDispatchDispatchInfo",
            },
            ExtrinsicFailed: {
                dispatchError: "SpRuntimeDispatchError",
                dispatchInfo: "FrameSupportDispatchDispatchInfo",
            },
            CodeUpdated: "Null",
            NewAccount: {
                account: "AccountId32",
            },
            KilledAccount: {
                account: "AccountId32",
            },
            Remarked: {
                _alias: {
                    hash_: "hash",
                },
                sender: "AccountId32",
                hash_: "H256",
            },
        },
    },
    /** Lookup22: frame_support::dispatch::DispatchInfo */
    FrameSupportDispatchDispatchInfo: {
        weight: "SpWeightsWeightV2Weight",
        class: "FrameSupportDispatchDispatchClass",
        paysFee: "FrameSupportDispatchPays",
    },
    /** Lookup23: frame_support::dispatch::DispatchClass */
    FrameSupportDispatchDispatchClass: {
        _enum: ["Normal", "Operational", "Mandatory"],
    },
    /** Lookup24: frame_support::dispatch::Pays */
    FrameSupportDispatchPays: {
        _enum: ["Yes", "No"],
    },
    /** Lookup25: sp_runtime::DispatchError */
    SpRuntimeDispatchError: {
        _enum: {
            Other: "Null",
            CannotLookup: "Null",
            BadOrigin: "Null",
            Module: "SpRuntimeModuleError",
            ConsumerRemaining: "Null",
            NoProviders: "Null",
            TooManyConsumers: "Null",
            Token: "SpRuntimeTokenError",
            Arithmetic: "SpArithmeticArithmeticError",
            Transactional: "SpRuntimeTransactionalError",
            Exhausted: "Null",
            Corruption: "Null",
            Unavailable: "Null",
            RootNotAllowed: "Null",
        },
    },
    /** Lookup26: sp_runtime::ModuleError */
    SpRuntimeModuleError: {
        index: "u8",
        error: "[u8;4]",
    },
    /** Lookup27: sp_runtime::TokenError */
    SpRuntimeTokenError: {
        _enum: [
            "FundsUnavailable",
            "OnlyProvider",
            "BelowMinimum",
            "CannotCreate",
            "UnknownAsset",
            "Frozen",
            "Unsupported",
            "CannotCreateHold",
            "NotExpendable",
            "Blocked",
        ],
    },
    /** Lookup28: sp_arithmetic::ArithmeticError */
    SpArithmeticArithmeticError: {
        _enum: ["Underflow", "Overflow", "DivisionByZero"],
    },
    /** Lookup29: sp_runtime::TransactionalError */
    SpRuntimeTransactionalError: {
        _enum: ["LimitReached", "NoLayer"],
    },
    /** Lookup30: cumulus_pallet_parachain_system::pallet::Event<T> */
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: "Null",
            ValidationFunctionApplied: {
                relayChainBlockNum: "u32",
            },
            ValidationFunctionDiscarded: "Null",
            UpgradeAuthorized: {
                codeHash: "H256",
            },
            DownwardMessagesReceived: {
                count: "u32",
            },
            DownwardMessagesProcessed: {
                weightUsed: "SpWeightsWeightV2Weight",
                dmqHead: "H256",
            },
            UpwardMessageSent: {
                messageHash: "Option<[u8;32]>",
            },
        },
    },
    /** Lookup32: pallet_sudo::pallet::Event<T> */
    PalletSudoEvent: {
        _enum: {
            Sudid: {
                sudoResult: "Result<Null, SpRuntimeDispatchError>",
            },
            KeyChanged: {
                oldSudoer: "Option<AccountId32>",
            },
            SudoAsDone: {
                sudoResult: "Result<Null, SpRuntimeDispatchError>",
            },
        },
    },
    /** Lookup36: pallet_utility::pallet::Event */
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: "u32",
                error: "SpRuntimeDispatchError",
            },
            BatchCompleted: "Null",
            BatchCompletedWithErrors: "Null",
            ItemCompleted: "Null",
            ItemFailed: {
                error: "SpRuntimeDispatchError",
            },
            DispatchedAs: {
                result: "Result<Null, SpRuntimeDispatchError>",
            },
        },
    },
    /** Lookup37: pallet_proxy::pallet::Event<T> */
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: "Result<Null, SpRuntimeDispatchError>",
            },
            PureCreated: {
                pure: "AccountId32",
                who: "AccountId32",
                proxyType: "DanceboxRuntimeProxyType",
                disambiguationIndex: "u16",
            },
            Announced: {
                real: "AccountId32",
                proxy: "AccountId32",
                callHash: "H256",
            },
            ProxyAdded: {
                delegator: "AccountId32",
                delegatee: "AccountId32",
                proxyType: "DanceboxRuntimeProxyType",
                delay: "u32",
            },
            ProxyRemoved: {
                delegator: "AccountId32",
                delegatee: "AccountId32",
                proxyType: "DanceboxRuntimeProxyType",
                delay: "u32",
            },
        },
    },
    /** Lookup38: dancebox_runtime::ProxyType */
    DanceboxRuntimeProxyType: {
        _enum: ["Any", "NonTransfer", "Governance", "Staking", "CancelProxy", "Balances", "Registrar", "SudoRegistrar"],
    },
    /** Lookup40: pallet_migrations::pallet::Event<T> */
    PalletMigrationsEvent: {
        _enum: {
            RuntimeUpgradeStarted: "Null",
            RuntimeUpgradeCompleted: {
                weight: "SpWeightsWeightV2Weight",
            },
            MigrationStarted: {
                migrationName: "Bytes",
            },
            MigrationCompleted: {
                migrationName: "Bytes",
                consumedWeight: "SpWeightsWeightV2Weight",
            },
            FailedToSuspendIdleXcmExecution: {
                error: "SpRuntimeDispatchError",
            },
            FailedToResumeIdleXcmExecution: {
                error: "SpRuntimeDispatchError",
            },
        },
    },
    /** Lookup41: pallet_maintenance_mode::pallet::Event */
    PalletMaintenanceModeEvent: {
        _enum: {
            EnteredMaintenanceMode: "Null",
            NormalOperationResumed: "Null",
            FailedToSuspendIdleXcmExecution: {
                error: "SpRuntimeDispatchError",
            },
            FailedToResumeIdleXcmExecution: {
                error: "SpRuntimeDispatchError",
            },
        },
    },
    /** Lookup42: pallet_tx_pause::pallet::Event<T> */
    PalletTxPauseEvent: {
        _enum: {
            CallPaused: {
                fullName: "(Bytes,Bytes)",
            },
            CallUnpaused: {
                fullName: "(Bytes,Bytes)",
            },
        },
    },
    /** Lookup45: pallet_balances::pallet::Event<T, I> */
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: "AccountId32",
                freeBalance: "u128",
            },
            DustLost: {
                account: "AccountId32",
                amount: "u128",
            },
            Transfer: {
                from: "AccountId32",
                to: "AccountId32",
                amount: "u128",
            },
            BalanceSet: {
                who: "AccountId32",
                free: "u128",
            },
            Reserved: {
                who: "AccountId32",
                amount: "u128",
            },
            Unreserved: {
                who: "AccountId32",
                amount: "u128",
            },
            ReserveRepatriated: {
                from: "AccountId32",
                to: "AccountId32",
                amount: "u128",
                destinationStatus: "FrameSupportTokensMiscBalanceStatus",
            },
            Deposit: {
                who: "AccountId32",
                amount: "u128",
            },
            Withdraw: {
                who: "AccountId32",
                amount: "u128",
            },
            Slashed: {
                who: "AccountId32",
                amount: "u128",
            },
            Minted: {
                who: "AccountId32",
                amount: "u128",
            },
            Burned: {
                who: "AccountId32",
                amount: "u128",
            },
            Suspended: {
                who: "AccountId32",
                amount: "u128",
            },
            Restored: {
                who: "AccountId32",
                amount: "u128",
            },
            Upgraded: {
                who: "AccountId32",
            },
            Issued: {
                amount: "u128",
            },
            Rescinded: {
                amount: "u128",
            },
            Locked: {
                who: "AccountId32",
                amount: "u128",
            },
            Unlocked: {
                who: "AccountId32",
                amount: "u128",
            },
            Frozen: {
                who: "AccountId32",
                amount: "u128",
            },
            Thawed: {
                who: "AccountId32",
                amount: "u128",
            },
        },
    },
    /** Lookup46: frame_support::traits::tokens::misc::BalanceStatus */
    FrameSupportTokensMiscBalanceStatus: {
        _enum: ["Free", "Reserved"],
    },
    /** Lookup47: pallet_transaction_payment::pallet::Event<T> */
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: "AccountId32",
                actualFee: "u128",
                tip: "u128",
            },
        },
    },
    /** Lookup48: pallet_identity::pallet::Event<T> */
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: "AccountId32",
            },
            IdentityCleared: {
                who: "AccountId32",
                deposit: "u128",
            },
            IdentityKilled: {
                who: "AccountId32",
                deposit: "u128",
            },
            JudgementRequested: {
                who: "AccountId32",
                registrarIndex: "u32",
            },
            JudgementUnrequested: {
                who: "AccountId32",
                registrarIndex: "u32",
            },
            JudgementGiven: {
                target: "AccountId32",
                registrarIndex: "u32",
            },
            RegistrarAdded: {
                registrarIndex: "u32",
            },
            SubIdentityAdded: {
                sub: "AccountId32",
                main: "AccountId32",
                deposit: "u128",
            },
            SubIdentityRemoved: {
                sub: "AccountId32",
                main: "AccountId32",
                deposit: "u128",
            },
            SubIdentityRevoked: {
                sub: "AccountId32",
                main: "AccountId32",
                deposit: "u128",
            },
        },
    },
    /** Lookup49: pallet_registrar::pallet::Event<T> */
    PalletRegistrarEvent: {
        _enum: {
            ParaIdRegistered: {
                paraId: "u32",
            },
            ParaIdDeregistered: {
                paraId: "u32",
            },
            ParaIdValidForCollating: {
                paraId: "u32",
            },
            ParaIdPaused: {
                paraId: "u32",
            },
            ParaIdUnpaused: {
                paraId: "u32",
            },
            ParathreadParamsChanged: {
                paraId: "u32",
            },
        },
    },
    /** Lookup51: pallet_collator_assignment::pallet::Event<T> */
    PalletCollatorAssignmentEvent: {
        _enum: {
            NewPendingAssignment: {
                randomSeed: "[u8;32]",
                fullRotation: "bool",
                targetSession: "u32",
            },
        },
    },
    /** Lookup53: pallet_author_noting::pallet::Event<T> */
    PalletAuthorNotingEvent: {
        _enum: {
            LatestAuthorChanged: {
                paraId: "u32",
                blockNumber: "u32",
                newAuthor: "AccountId32",
            },
            RemovedAuthorData: {
                paraId: "u32",
            },
        },
    },
    /** Lookup54: pallet_services_payment::pallet::Event<T> */
    PalletServicesPaymentEvent: {
        _enum: {
            CreditsPurchased: {
                paraId: "u32",
                payer: "AccountId32",
                credit: "u128",
            },
            CreditBurned: {
                paraId: "u32",
                creditsRemaining: "u32",
            },
            CreditsSet: {
                paraId: "u32",
                credits: "u32",
            },
        },
    },
    /** Lookup55: pallet_data_preservers::pallet::Event<T> */
    PalletDataPreserversEvent: {
        _enum: {
            BootNodesChanged: {
                paraId: "u32",
            },
        },
    },
    /** Lookup56: pallet_invulnerables::pallet::Event<T> */
    PalletInvulnerablesEvent: {
        _enum: {
            NewInvulnerables: {
                invulnerables: "Vec<AccountId32>",
            },
            InvulnerableAdded: {
                accountId: "AccountId32",
            },
            InvulnerableRemoved: {
                accountId: "AccountId32",
            },
            InvalidInvulnerableSkipped: {
                accountId: "AccountId32",
            },
        },
    },
    /** Lookup58: pallet_session::pallet::Event */
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: "u32",
            },
        },
    },
    /** Lookup59: pallet_pooled_staking::pallet::Event<T> */
    PalletPooledStakingEvent: {
        _enum: {
            UpdatedCandidatePosition: {
                candidate: "AccountId32",
                stake: "u128",
                selfDelegation: "u128",
                before: "Option<u32>",
                after: "Option<u32>",
            },
            RequestedDelegate: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                pool: "PalletPooledStakingTargetPool",
                pending: "u128",
            },
            ExecutedDelegate: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                pool: "PalletPooledStakingTargetPool",
                staked: "u128",
                released: "u128",
            },
            RequestedUndelegate: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                from: "PalletPooledStakingTargetPool",
                pending: "u128",
                released: "u128",
            },
            ExecutedUndelegate: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                released: "u128",
            },
            IncreasedStake: {
                candidate: "AccountId32",
                stakeDiff: "u128",
            },
            DecreasedStake: {
                candidate: "AccountId32",
                stakeDiff: "u128",
            },
            StakedAutoCompounding: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                shares: "u128",
                stake: "u128",
            },
            UnstakedAutoCompounding: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                shares: "u128",
                stake: "u128",
            },
            StakedManualRewards: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                shares: "u128",
                stake: "u128",
            },
            UnstakedManualRewards: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                shares: "u128",
                stake: "u128",
            },
            RewardedCollator: {
                collator: "AccountId32",
                autoCompoundingRewards: "u128",
                manualClaimRewards: "u128",
            },
            RewardedDelegators: {
                collator: "AccountId32",
                autoCompoundingRewards: "u128",
                manualClaimRewards: "u128",
            },
            ClaimedManualRewards: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                rewards: "u128",
            },
            SwappedPool: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                sourcePool: "PalletPooledStakingTargetPool",
                sourceShares: "u128",
                sourceStake: "u128",
                targetShares: "u128",
                targetStake: "u128",
                pendingLeaving: "u128",
                released: "u128",
            },
        },
    },
    /** Lookup61: pallet_pooled_staking::pallet::TargetPool */
    PalletPooledStakingTargetPool: {
        _enum: ["AutoCompounding", "ManualRewards"],
    },
    /** Lookup62: pallet_inflation_rewards::pallet::Event<T> */
    PalletInflationRewardsEvent: {
        _enum: {
            RewardedOrchestrator: {
                accountId: "AccountId32",
                balance: "u128",
            },
            RewardedContainer: {
                accountId: "AccountId32",
                paraId: "u32",
                balance: "u128",
            },
        },
    },
    /** Lookup63: cumulus_pallet_xcmp_queue::pallet::Event<T> */
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: "[u8;32]",
                messageId: "[u8;32]",
                weight: "SpWeightsWeightV2Weight",
            },
            Fail: {
                messageHash: "[u8;32]",
                messageId: "[u8;32]",
                error: "XcmV3TraitsError",
                weight: "SpWeightsWeightV2Weight",
            },
            BadVersion: {
                messageHash: "[u8;32]",
            },
            BadFormat: {
                messageHash: "[u8;32]",
            },
            XcmpMessageSent: {
                messageHash: "[u8;32]",
            },
            OverweightEnqueued: {
                sender: "u32",
                sentAt: "u32",
                index: "u64",
                required: "SpWeightsWeightV2Weight",
            },
            OverweightServiced: {
                index: "u64",
                used: "SpWeightsWeightV2Weight",
            },
        },
    },
    /** Lookup64: xcm::v3::traits::Error */
    XcmV3TraitsError: {
        _enum: {
            Overflow: "Null",
            Unimplemented: "Null",
            UntrustedReserveLocation: "Null",
            UntrustedTeleportLocation: "Null",
            LocationFull: "Null",
            LocationNotInvertible: "Null",
            BadOrigin: "Null",
            InvalidLocation: "Null",
            AssetNotFound: "Null",
            FailedToTransactAsset: "Null",
            NotWithdrawable: "Null",
            LocationCannotHold: "Null",
            ExceedsMaxMessageSize: "Null",
            DestinationUnsupported: "Null",
            Transport: "Null",
            Unroutable: "Null",
            UnknownClaim: "Null",
            FailedToDecode: "Null",
            MaxWeightInvalid: "Null",
            NotHoldingFees: "Null",
            TooExpensive: "Null",
            Trap: "u64",
            ExpectationFalse: "Null",
            PalletNotFound: "Null",
            NameMismatch: "Null",
            VersionIncompatible: "Null",
            HoldingWouldOverflow: "Null",
            ExportError: "Null",
            ReanchorFailed: "Null",
            NoDeal: "Null",
            FeesNotMet: "Null",
            LockError: "Null",
            NoPermission: "Null",
            Unanchored: "Null",
            NotDepositable: "Null",
            UnhandledXcmVersion: "Null",
            WeightLimitReached: "SpWeightsWeightV2Weight",
            Barrier: "Null",
            WeightNotComputable: "Null",
            ExceedsStackLimit: "Null",
        },
    },
    /** Lookup65: cumulus_pallet_xcm::pallet::Event<T> */
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: "[u8;32]",
            UnsupportedVersion: "[u8;32]",
            ExecutedDownward: "([u8;32],XcmV3TraitsOutcome)",
        },
    },
    /** Lookup66: xcm::v3::traits::Outcome */
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: "SpWeightsWeightV2Weight",
            Incomplete: "(SpWeightsWeightV2Weight,XcmV3TraitsError)",
            Error: "XcmV3TraitsError",
        },
    },
    /** Lookup67: cumulus_pallet_dmp_queue::pallet::Event<T> */
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageHash: "[u8;32]",
            },
            UnsupportedVersion: {
                messageHash: "[u8;32]",
            },
            ExecutedDownward: {
                messageHash: "[u8;32]",
                messageId: "[u8;32]",
                outcome: "XcmV3TraitsOutcome",
            },
            WeightExhausted: {
                messageHash: "[u8;32]",
                messageId: "[u8;32]",
                remainingWeight: "SpWeightsWeightV2Weight",
                requiredWeight: "SpWeightsWeightV2Weight",
            },
            OverweightEnqueued: {
                messageHash: "[u8;32]",
                messageId: "[u8;32]",
                overweightIndex: "u64",
                requiredWeight: "SpWeightsWeightV2Weight",
            },
            OverweightServiced: {
                overweightIndex: "u64",
                weightUsed: "SpWeightsWeightV2Weight",
            },
            MaxMessagesExhausted: {
                messageHash: "[u8;32]",
            },
        },
    },
    /** Lookup68: pallet_xcm::pallet::Event<T> */
    PalletXcmEvent: {
        _enum: {
            Attempted: {
                outcome: "XcmV3TraitsOutcome",
            },
            Sent: {
                origin: "StagingXcmV3MultiLocation",
                destination: "StagingXcmV3MultiLocation",
                message: "XcmV3Xcm",
                messageId: "[u8;32]",
            },
            UnexpectedResponse: {
                origin: "StagingXcmV3MultiLocation",
                queryId: "u64",
            },
            ResponseReady: {
                queryId: "u64",
                response: "XcmV3Response",
            },
            Notified: {
                queryId: "u64",
                palletIndex: "u8",
                callIndex: "u8",
            },
            NotifyOverweight: {
                queryId: "u64",
                palletIndex: "u8",
                callIndex: "u8",
                actualWeight: "SpWeightsWeightV2Weight",
                maxBudgetedWeight: "SpWeightsWeightV2Weight",
            },
            NotifyDispatchError: {
                queryId: "u64",
                palletIndex: "u8",
                callIndex: "u8",
            },
            NotifyDecodeFailed: {
                queryId: "u64",
                palletIndex: "u8",
                callIndex: "u8",
            },
            InvalidResponder: {
                origin: "StagingXcmV3MultiLocation",
                queryId: "u64",
                expectedLocation: "Option<StagingXcmV3MultiLocation>",
            },
            InvalidResponderVersion: {
                origin: "StagingXcmV3MultiLocation",
                queryId: "u64",
            },
            ResponseTaken: {
                queryId: "u64",
            },
            AssetsTrapped: {
                _alias: {
                    hash_: "hash",
                },
                hash_: "H256",
                origin: "StagingXcmV3MultiLocation",
                assets: "XcmVersionedMultiAssets",
            },
            VersionChangeNotified: {
                destination: "StagingXcmV3MultiLocation",
                result: "u32",
                cost: "XcmV3MultiassetMultiAssets",
                messageId: "[u8;32]",
            },
            SupportedVersionChanged: {
                location: "StagingXcmV3MultiLocation",
                version: "u32",
            },
            NotifyTargetSendFail: {
                location: "StagingXcmV3MultiLocation",
                queryId: "u64",
                error: "XcmV3TraitsError",
            },
            NotifyTargetMigrationFail: {
                location: "XcmVersionedMultiLocation",
                queryId: "u64",
            },
            InvalidQuerierVersion: {
                origin: "StagingXcmV3MultiLocation",
                queryId: "u64",
            },
            InvalidQuerier: {
                origin: "StagingXcmV3MultiLocation",
                queryId: "u64",
                expectedQuerier: "StagingXcmV3MultiLocation",
                maybeActualQuerier: "Option<StagingXcmV3MultiLocation>",
            },
            VersionNotifyStarted: {
                destination: "StagingXcmV3MultiLocation",
                cost: "XcmV3MultiassetMultiAssets",
                messageId: "[u8;32]",
            },
            VersionNotifyRequested: {
                destination: "StagingXcmV3MultiLocation",
                cost: "XcmV3MultiassetMultiAssets",
                messageId: "[u8;32]",
            },
            VersionNotifyUnrequested: {
                destination: "StagingXcmV3MultiLocation",
                cost: "XcmV3MultiassetMultiAssets",
                messageId: "[u8;32]",
            },
            FeesPaid: {
                paying: "StagingXcmV3MultiLocation",
                fees: "XcmV3MultiassetMultiAssets",
            },
            AssetsClaimed: {
                _alias: {
                    hash_: "hash",
                },
                hash_: "H256",
                origin: "StagingXcmV3MultiLocation",
                assets: "XcmVersionedMultiAssets",
            },
        },
    },
    /** Lookup69: staging_xcm::v3::multilocation::MultiLocation */
    StagingXcmV3MultiLocation: {
        parents: "u8",
        interior: "XcmV3Junctions",
    },
    /** Lookup70: xcm::v3::junctions::Junctions */
    XcmV3Junctions: {
        _enum: {
            Here: "Null",
            X1: "XcmV3Junction",
            X2: "(XcmV3Junction,XcmV3Junction)",
            X3: "(XcmV3Junction,XcmV3Junction,XcmV3Junction)",
            X4: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
            X5: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
            X6: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
            X7: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
            X8: "(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)",
        },
    },
    /** Lookup71: xcm::v3::junction::Junction */
    XcmV3Junction: {
        _enum: {
            Parachain: "Compact<u32>",
            AccountId32: {
                network: "Option<XcmV3JunctionNetworkId>",
                id: "[u8;32]",
            },
            AccountIndex64: {
                network: "Option<XcmV3JunctionNetworkId>",
                index: "Compact<u64>",
            },
            AccountKey20: {
                network: "Option<XcmV3JunctionNetworkId>",
                key: "[u8;20]",
            },
            PalletInstance: "u8",
            GeneralIndex: "Compact<u128>",
            GeneralKey: {
                length: "u8",
                data: "[u8;32]",
            },
            OnlyChild: "Null",
            Plurality: {
                id: "XcmV3JunctionBodyId",
                part: "XcmV3JunctionBodyPart",
            },
            GlobalConsensus: "XcmV3JunctionNetworkId",
        },
    },
    /** Lookup74: xcm::v3::junction::NetworkId */
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: "[u8;32]",
            ByFork: {
                blockNumber: "u64",
                blockHash: "[u8;32]",
            },
            Polkadot: "Null",
            Kusama: "Null",
            Westend: "Null",
            Rococo: "Null",
            Wococo: "Null",
            Ethereum: {
                chainId: "Compact<u64>",
            },
            BitcoinCore: "Null",
            BitcoinCash: "Null",
        },
    },
    /** Lookup77: xcm::v3::junction::BodyId */
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: "Null",
            Moniker: "[u8;4]",
            Index: "Compact<u32>",
            Executive: "Null",
            Technical: "Null",
            Legislative: "Null",
            Judicial: "Null",
            Defense: "Null",
            Administration: "Null",
            Treasury: "Null",
        },
    },
    /** Lookup78: xcm::v3::junction::BodyPart */
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: "Null",
            Members: {
                count: "Compact<u32>",
            },
            Fraction: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
            AtLeastProportion: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
            MoreThanProportion: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
        },
    },
    /** Lookup79: xcm::v3::Xcm<Call> */
    XcmV3Xcm: "Vec<XcmV3Instruction>",
    /** Lookup81: xcm::v3::Instruction<Call> */
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: "XcmV3MultiassetMultiAssets",
            ReserveAssetDeposited: "XcmV3MultiassetMultiAssets",
            ReceiveTeleportedAsset: "XcmV3MultiassetMultiAssets",
            QueryResponse: {
                queryId: "Compact<u64>",
                response: "XcmV3Response",
                maxWeight: "SpWeightsWeightV2Weight",
                querier: "Option<StagingXcmV3MultiLocation>",
            },
            TransferAsset: {
                assets: "XcmV3MultiassetMultiAssets",
                beneficiary: "StagingXcmV3MultiLocation",
            },
            TransferReserveAsset: {
                assets: "XcmV3MultiassetMultiAssets",
                dest: "StagingXcmV3MultiLocation",
                xcm: "XcmV3Xcm",
            },
            Transact: {
                originKind: "XcmV2OriginKind",
                requireWeightAtMost: "SpWeightsWeightV2Weight",
                call: "XcmDoubleEncoded",
            },
            HrmpNewChannelOpenRequest: {
                sender: "Compact<u32>",
                maxMessageSize: "Compact<u32>",
                maxCapacity: "Compact<u32>",
            },
            HrmpChannelAccepted: {
                recipient: "Compact<u32>",
            },
            HrmpChannelClosing: {
                initiator: "Compact<u32>",
                sender: "Compact<u32>",
                recipient: "Compact<u32>",
            },
            ClearOrigin: "Null",
            DescendOrigin: "XcmV3Junctions",
            ReportError: "XcmV3QueryResponseInfo",
            DepositAsset: {
                assets: "XcmV3MultiassetMultiAssetFilter",
                beneficiary: "StagingXcmV3MultiLocation",
            },
            DepositReserveAsset: {
                assets: "XcmV3MultiassetMultiAssetFilter",
                dest: "StagingXcmV3MultiLocation",
                xcm: "XcmV3Xcm",
            },
            ExchangeAsset: {
                give: "XcmV3MultiassetMultiAssetFilter",
                want: "XcmV3MultiassetMultiAssets",
                maximal: "bool",
            },
            InitiateReserveWithdraw: {
                assets: "XcmV3MultiassetMultiAssetFilter",
                reserve: "StagingXcmV3MultiLocation",
                xcm: "XcmV3Xcm",
            },
            InitiateTeleport: {
                assets: "XcmV3MultiassetMultiAssetFilter",
                dest: "StagingXcmV3MultiLocation",
                xcm: "XcmV3Xcm",
            },
            ReportHolding: {
                responseInfo: "XcmV3QueryResponseInfo",
                assets: "XcmV3MultiassetMultiAssetFilter",
            },
            BuyExecution: {
                fees: "XcmV3MultiAsset",
                weightLimit: "XcmV3WeightLimit",
            },
            RefundSurplus: "Null",
            SetErrorHandler: "XcmV3Xcm",
            SetAppendix: "XcmV3Xcm",
            ClearError: "Null",
            ClaimAsset: {
                assets: "XcmV3MultiassetMultiAssets",
                ticket: "StagingXcmV3MultiLocation",
            },
            Trap: "Compact<u64>",
            SubscribeVersion: {
                queryId: "Compact<u64>",
                maxResponseWeight: "SpWeightsWeightV2Weight",
            },
            UnsubscribeVersion: "Null",
            BurnAsset: "XcmV3MultiassetMultiAssets",
            ExpectAsset: "XcmV3MultiassetMultiAssets",
            ExpectOrigin: "Option<StagingXcmV3MultiLocation>",
            ExpectError: "Option<(u32,XcmV3TraitsError)>",
            ExpectTransactStatus: "XcmV3MaybeErrorCode",
            QueryPallet: {
                moduleName: "Bytes",
                responseInfo: "XcmV3QueryResponseInfo",
            },
            ExpectPallet: {
                index: "Compact<u32>",
                name: "Bytes",
                moduleName: "Bytes",
                crateMajor: "Compact<u32>",
                minCrateMinor: "Compact<u32>",
            },
            ReportTransactStatus: "XcmV3QueryResponseInfo",
            ClearTransactStatus: "Null",
            UniversalOrigin: "XcmV3Junction",
            ExportMessage: {
                network: "XcmV3JunctionNetworkId",
                destination: "XcmV3Junctions",
                xcm: "XcmV3Xcm",
            },
            LockAsset: {
                asset: "XcmV3MultiAsset",
                unlocker: "StagingXcmV3MultiLocation",
            },
            UnlockAsset: {
                asset: "XcmV3MultiAsset",
                target: "StagingXcmV3MultiLocation",
            },
            NoteUnlockable: {
                asset: "XcmV3MultiAsset",
                owner: "StagingXcmV3MultiLocation",
            },
            RequestUnlock: {
                asset: "XcmV3MultiAsset",
                locker: "StagingXcmV3MultiLocation",
            },
            SetFeesMode: {
                jitWithdraw: "bool",
            },
            SetTopic: "[u8;32]",
            ClearTopic: "Null",
            AliasOrigin: "StagingXcmV3MultiLocation",
            UnpaidExecution: {
                weightLimit: "XcmV3WeightLimit",
                checkOrigin: "Option<StagingXcmV3MultiLocation>",
            },
        },
    },
    /** Lookup82: xcm::v3::multiasset::MultiAssets */
    XcmV3MultiassetMultiAssets: "Vec<XcmV3MultiAsset>",
    /** Lookup84: xcm::v3::multiasset::MultiAsset */
    XcmV3MultiAsset: {
        id: "XcmV3MultiassetAssetId",
        fun: "XcmV3MultiassetFungibility",
    },
    /** Lookup85: xcm::v3::multiasset::AssetId */
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: "StagingXcmV3MultiLocation",
            Abstract: "[u8;32]",
        },
    },
    /** Lookup86: xcm::v3::multiasset::Fungibility */
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: "Compact<u128>",
            NonFungible: "XcmV3MultiassetAssetInstance",
        },
    },
    /** Lookup87: xcm::v3::multiasset::AssetInstance */
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: "Null",
            Index: "Compact<u128>",
            Array4: "[u8;4]",
            Array8: "[u8;8]",
            Array16: "[u8;16]",
            Array32: "[u8;32]",
        },
    },
    /** Lookup90: xcm::v3::Response */
    XcmV3Response: {
        _enum: {
            Null: "Null",
            Assets: "XcmV3MultiassetMultiAssets",
            ExecutionResult: "Option<(u32,XcmV3TraitsError)>",
            Version: "u32",
            PalletsInfo: "Vec<XcmV3PalletInfo>",
            DispatchResult: "XcmV3MaybeErrorCode",
        },
    },
    /** Lookup94: xcm::v3::PalletInfo */
    XcmV3PalletInfo: {
        index: "Compact<u32>",
        name: "Bytes",
        moduleName: "Bytes",
        major: "Compact<u32>",
        minor: "Compact<u32>",
        patch: "Compact<u32>",
    },
    /** Lookup97: xcm::v3::MaybeErrorCode */
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: "Null",
            Error: "Bytes",
            TruncatedError: "Bytes",
        },
    },
    /** Lookup100: xcm::v2::OriginKind */
    XcmV2OriginKind: {
        _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"],
    },
    /** Lookup101: xcm::double_encoded::DoubleEncoded<T> */
    XcmDoubleEncoded: {
        encoded: "Bytes",
    },
    /** Lookup102: xcm::v3::QueryResponseInfo */
    XcmV3QueryResponseInfo: {
        destination: "StagingXcmV3MultiLocation",
        queryId: "Compact<u64>",
        maxWeight: "SpWeightsWeightV2Weight",
    },
    /** Lookup103: xcm::v3::multiasset::MultiAssetFilter */
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: "XcmV3MultiassetMultiAssets",
            Wild: "XcmV3MultiassetWildMultiAsset",
        },
    },
    /** Lookup104: xcm::v3::multiasset::WildMultiAsset */
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: "Null",
            AllOf: {
                id: "XcmV3MultiassetAssetId",
                fun: "XcmV3MultiassetWildFungibility",
            },
            AllCounted: "Compact<u32>",
            AllOfCounted: {
                id: "XcmV3MultiassetAssetId",
                fun: "XcmV3MultiassetWildFungibility",
                count: "Compact<u32>",
            },
        },
    },
    /** Lookup105: xcm::v3::multiasset::WildFungibility */
    XcmV3MultiassetWildFungibility: {
        _enum: ["Fungible", "NonFungible"],
    },
    /** Lookup106: xcm::v3::WeightLimit */
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: "Null",
            Limited: "SpWeightsWeightV2Weight",
        },
    },
    /** Lookup107: xcm::VersionedMultiAssets */
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: "Null",
            V2: "XcmV2MultiassetMultiAssets",
            __Unused2: "Null",
            V3: "XcmV3MultiassetMultiAssets",
        },
    },
    /** Lookup108: xcm::v2::multiasset::MultiAssets */
    XcmV2MultiassetMultiAssets: "Vec<XcmV2MultiAsset>",
    /** Lookup110: xcm::v2::multiasset::MultiAsset */
    XcmV2MultiAsset: {
        id: "XcmV2MultiassetAssetId",
        fun: "XcmV2MultiassetFungibility",
    },
    /** Lookup111: xcm::v2::multiasset::AssetId */
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: "XcmV2MultiLocation",
            Abstract: "Bytes",
        },
    },
    /** Lookup112: xcm::v2::multilocation::MultiLocation */
    XcmV2MultiLocation: {
        parents: "u8",
        interior: "XcmV2MultilocationJunctions",
    },
    /** Lookup113: xcm::v2::multilocation::Junctions */
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: "Null",
            X1: "XcmV2Junction",
            X2: "(XcmV2Junction,XcmV2Junction)",
            X3: "(XcmV2Junction,XcmV2Junction,XcmV2Junction)",
            X4: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
            X5: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
            X6: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
            X7: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
            X8: "(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)",
        },
    },
    /** Lookup114: xcm::v2::junction::Junction */
    XcmV2Junction: {
        _enum: {
            Parachain: "Compact<u32>",
            AccountId32: {
                network: "XcmV2NetworkId",
                id: "[u8;32]",
            },
            AccountIndex64: {
                network: "XcmV2NetworkId",
                index: "Compact<u64>",
            },
            AccountKey20: {
                network: "XcmV2NetworkId",
                key: "[u8;20]",
            },
            PalletInstance: "u8",
            GeneralIndex: "Compact<u128>",
            GeneralKey: "Bytes",
            OnlyChild: "Null",
            Plurality: {
                id: "XcmV2BodyId",
                part: "XcmV2BodyPart",
            },
        },
    },
    /** Lookup115: xcm::v2::NetworkId */
    XcmV2NetworkId: {
        _enum: {
            Any: "Null",
            Named: "Bytes",
            Polkadot: "Null",
            Kusama: "Null",
        },
    },
    /** Lookup117: xcm::v2::BodyId */
    XcmV2BodyId: {
        _enum: {
            Unit: "Null",
            Named: "Bytes",
            Index: "Compact<u32>",
            Executive: "Null",
            Technical: "Null",
            Legislative: "Null",
            Judicial: "Null",
            Defense: "Null",
            Administration: "Null",
            Treasury: "Null",
        },
    },
    /** Lookup118: xcm::v2::BodyPart */
    XcmV2BodyPart: {
        _enum: {
            Voice: "Null",
            Members: {
                count: "Compact<u32>",
            },
            Fraction: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
            AtLeastProportion: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
            MoreThanProportion: {
                nom: "Compact<u32>",
                denom: "Compact<u32>",
            },
        },
    },
    /** Lookup119: xcm::v2::multiasset::Fungibility */
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: "Compact<u128>",
            NonFungible: "XcmV2MultiassetAssetInstance",
        },
    },
    /** Lookup120: xcm::v2::multiasset::AssetInstance */
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: "Null",
            Index: "Compact<u128>",
            Array4: "[u8;4]",
            Array8: "[u8;8]",
            Array16: "[u8;16]",
            Array32: "[u8;32]",
            Blob: "Bytes",
        },
    },
    /** Lookup121: xcm::VersionedMultiLocation */
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: "Null",
            V2: "XcmV2MultiLocation",
            __Unused2: "Null",
            V3: "StagingXcmV3MultiLocation",
        },
    },
    /** Lookup122: pallet_assets::pallet::Event<T, I> */
    PalletAssetsEvent: {
        _enum: {
            Created: {
                assetId: "u16",
                creator: "AccountId32",
                owner: "AccountId32",
            },
            Issued: {
                assetId: "u16",
                owner: "AccountId32",
                amount: "u128",
            },
            Transferred: {
                assetId: "u16",
                from: "AccountId32",
                to: "AccountId32",
                amount: "u128",
            },
            Burned: {
                assetId: "u16",
                owner: "AccountId32",
                balance: "u128",
            },
            TeamChanged: {
                assetId: "u16",
                issuer: "AccountId32",
                admin: "AccountId32",
                freezer: "AccountId32",
            },
            OwnerChanged: {
                assetId: "u16",
                owner: "AccountId32",
            },
            Frozen: {
                assetId: "u16",
                who: "AccountId32",
            },
            Thawed: {
                assetId: "u16",
                who: "AccountId32",
            },
            AssetFrozen: {
                assetId: "u16",
            },
            AssetThawed: {
                assetId: "u16",
            },
            AccountsDestroyed: {
                assetId: "u16",
                accountsDestroyed: "u32",
                accountsRemaining: "u32",
            },
            ApprovalsDestroyed: {
                assetId: "u16",
                approvalsDestroyed: "u32",
                approvalsRemaining: "u32",
            },
            DestructionStarted: {
                assetId: "u16",
            },
            Destroyed: {
                assetId: "u16",
            },
            ForceCreated: {
                assetId: "u16",
                owner: "AccountId32",
            },
            MetadataSet: {
                assetId: "u16",
                name: "Bytes",
                symbol: "Bytes",
                decimals: "u8",
                isFrozen: "bool",
            },
            MetadataCleared: {
                assetId: "u16",
            },
            ApprovedTransfer: {
                assetId: "u16",
                source: "AccountId32",
                delegate: "AccountId32",
                amount: "u128",
            },
            ApprovalCancelled: {
                assetId: "u16",
                owner: "AccountId32",
                delegate: "AccountId32",
            },
            TransferredApproved: {
                assetId: "u16",
                owner: "AccountId32",
                delegate: "AccountId32",
                destination: "AccountId32",
                amount: "u128",
            },
            AssetStatusChanged: {
                assetId: "u16",
            },
            AssetMinBalanceChanged: {
                assetId: "u16",
                newMinBalance: "u128",
            },
            Touched: {
                assetId: "u16",
                who: "AccountId32",
                depositor: "AccountId32",
            },
            Blocked: {
                assetId: "u16",
                who: "AccountId32",
            },
        },
    },
    /** Lookup123: pallet_foreign_asset_creator::pallet::Event<T> */
    PalletForeignAssetCreatorEvent: {
        _enum: {
            ForeignAssetCreated: {
                assetId: "u16",
                foreignAsset: "StagingXcmV3MultiLocation",
            },
            ForeignAssetTypeChanged: {
                assetId: "u16",
                newForeignAsset: "StagingXcmV3MultiLocation",
            },
            ForeignAssetRemoved: {
                assetId: "u16",
                foreignAsset: "StagingXcmV3MultiLocation",
            },
            ForeignAssetDestroyed: {
                assetId: "u16",
                foreignAsset: "StagingXcmV3MultiLocation",
            },
        },
    },
    /** Lookup124: pallet_asset_rate::pallet::Event<T> */
    PalletAssetRateEvent: {
        _enum: {
            AssetRateCreated: {
                assetKind: "u16",
                rate: "u128",
            },
            AssetRateRemoved: {
                assetKind: "u16",
            },
            AssetRateUpdated: {
                _alias: {
                    new_: "new",
                },
                assetKind: "u16",
                old: "u128",
                new_: "u128",
            },
        },
    },
    /** Lookup126: frame_system::Phase */
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: "u32",
            Finalization: "Null",
            Initialization: "Null",
        },
    },
    /** Lookup130: frame_system::LastRuntimeUpgradeInfo */
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: "Compact<u32>",
        specName: "Text",
    },
    /** Lookup132: frame_system::pallet::Call<T> */
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: "Bytes",
            },
            set_heap_pages: {
                pages: "u64",
            },
            set_code: {
                code: "Bytes",
            },
            set_code_without_checks: {
                code: "Bytes",
            },
            set_storage: {
                items: "Vec<(Bytes,Bytes)>",
            },
            kill_storage: {
                _alias: {
                    keys_: "keys",
                },
                keys_: "Vec<Bytes>",
            },
            kill_prefix: {
                prefix: "Bytes",
                subkeys: "u32",
            },
            remark_with_event: {
                remark: "Bytes",
            },
        },
    },
    /** Lookup136: frame_system::limits::BlockWeights */
    FrameSystemLimitsBlockWeights: {
        baseBlock: "SpWeightsWeightV2Weight",
        maxBlock: "SpWeightsWeightV2Weight",
        perClass: "FrameSupportDispatchPerDispatchClassWeightsPerClass",
    },
    /** Lookup137: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass> */
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: "FrameSystemLimitsWeightsPerClass",
        operational: "FrameSystemLimitsWeightsPerClass",
        mandatory: "FrameSystemLimitsWeightsPerClass",
    },
    /** Lookup138: frame_system::limits::WeightsPerClass */
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: "SpWeightsWeightV2Weight",
        maxExtrinsic: "Option<SpWeightsWeightV2Weight>",
        maxTotal: "Option<SpWeightsWeightV2Weight>",
        reserved: "Option<SpWeightsWeightV2Weight>",
    },
    /** Lookup140: frame_system::limits::BlockLength */
    FrameSystemLimitsBlockLength: {
        max: "FrameSupportDispatchPerDispatchClassU32",
    },
    /** Lookup141: frame_support::dispatch::PerDispatchClass<T> */
    FrameSupportDispatchPerDispatchClassU32: {
        normal: "u32",
        operational: "u32",
        mandatory: "u32",
    },
    /** Lookup142: sp_weights::RuntimeDbWeight */
    SpWeightsRuntimeDbWeight: {
        read: "u64",
        write: "u64",
    },
    /** Lookup143: sp_version::RuntimeVersion */
    SpVersionRuntimeVersion: {
        specName: "Text",
        implName: "Text",
        authoringVersion: "u32",
        specVersion: "u32",
        implVersion: "u32",
        apis: "Vec<([u8;8],u32)>",
        transactionVersion: "u32",
        stateVersion: "u8",
    },
    /** Lookup147: frame_system::pallet::Error<T> */
    FrameSystemError: {
        _enum: [
            "InvalidSpecName",
            "SpecVersionNeedsToIncrease",
            "FailedToExtractRuntimeVersion",
            "NonDefaultComposite",
            "NonZeroRefCount",
            "CallFiltered",
        ],
    },
    /** Lookup149: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256> */
    CumulusPalletParachainSystemUnincludedSegmentAncestor: {
        usedBandwidth: "CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth",
        paraHeadHash: "Option<H256>",
        consumedGoAheadSignal: "Option<PolkadotPrimitivesV6UpgradeGoAhead>",
    },
    /** Lookup150: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth */
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
        umpMsgCount: "u32",
        umpTotalBytes: "u32",
        hrmpOutgoing: "BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>",
    },
    /** Lookup152: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate */
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
        msgCount: "u32",
        totalBytes: "u32",
    },
    /** Lookup157: polkadot_primitives::v6::UpgradeGoAhead */
    PolkadotPrimitivesV6UpgradeGoAhead: {
        _enum: ["Abort", "GoAhead"],
    },
    /** Lookup158: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256> */
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
        usedBandwidth: "CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth",
        hrmpWatermark: "Option<u32>",
        consumedGoAheadSignal: "Option<PolkadotPrimitivesV6UpgradeGoAhead>",
    },
    /** Lookup159: polkadot_primitives::v6::PersistedValidationData<primitive_types::H256, N> */
    PolkadotPrimitivesV6PersistedValidationData: {
        parentHead: "Bytes",
        relayParentNumber: "u32",
        relayParentStorageRoot: "H256",
        maxPovSize: "u32",
    },
    /** Lookup162: polkadot_primitives::v6::UpgradeRestriction */
    PolkadotPrimitivesV6UpgradeRestriction: {
        _enum: ["Present"],
    },
    /** Lookup163: sp_trie::storage_proof::StorageProof */
    SpTrieStorageProof: {
        trieNodes: "BTreeSet<Bytes>",
    },
    /** Lookup165: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot */
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: "H256",
        relayDispatchQueueRemainingCapacity:
            "CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity",
        ingressChannels: "Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>",
        egressChannels: "Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>",
    },
    /** Lookup166: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity */
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
        remainingCount: "u32",
        remainingSize: "u32",
    },
    /** Lookup169: polkadot_primitives::v6::AbridgedHrmpChannel */
    PolkadotPrimitivesV6AbridgedHrmpChannel: {
        maxCapacity: "u32",
        maxTotalSize: "u32",
        maxMessageSize: "u32",
        msgCount: "u32",
        totalSize: "u32",
        mqcHead: "Option<H256>",
    },
    /** Lookup170: polkadot_primitives::v6::AbridgedHostConfiguration */
    PolkadotPrimitivesV6AbridgedHostConfiguration: {
        maxCodeSize: "u32",
        maxHeadDataSize: "u32",
        maxUpwardQueueCount: "u32",
        maxUpwardQueueSize: "u32",
        maxUpwardMessageSize: "u32",
        maxUpwardMessageNumPerCandidate: "u32",
        hrmpMaxMessageNumPerCandidate: "u32",
        validationUpgradeCooldown: "u32",
        validationUpgradeDelay: "u32",
        asyncBackingParams: "PolkadotPrimitivesV6AsyncBackingAsyncBackingParams",
    },
    /** Lookup171: polkadot_primitives::v6::async_backing::AsyncBackingParams */
    PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
        maxCandidateDepth: "u32",
        allowedAncestryLen: "u32",
    },
    /** Lookup177: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id> */
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: "u32",
        data: "Bytes",
    },
    /** Lookup178: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T> */
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: "H256",
        checkVersion: "bool",
    },
    /** Lookup179: cumulus_pallet_parachain_system::pallet::Call<T> */
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: "CumulusPrimitivesParachainInherentParachainInherentData",
            },
            sudo_send_upward_message: {
                message: "Bytes",
            },
            authorize_upgrade: {
                codeHash: "H256",
                checkVersion: "bool",
            },
            enact_authorized_upgrade: {
                code: "Bytes",
            },
        },
    },
    /** Lookup180: cumulus_primitives_parachain_inherent::ParachainInherentData */
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: "PolkadotPrimitivesV6PersistedValidationData",
        relayChainState: "SpTrieStorageProof",
        downwardMessages: "Vec<PolkadotCorePrimitivesInboundDownwardMessage>",
        horizontalMessages: "BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>",
    },
    /** Lookup182: polkadot_core_primitives::InboundDownwardMessage<BlockNumber> */
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: "u32",
        msg: "Bytes",
    },
    /** Lookup185: polkadot_core_primitives::InboundHrmpMessage<BlockNumber> */
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: "u32",
        data: "Bytes",
    },
    /** Lookup188: cumulus_pallet_parachain_system::pallet::Error<T> */
    CumulusPalletParachainSystemError: {
        _enum: [
            "OverlappingUpgrades",
            "ProhibitedByPolkadot",
            "TooBig",
            "ValidationDataNotAvailable",
            "HostConfigurationNotAvailable",
            "NotScheduled",
            "NothingAuthorized",
            "Unauthorized",
        ],
    },
    /** Lookup189: pallet_timestamp::pallet::Call<T> */
    PalletTimestampCall: {
        _enum: {
            set: {
                now: "Compact<u64>",
            },
        },
    },
    /** Lookup190: parachain_info::pallet::Call<T> */
    ParachainInfoCall: "Null",
    /** Lookup191: pallet_sudo::pallet::Call<T> */
    PalletSudoCall: {
        _enum: {
            sudo: {
                call: "Call",
            },
            sudo_unchecked_weight: {
                call: "Call",
                weight: "SpWeightsWeightV2Weight",
            },
            set_key: {
                _alias: {
                    new_: "new",
                },
                new_: "MultiAddress",
            },
            sudo_as: {
                who: "MultiAddress",
                call: "Call",
            },
        },
    },
    /** Lookup193: pallet_utility::pallet::Call<T> */
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: "Vec<Call>",
            },
            as_derivative: {
                index: "u16",
                call: "Call",
            },
            batch_all: {
                calls: "Vec<Call>",
            },
            dispatch_as: {
                asOrigin: "DanceboxRuntimeOriginCaller",
                call: "Call",
            },
            force_batch: {
                calls: "Vec<Call>",
            },
            with_weight: {
                call: "Call",
                weight: "SpWeightsWeightV2Weight",
            },
        },
    },
    /** Lookup195: dancebox_runtime::OriginCaller */
    DanceboxRuntimeOriginCaller: {
        _enum: {
            system: "FrameSupportDispatchRawOrigin",
            __Unused1: "Null",
            __Unused2: "Null",
            Void: "SpCoreVoid",
            __Unused4: "Null",
            __Unused5: "Null",
            __Unused6: "Null",
            __Unused7: "Null",
            __Unused8: "Null",
            __Unused9: "Null",
            __Unused10: "Null",
            __Unused11: "Null",
            __Unused12: "Null",
            __Unused13: "Null",
            __Unused14: "Null",
            __Unused15: "Null",
            __Unused16: "Null",
            __Unused17: "Null",
            __Unused18: "Null",
            __Unused19: "Null",
            __Unused20: "Null",
            __Unused21: "Null",
            __Unused22: "Null",
            __Unused23: "Null",
            __Unused24: "Null",
            __Unused25: "Null",
            __Unused26: "Null",
            __Unused27: "Null",
            __Unused28: "Null",
            __Unused29: "Null",
            __Unused30: "Null",
            __Unused31: "Null",
            __Unused32: "Null",
            __Unused33: "Null",
            __Unused34: "Null",
            __Unused35: "Null",
            __Unused36: "Null",
            __Unused37: "Null",
            __Unused38: "Null",
            __Unused39: "Null",
            __Unused40: "Null",
            __Unused41: "Null",
            __Unused42: "Null",
            __Unused43: "Null",
            __Unused44: "Null",
            __Unused45: "Null",
            __Unused46: "Null",
            __Unused47: "Null",
            __Unused48: "Null",
            __Unused49: "Null",
            __Unused50: "Null",
            CumulusXcm: "CumulusPalletXcmOrigin",
            __Unused52: "Null",
            PolkadotXcm: "PalletXcmOrigin",
        },
    },
    /** Lookup196: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32> */
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: "Null",
            Signed: "AccountId32",
            None: "Null",
        },
    },
    /** Lookup197: cumulus_pallet_xcm::pallet::Origin */
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: "Null",
            SiblingParachain: "u32",
        },
    },
    /** Lookup198: pallet_xcm::pallet::Origin */
    PalletXcmOrigin: {
        _enum: {
            Xcm: "StagingXcmV3MultiLocation",
            Response: "StagingXcmV3MultiLocation",
        },
    },
    /** Lookup199: sp_core::Void */
    SpCoreVoid: "Null",
    /** Lookup200: pallet_proxy::pallet::Call<T> */
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: "MultiAddress",
                forceProxyType: "Option<DanceboxRuntimeProxyType>",
                call: "Call",
            },
            add_proxy: {
                delegate: "MultiAddress",
                proxyType: "DanceboxRuntimeProxyType",
                delay: "u32",
            },
            remove_proxy: {
                delegate: "MultiAddress",
                proxyType: "DanceboxRuntimeProxyType",
                delay: "u32",
            },
            remove_proxies: "Null",
            create_pure: {
                proxyType: "DanceboxRuntimeProxyType",
                delay: "u32",
                index: "u16",
            },
            kill_pure: {
                spawner: "MultiAddress",
                proxyType: "DanceboxRuntimeProxyType",
                index: "u16",
                height: "Compact<u32>",
                extIndex: "Compact<u32>",
            },
            announce: {
                real: "MultiAddress",
                callHash: "H256",
            },
            remove_announcement: {
                real: "MultiAddress",
                callHash: "H256",
            },
            reject_announcement: {
                delegate: "MultiAddress",
                callHash: "H256",
            },
            proxy_announced: {
                delegate: "MultiAddress",
                real: "MultiAddress",
                forceProxyType: "Option<DanceboxRuntimeProxyType>",
                call: "Call",
            },
        },
    },
    /** Lookup204: pallet_maintenance_mode::pallet::Call<T> */
    PalletMaintenanceModeCall: {
        _enum: ["enter_maintenance_mode", "resume_normal_operation"],
    },
    /** Lookup205: pallet_tx_pause::pallet::Call<T> */
    PalletTxPauseCall: {
        _enum: {
            pause: {
                fullName: "(Bytes,Bytes)",
            },
            unpause: {
                ident: "(Bytes,Bytes)",
            },
        },
    },
    /** Lookup206: pallet_balances::pallet::Call<T, I> */
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: "MultiAddress",
                value: "Compact<u128>",
            },
            __Unused1: "Null",
            force_transfer: {
                source: "MultiAddress",
                dest: "MultiAddress",
                value: "Compact<u128>",
            },
            transfer_keep_alive: {
                dest: "MultiAddress",
                value: "Compact<u128>",
            },
            transfer_all: {
                dest: "MultiAddress",
                keepAlive: "bool",
            },
            force_unreserve: {
                who: "MultiAddress",
                amount: "u128",
            },
            upgrade_accounts: {
                who: "Vec<AccountId32>",
            },
            __Unused7: "Null",
            force_set_balance: {
                who: "MultiAddress",
                newFree: "Compact<u128>",
            },
        },
    },
    /** Lookup207: pallet_identity::pallet::Call<T> */
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: "MultiAddress",
            },
            set_identity: {
                info: "PalletIdentitySimpleIdentityInfo",
            },
            set_subs: {
                subs: "Vec<(AccountId32,Data)>",
            },
            clear_identity: "Null",
            request_judgement: {
                regIndex: "Compact<u32>",
                maxFee: "Compact<u128>",
            },
            cancel_request: {
                regIndex: "u32",
            },
            set_fee: {
                index: "Compact<u32>",
                fee: "Compact<u128>",
            },
            set_account_id: {
                _alias: {
                    new_: "new",
                },
                index: "Compact<u32>",
                new_: "MultiAddress",
            },
            set_fields: {
                index: "Compact<u32>",
                fields: "PalletIdentityBitFlags",
            },
            provide_judgement: {
                regIndex: "Compact<u32>",
                target: "MultiAddress",
                judgement: "PalletIdentityJudgement",
                identity: "H256",
            },
            kill_identity: {
                target: "MultiAddress",
            },
            add_sub: {
                sub: "MultiAddress",
                data: "Data",
            },
            rename_sub: {
                sub: "MultiAddress",
                data: "Data",
            },
            remove_sub: {
                sub: "MultiAddress",
            },
            quit_sub: "Null",
        },
    },
    /** Lookup208: pallet_identity::simple::IdentityInfo<FieldLimit> */
    PalletIdentitySimpleIdentityInfo: {
        additional: "Vec<(Data,Data)>",
        display: "Data",
        legal: "Data",
        web: "Data",
        riot: "Data",
        email: "Data",
        pgpFingerprint: "Option<[u8;20]>",
        image: "Data",
        twitter: "Data",
    },
    /** Lookup244: pallet_identity::types::BitFlags<pallet_identity::simple::IdentityField> */
    PalletIdentityBitFlags: {
        _bitLength: 64,
        Display: 0,
        Legal: 1,
        Web: 2,
        Riot: 3,
        Email: 4,
        PgpFingerprint: 5,
        Image: 6,
        Twitter: 7,
    },
    /** Lookup245: pallet_identity::simple::IdentityField */
    PalletIdentitySimpleIdentityField: {
        _enum: ["Display", "Legal", "Web", "Riot", "Email", "PgpFingerprint", "Image", "Twitter"],
    },
    /** Lookup246: pallet_identity::types::Judgement<Balance> */
    PalletIdentityJudgement: {
        _enum: {
            Unknown: "Null",
            FeePaid: "u128",
            Reasonable: "Null",
            KnownGood: "Null",
            OutOfDate: "Null",
            LowQuality: "Null",
            Erroneous: "Null",
        },
    },
    /** Lookup247: pallet_registrar::pallet::Call<T> */
    PalletRegistrarCall: {
        _enum: {
            register: {
                paraId: "u32",
                genesisData: "TpContainerChainGenesisDataContainerChainGenesisData",
            },
            deregister: {
                paraId: "u32",
            },
            mark_valid_for_collating: {
                paraId: "u32",
            },
            __Unused3: "Null",
            pause_container_chain: {
                paraId: "u32",
            },
            unpause_container_chain: {
                paraId: "u32",
            },
            register_parathread: {
                paraId: "u32",
                slotFrequency: "TpTraitsSlotFrequency",
                genesisData: "TpContainerChainGenesisDataContainerChainGenesisData",
            },
            set_parathread_params: {
                paraId: "u32",
                slotFrequency: "TpTraitsSlotFrequency",
            },
        },
    },
    /** Lookup248: tp_container_chain_genesis_data::ContainerChainGenesisData<MaxLengthTokenSymbol> */
    TpContainerChainGenesisDataContainerChainGenesisData: {
        storage: "Vec<TpContainerChainGenesisDataContainerChainGenesisDataItem>",
        name: "Bytes",
        id: "Bytes",
        forkId: "Option<Bytes>",
        extensions: "Bytes",
        properties: "TpContainerChainGenesisDataProperties",
    },
    /** Lookup250: tp_container_chain_genesis_data::ContainerChainGenesisDataItem */
    TpContainerChainGenesisDataContainerChainGenesisDataItem: {
        key: "Bytes",
        value: "Bytes",
    },
    /** Lookup252: tp_container_chain_genesis_data::Properties<MaxLengthTokenSymbol> */
    TpContainerChainGenesisDataProperties: {
        tokenMetadata: "TpContainerChainGenesisDataTokenMetadata",
        isEthereum: "bool",
    },
    /** Lookup253: tp_container_chain_genesis_data::TokenMetadata<MaxLengthTokenSymbol> */
    TpContainerChainGenesisDataTokenMetadata: {
        tokenSymbol: "Bytes",
        ss58Format: "u32",
        tokenDecimals: "u32",
    },
    /** Lookup255: tp_traits::SlotFrequency */
    TpTraitsSlotFrequency: {
        min: "u32",
        max: "u32",
    },
    /** Lookup256: pallet_configuration::pallet::Call<T> */
    PalletConfigurationCall: {
        _enum: {
            set_max_collators: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_min_orchestrator_collators: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_max_orchestrator_collators: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_collators_per_container: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_full_rotation_period: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_collators_per_parathread: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_parathreads_per_collator: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            set_target_container_chain_fullness: {
                _alias: {
                    new_: "new",
                },
                new_: "Perbill",
            },
            __Unused8: "Null",
            __Unused9: "Null",
            __Unused10: "Null",
            __Unused11: "Null",
            __Unused12: "Null",
            __Unused13: "Null",
            __Unused14: "Null",
            __Unused15: "Null",
            __Unused16: "Null",
            __Unused17: "Null",
            __Unused18: "Null",
            __Unused19: "Null",
            __Unused20: "Null",
            __Unused21: "Null",
            __Unused22: "Null",
            __Unused23: "Null",
            __Unused24: "Null",
            __Unused25: "Null",
            __Unused26: "Null",
            __Unused27: "Null",
            __Unused28: "Null",
            __Unused29: "Null",
            __Unused30: "Null",
            __Unused31: "Null",
            __Unused32: "Null",
            __Unused33: "Null",
            __Unused34: "Null",
            __Unused35: "Null",
            __Unused36: "Null",
            __Unused37: "Null",
            __Unused38: "Null",
            __Unused39: "Null",
            __Unused40: "Null",
            __Unused41: "Null",
            __Unused42: "Null",
            __Unused43: "Null",
            set_bypass_consistency_check: {
                _alias: {
                    new_: "new",
                },
                new_: "bool",
            },
        },
    },
    /** Lookup258: pallet_collator_assignment::pallet::Call<T> */
    PalletCollatorAssignmentCall: "Null",
    /** Lookup259: pallet_author_noting::pallet::Call<T> */
    PalletAuthorNotingCall: {
        _enum: {
            set_latest_author_data: {
                data: "TpAuthorNotingInherentOwnParachainInherentData",
            },
            set_author: {
                paraId: "u32",
                blockNumber: "u32",
                author: "AccountId32",
            },
            kill_author_data: {
                paraId: "u32",
            },
        },
    },
    /** Lookup260: tp_author_noting_inherent::OwnParachainInherentData */
    TpAuthorNotingInherentOwnParachainInherentData: {
        relayStorageProof: "SpTrieStorageProof",
    },
    /** Lookup261: pallet_authority_assignment::pallet::Call<T> */
    PalletAuthorityAssignmentCall: "Null",
    /** Lookup262: pallet_services_payment::pallet::Call<T> */
    PalletServicesPaymentCall: {
        _enum: {
            purchase_credits: {
                paraId: "u32",
                credit: "u128",
            },
            set_credits: {
                paraId: "u32",
                credits: "u32",
            },
            set_given_free_credits: {
                paraId: "u32",
                givenFreeCredits: "bool",
            },
        },
    },
    /** Lookup263: pallet_data_preservers::pallet::Call<T> */
    PalletDataPreserversCall: {
        _enum: {
            set_boot_nodes: {
                paraId: "u32",
                bootNodes: "Vec<Bytes>",
            },
        },
    },
    /** Lookup267: pallet_invulnerables::pallet::Call<T> */
    PalletInvulnerablesCall: {
        _enum: {
            set_invulnerables: {
                _alias: {
                    new_: "new",
                },
                new_: "Vec<AccountId32>",
            },
            add_invulnerable: {
                who: "AccountId32",
            },
            remove_invulnerable: {
                who: "AccountId32",
            },
        },
    },
    /** Lookup268: pallet_session::pallet::Call<T> */
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: "keys",
                },
                keys_: "DanceboxRuntimeSessionKeys",
                proof: "Bytes",
            },
            purge_keys: "Null",
        },
    },
    /** Lookup269: dancebox_runtime::SessionKeys */
    DanceboxRuntimeSessionKeys: {
        nimbus: "NimbusPrimitivesNimbusCryptoPublic",
    },
    /** Lookup270: nimbus_primitives::nimbus_crypto::Public */
    NimbusPrimitivesNimbusCryptoPublic: "SpCoreSr25519Public",
    /** Lookup271: sp_core::sr25519::Public */
    SpCoreSr25519Public: "[u8;32]",
    /** Lookup272: pallet_author_inherent::pallet::Call<T> */
    PalletAuthorInherentCall: {
        _enum: ["kick_off_authorship_validation"],
    },
    /** Lookup273: pallet_pooled_staking::pallet::Call<T> */
    PalletPooledStakingCall: {
        _enum: {
            rebalance_hold: {
                candidate: "AccountId32",
                delegator: "AccountId32",
                pool: "PalletPooledStakingAllTargetPool",
            },
            request_delegate: {
                candidate: "AccountId32",
                pool: "PalletPooledStakingTargetPool",
                stake: "u128",
            },
            execute_pending_operations: {
                operations: "Vec<PalletPooledStakingPendingOperationQuery>",
            },
            request_undelegate: {
                candidate: "AccountId32",
                pool: "PalletPooledStakingTargetPool",
                amount: "PalletPooledStakingSharesOrStake",
            },
            claim_manual_rewards: {
                pairs: "Vec<(AccountId32,AccountId32)>",
            },
            update_candidate_position: {
                candidates: "Vec<AccountId32>",
            },
            swap_pool: {
                candidate: "AccountId32",
                sourcePool: "PalletPooledStakingTargetPool",
                amount: "PalletPooledStakingSharesOrStake",
            },
        },
    },
    /** Lookup274: pallet_pooled_staking::pallet::AllTargetPool */
    PalletPooledStakingAllTargetPool: {
        _enum: ["Joining", "AutoCompounding", "ManualRewards", "Leaving"],
    },
    /** Lookup276: pallet_pooled_staking::pallet::PendingOperationQuery<sp_core::crypto::AccountId32, J, L> */
    PalletPooledStakingPendingOperationQuery: {
        delegator: "AccountId32",
        operation: "PalletPooledStakingPendingOperationKey",
    },
    /** Lookup277: pallet_pooled_staking::pallet::PendingOperationKey<sp_core::crypto::AccountId32, J, L> */
    PalletPooledStakingPendingOperationKey: {
        _enum: {
            JoiningAutoCompounding: {
                candidate: "AccountId32",
                at: "u32",
            },
            JoiningManualRewards: {
                candidate: "AccountId32",
                at: "u32",
            },
            Leaving: {
                candidate: "AccountId32",
                at: "u32",
            },
        },
    },
    /** Lookup278: pallet_pooled_staking::pallet::SharesOrStake<T> */
    PalletPooledStakingSharesOrStake: {
        _enum: {
            Shares: "u128",
            Stake: "u128",
        },
    },
    /** Lookup281: cumulus_pallet_xcmp_queue::pallet::Call<T> */
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: "u64",
                weightLimit: "SpWeightsWeightV2Weight",
            },
            suspend_xcm_execution: "Null",
            resume_xcm_execution: "Null",
            update_suspend_threshold: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            update_drop_threshold: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            update_resume_threshold: {
                _alias: {
                    new_: "new",
                },
                new_: "u32",
            },
            update_threshold_weight: {
                _alias: {
                    new_: "new",
                },
                new_: "SpWeightsWeightV2Weight",
            },
            update_weight_restrict_decay: {
                _alias: {
                    new_: "new",
                },
                new_: "SpWeightsWeightV2Weight",
            },
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: "new",
                },
                new_: "SpWeightsWeightV2Weight",
            },
        },
    },
    /** Lookup282: cumulus_pallet_dmp_queue::pallet::Call<T> */
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: "u64",
                weightLimit: "SpWeightsWeightV2Weight",
            },
        },
    },
    /** Lookup283: pallet_xcm::pallet::Call<T> */
    PalletXcmCall: {
        _enum: {
            send: {
                dest: "XcmVersionedMultiLocation",
                message: "XcmVersionedXcm",
            },
            teleport_assets: {
                dest: "XcmVersionedMultiLocation",
                beneficiary: "XcmVersionedMultiLocation",
                assets: "XcmVersionedMultiAssets",
                feeAssetItem: "u32",
            },
            reserve_transfer_assets: {
                dest: "XcmVersionedMultiLocation",
                beneficiary: "XcmVersionedMultiLocation",
                assets: "XcmVersionedMultiAssets",
                feeAssetItem: "u32",
            },
            execute: {
                message: "XcmVersionedXcm",
                maxWeight: "SpWeightsWeightV2Weight",
            },
            force_xcm_version: {
                location: "StagingXcmV3MultiLocation",
                version: "u32",
            },
            force_default_xcm_version: {
                maybeXcmVersion: "Option<u32>",
            },
            force_subscribe_version_notify: {
                location: "XcmVersionedMultiLocation",
            },
            force_unsubscribe_version_notify: {
                location: "XcmVersionedMultiLocation",
            },
            limited_reserve_transfer_assets: {
                dest: "XcmVersionedMultiLocation",
                beneficiary: "XcmVersionedMultiLocation",
                assets: "XcmVersionedMultiAssets",
                feeAssetItem: "u32",
                weightLimit: "XcmV3WeightLimit",
            },
            limited_teleport_assets: {
                dest: "XcmVersionedMultiLocation",
                beneficiary: "XcmVersionedMultiLocation",
                assets: "XcmVersionedMultiAssets",
                feeAssetItem: "u32",
                weightLimit: "XcmV3WeightLimit",
            },
            force_suspension: {
                suspended: "bool",
            },
        },
    },
    /** Lookup284: xcm::VersionedXcm<RuntimeCall> */
    XcmVersionedXcm: {
        _enum: {
            __Unused0: "Null",
            __Unused1: "Null",
            V2: "XcmV2Xcm",
            V3: "XcmV3Xcm",
        },
    },
    /** Lookup285: xcm::v2::Xcm<RuntimeCall> */
    XcmV2Xcm: "Vec<XcmV2Instruction>",
    /** Lookup287: xcm::v2::Instruction<RuntimeCall> */
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: "XcmV2MultiassetMultiAssets",
            ReserveAssetDeposited: "XcmV2MultiassetMultiAssets",
            ReceiveTeleportedAsset: "XcmV2MultiassetMultiAssets",
            QueryResponse: {
                queryId: "Compact<u64>",
                response: "XcmV2Response",
                maxWeight: "Compact<u64>",
            },
            TransferAsset: {
                assets: "XcmV2MultiassetMultiAssets",
                beneficiary: "XcmV2MultiLocation",
            },
            TransferReserveAsset: {
                assets: "XcmV2MultiassetMultiAssets",
                dest: "XcmV2MultiLocation",
                xcm: "XcmV2Xcm",
            },
            Transact: {
                originType: "XcmV2OriginKind",
                requireWeightAtMost: "Compact<u64>",
                call: "XcmDoubleEncoded",
            },
            HrmpNewChannelOpenRequest: {
                sender: "Compact<u32>",
                maxMessageSize: "Compact<u32>",
                maxCapacity: "Compact<u32>",
            },
            HrmpChannelAccepted: {
                recipient: "Compact<u32>",
            },
            HrmpChannelClosing: {
                initiator: "Compact<u32>",
                sender: "Compact<u32>",
                recipient: "Compact<u32>",
            },
            ClearOrigin: "Null",
            DescendOrigin: "XcmV2MultilocationJunctions",
            ReportError: {
                queryId: "Compact<u64>",
                dest: "XcmV2MultiLocation",
                maxResponseWeight: "Compact<u64>",
            },
            DepositAsset: {
                assets: "XcmV2MultiassetMultiAssetFilter",
                maxAssets: "Compact<u32>",
                beneficiary: "XcmV2MultiLocation",
            },
            DepositReserveAsset: {
                assets: "XcmV2MultiassetMultiAssetFilter",
                maxAssets: "Compact<u32>",
                dest: "XcmV2MultiLocation",
                xcm: "XcmV2Xcm",
            },
            ExchangeAsset: {
                give: "XcmV2MultiassetMultiAssetFilter",
                receive: "XcmV2MultiassetMultiAssets",
            },
            InitiateReserveWithdraw: {
                assets: "XcmV2MultiassetMultiAssetFilter",
                reserve: "XcmV2MultiLocation",
                xcm: "XcmV2Xcm",
            },
            InitiateTeleport: {
                assets: "XcmV2MultiassetMultiAssetFilter",
                dest: "XcmV2MultiLocation",
                xcm: "XcmV2Xcm",
            },
            QueryHolding: {
                queryId: "Compact<u64>",
                dest: "XcmV2MultiLocation",
                assets: "XcmV2MultiassetMultiAssetFilter",
                maxResponseWeight: "Compact<u64>",
            },
            BuyExecution: {
                fees: "XcmV2MultiAsset",
                weightLimit: "XcmV2WeightLimit",
            },
            RefundSurplus: "Null",
            SetErrorHandler: "XcmV2Xcm",
            SetAppendix: "XcmV2Xcm",
            ClearError: "Null",
            ClaimAsset: {
                assets: "XcmV2MultiassetMultiAssets",
                ticket: "XcmV2MultiLocation",
            },
            Trap: "Compact<u64>",
            SubscribeVersion: {
                queryId: "Compact<u64>",
                maxResponseWeight: "Compact<u64>",
            },
            UnsubscribeVersion: "Null",
        },
    },
    /** Lookup288: xcm::v2::Response */
    XcmV2Response: {
        _enum: {
            Null: "Null",
            Assets: "XcmV2MultiassetMultiAssets",
            ExecutionResult: "Option<(u32,XcmV2TraitsError)>",
            Version: "u32",
        },
    },
    /** Lookup291: xcm::v2::traits::Error */
    XcmV2TraitsError: {
        _enum: {
            Overflow: "Null",
            Unimplemented: "Null",
            UntrustedReserveLocation: "Null",
            UntrustedTeleportLocation: "Null",
            MultiLocationFull: "Null",
            MultiLocationNotInvertible: "Null",
            BadOrigin: "Null",
            InvalidLocation: "Null",
            AssetNotFound: "Null",
            FailedToTransactAsset: "Null",
            NotWithdrawable: "Null",
            LocationCannotHold: "Null",
            ExceedsMaxMessageSize: "Null",
            DestinationUnsupported: "Null",
            Transport: "Null",
            Unroutable: "Null",
            UnknownClaim: "Null",
            FailedToDecode: "Null",
            MaxWeightInvalid: "Null",
            NotHoldingFees: "Null",
            TooExpensive: "Null",
            Trap: "u64",
            UnhandledXcmVersion: "Null",
            WeightLimitReached: "u64",
            Barrier: "Null",
            WeightNotComputable: "Null",
        },
    },
    /** Lookup292: xcm::v2::multiasset::MultiAssetFilter */
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: "XcmV2MultiassetMultiAssets",
            Wild: "XcmV2MultiassetWildMultiAsset",
        },
    },
    /** Lookup293: xcm::v2::multiasset::WildMultiAsset */
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: "Null",
            AllOf: {
                id: "XcmV2MultiassetAssetId",
                fun: "XcmV2MultiassetWildFungibility",
            },
        },
    },
    /** Lookup294: xcm::v2::multiasset::WildFungibility */
    XcmV2MultiassetWildFungibility: {
        _enum: ["Fungible", "NonFungible"],
    },
    /** Lookup295: xcm::v2::WeightLimit */
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: "Null",
            Limited: "Compact<u64>",
        },
    },
    /** Lookup304: pallet_assets::pallet::Call<T, I> */
    PalletAssetsCall: {
        _enum: {
            create: {
                id: "u16",
                admin: "MultiAddress",
                minBalance: "u128",
            },
            force_create: {
                id: "u16",
                owner: "MultiAddress",
                isSufficient: "bool",
                minBalance: "Compact<u128>",
            },
            start_destroy: {
                id: "u16",
            },
            destroy_accounts: {
                id: "u16",
            },
            destroy_approvals: {
                id: "u16",
            },
            finish_destroy: {
                id: "u16",
            },
            mint: {
                id: "u16",
                beneficiary: "MultiAddress",
                amount: "Compact<u128>",
            },
            burn: {
                id: "u16",
                who: "MultiAddress",
                amount: "Compact<u128>",
            },
            transfer: {
                id: "u16",
                target: "MultiAddress",
                amount: "Compact<u128>",
            },
            transfer_keep_alive: {
                id: "u16",
                target: "MultiAddress",
                amount: "Compact<u128>",
            },
            force_transfer: {
                id: "u16",
                source: "MultiAddress",
                dest: "MultiAddress",
                amount: "Compact<u128>",
            },
            freeze: {
                id: "u16",
                who: "MultiAddress",
            },
            thaw: {
                id: "u16",
                who: "MultiAddress",
            },
            freeze_asset: {
                id: "u16",
            },
            thaw_asset: {
                id: "u16",
            },
            transfer_ownership: {
                id: "u16",
                owner: "MultiAddress",
            },
            set_team: {
                id: "u16",
                issuer: "MultiAddress",
                admin: "MultiAddress",
                freezer: "MultiAddress",
            },
            set_metadata: {
                id: "u16",
                name: "Bytes",
                symbol: "Bytes",
                decimals: "u8",
            },
            clear_metadata: {
                id: "u16",
            },
            force_set_metadata: {
                id: "u16",
                name: "Bytes",
                symbol: "Bytes",
                decimals: "u8",
                isFrozen: "bool",
            },
            force_clear_metadata: {
                id: "u16",
            },
            force_asset_status: {
                id: "u16",
                owner: "MultiAddress",
                issuer: "MultiAddress",
                admin: "MultiAddress",
                freezer: "MultiAddress",
                minBalance: "Compact<u128>",
                isSufficient: "bool",
                isFrozen: "bool",
            },
            approve_transfer: {
                id: "u16",
                delegate: "MultiAddress",
                amount: "Compact<u128>",
            },
            cancel_approval: {
                id: "u16",
                delegate: "MultiAddress",
            },
            force_cancel_approval: {
                id: "u16",
                owner: "MultiAddress",
                delegate: "MultiAddress",
            },
            transfer_approved: {
                id: "u16",
                owner: "MultiAddress",
                destination: "MultiAddress",
                amount: "Compact<u128>",
            },
            touch: {
                id: "u16",
            },
            refund: {
                id: "u16",
                allowBurn: "bool",
            },
            set_min_balance: {
                id: "u16",
                minBalance: "u128",
            },
            touch_other: {
                id: "u16",
                who: "MultiAddress",
            },
            refund_other: {
                id: "u16",
                who: "MultiAddress",
            },
            block: {
                id: "u16",
                who: "MultiAddress",
            },
        },
    },
    /** Lookup305: pallet_foreign_asset_creator::pallet::Call<T> */
    PalletForeignAssetCreatorCall: {
        _enum: {
            create_foreign_asset: {
                foreignAsset: "StagingXcmV3MultiLocation",
                assetId: "u16",
                admin: "AccountId32",
                isSufficient: "bool",
                minBalance: "u128",
            },
            change_existing_asset_type: {
                assetId: "u16",
                newForeignAsset: "StagingXcmV3MultiLocation",
            },
            remove_existing_asset_type: {
                assetId: "u16",
            },
            destroy_foreign_asset: {
                assetId: "u16",
            },
        },
    },
    /** Lookup306: pallet_asset_rate::pallet::Call<T> */
    PalletAssetRateCall: {
        _enum: {
            create: {
                assetKind: "u16",
                rate: "u128",
            },
            update: {
                assetKind: "u16",
                rate: "u128",
            },
            remove: {
                assetKind: "u16",
            },
        },
    },
    /** Lookup307: pallet_root_testing::pallet::Call<T> */
    PalletRootTestingCall: {
        _enum: {
            fill_block: {
                ratio: "Perbill",
            },
        },
    },
    /** Lookup308: pallet_sudo::pallet::Error<T> */
    PalletSudoError: {
        _enum: ["RequireSudo"],
    },
    /** Lookup309: pallet_utility::pallet::Error<T> */
    PalletUtilityError: {
        _enum: ["TooManyCalls"],
    },
    /** Lookup312: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, dancebox_runtime::ProxyType, BlockNumber> */
    PalletProxyProxyDefinition: {
        delegate: "AccountId32",
        proxyType: "DanceboxRuntimeProxyType",
        delay: "u32",
    },
    /** Lookup316: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber> */
    PalletProxyAnnouncement: {
        real: "AccountId32",
        callHash: "H256",
        height: "u32",
    },
    /** Lookup318: pallet_proxy::pallet::Error<T> */
    PalletProxyError: {
        _enum: [
            "TooMany",
            "NotFound",
            "NotProxy",
            "Unproxyable",
            "Duplicate",
            "NoPermission",
            "Unannounced",
            "NoSelfProxy",
        ],
    },
    /** Lookup319: pallet_migrations::pallet::Error<T> */
    PalletMigrationsError: {
        _enum: ["PreimageMissing", "WrongUpperBound", "PreimageIsTooBig", "PreimageAlreadyExists"],
    },
    /** Lookup320: pallet_maintenance_mode::pallet::Error<T> */
    PalletMaintenanceModeError: {
        _enum: ["AlreadyInMaintenanceMode", "NotInMaintenanceMode"],
    },
    /** Lookup321: pallet_tx_pause::pallet::Error<T> */
    PalletTxPauseError: {
        _enum: ["IsPaused", "IsUnpaused", "Unpausable", "NotFound"],
    },
    /** Lookup323: pallet_balances::types::BalanceLock<Balance> */
    PalletBalancesBalanceLock: {
        id: "[u8;8]",
        amount: "u128",
        reasons: "PalletBalancesReasons",
    },
    /** Lookup324: pallet_balances::types::Reasons */
    PalletBalancesReasons: {
        _enum: ["Fee", "Misc", "All"],
    },
    /** Lookup327: pallet_balances::types::ReserveData<ReserveIdentifier, Balance> */
    PalletBalancesReserveData: {
        id: "[u8;8]",
        amount: "u128",
    },
    /** Lookup331: dancebox_runtime::RuntimeHoldReason */
    DanceboxRuntimeRuntimeHoldReason: {
        _enum: {
            __Unused0: "Null",
            __Unused1: "Null",
            __Unused2: "Null",
            __Unused3: "Null",
            __Unused4: "Null",
            __Unused5: "Null",
            __Unused6: "Null",
            __Unused7: "Null",
            __Unused8: "Null",
            __Unused9: "Null",
            __Unused10: "Null",
            __Unused11: "Null",
            __Unused12: "Null",
            __Unused13: "Null",
            __Unused14: "Null",
            __Unused15: "Null",
            __Unused16: "Null",
            __Unused17: "Null",
            __Unused18: "Null",
            __Unused19: "Null",
            __Unused20: "Null",
            __Unused21: "Null",
            __Unused22: "Null",
            __Unused23: "Null",
            __Unused24: "Null",
            __Unused25: "Null",
            __Unused26: "Null",
            __Unused27: "Null",
            __Unused28: "Null",
            __Unused29: "Null",
            __Unused30: "Null",
            __Unused31: "Null",
            __Unused32: "Null",
            __Unused33: "Null",
            PooledStaking: "PalletPooledStakingHoldReason",
        },
    },
    /** Lookup332: pallet_pooled_staking::pallet::HoldReason */
    PalletPooledStakingHoldReason: {
        _enum: ["PooledStake"],
    },
    /** Lookup335: pallet_balances::types::IdAmount<Id, Balance> */
    PalletBalancesIdAmount: {
        id: "[u8;8]",
        amount: "u128",
    },
    /** Lookup337: pallet_balances::pallet::Error<T, I> */
    PalletBalancesError: {
        _enum: [
            "VestingBalance",
            "LiquidityRestrictions",
            "InsufficientBalance",
            "ExistentialDeposit",
            "Expendability",
            "ExistingVestingSchedule",
            "DeadAccount",
            "TooManyReserves",
            "TooManyHolds",
            "TooManyFreezes",
        ],
    },
    /** Lookup338: pallet_transaction_payment::Releases */
    PalletTransactionPaymentReleases: {
        _enum: ["V1Ancient", "V2"],
    },
    /** Lookup339: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::simple::IdentityInfo<FieldLimit>> */
    PalletIdentityRegistration: {
        judgements: "Vec<(u32,PalletIdentityJudgement)>",
        deposit: "u128",
        info: "PalletIdentitySimpleIdentityInfo",
    },
    /**
     * Lookup347: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32,
     * pallet_identity::simple::IdentityField>
     */
    PalletIdentityRegistrarInfo: {
        account: "AccountId32",
        fee: "u128",
        fields: "PalletIdentityBitFlags",
    },
    /** Lookup349: pallet_identity::pallet::Error<T> */
    PalletIdentityError: {
        _enum: [
            "TooManySubAccounts",
            "NotFound",
            "NotNamed",
            "EmptyIndex",
            "FeeChanged",
            "NoIdentity",
            "StickyJudgement",
            "JudgementGiven",
            "InvalidJudgement",
            "InvalidIndex",
            "InvalidTarget",
            "TooManyFields",
            "TooManyRegistrars",
            "AlreadyClaimed",
            "NotSub",
            "NotOwned",
            "JudgementForDifferentIdentity",
            "JudgementPaymentFailed",
        ],
    },
    /** Lookup354: tp_traits::ParathreadParams */
    TpTraitsParathreadParams: {
        slotFrequency: "TpTraitsSlotFrequency",
    },
    /** Lookup360: pallet_registrar::pallet::DepositInfo<T> */
    PalletRegistrarDepositInfo: {
        creator: "AccountId32",
        deposit: "u128",
    },
    /** Lookup361: pallet_registrar::pallet::Error<T> */
    PalletRegistrarError: {
        _enum: [
            "ParaIdAlreadyRegistered",
            "ParaIdNotRegistered",
            "ParaIdAlreadyDeregistered",
            "ParaIdAlreadyPaused",
            "ParaIdNotPaused",
            "ParaIdListFull",
            "GenesisDataTooBig",
            "ParaIdNotInPendingVerification",
            "NotSufficientDeposit",
            "NotAParathread",
        ],
    },
    /** Lookup362: pallet_configuration::HostConfiguration */
    PalletConfigurationHostConfiguration: {
        maxCollators: "u32",
        minOrchestratorCollators: "u32",
        maxOrchestratorCollators: "u32",
        collatorsPerContainer: "u32",
        fullRotationPeriod: "u32",
        collatorsPerParathread: "u32",
        parathreadsPerCollator: "u32",
        targetContainerChainFullness: "Perbill",
    },
    /** Lookup365: pallet_configuration::pallet::Error<T> */
    PalletConfigurationError: {
        _enum: ["InvalidNewValue"],
    },
    /** Lookup366: dp_collator_assignment::AssignedCollators<sp_core::crypto::AccountId32> */
    DpCollatorAssignmentAssignedCollatorsAccountId32: {
        orchestratorChain: "Vec<AccountId32>",
        containerChains: "BTreeMap<u32, Vec<AccountId32>>",
    },
    /** Lookup371: pallet_author_noting::pallet::ContainerChainBlockInfo<T> */
    PalletAuthorNotingContainerChainBlockInfo: {
        blockNumber: "u32",
        author: "AccountId32",
    },
    /** Lookup372: pallet_author_noting::pallet::Error<T> */
    PalletAuthorNotingError: {
        _enum: [
            "FailedReading",
            "FailedDecodingHeader",
            "AuraDigestFirstItem",
            "AsPreRuntimeError",
            "NonDecodableSlot",
            "AuthorNotFound",
            "NonAuraDigest",
        ],
    },
    /** Lookup373: dp_collator_assignment::AssignedCollators<nimbus_primitives::nimbus_crypto::Public> */
    DpCollatorAssignmentAssignedCollatorsPublic: {
        orchestratorChain: "Vec<NimbusPrimitivesNimbusCryptoPublic>",
        containerChains: "BTreeMap<u32, Vec<NimbusPrimitivesNimbusCryptoPublic>>",
    },
    /** Lookup378: pallet_services_payment::pallet::Error<T> */
    PalletServicesPaymentError: {
        _enum: ["InsufficientFundsToPurchaseCredits", "InsufficientCredits", "CreditPriceTooExpensive"],
    },
    /** Lookup379: pallet_data_preservers::pallet::Error<T> */
    PalletDataPreserversError: {
        _enum: ["NoBootNodes"],
    },
    /** Lookup381: pallet_invulnerables::pallet::Error<T> */
    PalletInvulnerablesError: {
        _enum: ["TooManyInvulnerables", "AlreadyInvulnerable", "NotInvulnerable"],
    },
    /** Lookup386: sp_core::crypto::KeyTypeId */
    SpCoreCryptoKeyTypeId: "[u8;4]",
    /** Lookup387: pallet_session::pallet::Error<T> */
    PalletSessionError: {
        _enum: ["InvalidProof", "NoAssociatedValidatorId", "DuplicatedKey", "NoKeys", "NoAccount"],
    },
    /** Lookup391: pallet_author_inherent::pallet::Error<T> */
    PalletAuthorInherentError: {
        _enum: ["AuthorAlreadySet", "NoAccountId", "CannotBeAuthor"],
    },
    /** Lookup393: pallet_pooled_staking::candidate::EligibleCandidate<sp_core::crypto::AccountId32, S> */
    PalletPooledStakingCandidateEligibleCandidate: {
        candidate: "AccountId32",
        stake: "u128",
    },
    /** Lookup396: pallet_pooled_staking::pallet::PoolsKey<sp_core::crypto::AccountId32> */
    PalletPooledStakingPoolsKey: {
        _enum: {
            CandidateTotalStake: "Null",
            JoiningShares: {
                delegator: "AccountId32",
            },
            JoiningSharesSupply: "Null",
            JoiningSharesTotalStaked: "Null",
            JoiningSharesHeldStake: {
                delegator: "AccountId32",
            },
            AutoCompoundingShares: {
                delegator: "AccountId32",
            },
            AutoCompoundingSharesSupply: "Null",
            AutoCompoundingSharesTotalStaked: "Null",
            AutoCompoundingSharesHeldStake: {
                delegator: "AccountId32",
            },
            ManualRewardsShares: {
                delegator: "AccountId32",
            },
            ManualRewardsSharesSupply: "Null",
            ManualRewardsSharesTotalStaked: "Null",
            ManualRewardsSharesHeldStake: {
                delegator: "AccountId32",
            },
            ManualRewardsCounter: "Null",
            ManualRewardsCheckpoint: {
                delegator: "AccountId32",
            },
            LeavingShares: {
                delegator: "AccountId32",
            },
            LeavingSharesSupply: "Null",
            LeavingSharesTotalStaked: "Null",
            LeavingSharesHeldStake: {
                delegator: "AccountId32",
            },
        },
    },
    /** Lookup398: pallet_pooled_staking::pallet::Error<T> */
    PalletPooledStakingError: {
        _enum: {
            InvalidPalletSetting: "Null",
            DisabledFeature: "Null",
            NoOneIsStaking: "Null",
            StakeMustBeNonZero: "Null",
            RewardsMustBeNonZero: "Null",
            MathUnderflow: "Null",
            MathOverflow: "Null",
            NotEnoughShares: "Null",
            TryingToLeaveTooSoon: "Null",
            InconsistentState: "Null",
            UnsufficientSharesForTransfer: "Null",
            CandidateTransferingOwnSharesForbidden: "Null",
            RequestCannotBeExecuted: "u16",
            SwapResultsInZeroShares: "Null",
        },
    },
    /** Lookup399: pallet_inflation_rewards::pallet::ChainsToRewardValue<T> */
    PalletInflationRewardsChainsToRewardValue: {
        paraIds: "Vec<u32>",
        rewardsPerChain: "u128",
    },
    /** Lookup401: cumulus_pallet_xcmp_queue::InboundChannelDetails */
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: "u32",
        state: "CumulusPalletXcmpQueueInboundState",
        messageMetadata: "Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>",
    },
    /** Lookup402: cumulus_pallet_xcmp_queue::InboundState */
    CumulusPalletXcmpQueueInboundState: {
        _enum: ["Ok", "Suspended"],
    },
    /** Lookup405: polkadot_parachain_primitives::primitives::XcmpMessageFormat */
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
        _enum: ["ConcatenatedVersionedXcm", "ConcatenatedEncodedBlob", "Signals"],
    },
    /** Lookup408: cumulus_pallet_xcmp_queue::OutboundChannelDetails */
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: "u32",
        state: "CumulusPalletXcmpQueueOutboundState",
        signalsExist: "bool",
        firstIndex: "u16",
        lastIndex: "u16",
    },
    /** Lookup409: cumulus_pallet_xcmp_queue::OutboundState */
    CumulusPalletXcmpQueueOutboundState: {
        _enum: ["Ok", "Suspended"],
    },
    /** Lookup411: cumulus_pallet_xcmp_queue::QueueConfigData */
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: "u32",
        dropThreshold: "u32",
        resumeThreshold: "u32",
        thresholdWeight: "SpWeightsWeightV2Weight",
        weightRestrictDecay: "SpWeightsWeightV2Weight",
        xcmpMaxIndividualWeight: "SpWeightsWeightV2Weight",
    },
    /** Lookup413: cumulus_pallet_xcmp_queue::pallet::Error<T> */
    CumulusPalletXcmpQueueError: {
        _enum: ["FailedToSend", "BadXcmOrigin", "BadXcm", "BadOverweightIndex", "WeightOverLimit"],
    },
    /** Lookup414: cumulus_pallet_xcm::pallet::Error<T> */
    CumulusPalletXcmError: "Null",
    /** Lookup415: cumulus_pallet_dmp_queue::ConfigData */
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: "SpWeightsWeightV2Weight",
    },
    /** Lookup416: cumulus_pallet_dmp_queue::PageIndexData */
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: "u32",
        endUsed: "u32",
        overweightCount: "u64",
    },
    /** Lookup419: cumulus_pallet_dmp_queue::pallet::Error<T> */
    CumulusPalletDmpQueueError: {
        _enum: ["Unknown", "OverLimit"],
    },
    /** Lookup420: pallet_xcm::pallet::QueryStatus<BlockNumber> */
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: "XcmVersionedMultiLocation",
                maybeMatchQuerier: "Option<XcmVersionedMultiLocation>",
                maybeNotify: "Option<(u8,u8)>",
                timeout: "u32",
            },
            VersionNotifier: {
                origin: "XcmVersionedMultiLocation",
                isActive: "bool",
            },
            Ready: {
                response: "XcmVersionedResponse",
                at: "u32",
            },
        },
    },
    /** Lookup424: xcm::VersionedResponse */
    XcmVersionedResponse: {
        _enum: {
            __Unused0: "Null",
            __Unused1: "Null",
            V2: "XcmV2Response",
            V3: "XcmV3Response",
        },
    },
    /** Lookup430: pallet_xcm::pallet::VersionMigrationStage */
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: "Null",
            MigrateVersionNotifiers: "Null",
            NotifyCurrentTargets: "Option<Bytes>",
            MigrateAndNotifyOldTargets: "Null",
        },
    },
    /** Lookup432: xcm::VersionedAssetId */
    XcmVersionedAssetId: {
        _enum: {
            __Unused0: "Null",
            __Unused1: "Null",
            __Unused2: "Null",
            V3: "XcmV3MultiassetAssetId",
        },
    },
    /** Lookup433: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers> */
    PalletXcmRemoteLockedFungibleRecord: {
        amount: "u128",
        owner: "XcmVersionedMultiLocation",
        locker: "XcmVersionedMultiLocation",
        consumers: "Vec<(Null,u128)>",
    },
    /** Lookup440: pallet_xcm::pallet::Error<T> */
    PalletXcmError: {
        _enum: [
            "Unreachable",
            "SendFailure",
            "Filtered",
            "UnweighableMessage",
            "DestinationNotInvertible",
            "Empty",
            "CannotReanchor",
            "TooManyAssets",
            "InvalidOrigin",
            "BadVersion",
            "BadLocation",
            "NoSubscription",
            "AlreadySubscribed",
            "InvalidAsset",
            "LowBalance",
            "TooManyLocks",
            "AccountNotSovereign",
            "FeesNotMet",
            "LockNotFound",
            "InUse",
        ],
    },
    /** Lookup441: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance> */
    PalletAssetsAssetDetails: {
        owner: "AccountId32",
        issuer: "AccountId32",
        admin: "AccountId32",
        freezer: "AccountId32",
        supply: "u128",
        deposit: "u128",
        minBalance: "u128",
        isSufficient: "bool",
        accounts: "u32",
        sufficients: "u32",
        approvals: "u32",
        status: "PalletAssetsAssetStatus",
    },
    /** Lookup442: pallet_assets::types::AssetStatus */
    PalletAssetsAssetStatus: {
        _enum: ["Live", "Frozen", "Destroying"],
    },
    /** Lookup444: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32> */
    PalletAssetsAssetAccount: {
        balance: "u128",
        status: "PalletAssetsAccountStatus",
        reason: "PalletAssetsExistenceReason",
        extra: "Null",
    },
    /** Lookup445: pallet_assets::types::AccountStatus */
    PalletAssetsAccountStatus: {
        _enum: ["Liquid", "Frozen", "Blocked"],
    },
    /** Lookup446: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32> */
    PalletAssetsExistenceReason: {
        _enum: {
            Consumer: "Null",
            Sufficient: "Null",
            DepositHeld: "u128",
            DepositRefunded: "Null",
            DepositFrom: "(AccountId32,u128)",
        },
    },
    /** Lookup448: pallet_assets::types::Approval<Balance, DepositBalance> */
    PalletAssetsApproval: {
        amount: "u128",
        deposit: "u128",
    },
    /** Lookup449: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>> */
    PalletAssetsAssetMetadata: {
        deposit: "u128",
        name: "Bytes",
        symbol: "Bytes",
        decimals: "u8",
        isFrozen: "bool",
    },
    /** Lookup451: pallet_assets::pallet::Error<T, I> */
    PalletAssetsError: {
        _enum: [
            "BalanceLow",
            "NoAccount",
            "NoPermission",
            "Unknown",
            "Frozen",
            "InUse",
            "BadWitness",
            "MinBalanceZero",
            "UnavailableConsumer",
            "BadMetadata",
            "Unapproved",
            "WouldDie",
            "AlreadyExists",
            "NoDeposit",
            "WouldBurn",
            "LiveAsset",
            "AssetNotLive",
            "IncorrectStatus",
            "NotFrozen",
            "CallbackFailed",
        ],
    },
    /** Lookup452: pallet_foreign_asset_creator::pallet::Error<T> */
    PalletForeignAssetCreatorError: {
        _enum: ["AssetAlreadyExists", "AssetDoesNotExist"],
    },
    /** Lookup453: pallet_asset_rate::pallet::Error<T> */
    PalletAssetRateError: {
        _enum: ["UnknownAssetKind", "AlreadyExists"],
    },
    /** Lookup458: sp_runtime::MultiSignature */
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: "SpCoreEd25519Signature",
            Sr25519: "SpCoreSr25519Signature",
            Ecdsa: "SpCoreEcdsaSignature",
        },
    },
    /** Lookup459: sp_core::ed25519::Signature */
    SpCoreEd25519Signature: "[u8;64]",
    /** Lookup461: sp_core::sr25519::Signature */
    SpCoreSr25519Signature: "[u8;64]",
    /** Lookup462: sp_core::ecdsa::Signature */
    SpCoreEcdsaSignature: "[u8;65]",
    /** Lookup465: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T> */
    FrameSystemExtensionsCheckNonZeroSender: "Null",
    /** Lookup466: frame_system::extensions::check_spec_version::CheckSpecVersion<T> */
    FrameSystemExtensionsCheckSpecVersion: "Null",
    /** Lookup467: frame_system::extensions::check_tx_version::CheckTxVersion<T> */
    FrameSystemExtensionsCheckTxVersion: "Null",
    /** Lookup468: frame_system::extensions::check_genesis::CheckGenesis<T> */
    FrameSystemExtensionsCheckGenesis: "Null",
    /** Lookup471: frame_system::extensions::check_nonce::CheckNonce<T> */
    FrameSystemExtensionsCheckNonce: "Compact<u32>",
    /** Lookup472: frame_system::extensions::check_weight::CheckWeight<T> */
    FrameSystemExtensionsCheckWeight: "Null",
    /** Lookup473: pallet_transaction_payment::ChargeTransactionPayment<T> */
    PalletTransactionPaymentChargeTransactionPayment: "Compact<u128>",
    /** Lookup474: dancebox_runtime::Runtime */
    DanceboxRuntimeRuntime: "Null",
};
