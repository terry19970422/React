import { useState } from 'react'
import { countries, postcodes, townships } from './townships'

function TWZipcode() {
  const counties = ['台北市', '桃園市']
  const township = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ]

  //代表目前被選中縣市的索引值
  const [countryIndex, setCountryIndex] = useState(-1)

  const [townshipIndex, setTownshipIndex] = useState()

  return (
    <>
      <h1>台灣縣市區域聯動下拉選單</h1>
      <select
        value={countryIndex}
        onChange={(e) => {
          setCountryIndex(Number(e.target.value))

          setTownshipIndex(-1)
        }}
      >
        <option value="-1">請選擇縣市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>
      <select
        value={townshipIndex}
        onChange={(e) => {
          setTownshipIndex(Number(e.target.value))
        }}
      >
        <option value="-1">請選擇區域</option>
        {/* 當有選擇縣市(countryIndex >)時才要作map，呈現其它的區域選項 */}
        {countryIndex > -1 &&
          townships[countryIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號:
        {countryIndex > -1 &&
          townshipIndex > -1 &&
          postcodes[countryIndex][townshipIndex]}
      </p>
    </>
  )
}

export default TWZipcode
