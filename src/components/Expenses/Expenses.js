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

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses
