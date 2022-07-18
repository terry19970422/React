import { Component } from 'react'

class CC extends Component {
  constructor() {
    super()
    this.state = { total: 0 }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
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
