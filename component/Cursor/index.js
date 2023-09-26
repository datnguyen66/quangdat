"use client"; // This is a client component 👈🏽

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classes from './cursor.module.css'

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div className={classes.custom_cursor} ref={cursorRef}></div>;
};

export default CustomCursor;