import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";
const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((ex) => (
        <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} />
      ))}
    </Card>
  );
};

export default Expenses;
