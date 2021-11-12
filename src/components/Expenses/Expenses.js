import { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

function Expenses(props) {
  const [filterSelectedYear, setFilterSelectedYear] = useState('2020')

  function filterChangeHandler(selectedYear) {
    setFilterSelectedYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterSelectedYear
  )

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterSelectedYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
