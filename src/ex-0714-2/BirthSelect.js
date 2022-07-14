import { useState } from 'react'

function BirthSelect(props) {
  const creatY = () => {
    const year = []
    for (let i = 1950; i < 2010; i++) {
      year.push(<option>{i}</option>)
    }
    return year
  }

  const creatM = () => {
    const month = []
    for (let i = 1; i < 13; i++) {
      month.push(<option>{i}</option>)
    }
    return month
  }

  const creatD = () => {
    const day = []
    for (let i = 1; i < 32; i++) {
      day.push(<option>{i}</option>)
    }
    return day
  }

  return (
    <>
      <label>西元年</label>
      <select>{creatY()}</select>
      <label>月</label>
      <select>{creatM()}</select>
      <label>日</label>
      <select>{creatD()}</select>
    </>
  )
}

export default BirthSelect
