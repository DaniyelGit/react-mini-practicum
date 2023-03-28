import React, {ChangeEvent} from "react";

export default {
   title: 'HelpersExampleStories'
}

type CountriesType = {
   id: string
   country: string
   population: number
}
type CitiesType = {
   [key: string]: Array<string>
}
type SelectPropsType = {
   countries: CountriesType[]
   cities: CitiesType
   setValue: (value: string) => void
   value: string
}


export const Select = (props: SelectPropsType) => {
   console.log('select rerender')

   const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      props.setValue(e.currentTarget.value);
   }

   return (
      <>
         <select onChange={onChangeHandler} value={props.value}>
            {
               props.countries.map(c => (
                  <option key={`country-${c.id}`} value={c.id}>
                     {c.country}
                  </option>
               ))
            }
         </select>

         <div>cities: {props.cities[props.value].join(' ')}</div>
      </>
   );
}

export const ContainerSelect = React.memo(Select);


export const HelpersExampleStories = () => {
   const [countries, setCountries] = React.useState<CountriesType[]>([
      {id: '1', country: 'Беларусь', population: 400},
      {id: '2', country: 'Россия', population: 1000},
      {id: '3', country: 'Грузия', population: 700},
   ]) ;
   const [cities, setCities] = React.useState<CitiesType>({
      1: ['Гродно', 'Витебск', 'Гомель', 'Минск'],
      2: ['Москва', 'Казань', 'Волгоград', 'Самара'],
      3: ['Тбилиси', 'Батуми', 'Телави', 'Ткибули'],
   });

   const [value, setValue] = React.useState('2');
   const [counter, setCounter] = React.useState(0);


   return (
      <div>
         <button onClick={() => setCounter(counter + 1)}>incr</button>
         <span>{counter}</span>
         <div>
            <ContainerSelect
               countries={countries}
               cities={cities}
               setValue={setValue}
               value={value}/>
         </div>
      </div>
   );

}