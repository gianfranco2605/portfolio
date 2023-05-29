import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div id='socials'>
        <a href="https://www.linkedin.com/in/gianfranconavasfernandiniwebdeveloper/" target="_blank" rel="noopener"><BsLinkedin width={32} height={32}/></a>
        <a href="https://github.com/gianfranco2605" target="_blank" rel="noopener"><FaGithub/></a>
        <a href="https://twitter.com/Gianfranco2605" target="_blank" rel="noopener"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials