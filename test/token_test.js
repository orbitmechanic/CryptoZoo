const CryptAnimal = artifacts.require("CryptAnimal");
const AssertionError = require("assertion-error");
const { iteratee } = require("lodash");
const truffleAssert = require("truffle-assertions");

contract("CryptAnimal", async function(accounts) {
    const owner = accounts[0];

    it("Total supply should run", async function() {
        let instance = await CryptAnimal.deployed();
        await truffleAssert.passes(
            instance.totalSupply(),
            'totalSupply() should run.'
        );
    });

    it("Total supply should begin at zero", async function() {
        let instance = await CryptAnimal.deployed();
        let result = await instance.totalSupply(); 
        assert(result == 0, 
            `totalSupply() began at ${result}`);
    });

});