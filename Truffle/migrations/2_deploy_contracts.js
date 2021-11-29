const ConvertLib = artifacts.require("ConvertLib");
const BDSCICoin = artifacts.require("BDSCICoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, BDSCICoin);
  deployer.deploy(BDSCUCoin);
};
