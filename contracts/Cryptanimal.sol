// SPDX-License-Identifier: MIT
pragma solidity 0.6.0;

import "./IERC721.sol";
import "./Accountable.sol";

contract CryptAnimal is IERC721, Accountable {

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    string public constant tokenName = "CryptAnimals";
    string public constant tokenSymbol = "CA";

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

    mapping(uint256 => address) public animalId2Owner;
    mapping (address => uint256) owner2TokenCount;

    uint256 gen0Population = uint256(0);

    // @returns new animal ID
    // @require gen0Population < CREATION_LIMIT_GEN0
    function createAnimalGen0(uint256 _genes) public onlyOwner returns(uint256) {
        require (gen0Population < CREATION_LIMIT_GEN0, 
            "Attempting to exceed generation 0 population limit.");
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

    // @returns all animal data given Id
    // @require animal with given _Id exists
    function getAnimal(uint256 _Id) public view returns (
        uint256 genes,
        uint256 birthTime,
        uint256 momId,
        uint256 dadId,
        uint256 generation,
        address owner
    ){
        require (_Id < animals.length, 
            "That many animals do not exist.");

        Animal storage animal = animals[_Id];

        birthTime = uint256(animal.birthTime);
        momId = uint256(animal.momId);
        dadId = uint256(animal.dadId);
        generation = uint256(animal.generation);
        genes = animal.genes;
        owner = animalId2Owner[_Id];
    }

    // @returns tokenName
    function name() external view override returns(string memory Name){
        return tokenName;
    }

    // @returns tokenSymbol
    function symbol() external view override returns(string memory Symbol){
        return tokenSymbol;
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
        require(_to != address(0), "Cannot transfer to address(0), or burn animal.");
        require(_to != address(this), "Cannot transfer to Dap address.");
        require(_owns(msg.sender, _tokenId), 
            "Attempted to transfer an animal the requester does not own.");
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