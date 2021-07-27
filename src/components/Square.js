import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    alert("clicked")
  }

  render(){
    return(
      <>
        <div className="square" onClick={this.handleClick}>
          
        </div>
      </>
    )
  }
}
export default Square
