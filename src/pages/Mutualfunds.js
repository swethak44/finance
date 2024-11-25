import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import nimage from './img/nimg.png';

export default function Mutualfunds() {
  return (
    <div>
        <h2 className='mt-5' style={{textAlign:"center"}}>Invest in Mutual Funds</h2>
      <Container>
        <Row>
            <Col lg={6}>
                <h3 class="heading mt-5 text-center">Financial Mangement for Business</h3>
                <p class="bg-body-tertiary p-5 fs-6">
                    Financial management is the business function concerned with profitability expenses cash and credit 
                    Financial management is the business function concerned with profitability expenses cash and credit 
                    Financial management is the business function concerned with profitability expenses cash and credit.
                    <br />
                    <button type="button" class="btn btn-primary"> Call to Action!</button>
                </p>
            </Col>
            <Col lg={6}>
            <img className='d-block w-100 mt-4' src={nimage} alt='' />
            </Col>
        </Row>
      </Container>
    </div>
  )
}
