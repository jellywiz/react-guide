import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
const Expenses = ({items}) => {
    return ( 
        <div className="expenses" >
            {
                items.map((ex) => <ExpenseItem title={ex.title} amount={ex.amount} date = {ex.date} />)
            }
        </div>
     );
}
 
export default Expenses;