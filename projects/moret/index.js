// const sdk = require('@defillama/sdk');
const { sumTokens2 } = require('../helper/unwrapLPs')

const markets = ['0xE851E0628A9F0D62393C7105A0eb112a6C3572fE', // ETH market pool
                '0xdfA196542929Ae0C468915b9f2Ae6A713DFf8D0b' // BTC market pool
            ]
const tvlTokens = ['0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // WETH
                '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6', // WBTC
                '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174' // USDC
            ]

async function tvl(_, _1, _2, { polygon: block }) {
    return sumTokens2({ block, owners: markets, tokens: tvlTokens, chain: 'polygon' });
}

module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'counts the number of MINT tokens in the Club Bonding contract.',
    start: 1677225600,
    polygon: {
        tvl,
    }
}; 