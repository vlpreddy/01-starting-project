import React from 'react';
import Expenses from "./components/Expenses/Expenses";

// you can simply creat function or else you can use format like below.
const App = () =>  {
  const expenses = [
    {id:'e1',title:'Car Insurance', amount:255.85, date:new Date(2021,5,20)},
    {id:'e2',title:'Bike Insurance', amount:255.85, date:new Date(2021,2,6)},
    {id:'e3',title:'New Tv', amount:266.85, date:new Date(2021,7,19)},
    {id:'e4',title:'Sofa', amount:245.85, date:new Date(2021,4,1)},
    {id:'e5',title:'Toilet Paper', amount:45.85, date:new Date(2021,2,1)}
  ];
  return (
   <Expenses expenses={expenses} />
  );
}

export default App;
