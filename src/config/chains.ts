import { IChainInfo } from "~/vite-env";

export const MAINNET_CHAINS: {
  [chainId: string]: IChainInfo;
} = {
  "1": {
    chainName: "Ethereum",
    nativeCurrency: "ETH",
    icon: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
    explorer: "https://etherscan.io/",
  },
};

export const TESTNET_CHAINS: {
  [chainId: string]: IChainInfo;
} = {
  "11155111": {
    chainName: "Sepolia",
    nativeCurrency: "ETH",
    icon: "https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",
    explorer: "https://sepolia.etherscan.io/",
  },
  "80002": {
    chainName: "Polygon Amoy",
    nativeCurrency: "ETH",
    icon: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
    explorer: "https://amoy.polygonscan.com/",
  },
};

export const CHAINS: {
  [chainId: string]: IChainInfo;
} = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};
