import Summary from './components/Summary'
import OrderList from './components/OrderList/index'
import './OrderPage.css'

import { useState } from 'react'

function OrderPage() {
  const [count, setCount] = useState(1)

  return (
    <div className="card">
      <div className="row">
        <OrderList count={count} setCount={setCount} />
        <Summary totalNumber={count} totalPrice={count * 300} />
      </div>
    </div>
  )
}

export default OrderPage
