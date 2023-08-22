// import React, { useState } from 'react';
// import { Card, Button } from 'react-bootstrap';
// import Rating from '../Rating/Rating';

// export const Product = ({ product }) => {
//   return (
//     <Card className="my-3 p-3 rounded">
//       <Card.Img src={product.image} variant="top" />
      
//       <Card.Body>
//         <Card.Title as='div'>
//           <strong>{product.name}</strong>
//         </Card.Title>
        
//         <Card.Text as='div'>
//           <Rating value={product.rating} text={`${product.numReviews} reviews `} />
//         </Card.Text>
        
//         <Card.Text as="h3">
//           ${product.price}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// const ProductList = ({ products }) => {
//   const [showAllCards, setShowAllCards] = useState(false);

//   const toggleCards = () => {
//     setShowAllCards(!showAllCards);
//   };

//   const visibleProducts = showAllCards ? products : products.slice(0, 8);

//   return (
//     <div>
//       {visibleProducts.map(product => (
//         <Product key={product._id} product={product} />
//       ))}
      
//       {showAllCards ? (
//         <Button variant="primary" onClick={toggleCards}>
//           Hide
//         </Button>
//       ) : (
//         <Button variant="primary" onClick={toggleCards}>
//           Load More
//         </Button>
//       )}
//     </div>
//   );
// };

// export default ProductList;


import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import React from 'react';

export const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 product-card">
      <div className="product-card__category">{product.category}</div>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />  
      </Link> 

      <Card.Body className='product-card__content'>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews `} />
        </Card.Text>

        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

