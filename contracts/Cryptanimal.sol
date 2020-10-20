// SPDX-License-Identifier: MIT
pragma solidity 0.5.1;

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

    // @returns the number of tokens in ``owner``'s account.
    function balanceOf(address _owner) external view returns (uint256 balance){
        return owner2TokenCount[_owner];
    }

    // @returns the total number of tokens in circulation.
    function totalSupply() public view returns (uint256 total){
        return animals.length;
    }

    // @returns the name of the token.
    function name() public view returns (string memory tokenName){
        return tokenname;
    }

    // @returns the symbol of the token.
    function symbol() public view returns (string memory tokenSymbol){
        return tokensymbol;
    }

    // @returns the owner of the `tokenId` token.
    // @notice Requirement: 'tokenId' must exist.
    function ownerOf(uint256 _tokenId) external view returns (address owner){
        return animal2Owner[_tokenId];
    }

    // @dev Transfers `tokenId` token from `msg.sender` to `to`.
    // @notice Requirement: `to` cannot be the zero address.
    // @notice Requirement: `to` can not be the contract address.
    // @notice Requirement: `tokenId` token must be owned by `msg.sender`.
    // @dev Emits a {Transfer} event. 
    function transfer(address _to, uint256 _tokenId) external {
        require(_to != address(0));
        require(_to != address(this));
        require(animal2Owner[_tokenId] == msg.sender);
        move(msg.sender, _to, _tokenId);
        emit Transfer(msg.sender, _to, _tokenId);
    }
    // @dev Prevent re-entry attack during processing.
    function move(address _from, address _to, uint256 _tokenId) internal {
        animal2Owner[_tokenId] = _to;
        if(_from != address(0)){  
            owner2TokenCount[_from]--;
        } // wrt. minting.
        owner2TokenCount[_to]++;
    }
}