import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container.js'


class App extends Component {



  handleSort= () => {
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

  hideHogs=()=>{
    if (this.state.shown == true){
      this.setState({
        shown: false
      })
    } else {
      this.setState({
        shown: true
      })
    }
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
        < Container className="ui grid container" hogsArray = {this.state.filteredHogs} />

      </div>
    )
  }
}

export default App;
