import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MatchNFTModule = buildModule("MatchNFTModule", (moduleBuilder) => {
  const baseURI = moduleBuilder.getParameter(
    "baseURI",
    "https://example.com/api/nft/",
  );

  const matchNFT = moduleBuilder.contract("MatchNFT", [baseURI]);

  return { matchNFT };
});

export default MatchNFTModule;
