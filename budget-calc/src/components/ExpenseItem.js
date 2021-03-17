import React from "react";

const ExpenseItem = ({ expense }) => {
	const { id, charge, amount } = expense;
	return (
		<li>
			<div className="info">
				<span className="expense">{charge}</span>
			</div>
		</li>
	);
};

export default ExpenseItem;
