
QUnit.test( "Basic invalid addresses which have correct prefixes", function( assert ) {
  assert.notOk( isValidAddress("BTC", "1invalid") , "Passed!" );
  assert.notOk( isValidAddress("ETH", "0xdeadbeef") , "Passed!" );
  assert.notOk( isValidAddress("ETC", "0xdeadbeef") , "Passed!" );
  assert.notOk( isValidAddress("ZEC", "t1invalid") , "Passed!" );
  assert.notOk( isValidAddress("HUSH", "t1invalid") , "Passed!" );
});

QUnit.test( "Basic valid addresses", function( assert ) {
  assert.ok( isValidAddress("PIVX", "DMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("DASH", "XMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("LTC", "LMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "GMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
  assert.ok( isValidAddress("BTG", "AMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54") , "Passed!" );
});
