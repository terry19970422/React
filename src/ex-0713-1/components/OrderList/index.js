import ProductItem from './ProductItem'
import { product } from '../../data/product'

function OrderList(props) {
  const { count, setCount } = props
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {product.map((v, i) => {
          const { id, name, category, image, price, count, setCount } = v
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              image={image}
              price={price}
              count={count}
              setCount={setCount}
            />
          )
        })}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList
