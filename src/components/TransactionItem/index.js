// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="list-container-item">
      <p className="title-item">{title}</p>
      <p className="amount-item">RS: {amount}</p>
      <p className="para-item">{type}</p>
      <div className="btn-con">
        <button data-testid="delete" type="button" className="delete-button">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            onClick={onClickDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
