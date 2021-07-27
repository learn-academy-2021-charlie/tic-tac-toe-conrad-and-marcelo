import React, { Component } from 'react'

class PlayAgain extends Component{

  render(){
    return(
      <>
        <div id="button">
            <button type="button" onClick={this.props.restartGame}>Play Again</button>
        </div>
      </>
    )
  }
}
export default PlayAgain