import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'LAB',
    lpAddresses: {
      97: '',
      56: '0x21f557ab017a9af912089e49766e90889e37fd17',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0x21f557ab017a9af912089e49766e90889e37fd17',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'LAB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf1a2403897c2683bb7aa08ef6aebce89407e1987',   // lp address token-bnb
    },
    tokenSymbol: 'LAB',
    tokenAddresses: {
      97: '',
      56: '0x21f557ab017a9af912089e49766e90889e37fd17', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 2,
    lpSymbol: 'FLASK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2d7f68887c8badebe69fd3684b61dccb1df22fea',   // lp address token-bnb
    },
    tokenSymbol: 'FLASK',
    tokenAddresses: {
      97: '',
      56: '0x11AD2281533d32a0aD16DA012A4DBAB846081d9b', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 3,
    lpSymbol: 'LAB-FLASK LP',
    lpAddresses: {
      97: '',
      56: '0x61e0e901004eb5d1f59af033f43b78576b7f1872',   // lp address token-bnb
    },
    tokenSymbol: 'FLASK',
    tokenAddresses: {
      97: '',
      56: '0x11AD2281533d32a0aD16DA012A4DBAB846081d9b', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },.
]
export default farms
