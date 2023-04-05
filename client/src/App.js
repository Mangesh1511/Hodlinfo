import logo from './logo.svg';
import React from 'react'
import {Navbar,Nav,Container,Row,Col,Button} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import Data from './components/Data'
import './App.css';

function App() {
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
          <Nav.Link href="https://hodlinfo.com/connect/telegram">Connect Telegram</Nav.Link>


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
