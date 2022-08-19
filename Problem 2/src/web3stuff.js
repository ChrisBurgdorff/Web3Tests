const web3 = new Web3("https://cloudflare-eth.com");

web3.eth.getBlockNumber(function(error, result) {
  alert("OK");
  console.log(result);
});