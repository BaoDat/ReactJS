import {
    combineReducers
} from 'redux'
import InfoCarsReducer from './reducer_info_cars'

const rootReducer = combineReducers({
    infoCar: InfoCarsReducer
})

export default rootReducer