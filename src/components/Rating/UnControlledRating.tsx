import React, {useState} from 'react';


export function UnControlledRating() {

   const [active, setActive] = useState<number>(0);

   return (
     <div>
        <Star sellected={active > 0} setActive={() => setActive(1)}/>
        <Star sellected={active > 1} setActive={() => setActive(2)}/>
        <Star sellected={active > 2} setActive={() => setActive(3)}/>
        <Star sellected={active > 3} setActive={() => setActive(4)}/>
        <Star sellected={active > 4} setActive={() => setActive(5)}/>
     </div>
   );

}

type StarPropsType = {
   sellected: boolean
   setActive: () => void
}

function Star(props: StarPropsType) {

   return (
      <span onClick={props.setActive}>{props.sellected ? <b>star </b> : 'star '}</span>
   );
}

