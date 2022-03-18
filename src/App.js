import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';
import ExpensesFilter from './components/Expenses/ExpensesFilter.js';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 34.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Lumber',
    amount: 231.67,
    date: new Date(2022, 2, 10),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Secondary Monitor & DVI-D Cable',
    amount: 166.29,
    date: new Date(2022, 2, 16),
  },
];

const App = () => {
 const [expenses, setExpenses] = useState(dummyExpenses);

const addExpenseHandler = expense => {
  setExpenses(prevExpenses => {
    return[expense, ...prevExpenses];
  });
};

  return (
    <div>
           
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
    
  );
}

export default App;
