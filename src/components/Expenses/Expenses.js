import { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
