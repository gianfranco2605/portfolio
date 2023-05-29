import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './certifications.css'
import { certifications } from '../../assets/index';


const Certifications = () => {

    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px',
        
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#00C4D3"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#00C4D3"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }
    

    return (
        <section className='container'>
        <h5>Learning</h5>
        <h2>Certifications</h2>
        <div className='container__slide'>
        <Zoom scale={0.7} {...properties}>
        {certifications.map((image, index) => (
            <div key={index} className="each-slide">
              <img src={image} alt={`${index + 1}`} />
            </div>
          ))}          
        </Zoom>    
        </div>
        </section>
    );
};

export default Certifications;