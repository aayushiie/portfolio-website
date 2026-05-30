import React from 'react'
import Header from './Header'
import PolaroidCard from './PolaroidCard'
import { NavLink } from 'react-router-dom'

const AboutMe = () => {
  return (
    <>
      <Header
        heading="About"
        text="i'm aayushi. i build things and overthink them."
      />
      {/* <div className='flex flex-col justify-center text-lg items-center font-space'> */}
      <div className='flex flex-col justify-center text-base md:text-lg items-center font-space'>
        <div className='max-w-[92vw] md:max-w-[50vw]'>

          {/* <div className="
              px-6
              md:px-12
              pb-4
              my-10
              md:my-14
              text-center
              relative" >
            <img
              src="/images/faq-dark.svg"
              alt=""
              className="
                absolute
                left-1/2
                top-20
                md:-top-24
                w-14
                md:w-24
                opacity-70
                rotate-[-10deg]
                pointer-events-none
                select-none
            "
            />
            <PolaroidCard />
          </div> */}

          <div
            className="
    px-6
    md:px-12
    pb-4
    my-10
    md:my-14
    text-center
    relative
    flex
    justify-center
  "
          >
            {/* SVG tucked into top-left corner */}
            <img
              src="/images/faq-dark.svg"
              alt=""
              className="
                absolute
                left-[22%] top-1 w-8 md:left-[27%] md:top-6 md:w-16
                opacity-80
                rotate-[-28deg]
                pointer-events-none
                select-none
                z-30
              "
            />

            <div className="relative z-20">
              <PolaroidCard />
            </div>
          </div>

          <p id='first-letter' className='mb-4 md:mb-2 leading-relaxed'>I'm a Computer Science Engineering student with a minor in Applied Machine Learning in Electronics. My recent work includes building an <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">assistive system to enable object detection and distance estimation for visually impaired people</NavLink>. I'm currently working as a <i><b>biomedical research intern,</b></i> where I focus on <i>stillbirth prediction using Doppler ultrasound waveforms</i>.</p>

          <p id='first-letter' className='mb-4 md:mb-2 leading-relaxed'>Beyond my work in deep learning and computer vision, I've also worked on <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">full-stack development</NavLink>, <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500"> app development</NavLink>, <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">MLOps</NavLink>, and <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500"> data science</NavLink>. Currently, I'm exploring <NavLink to={"/projects"} className="underline decoration-red-500 hover:text-red-500">Generative AI</NavLink> and how it can be integrated with embedded systems and hardware.</p>

          <p id='first-letter' className='mb-4 md:mb-2 leading-relaxed'>
            I love literature, writing, and poetry. I've worked as a Staff Personal Essay Writer for OutlanderZine <i>(June 2023 - Sept 2024)</i> and currently write as a Staff Writer for Meridian Literary <i>(Oct 2025 - Present)</i>. I'm also the Editor-In-Chief of my magazine, Juno, where I work with other members, and have multiple roles including graphic designing, editing, and handling admin work. Some of my published work can be read <NavLink to={"/writing"} className="underline decoration-red-500 hover:text-red-500">here</NavLink>.
          </p>


          {/* <div>
                      <h3>Skills</h3>
          </div> */}

          <div>
            <h3 className="text-center uppercase text-[10px] md:text-[12px] font-light pt-2 pb-2 tracking-[0.28em]  text-neutral-400">
              Fieldnotes
            </h3>
            <ul className='list-disc text-sm md:text-lg pl-5'>
              <li>I love teaching and I love computer vision. But I cannot figure out what role teaching should play in my career, so I started building <a
                href="https://glassnote-cv.vercel.app/"
                target="_blank"
                className="underline decoration-red-500 hover:text-red-500"
              >
                Glassnote
              </a>, which is a space where I share lectures, readings, and mathematical explanations for computer vision.
              </li>

              <li>
                I love cats.
              </li>

              <li>
                When I started crocheting, I only wanted to make one thing: a little brown potato holding a positive message. So I bought brown yarn for it, and it happened to be the biggest pack, which is why everything I've crocheted also happens to be brown.
                {/* when i started <NavLink to={"/art"} className="underline decoration-red-500 hover:text-red-500">crocheting</NavLink>, i only wanted to make one thing: a brown potato holding a positive message. so i bought brown-colored yarn and it happened to be the largest pack, which is why everything i've crocheted also happens to be brown. */}
              </li>

              <li>
                If trying different hobbies counted as a hobby, that would probably be mine.
              </li>

              <li>
                I have been journaling for over 1100 days now, and it's probably the one habit that keeps me grounded through everything happening in the world.
              </li>

              <li>
                Swimming has a special place in my life. A friend taught me how to swim, and when we swam, it felt like the closest thing to freedom. Every time I swim now, I'm flooded with those memories.
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className='text-center uppercase'>Certifications</h3>
            <p><span>GenAI:</span> </p>
            <p><span>Computer Vision:</span> </p>
            <p><span>Science:</span> </p>
            <p><span>Political Science:</span> </p>
            <p><span>Arts & Culture:</span> </p>
          </div> */}

        </div>
      </div>
    </>
  )
}

export default AboutMe

