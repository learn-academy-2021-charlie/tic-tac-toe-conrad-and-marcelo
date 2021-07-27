import React, { Component } from 'react'
import Square from './components/Square'
import PlayAgain from './components/PlayAgain'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      playerX: true,
      gamePlay: true,
      click: true,
      circleWinning: false,
      crossWinning: false,
      draw: false
    }
  }

  restartGame = () => {
    this.setState({
      squares: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
      playerX: true, 
      gamePlay: true, 
      click: true, 
      circleWinning: false, 
      crossWinning: false, 
      draw: false})
  }

  checkWin = (value, index) => {
    const {squares, gamePlay} = this.state;
    console.log(value)
    console.log(index)
    console.log(squares[index])
    if(gamePlay) {
      if (squares[0] === '❌' && squares[1] === '❌' && squares[2] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[3] === '❌' && squares[4] === '❌' && squares[5] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[6] === '❌' && squares[7] === '❌' && squares[8] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[6] === '❌' && squares[4] === '❌' && squares[2] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[0] === '❌' && squares[3] === '❌' && squares[6] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[1] === '❌' && squares[4] === '❌' && squares[7] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[2] === '❌' && squares[5] === '❌' && squares[8] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[0] === '❌' && squares[4] === '❌' && squares[8] === '❌') {
        this.setState({crossWinning: true, click: false, gamePlay: false})
      } else if (squares[0] === '⭕️' && squares[1] === '⭕️' && squares[2] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[3] === '⭕️' && squares[4] === '⭕️' && squares[5] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[6] === '⭕️' && squares[7] === '⭕️' && squares[8] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[0] === '⭕️' && squares[3] === '⭕️' && squares[6] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[1] === '⭕️' && squares[4] === '⭕️' && squares[7] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[2] === '⭕️' && squares[5] === '⭕️' && squares[8] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[0] === '⭕️' && squares[4] === '⭕️' && squares[8] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (squares[6] === '⭕️' && squares[4] === '⭕️' && squares[2] === '⭕️') {
        this.setState({circleWinning: true, click: false, gamePlay: false})
      } else if (typeof squares[0] === "string" && typeof squares[1] === "string" && typeof squares[2] === "string" && typeof squares[3] === "string" && typeof squares[4] === "string" && typeof squares[5] === "string" && typeof squares[6] === "string" && typeof squares[7] === "string" && typeof squares[8] === "string") {
        this.setState({draw: true, click: false, gamePlay: false})
      }
    }
  }

  handleTurn = (index) => {
    const {squares} = this.state;
    const {playerX} = this.state;
    const {click} = this.state;
    if (click) {
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
  }

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id="winning">{this.state.crossWinning && <p>Cross Wins</p>}</div>
        <div id="winning">{this.state.circleWinning && <p>Circle Wins</p>}</div>
        <div id="winning">{this.state.draw && <p>Draw</p>}</div>
        <div id="playerTurn">{this.state.playerX && <p>Player X turn</p>}</div>
        <div id="playerTurn">{!this.state.playerX && <p>Player 0 turn</p>}</div>
        <div id="gameboard">
          {this.state.squares.map((value, index) => {
            return (
              <Square value={value} key={index} index={index} handleTurn={this.handleTurn} checkWin={this.checkWin}/>
            )
          })}
        </div>
        <div>
          <PlayAgain restartGame={this.restartGame}/>
        </div>
      </>
    )
  }
}
export default App
