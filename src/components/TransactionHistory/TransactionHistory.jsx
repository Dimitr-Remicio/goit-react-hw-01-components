import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionsTable({ items }) {
    
    return (
        <>
      <table className={style.transactionhistory}>
            <thead className={style.thead}>
                <tr className={style.trcontent}>
                <th className={style.title}>Type</th>
                <th className={style.title}>Amount</th>
                <th className={style.title}>Currency</th>
                </tr>
            </thead>
            <div className={style.containerDiv}>

        {items.map(({ id, type, amount, currency }) => {
          return (
            <tbody className={style.tbody}>
                <tr className={style.tr} key={id}>
                <td className={style.descriptiontd}>{type}</td>
                <td className={style.descriptiontd}>{amount}</td>
                <td className={style.descriptiontd}>{currency}</td>
                </tr>
            </tbody>
           );
          })}
          </div>
        </table>
      </>
    );
  }
  
  
  
  TransactionsTable.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
  };
  