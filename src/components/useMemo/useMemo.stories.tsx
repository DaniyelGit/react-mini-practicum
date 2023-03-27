import React, {useMemo} from 'react';

export default {
   title: 'useMemo'
}

/*
export const DifficultCountingExample = () => {
   const [a, setA] = React.useState<number>(0);
   const [b, setB] = React.useState<number>(0);

   let resultA = 1;
   let resultB = 1;

   resultA = useMemo(() => {
      let tempResult = 1;
      for (let i = 1; i <= a; i++) {
         let flag = 0;
         while (flag < 100000000) {
            flag++;
            const fakeValue = Math.random();
         }
         tempResult *= i;
      }
      return tempResult
   }, [a])

   for (let i = 1; i <= b; i++) {
      resultB *= i;
   }


   return (
      <div>
         <input type="text" onChange={(e) => setA(+e.currentTarget.value)}/>
         <input type="text" onChange={(e) => setB(+e.currentTarget.value)}/>
         <div>resA: {resultA}</div>
         <div>resB: {resultB}</div>
      </div>
   );
};
*/


const UsersSecret = (props: { users: string[] }) => {
   console.log('Users');
   return <div>
      {
         props.users.map((u: string, i: number) => {
            return (
               <div key={`${i}-${u}`}>
                  {u}
               </div>
            );
         })
      }
   </div>
};

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
   console.log('counter')

   const [counter, setCounter] = React.useState(0);
   const [users, setUsers] = React.useState(['Данила', 'Виктория', 'Захар', 'Станислав', 'Игорь']);

   const addUser = () => {
      setUsers([...users, 'Андрей' + '-' + new Date().getTime()])
   }

   const newArray = useMemo(() => {
      return users.filter(el => el.toLowerCase().includes('а'));
   }, [users])

   return <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newArray}/>
   </>
}
