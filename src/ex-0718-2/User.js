import { useState, useEffect } from 'react'
import './User.css'

// 要裝axios套件: `yarn add axios`
import axios from 'axios'

// User物件
// {
//     "id": "107001",
//     "name": "張佳蓉",
//     "birth": "990101"
//  },

function User() {
  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState([])
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState([])

  // 載入資料指示狀態
  const [isLoading, setIsLoading] = useState(false)
  // 搜尋用
  const [searchWord, setSearchWord] = useState('')

  const getUserData = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    //console.log(response)
    // 設定到state
    setUsersDisplay(response.data)
    setUsersRaw(response.data)
  }

  // didMount
  useEffect(() => {
    // 開啟載入指示動態
    setIsLoading(true)

    getUserData()
  }, [])

  // 自動x秒後關掉動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])

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
        {usersDisplay.map((v, i) => {
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
      <input
        type="text"
        placeholder="輸入姓名"
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <button
        onClick={() => {
          // 開啟載入指示動態
          setIsLoading(true)

          if (searchWord) {
            const newUsersDisplay = usersRaw.filter((v, i) =>
              v.name.includes(searchWord)
            )

            setUsersDisplay(newUsersDisplay)
          } else {
            // reset
            setUsersDisplay(usersRaw)
          }
        }}
      >
        搜尋
      </button>
      <hr />
      {isLoading ? spinner : displayTable}
    </>
  )
}

export default User
