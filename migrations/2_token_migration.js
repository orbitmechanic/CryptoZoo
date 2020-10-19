const Token= artifacts.require("CryptAnimal");

module.exports = function(deployer) {
  deployer.deploy(Token);
};