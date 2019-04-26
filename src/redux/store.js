import {createStore, applyMiddleware, compose} from 'redux';

import reducer from '../reducers';

/* Middlewares */
import thunk from 'redux-thunk';

//Подключаем redux-dev-tools
// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// Проверяем мод и если это не продакшн, подключаем redux-dev-tools
const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;



//Подключаем миддлвары
const middleware = applyMiddleware(thunk);

let store = createStore(reducer, composeEnhancers(middleware));

export default store;
