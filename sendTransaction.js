const Web3 = require("web3");

const web3 = new Web3("https://rinkeby.infura.io/v3/c2bac3aa211441dc964995ef0cdb3629");
//const web3 = new Web3("HTTP://127.0.0.1:8545");
const myMetaMaskAdress = "0x22f5413C075Ccd56D575A54763831C4c27A37Bdb"
//const sender = "0x0A428AC6d4132dC81E50afd6D7A4311A9a6cdf24"
//const receiver = "0xF00D92F1513D238Ce908D34DC18fDaeAB5A8c4EF"
const receiver = "0x6A1933FfC10F0F32961cC1F028b6b0f433991F6F"
const sender = "0x22f5413C075Ccd56D575A54763831C4c27A37Bdb"

console.log("Initial State");

web3.eth.getBalance(sender, (err, bal) => {balance = bal}).then((result)=> {
    console.log("Sender Balance"),
    console.log(web3.utils.fromWei(result, "ether"))
});

web3.eth.getBalance(receiver, (err, bal) => {balance = bal}).then((result)=> {
    console.log("Receiver Balance"),
    console.log(web3.utils.fromWei(result, "ether"))
});


web3.eth.sendTransaction({
    from: sender,
    to: receiver,
    value: '1000000000000000000'
}).on('confirmation', (confirmationNumber, receipt) => { 
    web3.eth.getBalance(sender, (err, bal) => {balance = bal}).then((result)=> {
        console.log("Send Transaction...."),
        console.log("Sender Balance"),
        console.log(web3.utils.fromWei(result, "ether"))
    }),

    web3.eth.getBalance(receiver, (err, bal) => {balance = bal}).then((result)=> {
        console.log("Receiver Balance"),
        console.log(web3.utils.fromWei(result, "ether"))
    })
});

