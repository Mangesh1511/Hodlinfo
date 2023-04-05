import logo from './logo.svg';
import React from 'react'
import {Navbar,Nav,Container,Row,Col,Button,NavDropdown} from 'react-bootstrap';
import {BootstrapSwitchButton} from 'bootstrap-switch-button-react'
import { MDBSwitch } from 'mdb-react-ui-kit';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Data from './components/Data'
import './App.css';

function App() {
  const [toggle,settoggle]=useState(true);
  const ModeChanger=(e)=>{
    e.preventDefault();
    
    if(toggle)
    {
        var element=document.body;

        element.classList.toggle('light-mode');

         element=document.getElementsByClassName('table');
        element.classList.toggle('table-light');

    }
    else
    {
      element=document.getElementsByClassName('table-light');
      element.classList.toggle('table');
    }
    
    settoggle(!toggle);
    return;
  }
  return (
    <div className="app">
      <header>
      <Navbar>
         
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="./images/logo.png"
              width="130"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <NavDropdown title="INR" id="basic-nav-dropdown">
                  
                      <NavDropdown.Item></NavDropdown.Item>
                 
                  
                 
                    
                  </NavDropdown>
          <Nav.Link href="https://hodlinfo.com/connect/telegram"><img src='./images/tele.png'/>Connect Telegram</Nav.Link>

          <MDBSwitch defaultChecked id='flexSwitchCheckChecked' label='' onChange={ModeChanger} />
      <br />

      </Navbar>
      </header>
      <main>
        <Data/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
