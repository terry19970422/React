import { useState } from 'react'

function App() {
  //useState(0) => [getter, setter]
  const [total, setTotal] = useState(0)

  const add = (x) => x + 1

  return (
    <h1
      onClick={() => {
        setTotal(add(total))
      }}
    >
      {total}
    </h1>
  )
}

export default App
