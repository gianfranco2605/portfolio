import React from 'react'
import './about.css'
import ME from '../../assets/ME-about3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me_image'>
            <img src={ME} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about_icon'/>
              <h4>Experience</h4>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about_icon'/>
              <h4>Certifications</h4>
              <small>10+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about_icon'/>
              <h4>Projects</h4>
              <small>20+</small>
            </article>
          </div>

          <p>
          "I am a junior web developer who is always seeking new experiences. I am a highly passionate person with a lot of energy and I thrive on learning new technologies. One of my skills is my ability to assist others in solving their problems. While I enjoy working in groups, I also relish the challenge of tackling complex problems on my own. I am eager to collaborate and learn from others."
   
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
     </section>
  )
}

export default About