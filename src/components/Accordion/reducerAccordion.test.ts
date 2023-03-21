import {changeCollapsedAC, reducerAccordion, stateAccordion, stateAccordionType} from "./reducerAccordion";

test('value collapsed must be changed', () => {
   const state: stateAccordionType = {
      collapsed: false
   };

   // const resultFalse = reducerAccordion(state, changeCollapsedAC(false));
   const resultTrue = reducerAccordion(state, changeCollapsedAC(true));


   // expect(resultFalse.collapsed).toBeFalsy();
   expect(resultTrue.collapsed).toBeTruthy();
})