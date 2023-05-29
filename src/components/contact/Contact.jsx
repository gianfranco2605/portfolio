import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      
      <div className="contact__container">
       
          <article className="contact__option">
            <MdOutlineEmail contact__option-icon className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gianf2605@gmail.com</h5>
            <a href="mailto:gianf2605@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Gianfranco Navas Fernandini</h5>
            <a href="https://www.linkedin.com/in/gianfranconavasfernandiniwebdeveloper/">Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>Gianfranco Navas Fernandini</h5>
            <a href="https://twitter.com/Gianfranco2605">Send a message</a>
          </article>
       

      </div>
    </section>
  )
}

export default  Contact
