import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={(props) => {


		// for now I'm just going to assume the user is logged in already
		// if (localStorage.getItem("token")) {
		if (true) {
			return (<Component {...props} />);
		}
		else {
			return <Redirect to="/login" />
		}
	}} />
}

export default PrivateRoute;
