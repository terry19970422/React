import propTypes from 'prop-types'

function Child(props) {
  const { text, abc, isBook, foo } = props
  console.log(props)
  return (
    <>
      <h1>{text}</h1>
      <p>{abc}</p>
      <button onClick={foo}>Click Me</button>
    </>
  )
}

Child.propTypes = {
  text: propTypes.string.isRequired,
  abc: propTypes.number.isRequired,
}

Child.defaultProps = {
  text: '沒給文字',
  abc: 0,
}

export default Child
