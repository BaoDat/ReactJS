import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectFood } from '../actions/index'

class FoodList extends Component {

    createFoodListItem() {
        let listItems = this.props.foodState.map(
            (item) => {
                return (
                    <li key={item.id} onClick={() =>{
                        this.props.selectFood(item)
                    }}>
                        Food's name: <h3>{item.name}</h3>
                    </li>)

            }
        )
        return listItems
    }

    render() {
        return (
            <ul>
                {this.createFoodListItem()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        foodState: state.foods
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectFood: selectFood }, dispatch)
}

let FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodList)

export default FoodContainer