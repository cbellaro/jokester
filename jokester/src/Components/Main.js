import React, {Component} from 'react'
import Buttons from './Buttons.js'

class Main extends React.Component {
  state = {
    jokes: [],
  }
  fetchJokes = async () => {
    let response = await fetch('https://official-joke-api.appspot.com/random_ten')
    let data = await response.json()
    this.setState({ jokes : data })
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
            <Buttons/>
          </div>
        ))}
      </div>
    )
  }
}

export default Main
