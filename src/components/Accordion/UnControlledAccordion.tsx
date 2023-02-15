import React, {useState} from 'react';

type UnControlledAccordionPropsType = {
   title: string
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

   const [collapsed, setCollapsed] = useState(true);

   const setCollapsedHandler = () => {
      setCollapsed(!collapsed);
   }

   return (
      <div>
         <div>
            <UnControlledAccordionTitle title={props.title} setCollapsed={setCollapsedHandler}/>
            {
               !collapsed && <UnControlledAccordionBody/>
            }
         </div>
      </div>
   );
};


type PropsAccordionTitle = {
   title: string
   setCollapsed: () => void
}

function UnControlledAccordionTitle(props: PropsAccordionTitle) {
   return (
      <h3 onClick={props.setCollapsed}>{props.title}</h3>
   );
}

function UnControlledAccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
}