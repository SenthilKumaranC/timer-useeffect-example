import { useCallback, useEffect, useMemo, useState } from "react";
import './Timer.css';

const UseEffectComponent = (props: any) => {

    const [seconds, setSeconds] = useState<number>(0);

    const tick = useCallback(() => {
        console.log("timer is running1");
        console.log("timer is running2");
        setSeconds((prevSecond) => prevSecond + 1);
    }, []);

    useEffect(() => {
        //write on start code
        const interval = setInterval(tick, 1000);
        return () => {
            //  dispose code
            console.log("clearing timer to save memory")
            clearInterval(interval);
        }
    }, [tick]);

    const onMouseMove = useCallback(() => {
        console.log("mouse clicked on window")
    }, [])

    useEffect(() => {
        window.addEventListener("mousedown", onMouseMove);
        return () => {
            console.log("removing events to avoid memory leak")
            window.removeEventListener("mousedown", onMouseMove);
        }
    }, [onMouseMove]);

    const widthValue = useMemo(() => {
        return 2 * seconds;
    }, [seconds])



    return (<div className="Wrapper"><div className="TextDecoration TextLayout">
        Seconds: {seconds}</div>
        <div style={{ width: `${widthValue}vw` }} className="ProgressBar"></div></div>
    );
}

export default UseEffectComponent;