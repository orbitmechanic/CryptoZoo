const CryptAnimal = artifacts.require("CryptAnimal");
const { iteratee } = require("lodash");
const truffleAssert = require("truffle-assertions");

contract("CryptAnimal", async function() {
    it("Total supply should begin at zero", async function() {
        let instance = await CryptAnimal.deployed();
        await truffleAssert.passes(
            instance.totalSupply(),
            'totalSupply() should run.'
        );
    })
})