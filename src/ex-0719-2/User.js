import { useState, useEffect } from 'react'
import './User.css'
//import _ from 'lodash'

// 要裝axios套件: `yarn add axios`
import axios from 'axios'

// User物件
// {
//     "id": "107001",
//     "name": "張佳蓉",
//     "birth": "990101"
//  },

// chunk - 依size分成子陣列，ex. chunk([1, 2, 3, 4, 5], 2) -> [[1,2],[3,4],[5]]
// https://stackoverflow.com/questions/8495687/split-array-into-chunks
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

function User() {
  // 第一次記錄伺服器的原始資料用
  const [usersRaw, setUsersRaw] = useState([])
  // 呈現資料用
  const [usersDisplay, setUsersDisplay] = useState([])

  // 載入資料指示狀態
  const [isLoading, setIsLoading] = useState(false)
  // 搜尋用
  const [searchWord, setSearchWord] = useState('')

  // 分頁用
  // pageNow 目前頁號
  // perPage 每頁多少數量
  // pageTotal 目前有多少頁
  const [pageNow, setPageNow] = useState(1) // 預設第一頁
  const [perPage, setPerPage] = useState(5) // 預設一頁5筆資料
  const [pageTotal, setPageTotal] = useState(0) // 等伺服器抓完資料才知道多少(didMount時決定)

  const getUserData = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    //console.log(response)
    // 設定到state

    setUsersRaw(response.data)

    const pageArray = chunk(response.data, perPage)

    if (pageArray.length > 0) {
      setPageTotal(pageArray.length)
      setUsersDisplay(pageArray)
    }
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
        {usersDisplay.length > 0 &&
          usersDisplay[pageNow - 1].map((v, i) => {
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

  const paginationBar = (
    <>
      <div className="pagination">
        <a
          href="#/"
          onClick={() => {
            setPageNow(1)
          }}
        >
          &laquo;
        </a>
        {Array(pageTotal)
          .fill(1)
          .map((v, i) => {
            return (
              <a
                key={i}
                href="#/"
                className={i + 1 === pageNow ? 'active' : ''}
                onClick={() => {
                  setPageNow(i + 1)
                }}
              >
                {i + 1}
              </a>
            )
          })}
        <a
          href="#/"
          onClick={() => {
            setPageNow(pageTotal)
          }}
        >
          &raquo;
        </a>
      </div>
    </>
  )

  return (
    <>
      <h1>會員資料</h1>
      <input
        type="text"
        placeholder="輸入姓名"
        value={searchWord}
        onChange={(e) => {
          const newSearchWord = e.target.value

          setSearchWord(newSearchWord)

          // 開啟載入指示動態
          setIsLoading(true)

          if (newSearchWord) {
            const newUsersDisplay = usersRaw.filter((v, i) =>
              v.name.includes(newSearchWord)
            )

            const pageArray = chunk(newUsersDisplay, perPage)

            if (pageArray.length > 0) {
              setPageTotal(pageArray.length)
              setUsersDisplay(pageArray)
            }

            // setUsersDisplay(newUsersDisplay)
          } else {
            // reset
            const pageArray = chunk(usersRaw, perPage)

            if (pageArray.length > 0) {
              setPageTotal(pageArray.length)
              setUsersDisplay(pageArray)
            }
          }
        }}
      />
      {/* <button
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
      </button> */}
      <hr />
      {isLoading ? spinner : displayTable}
      <br />
      {paginationBar}
    </>
  )
}

export default User
