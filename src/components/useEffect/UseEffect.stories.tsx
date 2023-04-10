import React from "react";
import {useEffect} from "react";

export default {
   title: 'useEffect demo'
}

// Работа хука useEffect()
/*
useEffect(() => {
   console.log('без зависимостей срабатывает каждый раз при рендере компоненты')
})

useEffect(() => {
   console.log('срабатывает при изменении test')
}, [test])

useEffect(() => {
   console.log('срабатывает один раз после вмонитрования компоненты')
}, [])
*/


export const Clock = () => {
   const [date, setDate] = React.useState(new Date(Date.now()));
   const [timerId, setTimeId] = React.useState<number | undefined>(undefined)

   useEffect(() => {
      setTimeId(window.setInterval(() => {
         setDate(new Date());
      }, 1000));
      return () => clearInterval(timerId);
   }, []);

   const stopTime = () => {
      clearInterval(timerId);
      setTimeId(undefined);
   };

   const startTime = () => {
      setTimeId(window.setInterval(() => {
         setDate(new Date())
      }, 1000));
   };

   const hours = date.getHours();
   const min = date.getMinutes();
   const sec = date.getSeconds();

   const displayHours = hours < 10 ? `0${hours}` : hours;
   const displayMin = min < 10 ? `0${min}` : min;
   const displaySec = sec < 10 ? `0${sec}` : sec;


   return (
      <>
         <div>Время: {`${displayHours}:${displayMin}:${displaySec}`}</div>
         <button onClick={stopTime}>stop</button>
         <button onClick={startTime}>start</button>
      </>
   );
}
