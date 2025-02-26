let expenses = [];
let totalAmount = 0; // Fixed: totalAmount should be a number, not an array

const categorySelect = document.getElementById('category-select'); // Fixed variable name
const amountInput = document.getElementById('amount-input'); // Fixed variable name
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category == '') {
        alert('please select category');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('please enter a valid amount');
        return;
    }
    if (date === '') {
        alert('please enter a date');
        return;
    }

    expenses.push({ category, amount, date }); // Fixed: Corrected variable name
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount; // Fixed: Changed textcontent to textContent

    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell(); // Fixed: Corrected variable name
    const dateCell = newRow.insertCell(); // Fixed: Corrected variable name
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1); // Fixed: Corrected variable name

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount; // Fixed: Corrected variable name

        expenseTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1]; // Fixed: Moved this line to be before it's used
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow(); // Fixed: Removed duplicate newRow declaration
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell(); // Fixed: Corrected variable name
    const dateCell = newRow.insertCell(); // Fixed: Corrected variable name
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'DELETE';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}
