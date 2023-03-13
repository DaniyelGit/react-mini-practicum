import React from "react";

export type AccordionPropsType = {
   title: string
   item: Array<{id: number, title: string}>
   collapsed: boolean
   color?: string
   /**
    * Callback that is called when any item clicked
    * @param value true/false
    */
   setCollapsed: (collapsed: boolean) => void
   onClick: (value: number) => void
}

export function Accordion(props: AccordionPropsType) {

   return (
      <div>
         <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={props.collapsed} color={props.color}/>
         {
            !props.collapsed && <AccordionBody item={props.item} onClick={props.onClick}/>
         }
      </div>
   );
}


type PropsAccordionTitle = {
   title: string
   collapsed: boolean
   color?: string
   setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: PropsAccordionTitle) {
   return (
      <h3 onClick={() => props.setCollapsed(!props.collapsed)} style={{color: props.color? props.color : 'black'}}>{props.title}</h3>
   );
}

type AccordionBodyPropsType = {
   item: Array<{id: number, title: string}>
   onClick: (value: number) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
   return (
      <ul>
         {
            props.item.map(item => {
               return (
                 <li key={item.id} onClick={() => props.onClick(item.id)}>{item.title}</li>
               );
            })
         }
      </ul>
   );
}