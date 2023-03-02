import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

import {Accordion} from "./Accordion";

export default {
   title: 'Accordion',
   component: Accordion,
}

const callBack = action('accordion mode change event fired');


export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} setCollapsed={callBack}/>
export const UsersUnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} setCollapsed={callBack}/>

export const ChangingMode = () => {
   const [value, setValue] = useState<boolean>(false);

   return (
      <Accordion title={'Users'} collapsed={value} setCollapsed={() => setValue(!value)}/>
   );
}



