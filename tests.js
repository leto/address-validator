
QUnit.test( "BTC: invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("BTC", "1invalid") , "Passed!" );
  assert.notOk( isValidAddress("BTC", "3invalid") , "Passed!" );
});

QUnit.test( "ETH: invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("ETH", "0xdeadbeef") , "Passed!" );
  assert.notOk( isValidAddress("ETH", "0xDeAdbEEf") , "Passed!" );
})

QUnit.test( "ETC: invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("ETC", "0xdeadbeef") , "Passed!" );
  assert.notOk( isValidAddress("ETC", "0xDeAdbEEf") , "Passed!" );
})

QUnit.test( "ZEC: invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("ZEC", "t1invalid") , "Passed!" );
  assert.notOk( isValidAddress("ZEC", "t3stillinvalid") , "Passed!" );
});

QUnit.test( "HUSH: invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("HUSH", "t1invalid") , "Passed!" );
  assert.notOk( isValidAddress("HUSH", "t3yepstillinvalid") , "Passed!" );
});

QUnit.test( "KMD: valid transparent addresses", function( assert ) {
  // todo: multisig
  assert.ok( isValidAddress("KMD", "RNJmgYaFF5DbnrNUX6pMYz9rcnDKC2tuAc") , "Passed!" );
});

QUnit.test( "HUSH: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("HUSH", "t1JTXxWyBrxdWNTaNa5gYPPfpJkhqESvyox") , "Passed!" );
  assert.ok( isValidAddress("HUSH", "t3JTXxWyBrxdWNTaNa5gYPPfpJkhqESvyox") , "Passed!" );
});

QUnit.test( "XSG: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("XSG", "s1V5MGQC87mmYEEYVYBHwDSgogndkiXte4N"), "Passed!");
  assert.ok( isValidAddress("XSG", "s3TKWLar6bZEHppF4ZR1MbPuBfe33a1bHX9"), "Passed!");
});

QUnit.test( "Basic valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("PIVX", "DMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("DASH", "XMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("LTC", "LMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "GMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "AMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("DOGE", "DJ1BsBHrGaJaEcWYFGPon6a4tQqEx9yL9P") , "Passed!" );
});

QUnit.test( "ZEC: Sapling shielded addresses", function( assert ) {
  assert.ok( isValidAddress("ZEC",
        "zs18tu5wr4hlyg7m9tlkl0nhj65jmyxmvufcjpve2e6ada8k5vwn0cdfp4v0luxnwc8fa26szrfaas") , "Passed!" );
});

QUnit.test( "ZEC: Sprout shielded addresses", function( assert ) {
  assert.ok( isValidAddress("ZEC",
        "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC"),
        "Passed!" );
});

QUnit.test( "HUSH: Sprout shielded addresses", function( assert ) {
  assert.ok( isValidAddress("HUSH",
        "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC"),
        "Passed!" );
});
