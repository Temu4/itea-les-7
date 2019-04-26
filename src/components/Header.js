import React from 'react';

const Header = (props) =>{
	return(
		<div className='header'>
			<button onClick={props.showPopupSignIn}>Sing In</button>
			<button onClick={props.showPopupSignUp}>Sing Up</button>
		</div>
	)
};

export default Header;