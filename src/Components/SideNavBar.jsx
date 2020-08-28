import React from "react";
import { Nav, ListGroup, InputGroup, Image, Button } from "react-bootstrap";
import {withRouter} from 'react-router-dom'

const SideNavBar = (props) => {
  return (
    window.location.pathname === '/loginPage' || window.location.pathname === '/register'  ? <div className="mt-5"/> :
    <div className="leftCol">
      <Nav
        id="side-nav"
        className="side-nav-class side-nav-bar"
        role="navigation"
      >
        <div>
          <div className="logo-class pl-2">
            <Image src="assets/logo.png" alt="spotify logo" width="100px" />
          </div>
          <ul>
            <li>
              <div className="sidenav-icons">
                <i className="fa fa-home"></i>
              </div>
              <div>
                <a className="ml-2" onclick="sideClick(event)" href="#">
                  Home
                </a>
              </div>
            </li>
            <li id="search" onclick="createsearchDiv()">
              <div className="sidenav-icons">
                <i className="fa fa-search"></i>
              </div>
              <div>
                <a className="ml-2" onclick="sideClick(event)" href="#">
                  Search
                </a>
              </div>
            </li>
            <ListGroup.Item id="userinput" className="d-none">
              <InputGroup.Text id="userinputsearch" />
            </ListGroup.Item>
            <li>
              <div className=" d-none"></div>

              <div className="sidenav-icons">
                <i class="fa fa-book"></i>
              </div>
              <div>
                <a className="ml-2" href="#">
                  Library
                </a>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="pb-5">
                <ul className="bottom-ul" style={{marginBottom:'5rem'}}>
                    
                        <button type="button" className="btn btn-light py-1 styleBtnLight" style={{width: '100%' }}>SIGN UP</button>
                    
                    
                        <button type="button" className="btn btn-dark my-1 py-1 styleBtn"style={{width: '100%'}} onclick="window.location.href='index.html'">LOGIN</button>
                   <div className="footer-spans">
                    <li className="aling-span">
                        <span className="side-bar-footer">Cookie</span><span className="side-bar-footer">|</span><span
                            className="side-bar-footer">Privacy </span>
                    </li>
                    <li id ="policy"className="aling-span">
                        <span className="side-bar-footer">Policy</span>
                    </li>
                </div>
                </ul>
            </div> */}
      </Nav>
    </div>
  );
};

export default withRouter(SideNavBar);
