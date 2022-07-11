import { Fragment } from 'react'

import data from './data/products.json'

function MapDemo01() {
  return (
    <>
      <h1>Map展示</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((v, i) => {
          return (
            <Fragment key={v.id}>
              <h1>{v.name}</h1>
              <p>{v.tags}</p>
              <p>{v.price}</p>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

export default MapDemo01
