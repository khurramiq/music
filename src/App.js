import React from "react";
import { Switch, Route } from "react-router-dom";
import RoyaltyFreeMusic from "./pages/royaltyFreeMusic";
import "./App.css";
import MusicDetail from "./pages/musicDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/royalty-free-music" component={RoyaltyFreeMusic} />
        <Route exact path="/" component={RoyaltyFreeMusic} />
        <Route exact path="/royalty-free-music/:title" component={MusicDetail} />
      </Switch>      
    </div>
  );
}

export default App;
