import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleUsersInput, checkUser} from '../actions';

class FormSignIn extends Component {
	render () {
		const {getUserData, checkUser, closePopup} = this.props;
		return (
			<div className="popup-container">
				<form 
						className="popup-form popup-form--singIn" 
						onChange={getUserData} 
						onSubmit={(e) => {
							e.preventDefault();
							checkUser();
							closePopup()}}>
					<label className="popup-form__field">User name<input type="text" placeholder="user name" name="name" required/></label>
					<label className="popup-form__field">Password<input type="password" placeholder="password" name="password" required/></label>
					<button type="submit" className="button--dark">Submit</button>
					<button className="button--grey" onClick={closePopup}>Close</button>
				</form>
			</div>
		)
	}
}

/*
Redux
*/
const mapStateToProps = (state, ownProps) => ({
	userInfo: state.userInfo,
	usersDatabase: state.usersDatabase,
	authorized: state.authorized
})

const mapDispatchToProps = (dispatch, ownProps) => ({

	getUserData: (e) => dispatch( handleUsersInput(e) ),

	checkUser: () => {
		dispatch( checkUser() )
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn);
