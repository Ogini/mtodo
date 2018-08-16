import React from 'react'

import '../styles/App.scss'

import Lists from './Components/Lists'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <Lists/>
      </div>
    )
  }
}

export default App
