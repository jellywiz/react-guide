import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ onAddExpense }) {
  const [isEdditing, setIsEddinting] = useState(false);
  const saveExpsenseHandler = (enteredExpenseDate) => {
    const expsenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    onAddExpense(expsenseDate);
    setIsEddinting(false);
  };
  const startEdittingHandler = () => {
    setIsEddinting(true);
  };

  const stopEdittingHandler = () => {
    setIsEddinting(false);
  };
  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEdittingHandler}>Add new expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onCancel={stopEdittingHandler}
          onSaveExpenseData={saveExpsenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
