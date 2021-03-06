
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
  assert.notOk( isValidAddress("HUSH", "Rinvalid") , "Passed!" );
  assert.notOk( isValidAddress("HUSH", "bt3yepstillinvalid") , "Passed!" );
});

QUnit.test( "KMD: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("KMD", "RNJmgYaFF5DbnrNUX6pMYz9rcnDKC2tuAc") , "normal" );
  assert.ok( isValidAddress("KMD", "bFn413mChN4LPydzFiTxoXC1NwMMinzYsP") , "multisig" );
});

QUnit.test( "K64: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("K64", "RNJmgYaFF5DbnrNUX6pMYz9rcnDKC2tuAc") , "normal" );
  assert.ok( isValidAddress("K64", "bFn413mChN4LPydzFiTxoXC1NwMMinzYsP") , "multisig" );
});

QUnit.test( "VRSC: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("KMD", "RNJmgYaFF5DbnrNUX6pMYz9rcnDKC2tuAc") , "normal" );
  assert.ok( isValidAddress("KMD", "bFn413mChN4LPydzFiTxoXC1NwMMinzYsP") , "multisig" );
});

QUnit.test( "HUSH: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("HUSH", "RNJmgYaFF5DbnrNUX6pMYz9rcnDKC2tuAc") , "normal" );
  assert.ok( isValidAddress("HUSH", "bFn413mChN4LPydzFiTxoXC1NwMMinzYsP") , "multisig" );
});

QUnit.test( "XSG: valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("XSG", "s1V5MGQC87mmYEEYVYBHwDSgogndkiXte4N"), "normal");
  assert.ok( isValidAddress("XSG", "s3TKWLar6bZEHppF4ZR1MbPuBfe33a1bHX9"), "multisig");
});

QUnit.test( "Basic valid transparent addresses", function( assert ) {
  assert.ok( isValidAddress("PIVX", "DMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("DASH", "XMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("LTC", "LMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "GMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "AMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("DOGE", "DJ1BsBHrGaJaEcWYFGPon6a4tQqEx9yL9P") , "Passed!" );
  assert.ok( isValidAddress("RVN", "RCFoGjixZAmQ8nD23vMqkYvYpiGpa8PmSY") , "Passed!" );
});

QUnit.test( "ZEC: Sapling shielded addresses", function( assert ) {
  assert.ok( isValidAddress("ZEC", "zs18tu5wr4hlyg7m9tlkl0nhj65jmyxmvufcjpve2e6ada8k5vwn0cdfp4v0luxnwc8fa26szrfaas") , "Passed!" );
  assert.ok( isValidAddress("ZEC", "zs1e9u50cezk52gvv06v7xu3xssg5ypncc2apwngmhtwe96sqvhlca97p9wjyaxuatrs8m7shjf273") , "Passed!" );
});

QUnit.test( "HUSH: Sapling shielded addresses", function( assert ) {
  assert.ok( isValidAddress("HUSH", "zs18tu5wr4hlyg7m9tlkl0nhj65jmyxmvufcjpve2e6ada8k5vwn0cdfp4v0luxnwc8fa26szrfaas") , "Passed!" );
  assert.ok( isValidAddress("HUSH", "zs1e9u50cezk52gvv06v7xu3xssg5ypncc2apwngmhtwe96sqvhlca97p9wjyaxuatrs8m7shjf273") , "Passed!" );
});

QUnit.test( "ARRR: Sapling shielded addresses", function( assert ) {
  assert.ok( isValidAddress("ARRR", "zs18tu5wr4hlyg7m9tlkl0nhj65jmyxmvufcjpve2e6ada8k5vwn0cdfp4v0luxnwc8fa26szrfaas") , "Passed!" );
  assert.ok( isValidAddress("ARRR", "zs1e9u50cezk52gvv06v7xu3xssg5ypncc2apwngmhtwe96sqvhlca97p9wjyaxuatrs8m7shjf273") , "Passed!" );
});

QUnit.test( "ARRR: Invalid Sapling shielded addresses", function( assert ) {
  assert.notOk( isValidAddress("ARRR", "zs18tu5wr4hlyg7m9tlkl0nhj65jmyxmvufcjpve2e6ada8k5vwn0cdfp4v0luxnwc8fa26szrfaa") , "Passed!" );
  assert.notOk( isValidAddress("ARRR", "zs2e9u50cezk52gvv06v7xu3xssg5ypncc2apwngmhtwe96sqvhlca97p9wjyaxuatrs8m7shjf2733") , "Passed!" );
  //TODO:
  //assert.notOk( isValidAddress("ARRR", "zs1e9u50cezk52gvv06v7xu3xssg5ypncc2apwngmhtwe96sqvhlca97p9wjyaxuatrs8m7shjf2733") , "Passed!" );
});

//they are technically valid, but this test is not working correctly
//QUnit.test( "ARRR: Sprout addresses not considered valid", function( assert ) {
//  assert.notOk( isValidAddress("ARRR",
//        "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC"),
//        "Passed!" );
//});
//
QUnit.test( "HUSH: Sprout addresses not considered valid", function( assert ) {

  isValidAddress("HUSH", "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC");

  assert.notOk( isValidAddress("HUSH",
        "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC"),
        "Passed!" );
});

QUnit.test( "ZEC: Sprout shielded addresses", function( assert ) {
  assert.ok( isValidAddress("ZEC",
        "zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC"),
        "Passed!" );
});
