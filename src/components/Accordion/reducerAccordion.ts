export const CHANGE_COLLAPSED = 'CHANGE-COLLAPSED';


export type stateAccordionType = {
   collapsed: boolean
}
type actionsType = ReturnType<typeof changeCollapsedAC>;

export const stateAccordion: stateAccordionType = {
   collapsed: true,
}

export const reducerAccordion = (state: stateAccordionType = stateAccordion, action: actionsType): stateAccordionType => {
   switch (action.type) {
      case CHANGE_COLLAPSED: {
         return {
            ...state,
            collapsed: action.payload
         }
      }
      default: {
         return state
      }
   }
}


export const changeCollapsedAC = (collapsedValue: boolean) => {
   return {
      type: CHANGE_COLLAPSED,
      payload: collapsedValue
   } as const
}