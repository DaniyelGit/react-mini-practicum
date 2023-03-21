import React from "react";

export default {
   title: 'React.memo demo'
}


const NewMessageCounter = (props: any) => {
   console.log('NewMessage');
   return <div>{props.count}</div>
};



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

export const Example1 = () => {

   const [counter, setCounter] = React.useState(0);
   const [users, setUsers] = React.useState(['Данила', 'Виктория', 'Захар']);

   return <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setUsers([...users, 'Андрей' + '-' + new Date().getTime()])}>add user</button>
      <NewMessageCounter count={counter}/>
      <Users users={users}/>
   </>
}
