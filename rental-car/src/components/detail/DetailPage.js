import React, { Component } from 'react'
import './style/DetailPage.css'
import car from '../../assets/imgs/XXAR_800x400.png'
import Select from '../home/Option'

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datePick: undefined,
        dateDrop: undefined,
        pickloc: "",
        droploc: "",
        timePick: "00:00",
        timeDrop: "00:00"
    }
}
  render() {
    return (
      <nav>
        <nav className="navbar navbar-light bg-light">
          <a  className="navbar-brand nav-header" href="/" >
            <img alt="" src={car} height="15%" width="15%"/>
          </a>
          <h2 className="nav-header-text">Rental Car and Motorbike</h2>
        </nav>
        <nav >
          <form>
            <hr />
            <nav className="navbar navbar-light bg-light">
              <div className="row search">
                <input className="place form-control" name="pickloc" placeholder="Pick up location"  type="text" />
                <p>→</p>
                <input  className="place form-control" name="droploc" placeholder="Drop off location" required="" type="text" />
                <input className="division form-control form-control-sm " name="pickdate" type="date"
                                    onChange={(event) => this.setState({ datePick: event.target.value })} />              
                <Select className="division form-control form-control-sm" handleSelect={(timeSelected) => { this.setState({ timePick: timeSelected }) }} />
                <input className="division form-control form-control-sm " name="pickdate" type="date"
                                    onChange={(event) => this.setState({ datePick: event.target.value })} />              
                <Select className="division  form-control form-control-sm" handleSelect={(timeSelected) => { this.setState({ timePick: timeSelected }) }} />
                <button className="style-button btn btn-warning scbtn-width" type="button">SEARCH</button>
              </div>
            </nav>
          </form>
        </nav>
      </nav>
    )
  }
}

