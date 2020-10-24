// SPDX-License-Identifier: MIT
pragma solidity 0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptAnimal.sol";

contract TestAnimal {

    function testFirstMintID(){
        CryptAnimal labAnimal = CryptAnimal(DeployedAddresses.CryptAnimal());
        uint256 firstId = labAnimal.createAnimalGen0(12345);
        uint expected = 0;
        Assert.equal(firstId, uint256(0), "First mint should return Id zero.");
    }

    function testFirstMintID(){
        CryptAnimal labAnimal = CryptAnimal(DeployedAddresses.CryptAnimal());
        uint256 firstId = labAnimal.createAnimalGen0(12345);
        uint expected = 0;
        Assert.equal(firstId, uint256(0), "First mint should return Id zero.");
    }

    function testTotalSupplyMinting(){
        CryptAnimal labAnimal = CryptAnimalDeployedAddresses.CryptAnimal();
        uint256 firstId = labAnimal.createAnimalGen0(12345);
        uint256 headcount = labAnimal.totalSupply();
        Assert.equal(headcount, uint256(1), "First mint shoudl increase supply.");
    }

}