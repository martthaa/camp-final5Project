import { useState } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer/FormContainer";
import { saveShippingAddress } from "../slices/cartSlice";
import CheckOutSteps from "../components/CheckOutSteps/CheckOutSteps";

import React from "react";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");
  //const [number, setNumber] = useState(shippingAddress?.number || "");
  //const [message, setMessage] = useState(shippingAddress?.message || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <Modal
      className="login no-shadow"
      centered
      show={showModal}
      style={{ border: "none", backgroundColor: "#f5d57f", color: "#274C5B" }}
    >
      <FormContainer>
        <CheckOutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address" className="my-2" md={2}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter adress"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* <Form.Group controlId='number' className='my-2'>
                    <Form.Label>Number</Form.Label>
                    <Form.Control type='text' placeholder='Enter number' value={number} onChange={(e) => setNumber(e.target.value)}>
                    </Form.Control>
                </Form.Group> */}

          <Form.Group controlId="city" className="my-2">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalCode" className="my-2">
            <Form.Label>Postal code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country" className="my-2">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {/* <Form.Group controlId='message' className='my-2'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type='text' placeholder='Enter message' value={message} onChange={(e) => setMessage(e.target.value)}>
                    </Form.Control>
                </Form.Group> */}

          <Button type="submit" variant="primary" className="my-2">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Modal>
  );
};

export default ShippingScreen;
