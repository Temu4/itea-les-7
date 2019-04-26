import React, { Component } from 'react';
import { connect } from 'react-redux';



 class AppContainer extends Component {
	render() {
		const { authorized } = this.props;
		return (
			<>
			{ authorized? (
				<h1 className="container__title">Welcome to the Game</h1>
				) : (
				<h1 className="container__title">Please, Sign In or Sign Up to have access</h1>
				)
			}
			</>
		)
	}
}

/*
Redux
*/

const mapStateToProps = (state, ownProps) => ({
	authorized: state.authorized
})

export default connect(mapStateToProps, null)(AppContainer);