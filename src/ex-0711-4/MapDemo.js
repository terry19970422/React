import products from './data/products.json'
import './MapDemo.css'

function MapDemo() {
  return (
    <>
      <h1>Map展示</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
          </tr>
        </thead>
        <tbody>
          {/* key是一定必要的 */
          /* key的選擇: 資料有id用id */
          /* 沒id可用，可以額外使用uuid或nanoid套件 */
          /* 只有靜態資料，單純呈現完全不會再變動才能用索引值 */}
          {products.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} alt="" />
                </td>
                <td>{v.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default MapDemo
