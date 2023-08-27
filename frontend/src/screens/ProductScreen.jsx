import {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Modal, Form } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import Rating from '../components/Rating/Rating';
import Loader from '../components/Loader/Loader';
import Message from '../components/Message/Message';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';

//import axios from 'axios';
//import products from '../products';

const ProductScreen = () => {
    //const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);



  //const product = products.find((p) => p._id === productId);
  const {data:product, isLoading, error} = useGetProductDetailsQuery(productId);
  
  const [showModal, setShowModal] = useState(true);

  const addToCartHandler = () => {
    dispatch(addToCart({...product, qty}));
    navigate('/cart');
  }

  return (
    <>
      <Row>
        
      </Row>

      <Modal show={showModal} centered>
      <Modal.Dialog  style={{width: '100%', border: 'none', backgroundColor: 'white'}}>
      <Modal.Header >
          <Modal.Title>Product Modal</Modal.Title>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
        </Modal.Header>
        {isLoading ? (
            <Loader />
        ) : error ? (
            (<Message variant='danger'>{error?.data?.messaage || error.error}</Message>)
        ) : (
            <Modal.Body>
            
            <p>Modal content goes here...</p>
              <Row>
                  <Col md={5}>
                      <Image src={product.image} alt={product.name} fluid />
                  </Col>
                  <Col md={4}>
                      <ListGroup variant='flush'>
                          <ListGroup.Item>
                              <h3>{product.name}</h3>
                          </ListGroup.Item>
                          <ListGroup.Item>
                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                          </ListGroup.Item>
                          <ListGroup.Item> Price: ${product.price}</ListGroup.Item>
                          <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                      </ListGroup>
                  </Col>
                  <Col md={3}>
                      <Card>
                          <ListGroup variant='flush'>
                              <ListGroup.Item>
                                  <Row>
                                      <Col>Price:</Col>
                                      <Col>
                                          <strong>${product.price} </strong>
                                      </Col>
                                  </Row>
                              </ListGroup.Item>
  
                              <ListGroup.Item>
                                  <Row>
                                      <Col>Status:</Col>
                                      <Col>
                                          <strong>${product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </strong>
                                      </Col>
                                  </Row>
                              </ListGroup.Item>
                              {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                            {[...Array(product.countInStock).keys()].map((x) => 
                                            (<option key={ x + 1} value={ x+1 }> 
                                                {x+1}
                                            </option>))}
                                        </Form.Control>
                                    </Col>
                                    </Row>
                                </ListGroup.Item>
                              )}
                              <ListGroup.Item>
                                  <Button
                                      className='btn-block'
                                      type='button'
                                      disabled={product.countInStock === 0}
                                      onClick={addToCartHandler}
                                  >Add To Cart</Button>
                              </ListGroup.Item>
  
                          </ListGroup>
                      </Card>
                  </Col>
              </Row>
  
  
          </Modal.Body>
        )}
        
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal.Dialog>
        
      </Modal>
    </>
  );
};

export default ProductScreen;

