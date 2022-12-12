import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((ex) => {
    return ex.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {expensesContent} */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        {filteredExpenses.length !== 0 &&
          filteredExpenses.map((ex) => (
            <ExpenseItem
              key={ex.id}
              Title={ex.title}
              amount={ex.amount}
              date={ex.date}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((ex) => (
            <ExpenseItem
              key={ex.id}
              Title={ex.title}
              amount={ex.amount}
              date={ex.date}
            />
          ))
        )} */}
      </Card>
    </li>
  );
};

export default Expenses;
