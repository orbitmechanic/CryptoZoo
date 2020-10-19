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

    function balanceOf(address _owner) external view returns (uint256 balance){
        //Returns the number of tokens in ``owner``'s account.
        return owner2TokenCount[_owner];
    }

    function totalSupply() public view returns (uint256 total){
        // Returns the total number of tokens in circulation.
        return animals.length;
    }

    function name() public view returns (string memory tokenName){
        // Returns the name of the token.
        return tokenname;
    }

    function symbol() public pure returns (string memory tokenSymbol){
        // Returns the symbol of the token.
        return tokensymbol;
    }

    function ownerOf(uint256 _tokenId) external view returns (address owner){
        // Returns the owner of the `tokenId` token.
        // Requirement: 'tokenId' must exist.
        return animal2Owner[_tokenId];
    }

    function transfer(address _to, uint256 _tokenId) external {
        // Transfers `tokenId` token from `msg.sender` to `to`.
        // Requirement: `to` cannot be the zero address.
        // Requirement: `to` can not be the contract address.
        // Requirement: `tokenId` token must be owned by `msg.sender`.
        // Emits a {Transfer} event. 
        require(_to != address(0));
        require(_to != address(this));
        require(animal2Owner[_tokenId] == msg.sender);
        move(msg.sender, _to, _tokenId);
        emit Transfer(msg.sender, _to, _tokenId);
    }
    function move(address _from, address _to, uint256 _tokenId) internal {
        // Prevent re-entry attack during processing.
        animal2Owner[_tokenId] = _to;
        if(_from != address(0)){  
            owner2TokenCount[_from]--;
        } // wrt. minting.
        owner2TokenCount[_to]++;
    }
}