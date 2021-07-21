import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

	return <Route {...rest} render={(props) => {


		if (localStorage.getItem("token")) {

			if (props.Component !== null)
				return (<Component {...props} />);
			else
				return (
					<>
						{props.children}
					</>
				)
		}
		else {
			return <Redirect to="/login" />
		}
	}} />
}

export default PrivateRoute;
