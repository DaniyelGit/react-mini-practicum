import React from 'react';
import './App.css';

import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./components/PageTitle/PageTitle";

function App() {
   return (
      <div>
         <PageTitle title={'Привет Мир !!!'}/>
         <Rating value={0}/>
         <Rating value={1}/>
         <Rating value={2}/>
         <Rating value={3}/>
         <Rating value={4}/>
         <Rating value={5}/>
         <Accordion title={'Меню'} collapsed={true}/>
         <Accordion title={'Товары'} collapsed={false}/>
      </div>
   );
}

export default App;
