//constants
export const GET_USER_NAME = 'GET_USER_NAME';
export const GET_USER_EMAIL = 'GET_USER_EMALE';
export const GET_USER_HOUSE = 'GET_USER_HOUSE';
export const GET_USER_PASS = 'GET_USER_PASS';
export const ADD_USER = 'ADD_USER';
export const SUCCESS_USER = 'SUCCESS_USER';
export const SAVE_USER_IN_LOCAL_STORAGE = 'SAVE_USER_IN_LOCAL_STORAGE';
export const UNAUTORIZED_USER = 'UNAUTORIZED_USER';

//actions
export const handleUsersInput = (e) => (dispatch, getState) => {
	let value = e.target.value;
	let fieldLabel = e.target.getAttribute('name');

	switch (fieldLabel){
		case 'name':
			return dispatch({type: GET_USER_NAME, payload: value})
		case 'email':
			return dispatch({type: GET_USER_EMAIL, payload: value})
		case 'house':
			return dispatch({type: GET_USER_HOUSE, payload: value})
		case 'password':
			return dispatch({type: GET_USER_PASS, payload: value})
		default: return
	}
}

export const addUser = () => (dispatch, getState) => {
	return dispatch({type: ADD_USER})
}

export const saveUserInLocalStorage = () => (dispatch, getState) => {
	let user = getState().users.userInfo;

	localStorage.setItem('user', JSON.stringify(user));

	dispatch({type: SAVE_USER_IN_LOCAL_STORAGE})
}

export const checkUser = () => (dispatch, getState) => {

	let userInfo = getState().users.userInfo;
	// let usersDatabase = getState().users.usersDatabase;
	let savedUser = JSON.parse(localStorage.getItem('user'));

	let status;

	let loggedUser;

	// usersDatabase.forEach(item => {
	// 	return item.name === userInfo.name && item.password === userInfo.password ? (
	// 		loggedUser = {...userInfo, house: item.house},
	// 		status = true
	// 		) : status = false
	// })

	if (savedUser.name === userInfo.name && savedUser.password === userInfo.password){
			loggedUser = {...savedUser};
			status = true;
			return dispatch({type: SUCCESS_USER, payload: status, loggedUser});
	} else {
			status = false;
			return dispatch({type: UNAUTORIZED_USER, payload: status})
	}
	
}
