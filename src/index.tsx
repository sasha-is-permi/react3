

import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import {createStore, applyMiddleware} from 'redux' // импортируем функцию createStore для использования store
import {Provider} from 'react-redux' // оборачиваем приложение в тег Provider чтобы показать что работаем с redux
import thunk from 'redux-thunk'
import {reducers} from './reducers' // импортируем функцию rootReducer из ts файла




const store = createStore(reducers,applyMiddleware(thunk)) // создаем store. 

// BrowserRouter -  hoc-компонент, который оборачивает наш компонент для использования router 
const app = (
 
     <Provider store={store}> {/* Передаем store в компонент App. store создается функцией createStore() используя функцию rootReducer  */}
       <App/>   
     </Provider>

)


ReactDOM.render(app,  document.getElementById('root') );


