import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container.js'


class App extends Component {



  handleSort= () => {
    // console.log(this.state.filteredHogs.map(hogObject => hogObject.sort(name))))
    let results = (this.state.filteredHogs.sort(function(x, y) {
      return x.name.localeCompare(y.name)
    }))
    this.setState({
      filteredHogs: results
    })
  }



  handleWeight=()=>{
    let results = (this.state.filteredHogs.sort(function(x, y) {
      return x.weight - y.weight
    }))
    this.setState({
      filteredHogs: results
    })
  }



  handleGreased = () => {
  let newArray = this.state.filteredHogs.filter( hog => hog.greased === true)

  this.setState({
    filteredHogs: newArray
  })

  }

  state = {
    hogsArray: hogs,
    filteredHogs: [...hogs]

  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
          < Nav handleSort = {this.handleSort} handleWeight = {this.handleWeight} handleGreased = {this.handleGreased}/>
        < Container hogsArray = {this.state.filteredHogs} />

      </div>
    )
  }
}

export default App;
