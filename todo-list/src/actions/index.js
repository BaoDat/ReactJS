import {SELECT_FOOD} from './constants'

export const addTodo = (text) => {
    const action = {
        type: "ADD_TODO",
        payload: text
    }
    console.log("Action in addTodo: ", action)
    return action
}

export const selectFood = (food) => {
    alert(food.name)
    return {
        type: SELECT_FOOD,
        payload: food
    }
}