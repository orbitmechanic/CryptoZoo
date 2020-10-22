const CryptAnimal = artifacts.require("CryptAnimal");
const AssertionError = require("assertion-error");
const { iteratee } = require("lodash");
const truffleAssert = require("truffle-assertions");

contract("CryptAnimal", async function() {

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

    it("First animal should return Id zero.", async function() {
        let instance = await CryptAnimal.deployed();
        let firstId = await instance.createAnimalGen0(12345);
        assert(firstId == 0, 
            `First animal minted to Id ${firstID}`);
    });

    it("Total supply should increment on minting.", async function() {
        let instance = await CryptAnimal.deployed();
        let firstId = await instance.createAnimalGen0(12345);
        let totalSupply = await instance.totalSupply();
        assert(totalSupply == 1, 
            `Total supply after 1 mint was ${firstId}`);
    });
})