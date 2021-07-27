import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      circle: 'circle',
      cross: 'cross'
    }
  }

  handleTurn = (index) => {
    const {squares} = this.state;
    squares[index] = '❌'
    this.setState({
      squares: squares
    })
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square value={value} key={index} index={index} handleTurn={this.handleTurn}/>
            )
          })}
        </div>
      </>
    )
  }
}
export default App
