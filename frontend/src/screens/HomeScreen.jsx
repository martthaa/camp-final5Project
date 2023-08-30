import { useState } from "react";
import Loader from "../components/Loader/Loader";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Product } from "../components/Product/Product.jsx";
import { Button } from "../utils/Button/Button";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message/Message";
//import axios from 'axios';
//import products from '../products';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const initialCardsToShow = 8;
  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + initialCardsToShow);
  };

  const handleHide = () => {
    setCardsToShow(initialCardsToShow);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.messaage || error.error}
        </Message>
      ) : (
        <>
          <Container>
            <div className="products">
              <div className="products__subtitle">Categories</div>
              <div className="products__title">Our Products</div>
              <Row className="products__carts">
                {products.slice(0, cardsToShow).map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              {cardsToShow < products.length && (
                <div className="center-container">
                  <Button
                    color="darkBlue"
                    text="Load More"
                    onClick={handleLoadMore}
                  >
                    Load More
                  </Button>
                </div>
              )}
              {cardsToShow > products.length && (
                <div className="center-container">
                  <Button text="Hide All" color="darkBlue" onClick={handleHide}>
                    Hide
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
