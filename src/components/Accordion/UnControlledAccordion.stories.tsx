import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
   title: 'UnControlledAccordion',
   component: UnControlledAccordion,
}

export const ChangingMode = () => {
   return (
      <UnControlledAccordion title={'Users'}/>
   );
}



