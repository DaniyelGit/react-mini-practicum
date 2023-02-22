import React, {useState} from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";

function App() {

   const [onOffValue, setOnOffValue] = useState<boolean>(true);
   const [collapsed, setCollapsed] = useState<boolean>(true);

   return (
      <div className={'container'}>
         <PageTitle title={'Привет Мир !!!'}/>

         <Rating value={0}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>


         <Accordion title={'Control Menu'}
                    collapsed={collapsed}
                    setCollapsed={() => setCollapsed(!collapsed)}
         />
         <UnControlledAccordion title={'Menu'}/>

         <UnControlledRating/>

         {/*<Accordion title={'Меню'} collapsed={true}/>*/}
         {/*<Accordion title={'Товары'} collapsed={false}/>*/}



         <OnOff
            onOffValue={onOffValue}
            setOnOffValue={setOnOffValue}
         />
      </div>
   );
}

export default App;
