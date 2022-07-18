import { useState, useEffect } from 'react'
import './User.css'

// 要裝axios套件: `yarn add axios`
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])
  // 載入資料指示狀態
  const [isLoading, setIsLoading] = useState(false)

  const getUserData = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    //console.log(response)
    // 設定到state
    setUsers(response.data)
  }

  // didMount
  useEffect(() => {
    // 開啟載入指示動態
    setIsLoading(true)

    getUserData()

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  )

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <>
      <h1>會員資料</h1>
      {isLoading ? spinner : displayTable}
    </>
  )
}

export default User
