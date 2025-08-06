// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Make sure ScrollTrigger uses Lenis as the scroller
    ScrollTrigger.defaults({
      scroller: document.body, // Or your main scroll container if not body
    });

    // Refresh ScrollTrigger after Lenis initializes to re-calculate positions
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      // Optional: If you changed ScrollTrigger defaults globally, you might want to reset them
      // ScrollTrigger.defaults({ scroller: window });
    };
  }, []); // Empty dependency array ensures this runs only once on mount
};

// It's also a good place to register GSAP plugins once
// This ensures they are registered before any component tries to use them
// You could also do this in your main index.js/main.jsx if preferred.
gsap.registerPlugin(ScrollTrigger);
