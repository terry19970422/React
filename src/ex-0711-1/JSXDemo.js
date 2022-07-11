import React from 'react'

function JSXDemo(props) {
  return (
    <>
      <h1>JSX中各種類型值呈現</h1>
      <h2>Number</h2>
      {123 - 1}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`hello ${100 - 5}`}
      <h2>Boolean(不呈現)</h2>
      {true}
      {false}
      <h2>null(不呈現)</h2>
      {null}
      <h2>undefined(不呈現)</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object</h2>
      {/* 會有中斷錯誤 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {() => {
        console.log(123)
      }}
    </>
  )
}

export default JSXDemo
