import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Product } from "../Product/Product";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
//import products from '../../products';

export const OfferCard = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const vegetableProducts = products
    ?.filter((product) => product.category === "Vegetable")
    .slice(0, 4);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <div className="offer-cards">
            <Container>
              <div className="offer-cards__subtitle">Offer</div>
              <div className="offer-cards__title">We Offer Organic For You</div>
              <Row>
                {vegetableProducts?.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default OfferCard;

//     <>
//     {isLoading ? (
//       <Loader/>
//     ) : error ? (<Message variant='danger'>{error?.data?.messaage || error.error}</Message>) : (<>
//         <div className='offer-cards'>
//         <Container>
//         <div className="offer-cards__subtitle">Offer</div>
// 			<div className="offer-cards__title">
// 				We Offer Organic For You
// 			</div>
//       <Row>
//         {vegetableProducts.map(product => (
//           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//             <Product product={product} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//     </div>
//     </>

// <>
