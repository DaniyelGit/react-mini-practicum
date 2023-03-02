import React, {useState} from 'react';
import './App.css';

import {Rating, RatingType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/UnControlledAccordion";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";

function App() {

   const [onOffValue, setOnOffValue] = useState<boolean>(true);
   const [collapsed, setCollapsed] = useState<boolean>(true);
   const [ratingValue, setRatingValue] = useState<RatingType>(0);

   return (
      <div className={'container'}>
         <PageTitle title={'Привет Мир !!!'}/>

         <Accordion title={'Control Menu'}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
         />
         <UnControlledAccordion title={'Menu'}/>

         <Rating value={ratingValue} setRatingValue={setRatingValue}/>
         <UnControlledRating/>

         <OnOff
            onOffValue={onOffValue}
            setOnOffValue={setOnOffValue}
         />
         <UnControlledOnOff/>
      </div>
   );
}

export default App;
