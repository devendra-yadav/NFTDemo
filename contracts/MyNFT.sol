// SPDX-License-Identifier: SEE LICENSE IN LICENSE
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

pragma solidity 0.8.17;
//0x87E0F1b909dF7DD9CbE1B876c0FeB104B8A558ae
contract MyNFT is ERC721URIStorage, Ownable{
    using Counters for Counters.Counter;

    Counters.Counter private tokenIds;

    constructor() ERC721("Devendra NFT", "DNFT"){}

    function mintNFT(address _recepient, string memory _uri) public{
        tokenIds.increment();
        uint256 tokenId = tokenIds.current();

        _mint(_recepient, tokenId);
        _setTokenURI(tokenId, _uri);

    }

    function burnNFT(uint256 _tokenId) public{
        _burn(_tokenId);
    }


}