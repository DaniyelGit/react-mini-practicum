import React, {KeyboardEvent, useEffect} from 'react';
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
   const [hoveredElem, setHoveredElem] = React.useState(props.value);

   const selectedItem = props.items.find(el => el.value == props.value);
   const hoveredItem = props.items.find(el => el.value === hoveredElem)

   const toggleActive = () => {
      setActive(!active);
   }

   const onItemClick = (value: any) => {
      props.onChange(value);
      toggleActive();
   }

   useEffect(() => {
      setHoveredElem(props.value);
   }, [props.value])

   const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
         for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElem) {
               const pretendentElement = e.key === 'ArrowDown'
                  ? props.items[i + 1]
                  : props.items[i - 1];
               if (pretendentElement) {
                  props.onChange(pretendentElement.value);
                  return;
               };
            };
         };
         if (!selectedItem) {
            props.onChange(props.items[0].value);
         }
      }

      if (e.key === 'Escape' || e.key === 'Enter') {
         setActive(false);
      }
   }

   return (
      <div className={s.select}
           onKeyUp={onKeyUpHandler}
           tabIndex={0}>
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
                        className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                        onClick={() => onItemClick(item.value)}
                        onMouseEnter={() => setHoveredElem(item.value)}
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