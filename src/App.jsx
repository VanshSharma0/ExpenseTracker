import { useState } from 'react'
import './App.css'
import Header  from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import Transactions from './components/Transactions'
import AddTransactions from './components/AddTransactions'
import { GlobalProvider } from './context/GloabalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <Transactions/>
            <AddTransactions/>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
