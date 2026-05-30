import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { allDetails } from '../../constants'
import { NavLink } from 'react-router-dom'
import AnimatedUnderline from './AnimatedUnderline'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Menu = () => {
  const contentRef = useRef()
  const sectionRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useGSAP(() => {
    gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
    gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' })
    gsap.fromTo('.details #title', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 100, ease: 'power1.inOut' })
    gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 100, ease: 'power1.inOut' })
  }, [currentIndex])

  const totalDetails = allDetails.length

  const goToSlide = (index) => {
    const newIndex = (index + totalDetails) % totalDetails
    setCurrentIndex(newIndex)
  }

  const getItemAt = (indexOffset) => {
    return allDetails[(currentIndex + indexOffset + totalDetails) % totalDetails]
  }

  const currentName = getItemAt(0)
  const prevName = getItemAt(-1)
  const nextName = getItemAt(1)


  useGSAP(() => {
    // BACKGROUND + TEXT COLOR
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      // markers: true,
      onEnter: () =>
        gsap.to('#smooth-content', {
          backgroundColor: '#2C3930',
          color: '#F8F6F3',
          duration: 0.8,
          ease: 'power2.out',
        }),
      onLeaveBack: () =>
        gsap.to('#smooth-content', {
          backgroundColor: '#272826',
          color: '#FF9A9A',
          duration: 0.8,
        }),
    })
  }, [])


  return (
    <section id="menu" ref={sectionRef}>
      {/* <h2 id="menu-heading">Choose your character</h2> */}

      <nav className='detail-tabs overflow-x-auto whitespace-nowrap px-4 md:px-0' aria-label='Category Navigation'>
        {allDetails.map((name, index) => {
          const isActive = index === currentIndex;
          return (
            <button key={name.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50}'}`} onClick={() => goToSlide(index)}>
              {name.title}
            </button>
          )
        })}
      </nav>

      {/* <div className='content'> */}
      <div className='content'>
        <div className='arrows'>
          <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
            <img src="/images/left-arrow.svg" alt="left-arrow" aria-hidden='true' />
            <span>{prevName.title}</span>
          </button>
          <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextName.title}</span>
            <img src="/images/right-arrow.svg" alt="right-arrow" aria-hidden='true' />
          </button>
        </div>

        <div className='cocktail'>
          <img src={currentName.image} className='object-contain w-[220px] md:w-[320px] lg:w-auto' />
        </div>

        <div className='details'>
          <div ref={contentRef} className='info'>
            <NavLink to={currentName.link}
              id='title'
            >
              <AnimatedUnderline text={currentName.title} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
