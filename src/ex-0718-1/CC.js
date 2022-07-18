import { Component } from 'react'

class CC extends Component {
  constructor() {
    super()
    this.state = { total: 0, isTen: false }
    console.log('CC - constructor')
  }

  componentDidMount() {
    console.log('CC - componentDidMount')
    // get date from server A
  }

  componentDidUpdate() {
    console.log('CC - componentDidUpdate', 'total =', this.state.total)
  }

  componentWillUnmount() {
    console.log('CC - componentWillUnmount')
  }

  render() {
    console.log('CC - render')
    return (
      <>
        <h1>CC</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
