import {weatherAction} from '../actions'
import {ActionTypes} from '../actions/types'


// default значение- пустой массив
export const weatherReducer = (state:[] = [],action:weatherAction) => {
    switch(action.type) {
        case ActionTypes.weather:
            return action.payload  // возвращаем полученный массив
        default:
            return state    
    }
}