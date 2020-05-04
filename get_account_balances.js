const Web3 = require("web3");

//const web3 = new Web3("https://rinkeby.infura.io/v3/c2bac3aa211441dc964995ef0cdb3629");
const web3 = new Web3("HTTP://127.0.0.1:8545");
const myMetaMaskAdress = "0x22f5413C075Ccd56D575A54763831C4c27A37Bdb"
const testAdress = "0x0A428AC6d4132dC81E50afd6D7A4311A9a6cdf24"

web3.eth.getBalance(testAdress, (err, bal) => {balance = bal}).then((result)=> {
    console.log("Balance in ETH"),
    console.log(web3.utils.fromWei(result, "ether"))
})