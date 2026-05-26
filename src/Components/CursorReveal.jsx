import { useEffect, useRef } from "react"
import gsap from "gsap"

const CursorReveal = () => {
    const containerRef = useRef(null)
    const maskRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const mask = maskRef.current
        const hoverTarget = container.querySelector(".hover-target")

        let mouse = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }

        let current = {
            x: mouse.x,
            y: mouse.y
        }

        let active = false

        const speed = 0.15
        const revealSize = 360

        const move = (e) => {
            const bounds = container.getBoundingClientRect()

            mouse.x = e.clientX - bounds.left
            mouse.y = e.clientY - bounds.top
        }

        container.addEventListener("mousemove", move)

        hoverTarget.addEventListener("mouseenter", () => {
            active = true

            gsap.to(mask, {
                opacity: 1,
                duration: 0.3,
                ease: "power3.out"
            })
        })

        hoverTarget.addEventListener("mouseleave", () => {
            active = false

            gsap.to(mask, {
                opacity: 0,
                duration: 0.3,
                ease: "power3.out"
            })
        })

        const update = () => {
            current.x += (mouse.x - current.x) * speed
            current.y += (mouse.y - current.y) * speed

            gsap.set(mask, {
                WebkitMaskPosition: `${current.x - revealSize / 2}px ${current.y - revealSize / 2
                    }px`,
                maskPosition: `${current.x - revealSize / 2}px ${current.y - revealSize / 2
                    }px`
            })
        }

        gsap.ticker.add(update)

        return () => {
            container.removeEventListener("mousemove", move)
            gsap.ticker.remove(update)
        }
    }, [])


    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#191A19] flex items-center justify-center px-8"
        >
            {/* BASE TEXT */}

            <div className="hover-target">
                <h1 className="text-[5vw] leading-none font-black text-[#F8F6F3] text-center max-w-6xl">
                    hey, i'm aayushi. i'm a computer science engineering
                    <span className="text-zinc-500"> student.</span>
                </h1>
            </div>

            {/* REVEAL TEXT */}

            <div
                ref={maskRef}
                className="absolute inset-0 flex items-center justify-center reveal-layer"
            >
                <h1 className="text-[5vw] leading-none font-black text-center max-w-6xl text-[#191A19]">
                    i like building things, telling stories, and trying a little of
                    <span className="text-pink-500"> everything.</span>
                </h1>
            </div>
        </section>
    )
}

export default CursorReveal