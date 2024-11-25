import React from 'react';
import { Container } from 'react-bootstrap';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <Container>
        <div>
            <h1 className=" mt-4" style={{textAlign:"center", marginBottom:"80px"}}>Contact Us</h1>
            
            <div className="contact-wrapper">
                <div className='contact-form'>
                    <h4 style={{marginBottom:"20px"}}>Send us a message</h4>
                    <form>
                        <div class="form-group">
                            <input type="text" name="name" placeholder='Your Name' />

                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder='Your Email' />

                        </div>
                        <div class="form-group">
                            <textarea name="message" placeholder="Your Message"></textarea>
                        </div>
                        <button type="Submit">Send Message</button>
                    </form>

                </div>
                <div className="contact-info">
                    <h5 className="mt-2 fs-4" style={{marginBottom:"30px"}}>Contact Information</h5>
                    <p><i class="fas fa-phone"></i> +91 1234567890</p>
                    <p><i class="fas fa-envelope"></i> finance@gmail.com</p>
                    <p><i class="fas fa-map-marker"></i> 123 Street,City, Country</p>
                    <p >
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                    </p>

                </div>
                {/* <div>
                    <i class="fas fa-twitter"></i>
                </div> */}

            </div>
        

        </div>
      </Container>
    </div>
  )
}
