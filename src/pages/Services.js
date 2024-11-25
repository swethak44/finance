import React from 'react';
import './services.css';

export default function Services() {
  return (
    <div>
        <div>
            <h1 style={{textAlign:"center", marginTop:"10px"}}>Our Services</h1>
        </div>
        <div className="services">
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-calendar'></i>
                </div>
                <h2 style={{color:"#c94f4f", marginBottom:"20px"}}>Planning</h2>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                <a href=" " class="button">Read More</a>

            </div>
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-wrench'></i>
                </div>
                <h2 style={{color:"#c94f4f", marginBottom:"20px"}}>Renovation</h2>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                <a href=" " class="button">Read More</a>

            </div>
            <div className='card'>
                <div className='icon'>
                    <i className='fas fa-handshake'></i>
                </div>
                <h2 style={{color:"#c94f4f", marginBottom:"20px"}}>Support</h2>
                <p>
                    Financial management is the business function concerned with profitability expenses cash and credit
                </p>
                <a href=" " class="button">Read More</a>

            </div>
        </div>
    </div>
  )
}
