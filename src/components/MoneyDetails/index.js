// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <div className="unOrder-item">
      <div className="list-item">
        <div className="balance-container">
          <img
            className="balance-img"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          />
          <div>
            <p className="balance-para">Your Balance</p>
            <p className="rs-para" data-testid="balanceAmount">
              RS {balanceAmount}
            </p>
          </div>
        </div>
      </div>

      <div className="income-item">
        <div className="income-container">
          <img
            className="income-img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div>
            <p className="balance-para">Your Income</p>
            <p className="rs-para" data-testid="incomeAmount">
              RS {incomeAmount}
            </p>
          </div>
        </div>
      </div>

      <div className="expenses-item">
        <div className="expenses-container">
          <img
            className="expenses-img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png  "
          />
          <div>
            <p className="expenses-para">Your Expenses</p>
            <p className="expenses-rs-para" data-testid="expensesAmount">
              RS {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
