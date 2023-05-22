import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [showForm, setShowForm] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setShowForm(false);
	};

	const isShowingForm = () => {
		setShowForm(true);
	};

	const isNotShowingForm = () => {
		setShowForm(false);
	};

	return (
		<div className="new-expense">
			{!showForm && <button onClick={isShowingForm}>Add New Expense</button>}
			{showForm && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={isNotShowingForm}
				/>
			)}
		</div>
	);
};

export default NewExpense;
