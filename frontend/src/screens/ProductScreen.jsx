import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Modal, Form, Button } from "react-bootstrap";
//import { Button } from "../utils/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Rating from "../components/Rating/Rating";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

//import axios from 'axios';
//import products from '../products';

const ProductScreen = () => {
  //const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  //const product = products.find((p) => p._id === productId);
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(true);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review Submitted");
      setRating(0);
      setComment("");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Row></Row>

      <Modal show={showModal} centered>
        <Modal.Dialog
          style={{
            width: "100%",
            border: "none",
            backgroundColor: "white",
            padding: "80px",
          }}
        >
          {/* <Modal.Title>Product Modal</Modal.Title> */}
          <div style={{ textAlign: "right" }}>
            <Link to="/" className="btn btn-light">
              Go Back
            </Link>
          </div>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">
              {error?.data?.messaage || error.error}
            </Message>
          ) : (
            <Modal.Body>
              <>
                <Row>
                  <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                  </Col>
                  <Col md={7}>
                    <div className="productScreen__container">
                      <h3 style={{ color: "#274C5B", fontFamily: "Roboto" }}>
                        {product.name}
                      </h3>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                      <p>
                        {" "}
                        Price: <strong>${product.price}</strong>
                      </p>
                      <p>
                        <strong>Product Description:</strong>{" "}
                        {product.description}
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}></Col>
                  <Col md={7}>
                    <div className="align">
                      <ListGroup variant="flush">
                        <Row className="align-items-center">
                          <Col md={3} className="d-flex align-items-center">
                            <div
                              style={{
                                marginLeft: "20px",
                                color: "#274C5B",
                                fontFamily: "Roboto",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                              }}
                            >
                              Status:
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                              <strong
                                style={{ color: "#274C5B", fontWeight: "800" }}
                              >
                                {product.countInStock > 0
                                  ? "In Stock"
                                  : "Out of Stock"}
                              </strong>
                            </div>
                          </Col>

                          {product.countInStock > 0 && (
                            <Col md={3} className="d-flex align-items-center">
                              <div
                                style={{
                                  color: "#274C5B",
                                  fontFamily: "Roboto",
                                  fontSize: "15px",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                }}
                              >
                                Quantity
                              </div>
                              <div style={{ marginLeft: "20px" }}>
                                <Form.Control
                                  style={{
                                    borderRadius: "16px",
                                    border: "2px solid #274C5B",
                                    background: "#FFF",
                                    padding: "15px 40px",
                                  }}
                                  as="select"
                                  value={qty}
                                  onChange={(e) =>
                                    setQty(Number(e.target.value))
                                  }
                                >
                                  {[...Array(product.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </Form.Control>
                              </div>
                            </Col>
                          )}

                          <Col md={4}>
                          
                          <Button
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}
                            onClick={addToCartHandler}
                          >
                            Add To Cart
                          </Button>
                 
                          </Col>
                        </Row>
                      </ListGroup>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{ marginTop: "20px", color: "#274C5B" }}>
                    <h2>Reviews</h2>
                    {product.reviews.length === 0 && (
                      <Message>No Reviews</Message>
                    )}
                    <ListGroup variant="flush">
                      {product.reviews.map((review) => (
                        <ListGroup>
                          <strong>{review.name}</strong>
                          <Rating value={review.rating} />
                          <p>{review.createdAt.substring(0, 10)}</p>
                          <p>{review.comment}</p>
                        </ListGroup>
                      ))}
                      <ListGroup.Item>
                        <h2>Write a Customer Review</h2>
                        {loadingProductReview && <Loader />}

                        {userInfo ? (
                          <Form onSubmit={submitHandler}>
                            <Form.Group controlId="rating" className="my-2">
                              <Form.Label>Rating</Form.Label>
                              <Form.Control
                                as="select"
                                value={rating}
                                onChange={(e) =>
                                  setRating(Number(e.target.value))
                                }
                              >
                                <option value="">Select...</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="comment" className="my-2">
                              <Form.Label>Comment</Form.Label>
                              <Form.Control
                                as="textarea"
                                row="3"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                              ></Form.Control>
                            </Form.Group>
                            <Button
                              disabled={loadingProductReview}
                              type="submit"
                              text="Submit"
                              color="darkBlue"
                            >
                              Submit
                            </Button>
                          </Form>
                        ) : (
                          <Message>
                            Please <Link to="/login">sign in</Link> to write a
                            review{" "}
                          </Message>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </>
            </Modal.Body>
          )}
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default ProductScreen;
