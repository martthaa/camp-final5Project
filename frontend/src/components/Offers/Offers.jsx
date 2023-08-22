import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export const Offers = () => {
  return (
    <Container>
      <Row className='cards' >
        <Col className="offer mx-auto ">
          <div className="offer__content-wrapper">
            <h3 className="offer__subtitle">Natural!!</h3>
            <h2 className="offer__title">Get Garden Fresh Fruits</h2>
          </div>
      </Col>

      <Col className="offer mx-auto  " >
        <div className="offer__content-wrapper">
          <h3 className="offer__subtitle">Natural!!</h3>
          <h2 className="offer__title">Get Garden Fresh Fruits</h2>
        </div>
      </Col>
      </Row>
    </Container>

  )
}
