import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import CursorReveal from './CursorReveal'
import About from './About'
import Menu from './Menu'
import PocketPlayer from './PocketPlayer';

gsap.registerPlugin(ScrollTrigger, SplitText)

const colors = [
    "#ff006e",
    "#fb5607",
    "#ffbe0b",
    "#8338ec",
    "#3a86ff",
    "#00f5d4",
    "#80ed99",
    "#ff4d6d",
    "#f72585",
    "#b5179e",
    "#7209b7",
    "#4361ee"
]

const flowers = Array.from({ length: 50 }, (_, i) => {
    const flowerSvgs = [
        "/images/flowers/flower2-svgrepo-com.svg",
    ]

    return {
        id: i,

        svg: flowerSvgs[
            Math.floor(Math.random() * flowerSvgs.length)
        ],

        left: gsap.utils.random(0, 100),
        size: gsap.utils.random(25, 110),
        bottom: gsap.utils.random(40, 140),
        rotate: gsap.utils.random(-18, 18),

        color: colors[
            Math.floor(Math.random() * colors.length)
        ],

        depth: gsap.utils.random(0.7, 1.2)
    }
})

const Home = () => {
    const textRef = useRef(null)
    const t1 = useRef(null)

    const isMobile = useMediaQuery({
        maxWidth: 767
    })

    useGSAP(() => {
        // about section
        const start = isMobile
            ? 'top 20%'
            : 'top top'

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut'
            })
            .to('#masked-content', {
                opacity: 1,
                duration: 1,
                ease: 'power1.inOut'
            })

        //page color transition
        const panels = gsap.utils.toArray(".panel")

        panels.forEach((panel) => {
            const bg = panel.dataset.bg
            const color = panel.dataset.color

            ScrollTrigger.create({
                trigger: panel,
                start: "top center",

                onEnter: () =>
                    gsap.to("#smooth-content", {
                        backgroundColor: bg,
                        color: color,
                        duration: 0.8,
                        ease: "power2.out"
                    }),

                onEnterBack: () =>
                    gsap.to("#smooth-content", {
                        backgroundColor: bg,
                        color: color,
                        duration: 0.8,
                        ease: "power2.out"
                    })
            })
        })

        //flower entry animation
        gsap.from(".flower", {
            y: 250,
            opacity: 0,

            stagger: {
                each: 0.025,
                from: "random"
            },

            duration: 1.5,
            ease: "power4.out",
            delay: 0.2
        })

        gsap.from(".flower-shape", {
            scale: 0,
            rotate: gsap.utils.random(-20, 20),

            stagger: {
                each: 0.02,
                from: "random"
            },

            duration: 1.4,
            ease: "back.out(2)"
        })

        // floating motion
        // gsap.to(".flower", {
        //     y: "+=10",

        //     repeat: -1,
        //     yoyo: true,

        //     duration: gsap.utils.random(2, 4),

        //     ease: "sine.inOut",

        //     stagger: {
        //         each: 0.1,
        //         from: "random"
        //     }
        // })

    })

    return (
        <>
            <section
                id='hero'
                className='panel'
                data-bg='#191A19'
                data-color='#F8F6F3'
            >

                {/* FLOWERS */}

                <div className="flower-field">
                    {flowers.map((flower) => (
                        <div
                            key={flower.id}
                            className="flower"
                            style={{
                                left: `${flower.left}%`,
                                bottom: `${gsap.utils.random(10, 120)}px`,
                                width: `${flower.size}px`,
                                height: `${flower.size}px`,
                                transform: `
                                    rotate(${flower.rotate}deg)
                                    scale(${flower.depth})
                                `
                            }}
                        >
                            <div
                                className="flower-shape"
                                style={{
                                    color: flower.color,

                                    WebkitMaskImage: `url(${flower.svg})`,
                                    WebkitMaskRepeat: "no-repeat",
                                    WebkitMaskPosition: "center",
                                    WebkitMaskSize: "contain",

                                    maskImage: `url(${flower.svg})`,
                                    maskRepeat: "no-repeat",
                                    maskPosition: "center",
                                    maskSize: "contain"
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* TEXT */}
                <CursorReveal />

            </section>

            {/* ABOUT SECTION */}

            <div
                id="art"
                className='panel'
                data-bg='#3F4F44'
                data-color='#F8F6F3'
            >

                {/* <div className='container mx-auto h-full pt-20'> */}
                <div className='container mx-auto h-full px-4 md:px-8 pt-24 md:pt-20'>
                    <h2 className='will-fade'>
                        ABOUT ME
                    </h2>
                    {/* <h2 className="will-fade text-[2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-none text-center px-4">
                        ABOUT ME
                    </h2> */}

                    <div className='content flex flex-col md:flex-row items-center justify-between md:mb-16 md:mt-0 mt-40 gap-10'>

                        <ul
                            className='space-y-4 will-fade'
                            // className='space-y-3 md:space-y-4 will-fade text-sm md:text-base text-center md:text-left'
                            id='about-content'
                        >
                            <li className='underline font-semibold content-text-left'>
                                currently
                            </li>

                            <li className='content-text-left'>
                                → cs engineering undergrad
                            </li>

                            <li className='content-text-left'>
                                → minor in applied ML in electronics
                            </li>

                            <li className='content-text-left'>
                                → biomedical research intern
                            </li>

                            <li className='content-text-left'>
                                → staff writer, building a zine
                            </li>

                            <li className='content-text-left'>
                                → aspiring swimmer
                            </li>
                        </ul>

                        <div className='bg-img'>
                            <img
                                src="/images/under-img.webp"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                                alt="image"
                                // className='abs-center masked-img size-full object-contain'
                                className='abs-center masked-img w-[220px] h-[220px] md:w-full md:h-full object-contain'
                            />
                        </div>

                        <ul
                            className='space-y-4 will-fade'
                            id='about-content'
                        >
                            <li className='underline font-semibold content-text-right'>
                                i love
                            </li>

                            <li className='content-text-right'>
                                → long sentences
                            </li>

                            <li className='content-text-right'>
                                → COFFEE!
                            </li>

                            <li className='content-text-right'>
                                → films, shows, everything-cinema
                            </li>

                            <li className='content-text-right'>
                                → historical, contemporary, literary fiction
                            </li>

                            <li className='content-text-right'>
                                → journaling (1186 days and counting)
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

            <About />
            <Menu />
            {/* <div className='absolute right-4 bottom-20 translate-y-1/4 hidden md:block'> */}
            <div className='hidden lg:block absolute right-4 xl:right-8 bottom-12 xl:bottom-20 translate-y-1/4'>
                <PocketPlayer />
            </div>
        </>
    )
}

export default Home