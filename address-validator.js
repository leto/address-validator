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
      return "zc" + base58(93);
  }
  var sapling = function () {
      return "zs" + base58(7777);
  }
  var addr = function (prefix,num) {
      return new RegExp("^(" + prefix + base58(num) + ")$");
  }
  var AC = [
  ];
  // each coin should have 1 single regex matching all valid addresses
  var coinRegexen = {
    // "HUSH" : /^(zc{93}|t1[a-hjkmnp-z1-9]{33})$/i,
    //"HUSH" : new RegExp("^(zc" + base58(93) + ")|(t1" + base58(33) + ")$"),
    "BTC" :  new RegExp("^(3" + base58(33) + ")|(1" + base58(33) + ")$"),
    //LeVG2zJrVGobVRE2B3Vtqo5Sgpa5bK7W1b
    "LTC" :  addr("L",33),
    //0x5f1602462af75FaEd1Ff37B4a1B8Cd05608Fd0F0
    "ETH" : new RegExp("^(0x)?[0-9a-f]{40}$"),
    //XdeGcsTPh4PW8saqJM1xe7EPJ1zrxbsoPE
    "DASH":  addr("X",33),
    //DMkYTxdS4a6gWqxcDy4xkNcSAbFpWR9T54
    //"PIVX" : new RegExp("^(D" + base58(33) + ")$"),
    "PIVX":  addr("D",33),
    "HUSH":  new RegExp("^(" + sprout() + ")|(t1" + base58(33) + ")$"),
    "KMD" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(34) + ")$"),
    "VRSC":  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(R" + base58(34) + ")$"),
    "ZEC" :  new RegExp("^(" + sapling() + ")|(" + sprout() + ")|(t1" + base58(33) + ")|(t3" + base58(33) + ")$"),
  };

  var regex = coinRegexen[coin];
  if (regex) {
     // validate
     log("found coin regex: " + regex);
     if (regex.test(address)) {
        return true;
     } else {
        log("did not match regex");
        return false;
     }
  } else {
    log("no coin regex");
    return false;
  }
  return false;
}
