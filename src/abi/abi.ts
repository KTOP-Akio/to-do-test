export const abi = [
    {
      "inputs": [
        {"internalType": "address", "name": "_oracleAddress", "type": "address"},
        {"internalType": "address", "name": "_adminAddress", "type": "address"},
        {"internalType": "address", "name": "_operatorAddress", "type": "address"},
        {"internalType": "uint256", "name": "_intervalSeconds", "type": "uint256"},
        {"internalType": "uint256", "name": "_bufferSeconds", "type": "uint256"},
        {"internalType": "uint256", "name": "_minBetAmount", "type": "uint256"},
        {"internalType": "uint256", "name": "_oracleUpdateAllowance", "type": "uint256"},
        {"internalType": "uint256", "name": "_treasuryFee", "type": "uint256"}
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "address", "name": "sender", "type": "address"},
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "BetBear",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "address", "name": "sender", "type": "address"},
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "BetBull",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "address", "name": "sender", "type": "address"},
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "Claim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": true, "internalType": "uint256", "name": "roundId", "type": "uint256"},
        {"indexed": false, "internalType": "int256", "name": "price", "type": "int256"}
      ],
      "name": "EndRound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": true, "internalType": "uint256", "name": "roundId", "type": "uint256"},
        {"indexed": false, "internalType": "int256", "name": "price", "type": "int256"}
      ],
      "name": "LockRound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "address", "name": "admin", "type": "address"}
      ],
      "name": "NewAdminAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "uint256", "name": "bufferSeconds", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "intervalSeconds", "type": "uint256"}
      ],
      "name": "NewBufferAndIntervalSeconds",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "minBetAmount", "type": "uint256"}
      ],
      "name": "NewMinBetAmount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "address", "name": "operator", "type": "address"}
      ],
      "name": "NewOperatorAddress",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "address", "name": "oracle", "type": "address"}
      ],
      "name": "NewOracle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "uint256", "name": "oracleUpdateAllowance", "type": "uint256"}
      ],
      "name": "NewOracleUpdateAllowance",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"},
        {"indexed": false, "internalType": "uint256", "name": "treasuryFee", "type": "uint256"}
      ],
      "name": "NewTreasuryFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
        {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "address", "name": "account", "type": "address"}
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "RewardsCalculated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "StartRound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "address", "name": "token", "type": "address"},
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "TokenRecovery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}
      ],
      "name": "TreasuryClaim",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": true, "internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {"indexed": false, "internalType": "address", "name": "account", "type": "address"}
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_TREASURY_FEE",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "adminAddress",
      "outputs": [
        {"internalType": "address", "name": "", "type": "address"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "betBear",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "betBull",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256[]", "name": "epochs", "type": "uint256[]"}
      ],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "epoch", "type": "uint256"}
      ],
      "name": "claimable",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentEpoch",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "genesisLockOnce",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "genesisStartOnce",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUserRounds",
      "outputs": [
        {"internalType": "uint256[]", "name": "", "type": "uint256[]"},
        {"internalType": "uint256[]", "name": "", "type": "uint256[]"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "intervalSeconds",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256", "name": "_intervalSeconds", "type": "uint256"},
        {"internalType": "uint256", "name": "_bufferSeconds", "type": "uint256"}
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {"internalType": "bool", "name": "", "type": "bool"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {"internalType": "uint256[]", "name": "epochs", "type": "uint256[]"}
      ],
      "name": "predict",
      "outputs": [
        {"internalType": "uint256[]", "name": "", "type": "uint256[]"}
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentRoundId",
      "outputs": [
        {"internalType": "uint256", "name": "", "type": "uint256"}
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]as const;
