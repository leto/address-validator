# Cryptocoin Address Validator

Use this code tell if a given address is valid for a given cryptocoin.

The design goals of this library are:
  * Simplicity
  * Security

This code has no dependencies and defines a single function
`isValidAddress(coin,address)` which returns true or false.

The variables `coin` and `address` are assumed to be potentially-hostile user input. The main purpose of this library is to prevent easily-detectable invalid addresses from ever getting to lower-level libraries or coin daemons (like `bitcoind`).

Use at your own risk! This is currently being developed and not ready
for production use.

# Examples

    isValidAddress("BTC","notvalid") # returns false

# Supported coins

  * BTC (bech32 not supported yet)
  * KMD (and 30+ asset chains)
  * HUSH
  * LTC
  * VRSC
  * ZEC
  * ZCL
  * PIVX
  * ETH
  * ETC
  * DASH
  * GAME
  * EMC2
  * BTG
  * DOGE

# Will You Add Support For Coin X?

Yes, probably! Make it easy, and submit a Github Issue, with the coin ticker and example addresses of each type (normal, multisig, shielded, etc..).
That makes it almost trivial to add a new coin.

Even better: Patches Welcome! Please submit PR's to the master branch.

# Test Suite

Tests are written with qunit, direcly in the browser: http://duke.leto.net/address-validator/

# Supported Address Types

Both normal and multisig addresses are supported for coins that have
them.

Transparent and shielded addresses are supported, for coins with
shielded addresses. For Zcash-derived coins, Sprout and Sapling
addresses are supported.

# License

MIT

