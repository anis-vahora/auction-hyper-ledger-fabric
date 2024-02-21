import React, { useState } from "react";
import "./AuctionListPage.css";

const AuctionListPage = () => {
  const auctionItems = [
    {
      name: "Sunset over the Horizon",
      description: "A breathtaking painting capturing the beauty of nature.",
      price: 0.1,
      hash: "0xabc123def456...",
    },
    {
      name: "Midnight Serenade",
      description: "A mesmerizing piece that evokes feelings of tranquility.",
      price: 0.15,
      hash: "0xfed456cba321...",
    },
    {
      name: "Vibrant Cityscape",
      description: "An energetic portrayal of urban life with vibrant colors.",
      price: 0.12,
      hash: "0x987zyx654wvu...",
    },
    {
      name: "Mystic Forest",
      description:
        "An enchanting depiction of a mystical forest with hidden wonders.",
      price: 0.11,
      hash: "0x456wvu987zyx...",
    },
    {
      name: "Dreamy Seascape",
      description:
        "A dream-like representation of the ocean's beauty and serenity.",
      price: 0.13,
      hash: "0x321cba654fed...",
    },
    {
      name: "Whimsical Garden",
      description:
        "A whimsical garden filled with colorful flowers and playful creatures.",
      price: 0.09,
      hash: "0x654fed321cba...",
    },
  ];

  const [bidInputs, setBidInputs] = useState(auctionItems.map(() => null));

  const handleInputChange = (index, value) => {
    const newBidInputs = [...bidInputs];
    newBidInputs[index] = parseFloat(value);
    setBidInputs(newBidInputs);
  };

  const handleBidButtonClick = (index) => {
    console.log(
      `Bid for ${auctionItems[index].name} with amount: ${bidInputs[index]}`
    );
  };

  return (
    <div className="auction-list-container">
      <h2 className="auction-list-title">Available Image Auctions</h2>
      <div className="auction-cards-container">
        {auctionItems.map((item, index) => (
          <div className="auction-card" key={index}>
            <div className="auction-card-section">
              <h3 className="auction-item-name">{item.name}</h3>
            </div>
            <div className="auction-card-section">
              <p className="auction-item-description">{item.description}</p>
            </div>
            <div className="auction-card-section">
              <p className="auction-item-price">Price: {item.price} ETH</p>
              <p className="auction-item-hash">Hash: {item.hash}</p>
            </div>
            <div className="auction-card-section">
              <button
                className="auction-bid-button"
                onClick={() => handleBidButtonClick(index)}
              >
                Bid{" "}
                {bidInputs[index] ? item.price + bidInputs[index] : item.price}{" "}
                ETH
              </button>
              <input
                type="number"
                value={bidInputs[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder="Raise bid amount"
                className="auction-bid-input"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionListPage;
