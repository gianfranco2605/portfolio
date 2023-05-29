import React from 'react'
import './portafoglio.css'
import IMG1 from '../../assets/bankmodern.png'
import IMG2 from '../../assets/bussinesite.png'
import IMG3 from '../../assets/shoppynavas.png'
import IMG4 from '../../assets/chatgptrassunti.png'
import IMG6 from '../../assets/portafolio6.png'
import IMG7 from '../../assets/portafolio7.png'
import IMG8 from '../../assets/portafolio8.png'
import {FaGithub} from 'react-icons/fa'

const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Modern Bank App',
    github: 'https://github.com/gianfranco2605/bank-app',
    demo: 'https://bank-app-navas.netlify.app/'

  },

  {
    id: 2,
    image: IMG2,
    title: 'Bussines Site',
    github: 'https://github.com/gianfranco2605/bussines-page',
    demo: 'https://bussines-site.netlify.app/'

  },
  
  
  {
    id: 3,
    image: IMG3,
    title: 'Dashboard Shoppy',
    github: 'https://github.com/gianfranco2605/dashboard-react',
    demo: 'https://shoppy-navas-syncfusion-dashboard.netlify.app/'

  },

  {
    id: 4,
    image: IMG4,
    title: 'Chat-GPT App',
    github: 'https://github.com/gianfranco2605/dall-e-chatgpt-4',
    demo: 'https://app-chatgpt-4.netlify.app/'

  },

  {
    id: 6,
    image: IMG6,
    title: 'Project Loan-Calcolator-ReactJS',
    github: 'https://github.com/gianfranco2605/Loan-Calculator',
    demo: 'https://calcolare-rata-prestito-reactjs.netlify.app/'

  },

  {
    id: 7,
    image: IMG7,
    title: 'CRM-JSON',
    github: 'https://github.com/gianfranco2605/CRM-JSON-Server',
    demo: 'https://gianfranco2605.github.io/CRM-JSON-Server/nuevo-cliente.html'

  },

  {
    id: 8,
    image: IMG8,
    title: 'YouTube-Clone NextJS',
    github: 'https://github.com/gianfranco2605/NextJS-project',
    demo: 'https://youtube-clon-nextjs.netlify.app/'

  },

];

 const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portafolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portafolio__item-cta">
              <a href={github} className='btn' target="_blank" rel='noreferrer'>Github</a>         
              <a href={demo}  className='btn btn-primary' target="_blank" rel='noreferrer'>Live Demo</a>
          </div>

         
        </article> 
        
            )
          })
        }
         <h3 className='git__link'>A lot more here... <a href="https://github.com/gianfranco2605" target="_blank" rel="noreferrer"><FaGithub/></a> </h3>
      </div>
     
    </section>
  )
}

export default Portafolio
