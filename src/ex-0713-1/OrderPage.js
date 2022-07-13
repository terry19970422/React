import OrderList from './components/OrderList'
import Summary from './components/Summary'
import './OrderPage.css'

import { useState } from 'react'

import { products } from './data/products'


// 每個商品的物件
// {
//   id: 1,
//   name: '咖啡色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: 300,
// }
//
// 變為
//
// {
//   id: 1,
//   name: '咖啡色 T-shirt',
//   category: 'Shirt',
//   image: 'https://i.imgur.com/1GrakTl.jpg',
//   price: 300,
//   count:1,
// }

//初始化狀態用的函式
const initState = (productArray) => {
  const state = []

  for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 })
  }

  return state
}

function OrderPage() {
  // 多樣產品用的共同狀態
  const [productsInOrder, setProductsInOrder] = useState(initState(products))

  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count
    }

    return total
  }

  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].price
    }

    return total
  }

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary
          totalNumber={calcTotalNumber()}
          totalPrice={calcTotalPrice()}
        />
      </div>
    </div>
  )
}

export default OrderPage
