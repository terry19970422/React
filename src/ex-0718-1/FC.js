import { useState } from 'react'

function FC(props) {
  const [total, setTotal] = useState(0)
  return (
    <>
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
