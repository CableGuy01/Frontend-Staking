import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
 {
    sousId: 0,
    tokenName: 'LAB',
    tokenAddress: '0x21f557ab017a9af912089e49766e90889e37fd17',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x21f557ab017a9af912089e49766e90889e37fd17',  // token address
    contractAddress: {
      97: '',
      56: '0x81fE460CAA24e58e3A0c5CE8A4898eBe1838deD5',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 {
    sousId: 267,
    tokenName: 'HIGH',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',   // token address
    stakingTokenName: QuoteToken.FORK,
    stakingLimit: 0,
    stakingTokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',  // token address
    contractAddress: {
      97: '',
      56: '0x60c4998C058BaC8042712B54E7e43b892Ab0B0c4',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '0.09756',
    sortOrder: 2,
    isFinished: true,
    tokenDecimals: 18,
  },
 {
   sousId: 1,
    tokenName: 'FLASK',
    tokenAddress: '0x11ad2281533d32a0ad16da012a4dbab846081d9b'   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x11ad2281533d32a0ad16da012a4dbab846081d9b',  // token address
    contractAddress: {
      97: '',
      56: '0x03d8c7604253b33F026654a3C772B5A022e39efe',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',    
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
