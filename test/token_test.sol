// SPDX-License-Identifier: MIT
pragma solidity 0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CryptAnimal.sol";

contract TestAnimal {

    function testFirstMintIDZero() public {
        CryptAnimal lab = CryptAnimal(DeployedAddresses.CryptAnimal());
        uint256 residual = lab.totalSupply();
        Assert.equal(residual, uint256(0), "Pre-mint should return zero.");
    }

    function testTotalSupplyMinting() public {
        CryptAnimal lab = CryptAnimal(DeployedAddresses.CryptAnimal());
        lab.createAnimalGen0(12345);
        uint256 headcount = lab.totalSupply();
        Assert.equal(headcount, uint256(1), "First mint should increase supply to 1.");
    }
}

