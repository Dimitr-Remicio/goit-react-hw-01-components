import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function transactionsTable({ items }) {
    
    return (
        <>
      <table className={style.transactionhistory}>
            <thead className={style.thead}>
                <tr className={style.tr}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
        {items.map(({ id, type, amount, currency }) => {
            return (
            <tbody>
                <tr className={style.tr} key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
           );
        })}
        </table>
      </>
    );
  }
  
  
  
  transactionsTable.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
  };
  