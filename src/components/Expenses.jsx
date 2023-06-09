import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./table/ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const [filterYear, setFilterYear] = useState("2022");

	const theDropdownMenu = (data) => {
		setFilterYear(data);
	};

	const filteredExpenses = props.items.filter((item) => {
		return item.date.getFullYear().toString() === filterYear;
	});

	return (
		<div className="expenses">
			<ExpensesFilter selected={filterYear} getYear={theDropdownMenu} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpenseList items={filteredExpenses} />
		</div>
	);
}

export default Expenses;
