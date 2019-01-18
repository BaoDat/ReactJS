import FoodReducer from './foods-reducer'
import UserReducer from './users-reducers'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer
})

export default allReducers
