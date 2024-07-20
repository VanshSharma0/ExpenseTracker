import React, {useContext} from 'react'
import { GlobalContext } from '../context/GloabalState'

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h1>Your Balance</h1>
      <h4>${total}</h4>
    </div>
  )
}

export default Balance