import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Modal,
  ListGroup,
  Image,
  Card
} from "react-bootstrap";
import { toast } from "react-toastify";
import CheckOutSteps from "../components/CheckOutSteps/CheckOutSteps";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import { useCreateOrderMutation } from "../slices/OrdersApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <Modal
      className="login no-shadow"
      show={showModal}
      style={{ backgroundColor: "#f5d57f", color: "#274C5B" }}
    >
      <div style={{ padding: "0 40px" }}>
        <CheckOutSteps step1 step2 step3 step4 />
        <Row style={{ paddingTop: "20px" }}>
          <Col md={8}>
            <ListGroup.Item style={{ borderBottom: "1px solid grey" }}>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item
              style={{
                borderBottom: "1px solid grey",
                margin: "20px 0",
                padding: "0 0 10px 0",
              }}
            >
              <h2>Payment Method</h2>
              <strong>Method:</strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>

              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          ></Image>
                        </Col>

                        <Col>
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items:</Col>
                    <Col>${cart.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Shipping:</Col>
                    <Col>${cart.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Tax:</Col>
                    <Col>${cart.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Total:</Col>
                    <Col>${cart.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  {error && (
                    <Message variant="danger">{error.data.message}</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cart.cartItems.length === 0}
                    onClick={placeOrderHandler}
                  >
                    Place Order
                  </Button>
                  {isLoading && <Loader />}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default PlaceOrderScreen;
