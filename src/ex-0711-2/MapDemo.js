import { Fragment } from 'react'
// import { data } from './data/student'

//直接導入JSON檔，會自動轉成物件
import data from './data/student.json'

function MapDemo() {
  return (
    <>
      <h1>Map展示</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* key是一定必要的 */
        /* key的選擇: 資料有id用id */
        /* 沒id可用，可以額外使用uuid或nanoid套件 */
        /* 只有靜態資料，單純呈現完全不會再變動才能用索引值 */}
        {data.map((v, i) => {
          return (
            <Fragment key={v.id}>
              <h1>{v.name}</h1>
              <p>{v.birth}</p>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

export default MapDemo
