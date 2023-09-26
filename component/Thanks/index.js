import { Sine } from "gsap";
import { TweenMax } from "gsap/gsap-core";
import { Fragment, useEffect, useRef } from "react";

export default function Thanks() {
    const refLoad = useRef(null)
    useEffect(() => {
        const loader = refLoad.current
        var loadLength = loader.getComputedTextLength() * 2.9;
        
        loader.setAttribute("stroke-dasharray", loadLength);
        loader.setAttribute("stroke-dashoffset", loadLength);
        
        TweenMax.to(loader, 2, {
          strokeDashoffset: 0,
          ease: Sine.easeInOut,
          yoyo: true,
          repeat: -1,
        });
      return () => {
        
      }
    }, [])
    
    return(
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80">
                <text
                        class="load"
                        ref={refLoad}
                        x="150"
                        y="50"
                        fill="none"
                        text-anchor="middle"
                        stroke="rgb(255, 246, 230)"
                        stroke-width="0.2"
                        font-size="48"
                        font-family='IBM Plex Mono'
                        >
                        THANKS!
                </text>
            </svg>
        </Fragment>
    )
}