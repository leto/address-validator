# Cryptocoin Address Validator

Use this code tell if a given address is valid for a given cryptocoin.

The design goals of this library are:
  * Simplicity
  * Security

This code has no dependencies and defines a single function
`isValidAddress(coin,address)` which returns true or false.

# Examples

    isValidAddress("BTC","notvalid") # returns false

# Supported coins

  * BTC
  * LTC
  * KMD (and asset chains)
  * HUSH
  * VRSC
  * ZEC
  * ZCL
  * PIVX
  * ETH
  * ETC
  * DASH
  * GAME
  * EMC2
