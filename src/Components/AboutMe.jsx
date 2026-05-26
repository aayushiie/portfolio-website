import React from 'react'
import Header from './Header'
import PolaroidCard from './PolaroidCard'
import { NavLink } from 'react-router-dom'

const AboutMe = () => {
  return (
    <>
      <Header
        heading="About"
        text="i'm aayushi. "
      />
      <div className='flex flex-col justify-center items-center font-space'>
        <div className='max-w-[50vw]'>

          <PolaroidCard />

          <p id='first-letter' className='mb-2'>I'm a Computer Science Engineering student with a minor in Applied Machine Learning in Electronics. My recent work includes building <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">assistive system for object detection and distance estimation for visually impaired people</NavLink>. I'm currently working as a <i><b>biomedical research intern,</b></i> where I focus on <i>stillbirth prediction using Doppler ultrasound waveforms</i>.</p>

          <p id='first-letter' className='mb-2'>Beyond my work in deep learning and computer vision, I've also worked on <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">full-stack development</NavLink>, <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500"> app development</NavLink>, <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">MLOps</NavLink>, and <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500"> data science</NavLink>. Currently, I'm exploring <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">Generative AI</NavLink> and how it can be integrated with embedded systems and hardware.</p>

          <p id='first-letter' className='mb-2'>
            
          </p>
          <div>Relevant Courses from btech????</div>
          <div>
            <h3>Certifications</h3>
            <p><span>GenAI:</span> </p>
            <p><span>Computer Vision:</span> </p>
            <p><span>Science:</span> </p>
            <p><span>Political Science:</span> </p>
            <p><span>Arts & Culture:</span> </p>
          </div>

          <h3>Skills</h3>

          <h3>Hobbies and Interest</h3>
        </div>

      </div>
    </>
  )
}

export default AboutMe

