import React, { Component } from 'react'
import './style/Home.css'
import Select from './Option'

export default class Home extends Component {
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


    handlePickUpLocationChange = (evt) => {
        this.setState({ pickloc: evt.target.value });
    }

    handleDropOffLocationChange = (evt) => {
        this.setState({ droploc: evt.target.value });
    }

    handleSearch = () => {
        const { datePick, dateDrop, pickloc, droploc, timePick, timeDrop } = this.state;
        alert(`Date pick up: ${datePick} Date drop off: ${dateDrop} Pick up location: ${pickloc} Drop off location: ${droploc} Time Pick up: ${timePick} Time Drop off: ${timeDrop}`);
    }


    render() {
        const { datePick, dateDrop, pickloc, droploc } = this.state;
        const enabled =
            pickloc.length > 0 &&
            droploc.length > 0 &&
            datePick !== undefined &&
            dateDrop !== undefined;
        return (
            <form>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Search for a car rental</h5>
                        <input className="form-control" name="pickloc" placeholder="Pick up location" type="text" onChange={this.handlePickUpLocationChange} />
                        <input className="form-control" name="droploc" placeholder="Drop off location" type="text" onChange={this.handleDropOffLocationChange} />
                        <div className="row">
                            <input className="datebar form-control form-control-sm form-date" name="pickdate" type="date"
                                onChange={(event) => this.setState({ datePick: event.target.value })} />
                            <Select handleSelect={(timeSelected) => { this.setState({ timePick: timeSelected }) }} />
                        </div>
                        <div className="row">
                            <input className="datebar form-control form-control-sm form-date" name="pickdate" type="date"
                                onChange={(event) => this.setState({ dateDrop: event.target.value })} />
                            <Select handleSelect={(timeSelected) => { this.setState({ timeDrop: timeSelected }) }} />
                        </div>
                        <button className="btn btn-warning btn-search" routerlink="/home" type="button" tabIndex="0" onClick={this.handleSearch} disabled={!enabled}>SEARCH NOW</button>
                    </div>

                </div>
            </form>
        )
    }
}


