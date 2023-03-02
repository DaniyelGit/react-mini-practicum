import React, {useState} from 'react';
import s from './OnOff.module.css';

type UnControlledOnOffPropsType = {
   defaultOn?: boolean
   onChange?: (value: boolean) => void
}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

   const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false);

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
                 setOn(false);
                 props.onChange?.(false)
              }}
         >Off
         </div>
         <div style={styleForOn}
              className={s.on}
              onClick={() => {
                 setOn(true);
                 props.onChange?.(true)
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