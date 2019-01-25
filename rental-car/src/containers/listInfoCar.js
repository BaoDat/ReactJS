import React, { Component } from 'react'
import {connect} from 'react-redux'
import './styles.css'
import imgCar from '../assets/imgs/XXAR_800x400.png'
import iconCheck from '../assets/imgs/check.png'
class listInfoCar extends Component {
    renderInforCar(car){
        return(
            <ul key={car.id}>
                <li>
                    <div className="container" id="card">
                       <div id="main_row">
                            <h1>{car.user}</h1>
                            <div className="row">
                                <div className="col-sm-3">
                                    <img alt="" id="image" src={imgCar}/>
                                    <p>Thông tin chi tiết</p>
                                </div>
                                <div className="col-sm-9 row ">
                                    <div className="col-sm-6">
                                        <li _ngcontent-c10="">Features</li>
                                        <li _ngcontent-c10=""><img _ngcontent-c10="" src={iconCheck} style={{width:"20px", height :"20px"}}/>SUV</li>
                                        <li _ngcontent-c10=""><img _ngcontent-c10="" src={iconCheck} style={{width:"20px", height :"20px"}}/>SUV</li>
                                        <li _ngcontent-c10=""><img _ngcontent-c10="" src={iconCheck} style={{width:"20px", height :"20px"}}/>SUV</li>
                      
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                            </div>
                       </div>
                    </div>
                </li>
            </ul>
        )
    }
  render() {
    return (
      <div>
        {this.props.infoCar.map(this.renderInforCar)}
      </div>
    )
  }
}

let mapStateToProps = (state) =>{
    return{
        infoCar: state.infoCar
    }
}

export default connect(mapStateToProps)(listInfoCar)

