function isValidAddress(coin, address) {
  // function log(str) { }
  function log(str) { console.log(str) }
  if (coin === undefined){
    return false;
  }
  if (address === undefined) {
    return false;
  }
  // returns a regex that will match num base58 chars
  var base58 = function (num) {
    var chars = "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]";
    return chars + "{" + num + "}";
  }
  var sprout = function () {
      // zcA6qngiR3U7HxYopyTWkaDLwYBd83D5MT7Jb9gpgTzPLMZytzRbtdPP1Syv4RvRgHeoZrJWSask3DyfwXG9DGPMWMvX7aC
      return "zc" + base58(93);
  }
  var sapling = function () {
  // this is bech32 format, not base58
  //zs1z7rejlpsa98s2rrrfkwmaxu53e4ue0ulcrw0h4x5g8jl04tak0d3mm47vdtahatqrlkngh9sly
      return "zs1[a-z0-9]{75}";
  }
  var addr = function (prefix,num) {
      return new RegExp("^(" + prefix + base58(num) + ")$");
  }
  var addr2 = function (p1,p2,num) {
      return new RegExp("^(" + p1 + base58(num) + ")|(" + p2 + base58(num) + ")$");
  }

  var sprout_addr2 = function (p1,p2,num) {
      return new RegExp("^(" + sprout() + ")|(" + p1 + base58(num) + ")|(" + p2 + base58(num) + ")$");
  }

  var assets = [
    "AXO", "BET", "BNTN", "BOTS", "BTCH",
    "CCL", "CEAL", "CHAIN", "COQUI", "DEX",
    "DION", "DSEC", "EQL", "ETOMIC", "GLXT",
    "HODL", "JUMBLR", "KMDICE", "KV", "K64", "MESH",
    "MGNX", "MGW", "MNZ", "MSHARK", "OOT",
    "PANGEA", "PGT", "PIRATE", "PIZZA", "PRLPAY",
    "REVS", "SUPERNET", "ZEXO", "ZILLA",
  ];

  var coinRegexen = {
    // NOTE: technically sprout addrs are valid but no longer can receive funds, let's consider invalid
    "ARRR": new RegExp("^(" + sapling() + ")|(R" + base58(33) + ")$"),
    "BTC" : new RegExp("^(3" + base58(33) + ")|(1" + base58(33) + ")$"),
    //GK18bp4UzC6wqYKKNLkaJ3hzQazTc3TWBw
    //AZoZwSr3QraTKYiqgLnnZciN1uPeFXcVnN
    "BTG" : addr2("G","A",33),
    //LeVG2zJrVGobVRE2B3Vtqo5Sgpa5bK7W1b
    "LTC" :  addr("L",33),
    //0x5f1602462af75FaEd1Ff37B4a1B8Cd05608Fd0F0
    "ETH" : new RegExp("^(0x)?[0-9A-Fa-f]{40}$"),
    "ETC" : new RegExp("^(0x)?[0-9A-Fa-f]{40}$"),
    //XdeGcsTPh4PW8saqJM1xe7EPJ1zrxbsoPE
    "DASH":  addr("X",33),
    "GAME":  addr("G",33),
    "EMC2":  addr("E",33),
    //DMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54
    "PIVX":  addr("D",33),
    // NOTE: support old HUSH v2 address validation with HUSH2 fake ticker
    "HUSH2": sprout_addr2("t1","t3", 33),
    // Sprout addresses have never been valid on HUSH v3 mainnet
    "HUSH" : new RegExp("^(" + sapling() + ")|(R" + base58(33) + ")|(b" + base58(33) + ")$"),
    //"HUSH": new RegExp("^(" + sapling() + ")|(R" + base58(33) + ")$"),
    "KMD" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(33) + ")|(b" + base58(33) + ")$"),
    "VRSC":  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(33) + ")|(b" + base58(33) + ")$"),
    "ZEC" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(t1" + base58(33) + ")|(t3" + base58(33) + ")$"),
    "ZCL" :  new RegExp("^(" + sprout() + ")|(t1" + base58(33) + ")$"),
    //DJ1BsBHrGaJaEcWYFGPon6a4tQqEx9yL9P
    "DOGE":  addr2("D","9",33),
    //s1V5MGQC87mmYEEYVYBHwDSgogndkiXte4N
    "XSG":   sprout_addr2("s1","s3",33),
    //RCFoGjixZAmQ8nD23vMqkYvYpiGpa8PmSY
    "RVN": addr("R",33),
  };

  // use KMD as a fallback if the coin does not exist
  // TODO: error if unsupported coin given
  var regex = coinRegexen[coin] ? coinRegexen[coin] : coinRegexen["KMD"];

  if (regex) {
     // validate
     log(coin + ": found coin regex: " + regex);
     if (regex.test(address)) {
        log(coin + ": " + address + " is valid!");
        return true;
     } else {
        log(coin + ": did not match regex");
        // Rules which are not solely regex-based
        if (coin == "BTC") {
            // validate bech32
        }
        log(coin + ": " + address + " is NOT valid!");
        return false;
     }
  }
  log(coin+": no coin regex");
  return false;
}
