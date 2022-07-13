import Summary from './components/Summary'
import OrderList from './components/OrderList'
import './OrderPage.css'

function OrderPage() {
  return (
    <div className="card">
      <div className="row">
        <OrderList />
        <Summary />
      </div>
    </div>
  )
}

export default OrderPage
