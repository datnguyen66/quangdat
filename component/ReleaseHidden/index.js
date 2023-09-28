import { Fragment, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactJSIcon from "../icons/reactJS-icon";
import TypescriptIcon from "../icons/typescript-icon";
import VuejsIcon from "../icons/vuejs-icon";
import GreenSockIcon from "../icons/greensock-icon";
import NodeIcon from "../icons/node-icon";
import PhotoshopIcon from "../icons/photoshop-icon";
import classes from './releaseHidden.module.css'

const ReleaseHiddenComponent = () => {
    const refVertical = useRef(null)
    const refColLeft = useRef(null)
    const refHorizontal = useRef(null)
    const refHoriItem = useRef(null)

    useEffect(() => {
        const vertical = refVertical.current
        const colLeft = refColLeft.current
        const horizontal = refHorizontal.current
        let box_items = gsap.utils.toArray(".horizontal__item");
        const timeln = gsap.timeline({ paused: true });
        gsap.registerPlugin(ScrollTrigger)
        timeln.fromTo(colLeft, {y: 0}, {y: '290vh', duration: 1, ease: 'none'}, 0);
        ScrollTrigger.create({
            animation : timeln,
            trigger: vertical,
            start: "top top",
            end: "bottom center",
            scrub: true
        });
        gsap.to(box_items, {
            xPercent: -100 * (box_items.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                pin: true,
                scrub: 3,
                snap: .1 / (box_items.length - 1),
                end: "+=" + horizontal.offsetWidth
            }
        });
      return () => {
        
      }
    }, [])
    return (
        <Fragment>
            <section id="vertical" ref={refVertical}>
                <div class="container">
                    <div class="vertical__content">
                        <div class="col col_left" ref={refColLeft}>
                            <h2 class="vertical__heading"><span className={classes.title}>I'm</span><span className={classes.title}>front-end</span><span className={classes.title}>developer</span></h2>
                        </div>
                        <div class="col col_right">
                            <div class="vertical__item">
                                <h3>Release</h3>
                                <p>First of all, It's wonderful to be here. Welcome! <br/>
                    My name is Dat Q. Nguyen, I am Vietnamese, currently living and working in Ho Chi Minh City. </p>
                            </div>
                            <div class="vertical__item">
                                <h3>History</h3>
                                <p>I'm a front-end developer who loves to build beautiful and meaningful online experiences.
                                    <br/>
                                    <br/>
                                    October 2021, my work has been creating websites using Angular.
                                    <br/>
                                    <br/>
                                    Since February 2022, my work has been creating websites using Reactjs.
                                </p>
                            </div>
                            <div class="vertical__item">
                                <h3>PRINCIPLES & VALUES</h3>
                                <ul>
                                    <p><span class="value__number">01.</span>Always working with accuracy and transparency.</p>
                                </ul>
                                <ul>
                                    <p><span class="value__number">02.</span>Well-made website require effort and comprehension.</p>
                                </ul>
                                <ul>
                                    <p><span class="value__number">03.</span>Focus is the key, every minute is important.</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="horizontal" ref={refHorizontal}>
                <div class="container">
                    <div class="">
                        <h4>My Skills</h4>
                    </div>
                    <div class="horizontal__content">
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><ReactJSIcon/></div>
                        </div>
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><NodeIcon/></div>
                        </div>
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><TypescriptIcon/></div>
                        </div>
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><VuejsIcon/></div>
                        </div>
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><GreenSockIcon/></div>
                        </div>
                        <div class="horizontal__item" ref={refHoriItem}>
                            <div class="horizontal__numm"><PhotoshopIcon/></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="vertical">
                <div class="container">
                    <div class="vertical__content">
                        <div class="col col_left">
                            <h2 class="vertical__heading"><span>Nguyen</span><span>Smooth</span><span>Scroll</span></h2>
                        </div>
                        <div class="col col_right">
                            <div class="vertical__item">
                                <h3>Smooth Scroll Lenis</h3>
                                <p>Lenis is an open-source library built to standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the platform and keeping it accessible.</p>
                            </div>
                            <div class="vertical__item">
                                <h3>Smooth Scroll Lenis</h3>
                                <p>Lenis is an open-source library built to standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the platform and keeping it accessible.</p>
                            </div>
                            <div class="vertical__item">
                                <h3>Smooth Scroll Lenis</h3>
                                <p>Lenis is an open-source library built to standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the platform and keeping it accessible.</p>
                            </div>
                            <div class="vertical__item">
                                <h3>Smooth Scroll Lenis</h3>
                                <p>Lenis is an open-source library built to standardize scroll experiences and sauce up websites with butter-smooth navigation, all while using the platform and keeping it accessible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </Fragment>
    );
};

export default ReleaseHiddenComponent;
