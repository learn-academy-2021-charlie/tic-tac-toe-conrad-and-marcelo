import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ['', '', '', '', '', '', '', '', ''],
      playerX: true,
    }
  }

  // create function to handle turns
  // destructure the state object to call on its property by just calling the key name
  // 
  handleTurn = (index) => {
    const {squares} = this.state;
    const {playerX} = this.state;
    if (playerX === true && squares[index] !== '⭕️'){
      squares[index] = '❌'
      this.setState({
        squares: squares,
        playerX: false
      })
    } else if (playerX === false && squares[index] !== '❌'){
      squares[index] = '⭕️'
      this.setState({
        squares: squares,
        playerX: true
      })
    }
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
