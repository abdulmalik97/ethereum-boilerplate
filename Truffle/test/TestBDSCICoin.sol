pragma solidity >=0.4.25 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BDSCICoin.sol";

contract TestBDSCICoin {

  function testInitialBalanceUsingDeployedContract() public {
    BDSCICoin bdsci = BDSCICoin(DeployedAddresses.BDSCICoin());

    uint expected = 1000000000000;

    Assert.equal(bdsci.getBalance(tx.origin), expected, "Owner should have 1000000000000 BDSCICoin initially");
  }

  function testInitialBalanceWithNewBDSCICoin() public {
    BDSCICoin bdsci = new BDSCICoin();

    uint expected = 1000000000000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 1000000000000 BDSCICoin initially");
  }

}
