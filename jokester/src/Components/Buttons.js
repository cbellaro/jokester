import React, {Component} from 'react'

class Buttons extends React.Component {
  state = {
    dislike: false,
    like: false,
  }
  handleDislike = async dislikeJoke => {
    this.setState({
      dislike: !this.state.dislike,
      like: false
    })
  }
  handleLike = async likeJoke => {
    this.setState({
      like: !this.state.like,
      dislike: false
    })
  }
  render () {
    return (
      <div className="button-container">
        <div className={this.state.dislike ? "disliked-joke" : "dislike-button"} onClick={this.handleDislike}>
          <img src="https://i.imgur.com/MqfzTYo.png"/>
        </div>
        <div className={this.state.like ? "liked-joke" : "like-button"} onClick={this.handleLike}>
          <img src="https://i.imgur.com/J6sDQn8.png"/>
        </div>
      </div>
    )
  }
}

export default Buttons
