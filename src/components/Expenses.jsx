import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./table/ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const theDropdownMenu = (data) => {
    setFilterYear(data);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter selected={filterYear} getYear={theDropdownMenu} />
      {expensesContent}
    </div>
  );
}

export default Expenses;
