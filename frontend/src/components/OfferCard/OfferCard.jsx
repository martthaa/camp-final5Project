import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Product } from '../Product/Product';
import products from '../../products';

export const OfferCard = () => {
  const vegetableProducts = products.filter(product => product.category === 'Vegetable').slice(0, 4);

  return (
    <div className='offer-cards'>
        <Container>
        <div className="offer-cards__subtitle">Offer</div>
			<div className="offer-cards__title">
				We Offer Organic For You
			</div>
      <Row>
        {vegetableProducts.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    
  );
};

export default OfferCard;


// import {Row, Col, Container} from 'react-bootstrap';
// import {Product} from '../Product/Product'
// import products from '../../products';
// import React from 'react'

// export const OfferCard = () => {
//   return (
//     <>
//         <Container>
//         <Row>
//             {products.map((product) => (
//                 <Col sm={12} md={6} lg={4} xl={3}>
//                     <Product product={product} />
//                 </Col>
//             ))}
//         </Row>
//         </Container>
        
//     </>
//   )
// }

