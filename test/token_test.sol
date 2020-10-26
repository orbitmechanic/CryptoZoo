// SPDX-License-Identifier: MIT
pragma solidity 0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptAnimal.sol";

contract TestAnimal {
    const owner = accounts[0];

    function testFirstMintIDZero() public {
        uint256 test_dna = 1234;
        CryptAnimal lab = CryptAnimal();
        uint256 firstId = 
            lab.createAnimalGen0(test_dna {from: DeployedAddresses.CryptAnimal()});
        Assert.equal(firstId, uint256(0), "First mint should return Id zero.");
    }

    function testTotalSupplyMinting() public {
        CryptAnimal lab = CryptAnimal(DeployedAddresses.CryptAnimal());
        lab.createAnimalGen0(12345);
        uint256 headcount = lab.totalSupply();
        Assert.equal(headcount, uint256(1), "First mint shoudl increase supply.");
    }
}

