const BDSCICoin = artifacts.require("BDSCICoin");

contract('BDSCICoin', (accounts) => {
  it('should put 1000000000000 BDSCICoin in the first account', async () => {
    const bdsciCoinInstance = await BDSCICoin.deployed();
    const balance = await bdsciCoinInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 1000000000000, "1000000000000 wasn't in the first account");
  });
  it('should call a function that depends on a linked library', async () => {
    const bdsciCoinInstance = await BDSCICoin.deployed();
    const bdsciCoinBalance = (await bdcsiCoinInstance.getBalance.call(accounts[0])).toNumber();
    const bdsciCoinEthBalance = (await bdsciCoinInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(bdsciCoinEthBalance, 2 * bdsciCoinBalance, 'Library function returned unexpected function, linkage may be broken');
  });
  it('should send coin correctly', async () => {
    const bdsciCoinInstance = await BDSCICoin.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await bdsciCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await bdsciCoinInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await bdsciCoinInstance.sendCoin(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await bdsciCoinInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await bdsciCoinInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
