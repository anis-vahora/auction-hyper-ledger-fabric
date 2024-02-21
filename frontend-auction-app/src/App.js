import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AuctionListPage from "./Components/AuctionListPage";

function App() {
  const handleBidButtonClick = (user, walletConnected) => {
    if (user !== "org1 seller" && walletConnected) {
      window.location.href = "/auction-list";
    } else if (user == "") {
      alert("Select a User");
    } else if (!walletConnected) {
      alert("Connect Wallet to Bid on Auction");
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home handleBidButtonClick={handleBidButtonClick} />
        </Route>
        <Route exact path="/auction-list" component={AuctionListPage} />
      </Switch>
    </Router>
  );
}

export default App;
