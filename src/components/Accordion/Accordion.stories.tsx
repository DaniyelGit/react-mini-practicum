import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default  {
   title: 'Accordion',
   component: Accordion,
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;


const callBack = action('accordion mode change event fired');
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
   title: 'Menu',
   item: [
      {id: 1, title: 'Товары'},
      {id: 2, title: 'Доставка'},
      {id: 3, title: 'О нас'},
      {id: 4, title: 'Корзина'}
   ],
   collapsed: false,
   setCollapsed: callBack
}

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
   title: 'Users',
   item: [
      {id: 1, title: 'Даниель'},
      {id: 2, title: 'Виктория'},
      {id: 3, title: 'Захар'},
      {id: 4, title: 'Евгений'}
   ],
   collapsed: true,
   color: 'red',
   setCollapsed: callBack
};



export const ChangingMode: Story<AccordionPropsType> = args => {
   const [value, setValue] = useState<boolean>(false);

   return <Accordion {...args} setCollapsed={setValue} collapsed={value} onClick={(value) => alert(`Человек под номером ${value} будь счастлив`)}/>
}

ChangingMode.args = {
   title: 'Users',
   item: [
      {id: 1, title: 'Даниель'},
      {id: 2, title: 'Виктория'},
      {id: 3, title: 'Захар'},
      {id: 4, title: 'Евгений'}
   ],
}


