import React, {useState} from "react";

type PropsAccordion = {
   title: string
   collapsed: boolean
   setCollapsed: (collapsed: boolean) => void
}

export function Accordion(props: PropsAccordion) {

   return (
      <div>
         <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} collapsed={props.collapsed}/>
         {
            !props.collapsed && <AccordionBody/>
         }
      </div>
   );
}


type PropsAccordionTitle = {
   title: string
   collapsed: boolean
   setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: PropsAccordionTitle) {
   return (
      <h3 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
   );
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
}