import { Fragment, useEffect, useRef } from "react";
import classes from './searchAnimation.module.css'
import { TimelineMax } from "gsap/gsap-core";
import { TweenMax } from "gsap/gsap-core";

export default function Searching() {
    const refLeftLens = useRef(null)
    const refHandLeft = useRef(null)
    const refArmLeftPortion = useRef(null)
    const refArmRightPortion = useRef(null)
    const refHandRight = useRef(null)
    const refRightLens = useRef(null)
    const refBinoBackLeft = useRef(null)
    const refBinoBackRight = useRef(null)
    const refCenter = useRef(null)
    const refMouth = useRef(null)
    const refHeadGroup = useRef(null)
    const refBody = useRef(null)
    const refHair = useRef(null)
    const refLeftLegPortion = useRef(null)
    const refRightLegPortion = useRef(null)
    const refLeftFoot = useRef(null)
    const refFlareLargeLeft = useRef(null)
    const refFlareSmallLeft = useRef(null)
    const refFlareLargeRight = useRef(null)
    const refFlareSmallRight = useRef(null)

    useEffect(() => {
        const leftLens = refLeftLens.current
        const handLeft = refHandLeft.current
        const armLeftPortion = refArmLeftPortion.current
        const armRightPortion = refArmRightPortion.current
        const handRight = refHandRight.current
        const rightLens = refRightLens.current
        const binoBackLeft = refBinoBackLeft.current
        const binoBackRight = refBinoBackRight.current
        const center = refCenter.current
        const mouthAni = refMouth.current
        const headGroupani = refHeadGroup.current
        const body = refBody.current
        const hair = refHair.current
        const leftLegPortion = refLeftLegPortion.current
        const rightLegPortion = refRightLegPortion.current
        const LeftFoot = refLeftFoot.current
        const flareLargeLeft = refFlareLargeLeft.current
        const flareSmallLeft = refFlareSmallLeft.current
        const flareLargeRight = refFlareLargeRight.current
        const flareSmallRight = refFlareSmallRight.current

        var _repeatDelay = 3;

        var leftLensTimeline = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            leftLensTimeline.to(leftLens, 3, { xPercent: -25}).to(leftLens, 3, { xPercent: 25}).to(leftLens, 3, { xPercent: 0})
        
            
        // hand left 
        var leftHand = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
        leftHand
        .to(handLeft, 3, { xPercent: -25})
        .to(handLeft, 3, { xPercent: 25})
        .to(handLeft, 3, { xPercent: 0})
        // left armportion
        var leftArmPortion = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            leftArmPortion
            .to(armLeftPortion, 3, {attr:{x2:113}})
            .to(armLeftPortion, 3, {attr:{x2:153}})
            .to(armLeftPortion, 3, {attr:{x2:133}})

        //right armportion
        var rightArmPortion = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            rightArmPortion
            .to(armRightPortion, 3, {attr:{x2:310}})
            .to(armRightPortion, 3, {attr:{x2:350}})
            .to(armRightPortion, 3, {attr:{x2:330}})

        //right hand 
        var rightHand = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            rightHand
            .to(handRight, 3, { xPercent: -25})
            .to(handRight, 3, { xPercent: 25})
            .to(handRight, 3, { xPercent: 0})

        // right lens
        var rightLensTimeline = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            rightLensTimeline
            .to(rightLens, 3, { xPercent: -25})
            .to(rightLens, 3, { xPercent: 25})
            .to(rightLens, 3, { xPercent: 0})

        //left lens lower
        var leftLensLower = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            leftLensLower
            .to(binoBackLeft, 3, { xPercent: 15})
            .to(binoBackLeft, 3, { xPercent: -15})
            .to(binoBackLeft, 3, { xPercent: 0})

        // right lens lower
        var rightLensLower = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            rightLensLower
            .to(binoBackRight, 3, { xPercent: 15})
            .to(binoBackRight, 3, { xPercent: -15})
            .to(binoBackRight, 3, { xPercent: 0})

        // binobase 
        var binoBase = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            binoBase.to(center, 3, { xPercent: -18}).to(center, 3, { xPercent: 18}).to(center, 3, { xPercent: 0})

        //mouth 
        var mouth = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            mouth
            .to(mouthAni, 3, { xPercent: -20})
            .to(mouthAni, 3, { xPercent: 20})
            .to(mouthAni, 3, { xPercent: 0})

        // headgroup
        var headGroup = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay * 2}).timeScale(6);
            headGroup
            .to(headGroupani, 3, { rotate: 1, yPercent: 3, transformOrigin: "top right"})
            .to(headGroupani, 3, { rotate: 0, yPercent: 0})
            .to(headGroupani, 3, { rotate: -1, yPercent: 3, transformOrigin: "top left"})
            .to(headGroupani, 3, { rotate: 0, yPercent: 0})
            .to(headGroupani, 3, { rotate: 1, yPercent: 3, transformOrigin: "top right"})
            .to(headGroupani, 3, { rotate: 0, yPercent: 0})

        //binobase
        var bodyBase = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay * 2}).timeScale(6);
            bodyBase
            .to(body, 3, { rotate: 1, yPercent: 3, transformOrigin: "top right"})
            .to(body, 3, { rotate: 0, yPercent: 0})
            .to(body, 3, { rotate: 0, yPercent: 3, transformOrigin: "top left"})
            .to(body, 3, { rotate: 0, yPercent: 0})
            .to(body, 3, { rotate: 1, yPercent: 3, transformOrigin: "top right"})
            .to(body, 3, { rotate: 0, yPercent: 0})

        //fin
        var fin = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay}).timeScale(3);
            fin
            .to(hair, 3, { xPercent: 28})
            .to(hair, 3, { xPercent: -22})
            .to(hair, 3, { xPercent: 0})

        //left leg 
        var leftLeg = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay * 2}).timeScale(6);
            leftLeg
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}})
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}})
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}})
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}})
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}})
            .to(leftLegPortion, 3, {attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}})

        //right leg
        var rightLeg = new TimelineMax({repeat: -1, repeatDelay: _repeatDelay * 2}).timeScale(6);
            rightLeg
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}})
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}})
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}})
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}})
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}})
            .to(rightLegPortion, 3, {attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}})

        //left foot
        var leftFoot= new TimelineMax({repeat: -1, repeatDelay: _repeatDelay * 20}).timeScale(24);
            leftFoot
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 20})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 20})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})
            .to(LeftFoot, 3, { rotate: 0})

        //FlareLargeLeft
        TweenMax.to(flareLargeLeft, 0.1, {x:"+=2", y:"+=2", yoyo:true, repeat:-1});

        TweenMax.to(flareSmallLeft, 0.1, {x:"+=2", y:"-=2", yoyo:true, repeat:-1});

        TweenMax.to(flareLargeRight, 0.1, {x:"-=2", y:"-=2", yoyo:true, repeat:-1});

        TweenMax.to(flareSmallRight, 0.1, {x:"-=2", y:"+=2", yoyo:true, repeat:-1});
    }, [])
    
    return(
        <Fragment>
            <div class="svg-container">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet" class="svg-content">
                    <g id="LeftLeg">
                    <polyline id="LeftLegPortion" ref={refLeftLegPortion} class="st0" points="210.67,413.11 210.67,392.78 
                        210.67,366.56 	" />
                    <line ref={refLeftFoot} id="LeftFoot" class="st0" x1="196.37" y1="419.22" x2="210.67" y2="413.66" />
                    </g>
                    <g id="RightLeg">
                    <line id="RightFoot" class="st0" x1="269.04" y1="417.61" x2="254.75" y2="412.06" />
                    <polyline id="RightLegPortion" ref={refRightLegPortion} class="st1" points="254.75,413.11 254.75,392.78 254.75,366.56 	" />
                    </g>
                    <path id="Body" ref={refBody} class="st2" d="M253.22,263.44h-44.56c-11.03,0-10.27,2.06-10.27,20.06s-16.5,49.06-16.5,66.11
                    s9.03,28.22,20.06,28.22h62.56c11.03,0,20.06-8.03,20.06-28.22s-19.67-46.06-19.67-66.11C264.89,263.47,264.25,263.44,253.22,263.44
                    z" />
                    <g id="HeadGroup" ref={refHeadGroup}>
                    <path id="Hair" ref={refHair} class="st3" d="M198.56,75.44c0,0,2.55-11.11-11.12-11.11c-18.11,0-18.56,18.97-1.66,29.89c12.56,8.11,9.48,7.21,9.92,21.67" />
                    <path id="Head" class="st2" d="M278.49,110.72h-86.55c-24.46,0-52.05,31.27-56.22,44.47c-4.18,13.2-16.41,32.72-16.41,67.12
                        s80.06,58.77,104.52,58.77h18.49c24.46,0,105.06-32.86,105.06-62.47s-13.28-48.58-17.96-63.42
                        C324.71,140.33,302.94,110.72,278.49,110.72z" />
                    <path id="Mouth" ref={refMouth} class="st4" d="M210.56,230.78c0,0,8.89,9.56,21.56,9.56c13.72,0,22.61-8.67,22.61-8.67" />
                    </g>
                    <g id="ArmLeft">
                    <circle id="HandLeft" ref={refHandLeft} class="st5" cx="135.99" cy="221.78" r="28.78" />
                    <line id="ArmLeftPortion" ref={refArmLeftPortion} class="st6" x1="196.31" y1="297.13" x2="133" y2="237.89" />
                    </g>
                    <g id="ArmRight">
                    <line id="ArmRightPortion" ref={refArmRightPortion} class="st6" x1="267.23" y1="297.13" x2="330.64" y2="236.66" />
                    <circle id="HandRight" ref={refHandRight} class="st7" cx="328.56" cy="221.78" r="28.78" />
                    </g>
                    <g id="Center" ref={refCenter} >
                    <path id="CenterBasePath" class="st8" d="M232.11,196.11c10,0,28.67,9.56,28.67,9.56v-39.11c-3.41-2.39-13.66-8.9-28.22-8.67
                        c-13.62,0.22-23.18,6.23-26.67,8.67c0,13.04,0,26.07,0,39.11C205.89,205.67,222.33,196.11,232.11,196.11z" />
                    </g>
                    <g id="LeftLens" ref={refLeftLens}>
                    <circle id="BinoBackLeft" ref={refBinoBackLeft} class="st8" cx="161.42" cy="177.75" r="56.25" />
                    <circle id="BinoBaseLeft" class="st9" cx="161.42" cy="177.92" r="56.25" />
                    <circle id="BinoLensOuterLeft" class="st10" cx="161.89" cy="177.75" r="40.02" />
                    <circle id="BinoLensInnerLeft" class="st11" cx="174.62" cy="163.55" r="17.32" />
                    <circle id="FlareLargeLeft" ref={refFlareLargeLeft} class="st12" cx="146.17" cy="162.42" r="8.33" />
                    <circle id="FlareSmallLeft" ref={refFlareSmallLeft} class="st12" cx="161" cy="180.45" r="5.66" />
                    </g>
                    <g id="RightLens" ref={refRightLens}>
                    <circle id="BinoBackRight" ref={refBinoBackRight} class="st8" cx="303.33" cy="177.92" r="56.25" />
                    <circle id="BinoBaseRight" class="st9" cx="303.33" cy="177.75" r="56.25" />
                    <circle id="BinoLensOuterRight" class="st10" cx="303.66" cy="178.58" r="40.02" />

                    <circle id="BinoLensInnerLeft_00000051364367479173945580000012731815597230543010_" class="st11" cx="317.09" cy="163.55" r="17.32" />
                    <circle id="FlareLargeRight" ref={refFlareLargeRight} class="st12" cx="286.81" cy="161.73" r="8.33" />
                    <circle id="FlareSmallRight" ref={refFlareSmallRight} class="st12" cx="303.56" cy="179.5" r="5.66" />
                    </g>
                </svg>
                </div>
                <h1 className={classes.h1}>Searching <span class="one">.</span><span class="two">.</span><span class="three">.</span></h1>
        </Fragment>
    )
}