import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from "./Footer";

import './App.css'
import './style.css'

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Mapogos from './Pages/Mapogos';
//import Test from './Pages/Test';

class App extends React.Component {

  
    constructor(props) {
      super(props);
      this.state = {
        title: 'Garrett Love',
        headerLinks: [
          { title: 'Home', path: '/home' },
          { title: 'About', path: '/about' },
          { title: 'Contact', path: '/contact' }
        ]
      }
    }
  
    render() {
        return (
          
          <Router>
            <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
            <h3><a href="https://thewildlion.net">TheWildLion</a></h3>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Switch>
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />          
          <Route exact path="/:id" component={Mapogos} />
         {/*} <Route exact path="/contact/:id" component={Test} />*/}
          <Route path="/" component={HomePage} />
          </Switch>
          <Footer />
            </Container>
          </Router> 
            
        );
      }
    }
    
export default App;
