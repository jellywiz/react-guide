// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ Title, amount, date }) => {
  // const [title, setTitle] = useState(Title);

  // const clickHandler = () => {
  //   setTitle("Hello!");

  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
