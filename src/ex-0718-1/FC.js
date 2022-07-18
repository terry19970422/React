import { useState, useEffect } from 'react'

// const initState = () => {
//   console.log('FC - 模擬 constructor')
//   return 0
// }

function FC(props) {
  const [total, setTotal] = useState(0)

  //模擬componentDidMount
  useEffect(() => {
    console.log('FC - 模擬componentDidMount')
  }, [])

  //模擬didMount+didUpdate
  useEffect(() => {
    console.log('FC - 模擬didMount+didUpdate', 'total =', total)
  }, [total]) // 相依陣列裡填入會觸發updating階段的state或props

  //只模擬didUpdate，略過初始值
  useEffect(() => {
    if (total !== 0) {
      console.log('FC - 只模擬didUpdate', 'total =', total)
    }
  }, [total]) // 相依陣列裡填入會觸發updating階段的state或props

  return (
    <>
      {console.log('FC - render')}
      <h1>FC</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
