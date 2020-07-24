import React from 'react'
import Main from './Components/Main.js'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="smileHeader">
          <img src="https://i.imgur.com/J6sDQn8.png"/>
        </div>
        <Main/>
      </div>
    )
  }
}

export default App
