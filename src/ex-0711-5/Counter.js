import { useState } from 'react'

function Counter() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          console.log('before', total)

          const newTotal = total + 1
          setTotal(newTotal)

          console.log('after', newTotal)
        }}
      >
        +1
      </button>
    </>
  )
}

export default Counter
