// import React, { useEffect, useRef, useState } from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { SplitText } from 'gsap/all'
// import { images } from '../../constants'

// gsap.registerPlugin(ScrollTrigger)

// const About = () => {
//     const sectionRef = useRef(null)
//     const textRef = useRef(null)
//     const trailRef = useRef(null)

//     const indexRef = useRef(0)
//     const lastX = useRef(0)
//     const lastY = useRef(0)

//     const [distanceThreshold, setDistanceThreshold] = useState(
//         window.innerWidth < 900 ? 90 : 150
//     )

//     useGSAP(() => {
//         const lineSplit = new SplitText('movies-subtext', {type: 'lines'})

//         const split = new SplitText(textRef.current, {
//             type: 'chars',
//         })

//         // TEXT OPACITY
//         gsap.fromTo(
//         split.chars,
//         { opacity: 0.3 },
//         {
//             opacity: 1,
//             stagger: 0.03,
//             ease: 'none',
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: 'top top',
//                 end: '+=1200', // controls how long screen stays fixed
//                 scrub: true,
//                 pin: true,     // THIS freezes the screen
//                 anticipatePin: 1,
//             },
//         }
//     )

//         gsap.from(lineSplit.lines, {
//             opacity: 0, 
//             yPercent: 100, 
//             duration: 1.2,
//             ease: 'expo.out',
//             stagger: 0.06,
//         })

//         return () => split.revert()
//     }, [])

//     useGSAP(()=>{
//         // BACKGROUND + TEXT COLOR
//         ScrollTrigger.create({
//             trigger: sectionRef.current,
//             start: 'top center',
//             onEnter: () =>
//                 gsap.to('#smooth-content', {
//                     backgroundColor: '#272826',
//                     color: '#FF9A9A',
//                     duration: 0.8,
//                     ease: 'power2.out',
//                 }),
//             onLeaveBack: () =>
//                 gsap.to('#smooth-content', {
//                     backgroundColor: '#3F4F44',
//                     color: '#F8F6F3',
//                     duration: 0.8,
//                 }),
//         })
//     }, [])

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             if (!trailRef.current) return

//             const dx = e.clientX - lastX.current
//             const dy = e.clientY - lastY.current
//             const distance = Math.sqrt(dx * dx + dy * dy)

//             if (distance > distanceThreshold) {
//                 createTrail(e.clientX, e.clientY)
//                 lastX.current = e.clientX
//                 lastY.current = e.clientY
//             }
//         }

//         window.addEventListener('mousemove', handleMouseMove)
//         return () => window.removeEventListener('mousemove', handleMouseMove)
//     }, [distanceThreshold])

//     const createTrail = (x, y) => {
//         if (!trailRef.current || !images?.length) return

//         const img = document.createElement('img')
//         img.src = images[indexRef.current]
//         img.className = 'image-here'

//         indexRef.current = (indexRef.current + 1) % images.length
//         trailRef.current.appendChild(img)

//         gsap.set(img, {
//             x: x - 40,
//             y: y - 40,
//             scale: 0,
//             opacity: 0,
//             rotate: gsap.utils.random(-15, 15),
//             position: 'absolute',
//             pointerEvents: 'none',
//         })

//         gsap.to(img, {
//             scale: 1,
//             opacity: 1,
//             duration: 0.25,
//             ease: 'power2.out',
//         })

//         gsap.to(img, {
//             scale: 0.2,
//             opacity: 0,
//             duration: 0.8,
//             delay: 0.2,
//             ease: 'power2.in',
//             onComplete: () => img.remove(),
//         })
//     }

//     useEffect(() => {
//         const handleResize = () => {
//             setDistanceThreshold(window.innerWidth < 900 ? 90 : 150)
//         }
//         window.addEventListener('resize', handleResize)
//         return () => window.removeEventListener('resize', handleResize)
//     }, [])

//     return (
//         <section
//             ref={sectionRef}
//             className="container w-screen min-h-screen panel2 relative overflow-hidden"
//         >
//             <div ref={trailRef} className="absolute inset-0 z-0" />

//             <div className="text relative z-10" id="scroll-trail">
//                 <p className="movies-text" ref={textRef}>
//                     I love to read. I love movies. My only true passion is consumption and creation. So if you could see the inside of my brain, you'd find these living rent-free. 
//                     <br/>
//                     (move your cursor around to see the fun)
//                 </p>
//             </div>
//         </section>
//     )
// }

// export default About

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/all'
import { images } from '../../constants'

gsap.registerPlugin(ScrollTrigger)

const POOL_SIZE = 20

const About = () => {
    const sectionRef = useRef(null)
    const textRef = useRef(null)
    const trailRef = useRef(null)

    const indexRef = useRef(0)
    const poolIndexRef = useRef(0)

    const lastX = useRef(0)
    const lastY = useRef(0)

    const decodedImagesRef = useRef([])
    const imagePoolRef = useRef([])

    const mousePos = useRef({ x: 0, y: 0 })
    const animationFrame = useRef(null)

    const [distanceThreshold, setDistanceThreshold] = useState(
        // window.innerWidth < 900 ? 30 : 50
        window.innerWidth < 900 ? 60 : 90
    )

    // preloading in batches
    useEffect(() => {
        const firstImages = images.slice(0, 8)

        decodedImagesRef.current = firstImages.map((src) => {
            const img = new Image()
            img.src = src
            return img
        })
    }, [])

    // useEffect(() => {
    //     let mounted = true

    //     const preloadImages = async () => {
    //         const decoded = await Promise.all(
    //             images.map(async (src) => {
    //                 const img = new Image()
    //                 img.src = src

    //                 try {
    //                     await img.decode()
    //                 } catch {}

    //                 return img
    //             })
    //         )

    //         if (mounted) {
    //             decodedImagesRef.current = decoded
    //         }
    //     }

    //     preloadImages()

    //     return () => {
    //         mounted = false
    //     }
    // }, [])

    useEffect(() => {
        if (!trailRef.current) return

        const pool = []

        for (let i = 0; i < POOL_SIZE; i++) {
            const img = document.createElement('img')

            img.className = 'image-here'

            Object.assign(img.style, {
                position: 'absolute',
                pointerEvents: 'none',
                opacity: '0',
                width: '80px',
                height: 'auto',
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
            })

            trailRef.current.appendChild(img)
            pool.push(img)
        }

        imagePoolRef.current = pool

        return () => {
            pool.forEach((img) => img.remove())
        }
    }, [])


    useGSAP(() => {
        const split = new SplitText(textRef.current, {
            type: 'chars',
        })

        gsap.fromTo(
            split.chars,
            { opacity: 0.3 },
            {
                opacity: 1,
                stagger: 0.03,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=1200',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        )

        return () => split.revert()
    }, [])

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top center',
            onEnter: () =>
                gsap.to('#smooth-content', {
                    backgroundColor: '#272826',
                    color: '#FF9A9A',
                    duration: 0.8,
                    ease: 'power2.out',
                }),
            onLeaveBack: () =>
                gsap.to('#smooth-content', {
                    backgroundColor: '#3F4F44',
                    color: '#F8F6F3',
                    duration: 0.8,
                }),
        })
    }, [])

    const createTrail = (x, y) => {
        if (
            !imagePoolRef.current.length ||
            !decodedImagesRef.current.length
        ) {
            return
        }

        const pool = imagePoolRef.current

        const img =
            pool[poolIndexRef.current]

        poolIndexRef.current =
            (poolIndexRef.current + 1) % POOL_SIZE

        // img.src =
        //     decodedImagesRef.current[
        //         indexRef.current
        //     ].src

        // indexRef.current =
        //     (indexRef.current + 1) %
        //     decodedImagesRef.current.length

        img.src = images[indexRef.current]

        indexRef.current =
            (indexRef.current + 1) %
            images.length

        gsap.killTweensOf(img)

        gsap.set(img, {
            x: x - 40,
            y: y - 40,
            scale: 0,
            opacity: 0,
            rotate: gsap.utils.random(-15, 15),
        })

        gsap.to(img, {
            scale: 1,
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out',
        })

        gsap.to(img, {
            scale: 0.2,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.in',
        })
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = {
                x: e.clientX,
                y: e.clientY,
            }
        }

        const update = () => {
            const { x, y } = mousePos.current

            const dx = x - lastX.current
            const dy = y - lastY.current

            const distance = Math.sqrt(
                dx * dx + dy * dy
            )

            if (distance > distanceThreshold) {
                createTrail(x, y)

                lastX.current = x
                lastY.current = y
            }

            animationFrame.current =
                requestAnimationFrame(update)
        }

        animationFrame.current =
            requestAnimationFrame(update)

        window.addEventListener(
            'mousemove',
            handleMouseMove
        )

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            )

            if (animationFrame.current) {
                cancelAnimationFrame(
                    animationFrame.current
                )
            }
        }
    }, [distanceThreshold])

    useEffect(() => {
        const handleResize = () => {
            // setDistanceThreshold(
            //     window.innerWidth < 900
            //         ? 60
            //         : 100
            // )
            setDistanceThreshold(
                window.innerWidth < 900
                    ? 60
                    : 90
            )
        }

        window.addEventListener(
            'resize',
            handleResize
        )

        return () =>
            window.removeEventListener(
                'resize',
                handleResize
            )
    }, [])

    return (
        <section
            ref={sectionRef}
            className="container w-screen min-h-screen panel2 relative overflow-hidden"
        >
            <div
                ref={trailRef}
                className="absolute inset-0 z-0"
            />

            <div
                className="text relative z-10"
                id="scroll-trail"
            >
                <p
                    className="movies-text"
                    ref={textRef}
                >
                    I love to read. I love movies.
                    My only true passion is
                    consumption and creation. So
                    if you could see the inside
                    of my brain, you'd find these
                    living rent-free.
                    <br />
                    (move your cursor around to
                    see the fun)
                </p>
            </div>
        </section>
    )
}

export default About
