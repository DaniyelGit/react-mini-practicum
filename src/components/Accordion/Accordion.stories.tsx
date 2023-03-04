import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
   title: 'Accordion',
   component: Accordion,
}

const callBack = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
   title: 'Menu',
   collapsed: false,
   setCollapsed: callBack,
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
   title: 'Users',
   collapsed: true,
   setCollapsed: callBack
};

export const ChangingMode2 = Template.bind({});
ChangingMode2.args = {}

export const ChangingMode = () => {
   const [value, setValue] = useState<boolean>(false);

   return (
      <Accordion title={'Users'} collapsed={value} setCollapsed={() => setValue(!value)}/>
   );
}



