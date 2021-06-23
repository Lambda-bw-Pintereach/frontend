import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import LoginContainer from "./Login.style"


const credentials = {
	username: "",
	password: ""
}

const Login = () => {

	const { push } = useHistory();

	const [userLogin, setUserLogin] = useState(credentials)

	const handleChange = e => {
		setUserLogin({
			userLogin: {
				...userLogin,
				[e.target.name]: e.target.value
			}
		});
	};

	const login = e => {
		e.preventDefault();
		axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/login', userLogin)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				push('/dash');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<LoginContainer>
			<div className="form_section">
				<div data-testid="loginForm" className="login-form">
					<h2>Login</h2><br />
					<form onSubmit={login}>
						<div className="form-group form-label mt-3">
							<label htmlFor="username">Username:  </label>
							<input
								className="form-control"
								type="text"
								name="username"
								data-testid="username"
								value={userLogin.username}
								onChange={handleChange}
								placeholder="Username"
							/>
						</div>
						<div className="form-group form-label mt-3">
							<label htmlFor="password">Password: </label>
							<input
								className="form-control"
								type="password"
								name="password"
								data-testid="password"
								value={userLogin.password}
								onChange={handleChange}
								placeholder="Password"
							/>
						</div>
						<div className="login-buttons">
							<button className="button-blue">Login</button>
							<Link to="/signup"><button className="button-orange">SIGN UP</button></Link>
						</div>
					</form>
				</div>
			</div>
		</LoginContainer>
	)
}

export default Login;
