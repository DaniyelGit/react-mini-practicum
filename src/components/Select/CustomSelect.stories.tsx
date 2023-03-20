import {CustomSelect, CustomSelectPropsType} from "./CustomSelect";
import {Story} from "@storybook/react";
import React from "react";

export default {
   title: 'customSelect',
   component: CustomSelect
}


export const WithValue: Story<CustomSelectPropsType> = (args) => {

   const [value, setValue] = React.useState<any>(1);


   return (
      <CustomSelect {...args}
                    value={value}
                    onChange={setValue}
      />
   )
};

WithValue.args = {
   items: [
      {value: 1, title: 'Даниель'},
      {value: 2, title: 'Виктория'},
      {value: 3, title: 'Захар'},
      {value: 4, title: 'Евгений'}
   ],
}


export const WithoutValue: Story<CustomSelectPropsType> = (args) => {

   const [value, setValue] = React.useState<any>(null);


   return (
      <CustomSelect {...args}
                    value={value}
                    onChange={setValue}
      />
   )
};

WithoutValue.args = {
   items: [
      {value: 1, title: 'Даниель'},
      {value: 2, title: 'Виктория'},
      {value: 3, title: 'Захар'},
      {value: 4, title: 'Евгений'}
   ],
}
