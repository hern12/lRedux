import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore,combineReducers,applyMiddleware} from "redux";
window.__REDUX_DEVTOOLS_EXTENSION__;
const initialState = {
	result:15000,
	value:[]
}
const Employeereducer = (state=initialState,action)=>{
	switch(action.type){
		case "ADD":
			state={
				...state,
				result:state.result += action.payload
			}
			break;
		case "SUBTRACT":
			state ={
				...state,
				result:state.result -= action.payload
			}
			break;
		default:
	}
	return state;
}

const mylogger =(store) => (next) => (action) =>{
	console.log("Log Action",action);
	next(action);
}

const userReducer = (state={name:'Pakkawat',age:24},action) =>{
	switch(action.type){
		case "setName":
			state={
				...state,
				name:action.payload
			}
		break;
		case "setAge":
			state={
				...state,
				age:action.payload
			}
		break;
	 default:
	}
	return state;
}
const store = createStore(combineReducers({emp:Employeereducer,user:userReducer}),{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(mylogger));
store.subscribe(()=>{
	console.log("Update Store:",store.getState());
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();