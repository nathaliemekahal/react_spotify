import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavBar from "./Components/SideNavBar";
import FunctionBar from "./Components/FunctionBar";
import "font-awesome/css/font-awesome.min.css";
import Topnav from "./Components/Topnav";
import Gallery from "./Components/Gallery";
import Tracks from "./Components/Tracks";
import SearchResults from "./Components/SearchResults";
import LoginPage from "./Components/LoginPage";
import Register from './Components/Register'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <SideNavBar />
        <Topnav />
        <Route path="/register" component={Register}/>
        <Route path="/home" exact component={Gallery} />
        <Route path="/tracks/:id" exact component={Tracks} />
        <Route path="/loginPage" exact component={LoginPage} />
        <Route path="/searchResults/:query" exact component={SearchResults} />
        <FunctionBar />
        <Route path="/tracks:id" exact component={Tracks} />
      </Router>
    </div>
  );
}

export default App;
