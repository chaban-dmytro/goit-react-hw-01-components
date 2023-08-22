import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ( props ) => {
  return (
   <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {props.transactions.map( ( { id, type, amount, currency } ) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}      
    </tbody>
  </table>
 )
}

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}