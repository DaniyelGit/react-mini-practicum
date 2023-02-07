import React from 'react';
import s from './OnOff.module.css';

type OnOffPropsType = {
   onOffValue: boolean
   setOnOffValue: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

   const styleForOff = {
      background: props.onOffValue ? '' : 'red',
   }

   const styleForOn = {
      background: props.onOffValue ? 'green' : '',
   }

   const styleForCircle = {
      background: props.onOffValue ? 'green' : 'red',
   }

   return (
      <div className={s.wrapper}>
         <span style={styleForOff}
               className={s.off}
               onClick={() => props.setOnOffValue(false)}
         >Off</span>
         <span style={styleForOn}
               className={s.on}
               onClick={() => props.setOnOffValue(true)}
         >On</span>
         <span
            style={styleForCircle}
            className={s.circle}
         >
            💡
         </span>
      </div>
   );
};