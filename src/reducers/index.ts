import { combineReducers } from "redux";
import {weatherReducer} from './weather'

export interface storeState{
    weather: []
}

export const reducers = combineReducers<storeState>({
   weather:weatherReducer
});