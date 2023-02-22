import React, {useState} from "react";

type PropsAccordion = {
   title: string
   collapsed: boolean
   setCollapsed: () => void
}

export function Accordion(props: PropsAccordion) {

   return (
      <div>
         <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}/>
         {
            !props.collapsed && <AccordionBody/>
         }

      </div>
   );
}


type PropsAccordionTitle = {
   title: string
   setCollapsed: () => void
}

function AccordionTitle(props: PropsAccordionTitle) {
   return (
      <h3 onClick={props.setCollapsed}>{props.title}</h3>
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