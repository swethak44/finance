import React from 'react'
import { Container,Row,Col} from 'react-bootstrap';
// import fimage from './img/fimg.jpg';
import mimage from './img/mimg.png';

export default function About() {
  return (
    <div>
      <Container>
        <h2 className="mt-3 " style={{textAlign:"center"}}>About Us</h2>
        <hr />
        <Row>
            <Col lg={6}>
                <img className='d-block w-100 mt-4' src={mimage} alt='' />
            </Col>
            <Col lg={6} >
                <h3 class="heading mt-5 text-center">Financial Mangement for Business</h3>
                <p class="bg-body-tertiary p-5 fs-6">
                    Financial management is the business function concerned with profitability expenses cash and credit 
                    Financial management is the business function concerned with profitability expenses cash and credit 
                    Financial management is the business function concerned with profitability expenses cash and credit.
                    <br />
                    <button type="button" class="btn btn-primary"> Call to Action!</button>
                </p>
            </Col>
        </Row>
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
            <Col lg={6} >
                <img className='d-block w-100 mt-3' src={mimage} alt='' />
            </Col>
            
        </Row>
      </Container>
    </div>
  )
}
