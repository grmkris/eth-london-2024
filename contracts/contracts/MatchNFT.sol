// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract MatchNFT is ERC721 {
    string private baseURI;

    // This mapping is used to ensure each NFT (event ID) is unique.
    mapping(uint256 => bool) private exists;

    constructor(string memory _baseURI) ERC721("MatchNFT", "MNFT") {
        baseURI = _baseURI;
    }

    function mint(uint256 eventId, address to) external {
        require(!exists[eventId], "NFT for event ID already minted");

        exists[eventId] = true;
        _mint(to, eventId);
    }

    function setBaseURI(string memory _baseURI) external {
        // Add your access control here (e.g., onlyOwner)
        baseURI = _baseURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return string(abi.encodePacked(baseURI, Strings.toString(tokenId)));
    }

    // Ensure that the `exists` mapping is correctly updated in case of token burns or transfers
    // if necessary for your application logic.
}
