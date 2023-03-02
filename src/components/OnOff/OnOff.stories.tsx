import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

import {OnOff} from "./OnOff";

export default {
   title: 'OnOff',
   component: OnOff,
}

const callBack = action('on or off clicked');


export const OnMode = () => <OnOff onOffValue={true} setOnOffValue={callBack}/>
export const OffMode = () => <OnOff onOffValue={false} setOnOffValue={callBack}/>

export const ChangingMode = () => {
   const [value, setValue] = useState<boolean>(false);

   return (
      <OnOff onOffValue={value} setOnOffValue={setValue}/>
   );
}



