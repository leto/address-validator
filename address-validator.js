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
      return "zs[a-z0-9]";
  }
  var addr = function (prefix,num) {
      return new RegExp("^(" + prefix + base58(num) + ")$");
  }
  var addr2 = function (p1,p2,num) {
      return new RegExp("^(" + p1 + base58(num) + ")|(" + p2 + base58(num) + ")$");
  }

  var assets = [
    "AXO", "ARRR", "BET", "BNTN", "BOTS", "BTCH",
    "CCL", "CEAL", "CHAIN", "COQUI", "DEX",
    "DION", "DSEC", "EQL", "ETOMIC", "GLXT",
    "HODL", "JUMBLR", "KMDICE", "KV", "MESH",
    "MGNX", "MGW", "MNZ", "MSHARK", "OOT",
    "PANGEA", "PGT", "PIRATE", "PIZZA", "PRLPAY",
    "REVS", "SUPERNET", "ZILLA",
  ];

  // we assume all KMD asset chains have the same address format
  // as KMD, exceptions can be listed if they exist
  if (assets.indexOf(coin) >= 0) {
      coin = "KMD";
  }

  var coinRegexen = {
    "BTC" :  new RegExp("^(3" + base58(33) + ")|(1" + base58(33) + ")$"),
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
    "HUSH":  new RegExp("^(" + sprout() + ")|(t1" + base58(33) + ")|(t3" + base58(33) + ")$"),
    // sapling activates dec 15th
    "KMD" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(33) + ")$"),
    "VRSC":  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(33) + ")$"),
    "ZEC" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(t1" + base58(33) + ")|(t3" + base58(33) + ")$"),
    "ZCL" :  new RegExp("^(" + sprout() + ")|(t1" + base58(33) + ")$"),
    //DJ1BsBHrGaJaEcWYFGPon6a4tQqEx9yL9P
    "DOGE":  addr2("D","9",33),
  };

  var regex = coinRegexen[coin];
  if (regex) {
     // validate
     log(coin + ": found coin regex: " + regex);
     if (regex.test(address)) {
        return true;
     } else {
        log(coin + ": did not match regex");
        // Rules which are not solely regex-based
        if (coin == "BTC") {
            // validate bech32
        }
        return false;
     }
  } else {
    log(coin+": no coin regex");
    return false;
  }
  return false;
}
