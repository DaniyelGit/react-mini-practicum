import React, {useCallback, useMemo} from "react";

export default {
   title: 'useCallBack'
}


export const ExampleUseCallBack = () => {
   console.log('Example useCallBack');

   const [count, setCount] = React.useState(0);
   const [books, setBooks] = React.useState<string[]>(['HTML', 'CSS', 'JS', 'React'])

   const incCount = () => {
      setCount(count + 1);
   }

   /*const addBook = () => {
      console.log('func')
      setBooks([...books, 'Angular-' + new Date().getTime()])
   }*/

   /*const addBookMemo = useMemo(() => {
      console.log('memo')
      return addBook;
   }, [books]);*/

   const addBookUseCallBack = useCallback(() => {
      setBooks([...books, 'Angular-' + new Date().getTime()])
   }, [books])

   const memoizedBooks = useMemo(() => {
      return books.filter(b => b.toLowerCase().includes('s'));
   }, [books])

   return (
     <div>
        <button onClick={incCount}>inc</button>
        <span>count-{count}</span>
        <Books addBook={addBookUseCallBack} memoizedBooks={memoizedBooks}/>
     </div>
   );
};


type BooksPropsType = {
   addBook: () => void
   memoizedBooks: string[]
}

export const BooksSecret = (props: BooksPropsType) => {
   console.log('Books')

   return (
     <div>
        <button onClick={() => props.addBook()}>add book</button>
        <div>
           {
              props.memoizedBooks.map(item => {
                 return(
                    <div>{item}</div>
                 );
              })
           }
        </div>
     </div>
   );
}

export const Books = React.memo(BooksSecret)