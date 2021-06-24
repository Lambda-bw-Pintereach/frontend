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
	const [loginError, setLoginError] = useState("");

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
				setLoginError(err.response.data.message);
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
					onLoginClick(e);
				})
				.catch(err => {
					console.log(err);
					setLoginError(err.response.data.message);
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

	const onSubmit = e => {
		e.preventDefault();

		if (isSigningUp && !disabled)
			onSignUpClick(e);

		else if (!isSigningUp)
			onLoginClick(e);
	}

	const handleKey = e => {
		if (e.key === "Enter") {
			onSubmit(e);
		}
	}

	return (
		<LoginContainer>

					<form onSubmit={onSubmit} onKeyDown={handleKey}>

							<label htmlFor="username">{formValues.username && "username"}&nbsp;</label>
							<input
								className={isSigningUp && formErrors.username ? "form-control input-error" : "form-control"}
								type="text"
								name="username"
								data-testid="username"
								value={formValues.username}
								onChange={handleChange}
								placeholder="username" />

						{isSigningUp && formErrors.username &&
							<div className="login-form-error">{formErrors.username}</div>
						}

							<label htmlFor="password">{formValues.password && "password"}&nbsp;</label>
							<input
								className={isSigningUp && formErrors.password ? "form-control input-error" : "form-control"}
								type="password"
								name="password"
								data-testid="password"
								value={formValues.password}
								onChange={handleChange}
								placeholder="password" />

						{isSigningUp && formErrors.password &&
							<div className="login-form-error">{formErrors.password}</div>
						}

						{isSigningUp &&
							<>
									<label htmlFor="email">{formValues.email && "email"}&nbsp;</label>
									<input
										className={isSigningUp && formErrors.email ? "form-control input-error" : "form-control"}
										type="text"
										name="email"
										data-testid="email"
										value={formValues.email}
										onChange={handleChange}
										placeholder="email" />

								{isSigningUp && formErrors.email &&
									<div className="login-form-error">{formErrors.email}</div>
								}

								<div className="login-tos">
									<label>
										<input type="checkbox" name="tosAgree" data-testid="tosAgree" value={formValues.tosAgree} onChange={handleChange} />
										I agree to the terms of service.
									</label>
								</div>
							</>
						}

						{loginError &&
							<div className="error-msg-box">
								{loginError}
							</div>
						}

						<div className="login-buttons">
							{/* <Link to="/signup"><button className="btn btn-orange">Sign Up</button></Link> */}

							{!isSigningUp &&
								<button className="btn btn-orange" onClick={onLoginClick} default>Login</button>}

							{isSigningUp &&
								<button className="btn btn-red" onClick={onCancelClick}>Cancel</button>
							}

							<button className="btn btn-blue" onClick={onSignUpClick} disabled={isSigningUp && disabled}>Sign up</button>
						</div>
					</form>
		</LoginContainer>
	)
}

export default Login;
