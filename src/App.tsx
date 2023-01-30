import React from 'react';
import './App.css';

import {Rating} from "./components/rating/Rating";
import {Accordion} from "./components/accordion/Accordion";

function App() {
    return (
        <div>
           <Rating/>

           <Accordion/>
        </div>
    );
}

export default App;
