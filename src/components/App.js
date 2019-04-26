import React, {Component} from 'react';
import {Provider} from 'react-redux';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import store from '../redux/store';
// import rootRouter from '../rootRouter';

import Header from './Header';
import FormSignUp from './FormSignUp';
import FormSignIn from './FormSignIn';
import AppContainer from './AppContainer';

import './App.css';

class App extends Component {
  state = {
    popupSignInStatus: false,
    popupSignUpStatus: false,
    welcomePageStatus: true
	}

	showPopupSignIn = () => {
		this.setState({
      popupSignInStatus: true, 
      welcomePageStatus: false
    });
  }

  showPopupSignUp = () => {
		this.setState({
      popupSignUpStatus: true, 
      welcomePageStatus: false
    });
  }
  
  closePopup = () => {
    this.setState({
      popupSignInStatus: false,
      popupSignUpStatus: false,
      welcomePageStatus: true
    });
  }

  render() {
    const {popupSignInStatus, popupSignUpStatus, welcomePageStatus} = this.state;
    return (
      <Provider store={store}>
      <Helmet >
        <link href="https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe" rel="stylesheet"/>
        <title>Welcome to the Game</title>
      </Helmet>
        <Header showPopupSignIn={this.showPopupSignIn} showPopupSignUp={this.showPopupSignUp}/>
          <div className="container">
              { welcomePageStatus &&  <AppContainer /> }
              { popupSignInStatus && <FormSignIn closePopup={this.closePopup}/> }
              { popupSignUpStatus && <FormSignUp closePopup={this.closePopup}/> }
          </div>
      </Provider>
    );
  }
}

export default App;
