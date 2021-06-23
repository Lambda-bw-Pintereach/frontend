import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import LoginContainer from "./Login.style"
import * as yup from 'yup';
import formSchema from '../utils/formSchema';


const emptyLogin = {
	username: "",
	password: "",
	email: "",
	tosAgree: false
}

const initialFormErrors = {
	username: '',
	password: '',
	email: '',
	tosAgree: ''
}

const Login = () => {
	const history = useHistory();
	const [formValues, setFormValues] = useState(emptyLogin);
	const [formErrors, setFormErrors] = useState(initialFormErrors)
	const [isSigningUp, setIsSigningUp] = useState(false);
	const [disabled, setDisabled] = useState(true)

	const handleChange = e => {
		if (e.target.type === "checkbox") {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.checked
			});
		}

		else {
			if (isSigningUp) {
				validateField(e.target.name, e.target.value);
			}

			setFormValues({
				...formValues,
				[e.target.name]: e.target.value
			});
		}
	};

	const onLoginClick = e => {
		e.preventDefault();
		const newUser = {
			username: formValues.username,
			password: formValues.password,
		}
		axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/login', newUser)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				history.push('/dash');
				console.log(res)
			})
			.catch(err => {
				console.log(err);
			});
	};

	const onSignUpClick = e => {
		e.preventDefault();

		// sign up
		if (isSigningUp) {
			e.preventDefault();
			const newUser = {
				username: formValues.username.trim(),
				password: formValues.password.trim(),
			}

			axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/register', newUser)
				.then(res => {
					console.log(res)
					//history.push('/')
					onLoginClick(e);
				})
				.catch(err => {
					console.log(err)
				})
		}

		//show form
		else {
			setIsSigningUp(true);
		}
	}

	const validateField = (name, value) => {
		yup.reach(formSchema, name)
			.validate(value)
			.then(() => {
				setFormErrors({ ...formErrors, [name]: '' })
			})
			.catch(err => {
				setFormErrors({ ...formErrors, [name]: err.errors[0] })
			})
	}

	useEffect(() => {
		if (isSigningUp) {
			formSchema.isValid(formValues).then((valid) => {
				setDisabled(!valid);
			});
		}
	}, [formValues, isSigningUp]);

	const onCancelClick = e => {
		setIsSigningUp(false);
	}

	return (
		<LoginContainer>
			<div className="form_section">

				<div data-testid="loginForm" className="login-form">
					<form onSubmit={onLoginClick}>

						<div className="form-group form-label mt-3">
							<label htmlFor="username">Username:  </label>
							<input
								className="form-control"
								type="text"
								name="username"
								data-testid="username"
								value={formValues.username}
								onChange={handleChange}
								placeholder="Username" />
						</div>

						{isSigningUp && formErrors.username &&
							<div className="login-error">{formErrors.username}</div>
						}

						<div className="form-group form-label mt-3">
							<label htmlFor="password">Password: </label>
							<input
								className="form-control"
								type="password"
								name="password"
								data-testid="password"
								value={formValues.password}
								onChange={handleChange}
								placeholder="Password" />
						</div>

						{isSigningUp && formErrors.password &&
							<div className="login-error">{formErrors.password}</div>
						}

						{isSigningUp &&
							<>
								<div className="form-group form-label mt-3">
									<label htmlFor="email">Email: </label>
									<input
										className="form-control"
										type="text"
										name="email"
										data-testid="email"
										value={formValues.email}
										onChange={handleChange}
										placeholder="email address" />
								</div>

								{isSigningUp && formErrors.email &&
									<div className="login-error">{formErrors.email}</div>
								}

								<div className="login-tos">
									<label>
										<input type="checkbox" name="tosAgree" data-testid="tosAgree" value={formValues.tosAgree} onChange={handleChange} />
										I agree to the terms of service.
									</label>
								</div>
							</>
						}

						<div className="login-buttons">
							{/* <Link to="/signup"><button className="btn btn-orange">Sign Up</button></Link> */}

							{!isSigningUp &&
								<button className="btn btn-blue" onClick={onLoginClick} default>Login</button>}

							{isSigningUp &&
								<button className="btn btn-red" onClick={onCancelClick}>Cancel</button>
							}

							<button className="btn btn-orange" onClick={onSignUpClick} disabled={isSigningUp && disabled}>Sign up</button>
						</div>
					</form>
				</div>
			</div>
		</LoginContainer>
	)
}

export default Login;
