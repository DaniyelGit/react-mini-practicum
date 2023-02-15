import React, {useState} from "react";

type PropsAccordion = {
   title: string
   collapsed: boolean
}

export function Accordion(props: PropsAccordion) {

   return (
      <div>
         <AccordionTitle title={props.title}/>
         {
            !props.collapsed && <AccordionBody/>
         }

      </div>
   );
}


type PropsAccordionTitle = {
   title: string
}

function AccordionTitle(props: PropsAccordionTitle) {
   return (
      <h3>{props.title}</h3>
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