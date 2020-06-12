import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './Components/SideNavBar'
import FunctionBar from './Components/FunctionBar'
import 'font-awesome/css/font-awesome.min.css';
import Topnav from './Components/Topnav';
import Gallery from './Components/Gallery';
import Tracks from './Components/Tracks'
import {BrowserRouter as Router,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
      <Topnav/>
      <SideNavBar/>
      {/* <Route path='/' exact component={Gallery}/> */}
      <Gallery/>
      <FunctionBar/>
      {/* <Route path='/tracks:id' exact component={Tracks}/> */}
      </Router>
    
    </div>
  );
}

export default App;
