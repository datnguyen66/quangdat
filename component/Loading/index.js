import { Fragment, useEffect, useRef } from "react";
import classes from './loading.module.css'
import {gsap} from "gsap";

export default function Loading() {
    const refCounter = useRef(null)
    const refBar = useRef(null)
    const refBar2 = useRef(null)
    const refBar3 = useRef(null)
    const refBar4 = useRef(null)
    const refBar5 = useRef(null)
    const refBar6 = useRef(null)
    const refBar7 = useRef(null)
    const refBar8 = useRef(null)
    const refBar9 = useRef(null)
    const refBar10 = useRef(null)

    useEffect(() => {
        let counter = refCounter.current
        const bar = refBar.current
        const bar2 = refBar2.current
        const bar3 = refBar3.current
        const bar4 = refBar4.current
        const bar5 = refBar5.current
        const bar6 = refBar6.current
        const bar7 = refBar7.current
        const bar8 = refBar8.current
        const bar9 = refBar9.current
        const bar10 = refBar10.current

        let currentValue = 0

        function UpdateCounter(){
            if(currentValue===100){
                return;
            }

            currentValue += Math.floor(Math.random() *10 ) +1

            if(currentValue>100){
                currentValue=100
            }
            counter.textContent = currentValue

            let delay = Math.floor(Math.random() * 200) + 50

            setTimeout(UpdateCounter, delay)
        }
        UpdateCounter()
    
        gsap.to(counter, 0.25, {
            delay : 3.5,
            opacity : 0,
        })
        gsap.to(bar, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar2, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar3, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar4, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar5, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar6, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar7, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar8, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar9, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })
        gsap.to(bar10, 1.5,{
            delay: 3.5,
            height : 0,
            stagger:{
                amount : 0.5
            },
            ease : "power4.inOut"
        })

        
      return () => {
        
      }
    }, [])
    
    return(
    <Fragment>
        <div className={classes.counter} ref={refCounter}>0</div>
        <div className={classes.overlay}>
            <div className={classes.bar} ref={refBar}></div>
            <div className={classes.bar} ref={refBar2}></div>
            <div className={classes.bar} ref={refBar3}></div>
            <div className={classes.bar} ref={refBar4}></div>
            <div className={classes.bar} ref={refBar5}></div>
            <div className={classes.bar} ref={refBar6}></div>
            <div className={classes.bar} ref={refBar7}></div>
            <div className={classes.bar} ref={refBar8}></div>
            <div className={classes.bar} ref={refBar9}></div>
            <div className={classes.bar} ref={refBar10}></div>
        </div>
    </Fragment>)
}