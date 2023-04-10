import React, {useMemo} from "react";

export default {
   title: 'useState demo'
}


const difficultCount = () => {
   // difficult count
   console.log('difficult count');
   return 1;
}


export const Example1 = () => {
   console.log('Example1')
   // let bigNumber = useMemo(difficultCount, []);

   // const [count, setCount] = React.useState(difficultCount);

   const [count, setCount] = React.useState(difficultCount);


   return (
      <>
         <button onClick={() => setCount(state => state + 1)}>inc</button>
         <span>{count}</span>
      </>
   );
}