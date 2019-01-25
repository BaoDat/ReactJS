import React, { Component } from 'react'
import {arrayPrice} from '../../constants/Array-Price'
import ListInfoCar from '../../containers/listInfoCar'

export default class DetailPage_Content extends Component {
    
    createOption(){
        let listOption = arrayPrice.map(
            (item) =>{
              return (
                  <option key={item.value} value={item.value} >{item.text}</option>)
            })
            return listOption
    }

   

  render() {
    return (
      <div className="row content">
        <div className="col-md-3 content-left">
            <div style={{marginTop: "40px"}}>
                <form className="content-form">
                    <p className="content-text">GIÁ THUÊ XE (1 ngày)   </p>
                    <select className="form-control form-control-sm" name="picktime" onChange={this._handleChange} >
                      {this.createOption()}
                    </select>
                    <br/>
                    <br/>
                    <div>
                        <p className="content-text">Loại xe</p>
                        <div  className="form-check " formarrayname="type" style={{paddingLeft: 0}} >
                            <label ><input  type="checkbox" value="eco" /> Honda</label>
                        </div>
                        <div  className="form-check " formarrayname="type" style={{paddingLeft: 0}} >
                            <label ><input  type="checkbox" value="eco" /> Suzuki</label>
                        </div>
                        <div  className="form-check " formarrayname="type" style={{paddingLeft: 0}} >
                            <label ><input  type="checkbox" value="eco" /> Yamaha</label>
                        </div>
                        <div  className="form-check " formarrayname="type" style={{paddingLeft: 0}} >
                            <label ><input  type="checkbox" value="eco" /> Brixton</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-md-8">
            <br/>
            <br/>
            <ListInfoCar/>
        </div>
      </div>
    )
  }
}

