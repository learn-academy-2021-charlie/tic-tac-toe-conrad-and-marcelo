import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.handleTurn(this.props.index)
    // Set the conditions
    this.props.checkWin(this.props.value, this.props.index)
  }

  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
