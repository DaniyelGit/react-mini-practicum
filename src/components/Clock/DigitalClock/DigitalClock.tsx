import React from "react";


const getStringForClock = (num: number) => {
   return num < 10 ? '0' + num : num;
}

export const DigitalClockView = ({date}: {date: Date}) => {
   return (
      <div>
         <span>{getStringForClock(date.getHours())}</span>
         :
         <span>{getStringForClock(date.getMinutes())}</span>
         :
         <span>{getStringForClock(date.getSeconds())}</span>
      </div>
   );
}