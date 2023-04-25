import css from './TransactionHistory.module.css'
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
    return (
        <div  className={css.transactionHistoryContainer}>
            <table className={css.transactionHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
            {items.map(item => {
                return (
                    <thead key={item.id}>
                        <tr>
                        <th>{item.type}</th>
                        <th>{item.amount}</th>
                        <th>{item.currency}</th>
                        </tr>
                    </thead>
                    
                )
            })}
        </table>
        </div>
    );
};