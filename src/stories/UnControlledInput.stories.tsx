import React, {ChangeEvent, useRef} from "react";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

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


// --------- Controlled Inputs -----------------

export const ControlledInput = () => {
   const [valueInput, setValueInput] = React.useState<string>('');
   const [saveValue, setSaveValue] = React.useState<string>('');

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValueInput(e.currentTarget.value);
   }

   const onClickHandler = () => {
      setSaveValue(valueInput);
   }

   return (
      <>
         <input value={valueInput} onChange={onChangeHandler}/>
         <button onClick={onClickHandler}>save</button> - {saveValue}
      </>
   );
}

export const ControlledCheckbox = () => {
   const [checkValue, setCheckValue] = React.useState<boolean>(true);

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setCheckValue(e.currentTarget.checked);
   }

   return (
      <input type={'checkbox'} checked={checkValue} onChange={onChangeHandler}/>
   );
}


export const ControlledSelect = () => {
   const [valueSelect, setValueSelect] = React.useState<string | undefined>('2');

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setValueSelect(e.currentTarget.value);
   }

   return (
      <select value={valueSelect} onChange={onChangeHandler}>
         <option>none</option>
         <option value={'1'}>Минск</option>
         <option value={'2'}>Гродно</option>
         <option value={'3'}>Гомель</option>
         <option value={'4'}>Витебск</option>
      </select>
   );
}
