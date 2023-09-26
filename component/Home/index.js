"use client"; // This is a client component 👈🏽

import { Fragment, useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis'
import classes from './home.module.css'
import ReleaseComponent from "../Release";
import ReleaseHiddenComponent from "../ReleaseHidden";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesComponent from "../SnowFall/SnowFall";
import Loading from "../Loading";

export default function HomeComponent() {
    const refContent = useRef(null)
    const refHiddenContent = useRef(null)
    let linkAnimated = false;
    
    
    useEffect(() => {
        const content = refContent.current
        const hiddenContent = refHiddenContent.current
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
        const timeln = gsap.timeline({ paused: true });
        let xTo = gsap.quickTo(hiddenContent, "--x", {
            duration: 0.4,
            ease: "power4.out"
          }),
          yTo = gsap.quickTo(hiddenContent, "--y", {
            duration: 0.4,
            ease: "power4.out"
          });
        
        let tl = gsap.timeline({ paused: true });
        tl.to(hiddenContent, {
        "--size": 150,
        duration: 0.75,
        ease: "back.out(1.7)"
        });
    
        let hoveringContent = gsap.utils.toArray(".vertical__heading", content);
        hoveringContent.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                tl.restart();
            });
            el.addEventListener("mouseleave", () => {
                tl.reverse();
            });
        });
        
        
        const onFirstMove = (e) => {
            window.removeEventListener("mousemove", onFirstMove);
            gsap.set(hiddenContent, { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });

            window.addEventListener("mousemove", (e) => {
                if (!linkAnimated) {
                yTo(e.pageY);
                xTo(e.pageX);
                }
            });
          };

        // scroll smooth
        function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
      
        window.addEventListener("mousemove", onFirstMove);
        return () => {
        window.removeEventListener("mousemove", onFirstMove);
        }
    }, [])
    
    return(
        <Fragment>
            <Loading/>
            <div className={classes.content}>
                <ParticlesComponent/>
                <div ref={refContent}>
                    <div className={classes.releases}>
                        <ReleaseComponent/>
                    </div>
                </div>
                
                <div ref={refHiddenContent} className={classes.hidden_content}>
                    <div className={classes.releases}>
                        <ReleaseHiddenComponent/>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}