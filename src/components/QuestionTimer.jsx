import { useState, useEffect } from "react";
export default function QuestionTimer({timeout, onTimeout}){
    useEffect(()=>{
      setTimeout( onTimeout,timeout);  //moving timer inside the useEffect so that we do not have muliple timers running 
    },[onTimeout,timeout])
    
    const [remainingTime, setRemainingTime] = useState(timeout);
    /**
     * We need to use the useEffect because whenver the setInterval changes the state, it re-renders the compoment,
     * which leads to have another interval to be executed. This leads to infinite loop.
     */
    useEffect(()=>{
    setInterval(()=>{
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        },100);
    },[]);
    

    return <progress id="question-time"  max={timeout}  value={remainingTime}/>
}