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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterSelectedYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.expenses.map((expense) => (
          <ExpenseItem
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
