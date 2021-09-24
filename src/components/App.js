import React from "react";
import Profile from "./Profile/Profile.js";
import user from "./Profile/user.json";
import Statistics from "./Statistics/Static.js";
import statisticalData from "./Statistics/statistical-data.json";
import FriendList from "./Friends/Friends.js";
import friends from "./Friends/friends.json";
import TransactionHistory from "./Transactions/Transaction.js";
import transactions from "./Transactions/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={statisticalData} />;
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </>
);

export default App;
