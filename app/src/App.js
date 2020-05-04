import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3";

const App = () => {
  const [access, setAccess] = useState(false)
  const toAddress = '0x6A1933FfC10F0F32961cC1F028b6b0f433991F6F';
  const ethAmount = "0.1"; 
  window.addEventListener('load', async () => {
    if (window.ethereum) {
      console.log("eth")
      window.web3 = new Web3(window.ethereum)
      try {
        await window.ethereum.enable();
        
      }
      catch(error){
        console.error(error)
      }
    }
  })

  function sendTransaction(){
    window.web3.eth.getAccounts().then(e => {
      window.web3.eth.sendTransaction({
        from: e[0],
        to: toAddress,
        value: window.web3.utils.toWei(ethAmount, 'ether')
      },
      function(error, result){
        if (error) {
          document.getElementById('output').innerHTML = "Something went wrong!"
        } else {
          document.getElementById('output').innerHTML = "Track the payment: <a href='https://etherscan.io/tx/" + result + "'>https://etherscan.io/tx/" + result + "'";
          setAccess(true)
        }
      })
    })
  };

  return (
    <div className="App">
      <h2>ETH Paywall Test</h2>
      {access ? <div>Access</div> : <div>No Access</div>}
      <button onClick={sendTransaction} >Let me in</button>  
      <div id="output"></div>
    </div>
  );
};

export default App;
