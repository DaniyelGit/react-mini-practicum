import React, {useRef} from "react";

export default {
   title: 'input',
}


export const UnControlledInput = () => {
   return (
      <input/>
   );
};

export const TrackValueUnControlledInput = () => {
   const [value, setValue] = React.useState<string>('');

   return (
      <>
         <input onChange={e => setValue(e.currentTarget.value)}/> - {value}
      </>
   );
}

export const GetValueUnControlledInput = () => {
   const [value, setValue] = React.useState<string>('');
   const inputRef = useRef<HTMLInputElement>(null);

   const onClickHandler = () => {
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value);
      setTimeout(() => {
         el.value = '';
         setValue('');
      }, 2000)
   }

   return (
     <>
      <input ref={inputRef}/><button onClick={onClickHandler}>save</button> - {value}
     </>
   );
}

