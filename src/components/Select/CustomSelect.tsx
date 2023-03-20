import React from 'react';
import s from './CustomSelect.module.css';

type itemType = {
   value: any
   title: string
}
export type CustomSelectPropsType = {
   value?: any
   onChange: (value: any) => void
   items: itemType[]
}

export const CustomSelect = (props: CustomSelectPropsType) => {

   const [active, setActive] = React.useState<boolean>(false);

   const selectedItem = props.items.find(el => el.value == props.value);

   const toggleActive = () => {
      setActive(!active);
   }

   const onItemClick = (value: any) => {
      props.onChange(value);
      toggleActive();
   }

   return (
      <div className={s.select}>
         <span onClick={toggleActive}>
            {
               selectedItem && selectedItem.title
            }
         </span>
         {
            active &&
            <div className={s.items}>
               {
                  props.items.map(item => (
                     <div
                        key={'option-' + item.value}
                        onClick={() => onItemClick(item.value)}
                     >
                        {item.title}
                     </div>
                  ))
               }
            </div>
         }
      </div>
   );
};