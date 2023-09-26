import { Fragment, useEffect, useRef } from "react";
import { Bounce, gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactJSIcon from "../icons/reactJS-icon";
import TypescriptIcon from "../icons/typescript-icon";
import VuejsIcon from "../icons/vuejs-icon";
import GreenSockIcon from "../icons/greensock-icon";
import NodeIcon from "../icons/node-icon";
import PhotoshopIcon from "../icons/photoshop-icon";
import Searching from "../SearchAnimation";
import classes from './release.module.css'
import Thanks from "../Thanks";
import TopIcon from "../icons/top-icon";
import Link from "next/link";
import PeopleComponent from "../People";
import ContactComponent from "../Contact";
import { TimelineMax } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger)

const ReleaseComponent = () => {
    const refVertical = useRef(null)
    const refColLeft = useRef(null)
    const refHorizontal = useRef(null)
    const refHoriItem = useRef(null)
    const refTitleHead1 = useRef(null)
    const refTitleHead2 = useRef(null)
    const refTitleHead3 = useRef(null)

    useEffect(() => {
        const vertical = refVertical.current
        const colLeft = refColLeft.current
        const horizontal = refHorizontal.current
        const titleHead1 = refTitleHead1.current
        const titleHead2 = refTitleHead2.current
        const titleHead3 = refTitleHead3.current

        let box_items = gsap.utils.toArray(".horizontal__item");
        const timeln = gsap.timeline({ paused: true });
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
            end: "+=" + horizontal.offsetWidth/1.5
        }
        });

        //random title
        var tl = new TimelineMax({repeat:1})
        tl.staggerFrom(titleHead1, 1 , {
            y:"-300px",
            ease: Bounce.easeOut,
        }, 0.1)
        tl.staggerFrom(titleHead2, 1 , {
            y:"-300px",
            ease: Bounce.easeOut,
        }, 0.1)
        tl.staggerFrom(titleHead3, 1 , {
            y:"-400px",
            ease: Bounce.easeOut,
        }, 0.1)

      return () => {
        
      }
    }, [])
    
    return (
        <Fragment>
            <section id="vertical" ref={refVertical}>
                <div class="container">
                    <div class="vertical__content">
                        <div class="col col_left" ref={refColLeft}>
                            <h2 class="vertical__heading" ><span ref={refTitleHead1}>I'm</span><span ref={refTitleHead2}>Quang Dat</span><span ref={refTitleHead3}>Nguyen</span></h2>
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
                        <h4>Skills</h4>
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
        
            <section id="connect">
                <div className={classes.wrap_search}>
                    <Searching/>
                    
                </div>
                
                <div class="container">
                    <div class="connect_textwrap">
                        <h3>Contact</h3>
                        <p>NOW THAT YOU ALREADY KNOW ME, IT IS TIME TO START TO BUILD SOMETHING AMAZING TOGETHER.</p>
                    </div>
                    <div>
                        <ContactComponent/>
                    </div>
                    <div>
                        <PeopleComponent/>
                    </div>
                    <div className={classes.wrap_thanks}>
                        <div className={classes.wrap_icon}>
                            <Link href="#vertical">
                                <TopIcon/>
                            </Link>
                        </div>
                        <Thanks/>
                    </div>
                    <div className={classes.textsite}>
                        2023 © DAWANGDAT OFFICIAL – SITE BY QUANG DAT
                    </div>
                </div>
            </section>

        </Fragment>
    );
};

export default ReleaseComponent;