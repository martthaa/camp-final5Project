import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Modal } from 'react-bootstrap';
import Rating from '../components/Rating/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
//import axios from 'axios';
//import products from '../products';

const ProductScreen = () => {
    //const [product, setProduct] = useState({});

  const { id: productId } = useParams();
  //const product = products.find((p) => p._id === productId);
  const {data:product, isLoading, error} = useGetProductDetailsQuery()
  
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Row>
        {/* Your product information rendering */}
      </Row>

      <Modal show={showModal} centered>
        <Modal.Header >
          <Modal.Title>Product Modal</Modal.Title>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
        </Modal.Header>
        <Modal.Body>
          {/* Add modal content here */}
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
                            <ListGroup.Item>
                                <Button
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}
                                >Add To Cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>


        </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductScreen;




// import { useParams } from "react-router-dom";
// import {Link} from 'react-router-dom';
// import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
// import Rating from '../components/Rating/Rating'
// import products from '../products';

// import React from 'react'

// const ProductScreen = () => {
//     const { id: productId } = useParams();
//     const product = products.find((p) => p._id === productId);
    

//   return (
//     <>
       
//     </>
//   )
// }

// export default ProductScreen

{/* <Link className="btn btn-llight my-3" to="/" > Go Back </Link> */}