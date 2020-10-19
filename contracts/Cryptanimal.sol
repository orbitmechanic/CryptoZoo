// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "./IERC721.sol";

contract CryptAnimal is IERC721 {

    mapping(address => uint256) ownershipTokenCount;

    function balanceOf(address owner) public override view returns (uint256 balance){
        //Returns the number of tokens in ``owner``'s account.
        return ownershipTokenCount[owner];
    }

    function totalSupply() public override view returns (uint256 total){
        // Returns the total number of tokens in circulation.
    }

    function name() public override view returns (string memory tokenName){
        // Returns the name of the token.
    }

    function symbol() public override view returns (string memory tokenSymbol){
        // Returns the symbol of the token.
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