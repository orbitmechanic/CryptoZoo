const CryptAnimal= artifacts.require("CryptAnimal");

module.exports = function(deployer) {
  deployer.deploy(CryptAnimal);
};