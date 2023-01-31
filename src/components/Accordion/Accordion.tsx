import React from "react";

type PropsAccordion = {
   title: string
}

export function Accordion(props: PropsAccordion) {
   return (
      <div>
         <AccordionTitle title={props.title}/>
         <AccordionBody/>
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