const networkConfig = {
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0xAA2FE1324b84981832AafCf7Dc6E6Fe6cF124283",
  },

  137: {
    name: "Polygon",
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
};

const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
