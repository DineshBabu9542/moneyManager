import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionsList} = this.state

    const updateTransaction = transactionsList.filter(
      eachTransaction => id !== eachTransaction.id,
    )
    this.setState({transactionsList: updateTransaction})
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({optionId: event.target.value})
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {transactionsList, titleInput, amountInput, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="container">
        <div className="money-manager-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </div>
        <div className="all-container">
          <div className="container-in-form">
            <form
              className="form-container"
              onSubmit={this.onSubmitTransaction}
            >
              <h1 className="add-heading">Add Transaction</h1>
              <div className="title-con">
                <label htmlFor="title" className="title">
                  TITLE
                </label>
                <br />
                <input
                  className="title-input"
                  type="text"
                  id="title"
                  value={titleInput}
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                />
              </div>
              <div>
                <label className="amount" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  className="amount-input"
                  id="amount"
                  type="text"
                  value={amountInput}
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                />
              </div>
              <label className="type" htmlFor="select">
                TYPE
              </label>
              <br />
              <select
                className="select-type"
                id="select"
                onChange={this.onChangeSelectOption}
                value={optionId}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-con">
            <h1 className="history-heading">History</h1>
            <div>
              <ul className="un-list-item">
                <li className="list-item-con">
                  <p className="title-para">Title</p>
                  <p className="amount-para">Amount</p>
                  <p className="type-para">Type</p>
                </li>
                {transactionsList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    transactionDetails={eachItem}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
