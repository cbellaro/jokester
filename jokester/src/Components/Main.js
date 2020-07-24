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
        <div>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
    ))}
    </div>
    )
  }
}

export default Main
