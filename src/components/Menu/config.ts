import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.labswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.labswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
//   {
//     label: 'Bulk Send Dapp',
//     icon: 'MoreIcon',
//     href: 'https://bulksend.siacashcoin.com',
//   },
//   {
//     label: 'LaunchPad',
//     icon: 'InfoIcon',
//     items: [
//       {
//         label: 'Create Token ',
//         href: 'https://createtoken.siacashcoin.com/',
//       },
//       {
//         label: 'Safemoon Fork',
//         href: 'https://createsafemoon.siacashcoin.com',
//       },
//     ],
//   },
     {
     label: 'Win Tokens',
     icon: 'TicketIcon',
    items: [
      {
         label: 'Doge Bets',
         href: 'https://dogebets.gg',
       },
       {
       label: 'Candle Genie',
         href: 'https://candlegenie.io/predictions/',
      },
     ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://farms.labswap.finance/nft',
  },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.siacashcoin.com',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.siacashcoin.com',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://pancakeswap.medium.com',
  //     // },
  //   ],
  // },
]

export default config
