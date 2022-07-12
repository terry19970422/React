import Child from './Child'

function Parent() {
  return (
    <>
      <Child
        text="hello"
        a={123}
        isBook={true}
        foo={() => {
          alert('hello')
        }}
      />
    </>
  )
}

export default Parent
