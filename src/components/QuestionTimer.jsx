import { useState, useEffect } from "react";
export default function QuestionTimer({timeout, onTimeout}){
    useEffect(()=>{
      const timer = setTimeout( onTimeout,timeout);  //moving timer inside the useEffect so that we do not have muliple timers running 
      return ()=>{
        clearTimeout(timer);
      };
    },[onTimeout,timeout])
    
    const [remainingTime, setRemainingTime] = useState(timeout);
    /**
     * We need to use the useEffect because whenver the setInterval changes the state, it re-renders the compoment,
     * which leads to have another interval to be executed. This leads to infinite loop.
     */
    useEffect(()=>{
    const interval = setInterval(()=>{
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        },100);

      return ()=>{
        clearInterval(interval);
      };
    },[]);
    

    return <progress id="question-time"  max={timeout}  value={remainingTime}/>
}