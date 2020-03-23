import React, { Component } from 'react'

export class App extends Component {
  state = {
    d6: Math.ceil(Math.random() * 6),
    d20: Math.ceil(Math.random() * 20),
    d12: Math.ceil(Math.random() * 12),
    d8: Math.ceil(Math.random() * 8),
    d4: Math.ceil(Math.random() * 4),
    d100: Math.ceil(Math.random() * 100),
  }

  rollD6 = () => {
    const result = Math.ceil(Math.random() * 6)
    console.log('Dice roll', result)
    this.setState({
      d6: result,
    })
    console.log(this.state.d6)
  }

  rollD20 = () => {
    const result = Math.ceil(Math.random() * 20)
    console.log('Dice roll', result)
    this.setState({
      d20: result,
    })
    console.log(this.state.d20)
  }

  rollD12 = () => {
    const result = Math.ceil(Math.random() * 12)
    console.log('Dice roll', result)
    this.setState({
      d12: result,
    })
    console.log(this.state.d12)
  }

  rollD8 = () => {
    const result = Math.ceil(Math.random() * 8)
    console.log('Dice roll', result)
    this.setState({
      d8: result,
    })
    console.log(this.state.d8)
  }

  rollD4 = () => {
    const result = Math.ceil(Math.random() * 4)
    console.log('Dice roll', result)
    this.setState({
      d4: result,
    })
    console.log(this.state.d4)
  }

  rollD100 = () => {
    const result = Math.ceil(Math.random() * 100)
    console.log('Dice roll', result)
    this.setState({
      d100: result,
    })
    console.log(this.state.d100)
  }

  render() {
    return (
      <>
        <main>
          <div className="d-view-container">
            <h1 className="d6-view">{this.state.d6}</h1>
            <button
              onClick={this.rollD6}
              className="roll-d6"
              name="roll-d6"
              value={this.rollD6}
            >
              Roll D6
            </button>
          </div>
          <div className="d-view-container">
            <h1 className="d20-view">{this.state.d20}</h1>
            <button
              onClick={this.rollD20}
              className="roll-d20"
              name="roll-d20"
              value={this.rollD20}
            >
              Roll D20
            </button>
          </div>
          <div className="d-view-container">
            <h1 className="d12-view">{this.state.d12}</h1>
            <button
              onClick={this.rollD12}
              className="roll-d12"
              name="roll-d12"
              value={this.rollD12}
            >
              Roll D12
            </button>
          </div>
          <div className="d-view-container">
            <h1 className="d8-view">{this.state.d8}</h1>
            <button
              onClick={this.rollD8}
              className="roll-d8"
              name="roll-d8"
              value={this.rollD8}
            >
              Roll D8
            </button>
          </div>
          <div className="d-view-container">
            <h1 className="d4-view">{this.state.d4}</h1>
            <button
              onClick={this.rollD4}
              className="roll-d4"
              name="roll-d4"
              value={this.rollD4}
            >
              Roll D4
            </button>
          </div>
          <div className="d-view-container">
            <h1 className="d100-view">{this.state.d100}</h1>
            <button
              onClick={this.rollD100}
              className="roll-d100"
              name="roll-d100"
              value={this.rollD100}
            >
              Roll D100
            </button>
          </div>
        </main>
      </>
    )
  }
}

export default App
