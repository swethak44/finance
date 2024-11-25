import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import DataGridDemo from './DataGridDemo';

export default function Shares() {
  return (
    <div>
      <Container>
        <Row>
            <Col lg={6} className='mt-5'>
                <DataGridDemo />
            </Col>
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
        </Row>
      </Container>
    </div>
  )
}
