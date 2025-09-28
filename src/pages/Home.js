import React, { useEffect, useState, useRef } from 'react'
import Hello from './Hello'
import Skills from './Skills';
import NavBar from '../components/NavBar';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
    const [current, setCurrent] = useState("slide1");
    const containerRef = useRef(null);
    const [visibleSection, setVisibleSection] = useState(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
            }
        });
        },
        { root: containerRef.current, threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
    }, []);


    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            const slides = ["slide1", "slide2", "slide3", "slide4"];
            slides.forEach(id => {
                const elem = document.getElementById(id);
                if (elem) {
                    const rect = elem.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const offsetTop = rect.top - containerRect.top;

                    if (offsetTop <= container.clientHeight / 2 && offsetTop + rect.height >= container.clientHeight / 2) {
                        setCurrent(id);
                    }
                }
            });
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <NavBar currentId={current.at(-1)} />
            <div className='relative min-h-screen '>
                {/* Navigation */}
                <nav className='fixed min-h-screen top-[60%] right-10 flex flex-col items-center gap-3 z-50'>
                    {["slide1","slide2","slide3","slide4"].map((id, i) => (
                        <a
                            key={id}
                            onClick={() => {
                                const target = document.getElementById(id);
                                if (target && containerRef.current) {
                                    containerRef.current.scrollTo({
                                        top: target.offsetTop,
                                        behavior: "smooth"
                                    });
                                }
                            }}
                            className={`
                                transition-transform transform origin-center duration-300 delay-150 cursor-pointer
                                ${current === id 
                                    ? `h-3 w-3 rotate-0 bg-none border-[1px] scale-150 ${current.at(-1)%2 === 0 ? "border-primary" : "border-secondary"}` 
                                    : `h-1.5 w-1.5 rotate-45 border-none ${current.at(-1)%2 === 0 ? "bg-primary" : "bg-secondary"}`
                                }
                            `}
                        >
                            &nbsp;
                        </a>
                    ))}
                </nav>    

                {/* Scrollable container */}
                <div 
                    ref={containerRef} 
                    className='flex flex-col snap-y snap-mandatory h-screen overflow-y-scroll'>
                    <section id="slide1" className='snap-center min-h-[90%] flex justify-center items-center'>
                        <Hello visible={visibleSection === "slide1"}/>
                    </section>
                    <section id="slide2" className='snap-center min-h-screen flex justify-center items-center'>
                        <Skills visible={visibleSection === "slide2"}/>
                    </section>
                    <section id="slide3" className='snap-center min-h-screen flex justify-center items-center'>
                        <Projects visible={visibleSection === "slide3"}/>
                    </section>
                    <section id="slide4" className='snap-center min-h-screen bg-yellow-400 flex justify-center items-center'>
                        <Contact visible={visibleSection === "slide4"}/>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home
