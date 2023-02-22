import React, {useState} from 'react';
import s from './OnOff.module.css';

type UnControlledOnOffPropsType = {

}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

   const [on, setOn] = useState<boolean>(false);

   const styleForOff = {
      background: on ? '' : 'red',
   }

   const styleForOn = {
      background: on ? 'green' : '',
   }

   const styleForCircle = {
      background: on ? 'green' : 'red',
   }

   return (
      <div className={s.wrapper}>
         <div style={styleForOff}
              className={s.off}
              onClick={() => {
                 setOn(false)
              }}
         >Off
         </div>
         <div style={styleForOn}
              className={s.on}
              onClick={() => {
                 setOn(true)
              }}
         >On
         </div>
         <div
            style={styleForCircle}
            className={s.circle}
         >
            💡
         </div>
      </div>
   );
};