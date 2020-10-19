// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./IERC721.sol";

contract CryptAnimal is IERC721 {

    string public constant tokenname = "CryptAnimals";
    string public constant tokensymbol = "CA";

    struct Animal {
        uint256 genes;
        uint64 birthTime;
        uint32 momId;
        uint32 dadId;
        uint16 generation;
    }

    Animal[] animals;

    mapping( uint256 => address) public animal2Owner;
    mapping (address => uint256) owner2TokenCount;

    function balanceOf(address owner) public override view returns (uint256 balance){
        //Returns the number of tokens in ``owner``'s account.
        return owner2TokenCount[owner];
    }

    function totalSupply() public override view returns (uint256 total){
        // Returns the total number of tokens in circulation.
    }

    function name() public override pure returns (string memory tokenName){
        // Returns the name of the token.
        return tokenname;
    }

    function symbol() public override pure returns (string memory tokenSymbol){
        // Returns the symbol of the token.
        return tokensymbol;
    }

    function ownerOf(uint256 tokenId) public override view returns (address owner){
        // Returns the owner of the `tokenId` token.
        // Requirement: 'tokenId' must exist.
    }

    function transfer(address to, uint256 tokenId) public override {
        // Transfers `tokenId` token from `msg.sender` to `to`.
        // Requirement: `to` cannot be the zero address.
        // Requirement: `to` can not be the contract address.
        // Requirement: `tokenId` token must be owned by `msg.sender`.
        // Emits a {Transfer} event. 
    }
}