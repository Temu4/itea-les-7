import React, {Component} from 'react';
import {connect} from 'react-redux';

import {handleUsersInput, addUser, saveUserInLocalStorage} from '../actions';

class FormSignUp extends Component {
	render () {
		const {getUserData, addUser, closePopup} = this.props;
		return (
			<div className="popup-container">
				<form 
						className="popup-form" 
						onChange={getUserData} 
						onSubmit={(e) => {
							e.preventDefault();
							addUser();
							closePopup()}}>
						<label className="popup-form__field">User name<input type="text" placeholder="user name" name="name" required/></label>
						<label className="popup-form__field">User email<input type="email" placeholder="user email" name="email" required/></label>
						<label className="popup-form__field">Choose your house<select name="house" required>
							<option value=""></option>
							<option value="Stark">Stark</option> 
							<option value="Targaryen">Targaryen</option>
							<option value="Lannister">Lannister</option>
							<option value="Greyjoy">Greyjoy</option>
							<option value="Arryn">Arryn</option>
						</select></label>
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
	usersDatabase: state.usersDatabase
})

const mapDispatchToProps = (dispatch, ownProps) => ({

	getUserData: (e) => dispatch( handleUsersInput(e) ),

	addUser: () => {
		dispatch( saveUserInLocalStorage() );
		dispatch( addUser() )
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
