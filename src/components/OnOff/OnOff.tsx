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
         <div style={styleForOff}
               className={s.off}
               onClick={() => props.setOnOffValue(false)}
         >Off</div>
         <div style={styleForOn}
               className={s.on}
               onClick={() => props.setOnOffValue(true)}
         >On</div>
         <div
            style={styleForCircle}
            className={s.circle}
         >
            💡
         </div>
      </div>
   );
};