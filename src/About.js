import React from 'react'
import './About.css'
function About() {
  return (
    <div className='aboutPage'>
        <div className='about'>       
        <h1 className='box1'>About Diana</h1>
        <h3 className='box2'>A platform that looks out for you</h3>
        <div className='box3'>
        <p>Diana empowers you to understand how your body works so you can look and feel your best. </p>
        </div>
        </div>
        <hr />
        <div className='philosophy'>
        <h3 className='box4'>Our Philosophy</h3>
        <h1 className='box5'>Sustainable wellness is a big-picture, inside out approach</h1>
        <p className='box6'>Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
            
            
        That’s why we’ve created an integrated ecosystem of:</p>
        <img className='img' src="https://www.seekpng.com/png/detail/229-2296324_clip-art-transparent-library-clip-art-at-clker.png" />
        <p className='box7'>Consciously formulated products that deliver feel-good results fast</p>
        <img className='img' src="https://www.seekpng.com/png/detail/229-2296324_clip-art-transparent-library-clip-art-at-clker.png" />
        <p className='box7'>In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body</p> 
        <img className='img' src="https://www.seekpng.com/png/detail/229-2296324_clip-art-transparent-library-clip-art-at-clker.png" />
        <p className='box7'>In-app consultation portals that connect you with compassionate wellness experts </p>
        <p className='box8'>
        Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.</p>
        </div>
    </div>
  )
}

export default About