// Home.js
import React, { useState } from "react";
import "./Home.css";

const Home = ({ handleBidButtonClick }) => {
  const [user, setUser] = useState("");
  const [walletConnected, setWalletConnected] = useState(null);

  const handleOptionChange = (event) => {
    setUser(event.target.value);
  };

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        const formattedAddress = `${address.substring(
          0,
          5
        )} .... ${address.substring(address.length - 5)}`;
        setWalletConnected(formattedAddress);
        console.log("Connected to MetaMask wallet");
      } else {
        console.log("MetaMask not detected");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask wallet:", error);
    }
  };

  return (
    <div>
      <div className="navbar">
        <h1 className="title">Auction</h1>
        <button className="connect-wallet-button" onClick={connectWallet}>
          {walletConnected ? `Connected: ${walletConnected}` : "Connect Wallet"}
        </button>
      </div>
      <div className="container">
        <div className="select-wrapper">
          <select value={user} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            <option value="org1 bidder1">org1 bidder1</option>
            <option value="org1 bidder2">org1 bidder2</option>
            <option value="org2 bidder3">org2 bidder3</option>
            <option value="org2 bidder1">org2 bidder1</option>
            <option value="org1 seller">org1 seller</option>
          </select>
        </div>
        <div className="button-wrapper">
          <button onClick={() => handleBidButtonClick(user, walletConnected)}>
            {user === "org1 seller" ? "Create Auction" : "Bid on Auction"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
