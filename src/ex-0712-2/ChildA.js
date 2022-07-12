function ChildA(props) {
  return (
    <>
      <h1>Child A</h1>
      <p>來自ChildB的資料: {props.dataFromChildB}</p>
    </>
  )
}

export default ChildA
