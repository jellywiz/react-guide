import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ items }) {
  //   let expensesContent = <p>No Expenses Found.</p>;

  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  //   if (items.length > 0) {
  //     expensesContent = items.map((ex) => (
  //       <ExpenseItem
  //         key={ex.id}
  //         Title={ex.title}
  //         amount={ex.amount}
  //         date={ex.date}
  //       />
  //     ));
  //   }
  return (
    <ul className="expenses-list">
      {items.map((ex) => (
        <ExpenseItem
          key={ex.id}
          Title={ex.title}
          amount={ex.amount}
          date={ex.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
