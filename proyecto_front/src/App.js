import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
import Login from './components/login/login';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/login/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Login />
      </Container>
    </div>
  );
}

export default App;
