import React, { Component } from 'react'
import {array} from '../../constants/Array-Options'

export default class Option extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    _handleChange = (event) => {
        this.props.handleSelect(event.target.value)
      }
      createOption(){
          let listOption = array.map(
              (item) =>{
                return (
                    <option key={item} value={item} >{item}</option>)
              })
              return listOption
      }
  render() {
    return (
        <select className={this.props.className} name="picktime" onChange={this._handleChange} >
            {this.createOption()}
        </select>
    )
  }
}

