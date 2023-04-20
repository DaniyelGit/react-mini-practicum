import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';
import {DigitalClockView} from "./DigitalClock/DigitalClock";
import {AnalogClockView} from "./AnalogClock/AnalogClock";

type ClockPropsType = {
   mode?: 'analog' | 'digital'
}



export const Clock = (props: ClockPropsType) => {

   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const intervalID = setInterval(() => {
         setDate(new Date());
      }, 1000);

      return () => {
         clearInterval(intervalID);
      }
   }, [])




   let view;

   switch (props.mode) {
      case 'analog': {
         view = <AnalogClockView date={date}/>
         break;
      }
      case 'digital':
      default: {
         view = <DigitalClockView date={date}/>
      }
   }

   return (
      view
   );
};

