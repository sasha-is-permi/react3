
/* 
API key:
ce1b6e87e1a00244469fbe228fec3269

Пермь:
lat=58.0&lon=56.14

Полазна:
lat=58.29&lon=56.42

Москва:
lat=55.75&lon=37.62
*/


import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types'

export interface weatherAction{
    type:ActionTypes.weather
    payload:[]
}




let pathFromApi = "https://api.openweathermap.org/data/2.5/onecall?lat=58.0&lon=56.14&units=metric&lang=ru&appid=9b8bdb2ae53f944ff3f79cb14af0ad03&cnt=7"


export const fetchWeather = () => {
    // используем redux thunk
return async (dispatch:Dispatch) => {
    const response = await axios.get<[]>(pathFromApi);

    // для дженерик-функции используем интерфейс
    dispatch<weatherAction>({
        type:ActionTypes.weather,
        payload:response.data
    });
};
}; 