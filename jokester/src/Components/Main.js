import React, {Component} from 'react'

class Main extends React.Component {
  state = {
    jokes: []
  }
  fetchJokes = async () => {
    let response = await fetch('https://official-joke-api.appspot.com/random_ten')
    let data = await response.json()
    this.setState({ jokes : data })
    console.log(this.state.jokes[0].setup);
  }
  componentDidMount(){
    this.fetchJokes()
  }
  render () {
    return (
      <div>
        {this.state.jokes.map((joke, index) => (
          <div className="joke-cards">
            <h3 className="setup">{joke.setup}</h3>
            <h3 className="punchline">{joke.punchline}</h3>
            <div className="button-container">
              <div className="dislike-button">
                <img src="https://i.imgur.com/MqfzTYo.png"/>
              </div>
              <div className="like-button">
                <img src="https://i.imgur.com/J6sDQn8.png"/>
              </div>
            </div>
            <br/>
          </div>
        ))}
      </div>
    )
  }
}

export default Main
