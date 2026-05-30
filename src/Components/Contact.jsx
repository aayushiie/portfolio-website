import emailjs from "@emailjs/browser";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  const formRef = useRef();
  const sectionRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Something went wrong.")
      );

    e.target.reset();
  };

  const links = [
    { label: "linkedin", href: "https://www.linkedin.com/in/aayushi-singh2" },
    { label: "github", href: "https://github.com/aayushiie" },
    { label: "glassnote", href: "https://glassnote-cv.vercel.app/" },
    { label: "blog", href: "https://aayushiieblog.web.app/" },
    { label: "juno magazine", href: "https://juno-magazine.web.app/" },
    { label: "juno social", href: "https://www.instagram.com/juno.zine_/" },
    { label: "goodreads", href: "https://www.goodreads.com/aayushiiii"},
    { label: "letterboxd", href: "https://letterboxd.com/aayushiiiee/" },
    { label: "tumblr", href: "https://www.tumblr.com/aayushiie" },

  ];

  return (
    <section
      ref={sectionRef}
      // className="min-h-screen bg-[#191a19] text-white px-8 md:px-20 py-24 flex items-center font-space"
      className="min-h-screen bg-[#191a19] text-white px-4 sm:px-8 md:px-20 py-16 md:py-24 flex items-center font-space"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div ref={leftRef} className="flex flex-col justify-center">
          {/* <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6"> */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight mb-4 md:mb-6 md:mt-0 mt-4">
            Contact
          </h1>

          <p className="text-zinc-400 text-lg max-w-md mb-12 leading-relaxed">
            if you want connect or just say hi :)
          </p>

          <div className="grid grid-cols-2 gap-3 max-w-md">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                className="group flex items-center justify-between border border-zinc-800 px-4 py-3 rounded-xl transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/40"
              >
                <span className="text-sm tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                  {link.label}
                </span>

                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-md ml-auto w-full md:mt-10"
        >
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm outline-none focus:border-white transition-colors resize-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm outline-none focus:border-white transition-colors resize-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm outline-none focus:border-white transition-colors resize-none"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
              className="w-full bg-transparent border-b border-zinc-700 py-3 text-sm outline-none focus:border-white transition-colors resize-none"
            />

            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-white text-black rounded-xl text-sm font-medium hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}