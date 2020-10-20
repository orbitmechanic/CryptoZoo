// SPDX-License-Identifier: MIT
pragma solidity 0.7.0;

import "./IERC721.sol";
import "./Accountable.sol";

contract CryptAnimal is IERC721, Accountable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant override name = "CryptAnimals";
    string public constant override symbol = "CA";

    event Birth(
        address owner,
        uint256 animalId,
        uint256 momId,
        uint256 dadId,
        uint256 genes
    );

    struct Animal {
        uint256 genes;
        uint64 birthTime;
        uint32 momId;
        uint32 dadId;
        uint16 generation;
    }

    Animal[] animals;

    mapping( uint256 => address) public animalId2Owner;
    mapping (address => uint256) owner2TokenCount;

    uint256 gen0Population = uint256(0);

    // @returns new animal ID
    // @require gen0Population < CREATION_LIMIT_GEN0
    function createAnimalGen0(uint256 _genes) public onlyOwner returns(uint256) {
        require (gen0Population < CREATION_LIMIT_GEN0);
        gen0Population++;
        uint256 newAnimalId = 
            _createAnimal(uint256(0),uint256(0),uint256(0),_genes,msg.sender);
        return newAnimalId;
    }

    // @returns new animal ID
    function _createAnimal(
        uint256 _momId,
        uint256 _dadId,
        uint256 _generation,
        uint256 _genes,
        address _owner
    ) private returns (uint256) {
        Animal memory _animal = Animal({
            genes: _genes,
            birthTime: uint64(block.timestamp),
            momId: uint32(_momId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });
        animals.push(_animal); // 0.7.0 no longer returns length
        uint256 newAnimalId = animals.length - 1;
        _transfer(address(0), _owner, newAnimalId );
        emit Birth(_owner, newAnimalId, _momId, _dadId, _genes);
        return newAnimalId;
    }

    // @returns genes given Id
    // @require animal with given _Id exists
    function getAnimal(uint256 _Id) public view returns (uint256){
        require (_Id < animals.length);
        return animals[_Id].genes;
    }

    // @returns mother's Id given child Id
    // @require animal with given _Id exists
    function getMother(uint256 _Id) public view returns (uint256){
        require (_Id < animals.length);
        return uint256(animals[_Id].momId);
    }

    // @returns father's Id given child Id
    // @require animal with given _Id exists
    function getFather(uint256 _Id) public view returns (uint256){
        require (_Id < animals.length);
        return uint256(animals[_Id].dadId);
    }

    // @returns generation given animal's Id
    // @require animal with given _Id exists
    function getGeneration(uint256 _Id) public view returns (uint256){
        require (_Id < animals.length);
        return uint256(animals[_Id].generation);
    }

    // @returns birth time given animal's Id
    // @require animal with given _Id exists
    function getBirthTime(uint256 _Id) public view returns (uint256){
        require (_Id < animals.length);
        return uint256(animals[_Id].birthTime);
    }

    // @returns the number of tokens in ``owner``'s account.
    function balanceOf(address _owner) external view override returns (uint256 balance){
        return owner2TokenCount[_owner];
    }

    // @returns the total number of tokens in circulation.
    function totalSupply() public view override returns (uint256 total){
        return animals.length;
    }

    // @returns the owner of the `tokenId` token.
    // @notice Requirement: 'tokenId' must exist.
    function ownerOf(uint256 _tokenId) external view override returns (address owner){
        return animalId2Owner[_tokenId];
    }

    // @dev Transfers `tokenId` token from `msg.sender` to `to`.
    // @notice Requirement: `to` cannot be the zero address.
    // @notice Requirement: `to` can not be the contract address.
    // @notice Requirement: `tokenId` token must be owned by `msg.sender`.
    // @dev Emits a {Transfer} event. 
    function transfer(address _to, uint256 _tokenId) external override {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));
        _transfer(msg.sender, _to, _tokenId);
    }
    
    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        owner2TokenCount[_to]++;
        animalId2Owner[_tokenId] = _to;
        if (_from != address(0)) {
            owner2TokenCount[_from]--;
        }
        emit Transfer(_from, _to, _tokenId);
    }

    // @returns if claimant owns tokenId
    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
        return animalId2Owner[_tokenId] == _claimant;
    }
}