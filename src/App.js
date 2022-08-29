import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

import {Container, Col, Row} from "reactstrap";
import Cart from './components/Cart';
import BuyPage from './components/BuyPage';
function App() {

  const[cartItem, setCartItem] = useState([]);


  const addCart = item =>{

    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("item is already added", {
        type:"error"
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyItem = () =>{
    setCartItem([]);
    toast("purchase complete", {
      type:"success"
    });
  };

  const removeItem = item =>{
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };


  return (
    <Container fluid>
    <ToastContainer />
    <Row>
      <Col md="8">
        <BuyPage addCart={addCart} />
      </Col>
      <Col md="4">
        <Cart cartItem={cartItem} removeItem={removeItem} buyItem={buyItem} />
      </Col>
    </Row>
  </Container>
);
}

export default App;
