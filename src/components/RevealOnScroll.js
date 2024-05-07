import React, { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children, ind }) => {
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            scrollObserver.unobserve(entry.target);
        }
    });

    scrollObserver.observe(ref.current);

    return () => {
        if (ref.current) {
            scrollObserver.unobserve(ref.current);
        }
    };
}, []);

const classes = `transition-opacity
    ${isVisible ? "opacity-100" : "opacity-0"
    }`;

return (
    <div ref={ref} className={classes} style={{ "transitionDuration": ind * 0.1 + "s" }}>
        {children}
    </div>
);
};