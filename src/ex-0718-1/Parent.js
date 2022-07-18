import CC from './CC'
import FC from './FC'

import { useState } from 'react'

function Parent() {
  const [isShow, setShow] = useState(true)
  return (
    <>
      {isShow && <CC />}
      <button
        onClick={() => {
          setShow(!isShow)
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </>
  )
}

export default Parent
