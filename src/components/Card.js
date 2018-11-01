import React, { Component } from 'react';



export default class Card extends Component{


state = {
  details: false
}

handleClick =()=>{
  if (this.state.details === false){
    this.setState({
details: true
    })
  } else {
    this.setState({
      details: false
    })
  }
}

 fixedname = (name) => {
return name.split(' ').join('_').toLowerCase()
}

render(){
  let name = `${this.fixedname(this.props.hogObject.name)}.jpg`
  let fixedName = this.fixedname(name)
  return(
    <div>
    <h1>{this.props.hogObject.name}</h1>
    <div> {this.state.details ? <h3>{this.props.hogObject.medal} medal, {this.props.hogObject.weight} weight, specialty: {this.props.hogObject.specialty}, {this.props.hogObject.greased ? "greased" : "not greased"}</h3> : null } </div>
    <img src={name} onClick={this.handleClick}></img>
    </div>
)
}



}
