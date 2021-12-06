const ConvertLib = artifacts.require("ConvertLib");
const BlackDiamondSCInc1 = artifacts.require("BlackDiamondSCInc1");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, BlackDiamondSCInc1);
  deployer.deploy(BlackDiamondSCInc1);
};
