import { Sine } from "gsap"
import { TweenMax } from "gsap/gsap-core"
import { useEffect, useRef } from "react"

export default function PeopleComponent() {
    const refLc = useRef(null)
    const refLt = useRef(null)
    const refRc = useRef(null)
    const refRt = useRef(null)
    const refS = useRef(null)
    const refUar = useRef(null)
    const refLar = useRef(null)
    const refUal = useRef(null)
    const refLal = useRef(null)
    const refHead = useRef(null)
    const refOneLadder = useRef(null)
    const refTwoLadder = useRef(null)
    const refThreeLadder = useRef(null)
    const refFourLadder = useRef(null)
    const refFiveLadder = useRef(null)
    const refSixLadder = useRef(null)
    const refSevenLadder = useRef(null)
    const refEightLadder = useRef(null)
    const refNineLadder = useRef(null)
    const refTenLadder = useRef(null)

    useEffect(() => {
        const leftCalf = refLc.current
        const leftThigh = refLt.current
        const rightCalf = refRc.current
        const rightThigh = refRt.current
        const spine = refS.current
        const upperArmRight = refUar.current
        const lowerArmRight = refLar.current
        const upperArmLeft = refUal.current
        const lowerArmLeft = refLal.current
        const head = refHead.current
        const oneLine = refOneLadder.current
        const twoLine = refTwoLadder.current
        const threeLine = refThreeLadder.current
        const fourLine = refFourLadder.current
        const fiveLine = refFiveLadder.current
        const sixLine = refSixLadder.current
        const sevenLine = refSevenLadder.current
        const eightLine = refEightLadder.current
        const nineLine = refNineLadder.current
        const tenLine = refTenLadder.current
        
        var easingLinear = 'Linear.easeNone';
        var easing = Sine.easeInOut;
        var animationDuration = .375;
    
        let multiplier = 0.5;
        let distance = 82.3;

        //Animate legs

        //Animate left calf
        //Knee
        TweenMax.to(leftCalf, animationDuration, {attr:{x1:"-="+40*multiplier, y1:"-="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});
        //Foot
        TweenMax.to(leftCalf, animationDuration, {attr:{x2:"+="+20*multiplier, y2:"-="+distance*multiplier}, repeat:-1, yoyo:true, ease:easingLinear});

        //Animate left thigh
        TweenMax.to(leftThigh, animationDuration, {attr:{x1:"+="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});
        TweenMax.to(leftThigh, animationDuration, {attr:{x2:"-="+40*multiplier, y2:"-="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});

        //Animate right calf
        //Knee
        TweenMax.to(rightCalf, animationDuration, {attr:{x1:"-="+40*multiplier, y1:"+="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});
        //Foot
        TweenMax.to(rightCalf, animationDuration, {attr:{x2:"+="+20*multiplier, y2:"+="+distance*multiplier}, repeat:-1, yoyo:true, ease:easingLinear});

        //Animate right thigh
        TweenMax.to(rightThigh, animationDuration, {attr:{x1:"+="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});
        TweenMax.to(rightThigh, animationDuration, {attr:{x2:"-="+40*multiplier, y2:"+="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});

        //Animate spine
        TweenMax.to(spine, animationDuration, {attr:{x1:"+="+40*multiplier}, repeat:-1, yoyo:true, ease:easing});
        TweenMax.to(spine, animationDuration, {attr:{x2:"+="+10*multiplier}, repeat:-1, yoyo:true, ease:easing});

        //Animating arms
        //Animate upper right arm
        TweenMax.to(upperArmRight, animationDuration, {attr:{x1:"+="+10*multiplier}, repeat:-1, yoyo:true, ease:easing});
        TweenMax.to(upperArmRight, animationDuration, {attr:{x2:"+="+17*multiplier, y2:"-="+distance*multiplier}, repeat:-1, yoyo:true, ease:easing});

        //Animate lower right arm
        //Elbow
        TweenMax.to(lowerArmRight, animationDuration, {attr:{x1:"+="+17*multiplier, y1:"-="+distance*multiplier}, repeat:-1, yoyo:true, ease:easing});
        //Hand
        TweenMax.to(lowerArmRight, animationDuration, {attr:{x2:"+="+12*multiplier, y2:"-="+distance*multiplier}, repeat:-1, yoyo:true, ease:easingLinear});

        //Animate upper left arm
        TweenMax.to(upperArmLeft, animationDuration, {attr:{x1:"+="+10*multiplier}, repeat:-1, yoyo:true, ease:easing});
        TweenMax.to(upperArmLeft, animationDuration, {attr:{x2:"+="+17*multiplier, y2:"+="+distance*multiplier}, repeat:-1, yoyo:true, ease:easing});

        //Animate lower left arm
        //Elbow
        TweenMax.to(lowerArmLeft, animationDuration, {attr:{x1:"+="+17*multiplier, y1:"+="+distance*multiplier}, repeat:-1, yoyo:true, ease:easing});
        //Hand
        TweenMax.to(lowerArmLeft, animationDuration, {attr:{x2:"+="+12*multiplier, y2:"+="+distance*multiplier}, repeat:-1, yoyo:true, ease:easingLinear});

        TweenMax.to(head, animationDuration, {attr:{cx:"+="+4*multiplier}, repeat:-1, yoyo:true, ease:easing});


        TweenMax.to(oneLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(twoLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(threeLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(fourLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(fiveLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(sixLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(sevenLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(eightLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(nineLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});
        TweenMax.to(tenLine, animationDuration, {attr:{y1:"+="+82.3*multiplier, y2:"+="+82.3*multiplier}, repeat:-1, yoyo:false, ease:easingLinear});

      return () => {
        
      }
    }, [])
    
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578.88 495.93">
            <defs>
                <style>
                    
                </style>
            </defs>
            <title>Stege</title>
            <g id="Lager_2" data-name="Lager 2">
                <g id="Layer_1" data-name="Layer 1">
                    <g id="ladder" transform="translate(0 12.5)">
                        <line class="ladderLines" x1="45.33" y1="25.59" x2="45.33" y2="443.15" />
                        <line class="ladderLines" x1="138.12" y1="25.59" x2="138.12" y2="443.15" />
                        <line class="oneLadderLine" ref={refOneLadder} x1="39.2" y1="25.59" x2="144.24" y2="25.59" />
                        <line class="oneLadderLine" ref={refTwoLadder}  x1="39.2" y1="66.74" x2="144.24" y2="66.74" />
                        <line class="oneLadderLine" ref={refThreeLadder} x1="39.2" y1="107.89" x2="144.24" y2="107.89" />
                        <line class="oneLadderLine" ref={refFourLadder} x1="39.2" y1="149.03" x2="144.24" y2="149.03" />
                        <line class="oneLadderLine" ref={refFiveLadder} x1="39.2" y1="190.17" x2="144.24" y2="190.17" />
                        <line class="oneLadderLine" ref={refSixLadder} x1="39.2" y1="231.31" x2="144.24" y2="231.31" />
                        <line class="oneLadderLine" ref={refSevenLadder} x1="39.2" y1="272.45" x2="144.24" y2="272.45" />
                        <line class="oneLadderLine" ref={refEightLadder} x1="39.2" y1="313.6" x2="144.24" y2="313.6" />
                        <line class="oneLadderLine" ref={refNineLadder} x1="39.2" y1="354.74" x2="144.24" y2="354.74" />
                        <line class="oneLadderLine" ref={refTenLadder} x1="39.2" y1="395.88" x2="144.24" y2="395.88" />
                    </g>
                    <text class="climber-cls-3" transform="translate(188.44 88.31)" style={{fill:"white"}}>
                        <tspan x="0" y="40.44">"The greater the effort,</tspan>
                        <tspan x="0" y="80.87">the greater the glory."</tspan>
                        <tspan class="climber-cls-4" x="230.24" y="120.51" style={{fontSize:"10px !important" }}>Pierre Corneille</tspan>
                        <tspan class="climber-cls-5" x="342.04" y="166.51"> </tspan>
                        <tspan x="0" y="232.19">"Hard work beats talent</tspan>
                        <tspan x="0" y="270.06"> when talent doesn’t work hard."</tspan>
                        <tspan class="climber-cls-4" x="230.24" y="313.5" style={{fontSize:"10px !important" }}>Tim Notke</tspan>
                    </text>
                    <g id="stickperson" transform="translate(50 110)">
                        <g id="Legs">
                            <line id="lc" ref={refLc} class="climber-cls-6" x1="14.16" y1="167.79" x2="28.6" y2="214.99" />
                            <line id="lt" ref={refLt} class="climber-cls-6" x1="29.7" y1="127.52" x2="14.16" y2="167.79" />
                            <line id="rc" ref={refRc} class="climber-cls-6" x1="81.34" y1="148.53" x2="41.08" y2="175.04" />
                            <line id="rt" ref={refRt} class="climber-cls-6" x1="29.7" y1="127.52" x2="81.34" y2="148.53" />
                        </g>
                    <line id="s" ref={refS} class="climber-cls-6" x1="29.7" y1="127.52" x2="36.7" y2="68" />
                        <g id="Arms">
                            <line id="lal" ref={refLal} class="climber-cls-6" x1="7.81" y1="46.73" x2="3" y2="8" />
                            <line id="uar" ref={refUar} class="climber-cls-6" x1="36.7" y1="68" x2="64.71" y2="82.44" />
                            <line id="lar" ref={refLar} class="climber-cls-6" x1="64.71" y1="82.44" x2="71.28" y2="50.93" />
                            <line id="ual" ref={refUal} class="climber-cls-6" x1="36.7" y1="68" x2="7.81" y2="46.73" />
                        </g>
                    <circle id="head" ref={refHead} class="climber-cls-6" cx="38.2" cy="31.23" r="19.26" />
                    </g>
                </g>
            </g>
        </svg>
    )
}