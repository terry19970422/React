import { useState, useEffect } from 'react'

const initState = () => {
  console.log('FC - 模擬 constructor')
  return 0
}

function FC(props) {
  const [total, setTotal] = useState(initState())

  useEffect(() => {
    //模擬didmount
    console.log('FC - 模擬 componentDidMount')
  }, [])

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
