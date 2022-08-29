import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 } from "uuid";
import {Container, Col, Row} from "reactstrap";
import CartItem from "./CardItem";

const apiKey = "your key";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localurl = "http://myjson.dit.upm.es/api/bins/ebr0";

const BuyPage = ({ addCart }) => {
    const [product, setProduct] = useState([]);
  
    //   const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //       header: {
    //         Authorization: apiKey
    //       }
    //     });
  
    const fetchPhotos = async () => {
      const { data } = await Axios.get(localurl, {});
  
      const { photos } = data;
  
      const allProduct = photos.map(photo => ({
        smallImage: photo.src.medium,
        tinyImage: photo.src.tiny,
        productName: "laptop",
        productPrice: "10000",
        id: v4()
      }));
  
      setProduct(allProduct);
    };
  
    useEffect(() => {
      fetchPhotos();
    }, []);
  
    return (
      <Container fluid>
        <h1 className="text-success text-center">Buy Page</h1>
        <Row>
          {product.map(product => (
            <Col md={4} key={product.id}>
              <CartItem product={product} addCart={addCart}/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default BuyPage;
  