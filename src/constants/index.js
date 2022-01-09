import { ChainId, Percent } from '@pancakeswap/sdk';
import { mainnetTokens, testnetTokens } from './tokens';
import { BIG_TEN } from '../utils/bigNumber';

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://etherscan.com',
  [ChainId.TESTNET]: 'https://etherscan.com',
}

export const BASES_TO_TRACK_LIQUIDITY_FOR = {
    [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.dai, mainnetTokens.busd, mainnetTokens.usdt],
    [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

export const PINNED_PAIRS = {
  [ChainId.MAINNET]: [
    [mainnetTokens.cake, mainnetTokens.wbnb],
    [mainnetTokens.busd, mainnetTokens.usdt],
    [mainnetTokens.dai, mainnetTokens.usdt],
  ],
}

export const BASE_URL = 'https://localhost:3000'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]
export const BSC_BLOCK_TIME = 3;
export const CAKE_PER_BLOCK = 40;
export const BLOCKS_PER_YEAR = (60 / BSC_BLOCK_TIME) * 60 * 24 * 365; // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK * BLOCKS_PER_YEAR;

export const DEFAULT_GAS_LIMIT = 200000;
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);

export const ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E'

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')