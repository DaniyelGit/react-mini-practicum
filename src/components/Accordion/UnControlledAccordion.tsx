import React, {useState} from 'react';
import {changeCollapsedAC, reducerAccordion, stateAccordion} from "./reducerAccordion";

type UnControlledAccordionPropsType = {
   title: string
}

export const UnControlledAccordion = (props: UnControlledAccordionPropsType) => {

   // const [collapsed, setCollapsed] = useState(true);
   const [state, dispatch] = React.useReducer(reducerAccordion, stateAccordion);

   const setCollapsedHandler = () => {
      dispatch(changeCollapsedAC(!state.collapsed));
   }

   return (
      <div>
         <div>
            <UnControlledAccordionTitle title={props.title} setCollapsed={setCollapsedHandler}/>
            {
               !state.collapsed && <UnControlledAccordionBody/>
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