import React, { Component } from 'react'
import FoodContainer from '../containers/foods-list'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions/index'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    addTodo = ()=> {
        this.props.addTodo(this.state.text)
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Title
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Input here ...."
                            onChange={even => this.setState({ text: even.target.value })}
                        />
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.addTodo}>ADD</button>
                </div>
                <div>
                    <h2>List of foods:</h2>
                    <FoodContainer />
                    <hr />
                    <h2>List of users:</h2>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo: addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)

