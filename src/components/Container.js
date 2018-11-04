import React, { Component } from 'react';
import hogs from '../porkers_data';
import Card from './Card.js'


export default class Container extends Component{




render(){
  let hogCard = this.props.hogsArray.map(hogObject => <Card hogObject={hogObject}/>)
  return(
    <div className="ui grid container">{hogCard}</div>
  )
}



}
