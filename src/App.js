import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavBar from './Components/SideNavBar'
import FunctionBar from './Components/FunctionBar'
import 'font-awesome/css/font-awesome.min.css';
import Topnav from './Components/Topnav';
import Gallery from './Components/Gallery';


function App() {
  return (
    <div className="App">
      <Topnav/>
      <SideNavBar/>
      <Gallery/>
      <FunctionBar/>
    
    </div>
  );
}

export default App;
