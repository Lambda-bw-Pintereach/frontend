import LoginContainer from "./Login.style"

const Login = props => {
	return (
		<LoginContainer>
			<label>username</label>
			<input type="text" />

			<label>password</label>

			<input type="password" />

			<div className="login-buttons">
				<button className="button-orange">SIGN UP</button>
				<button className="button-blue">LOG IN</button>
			</div>
		</LoginContainer>
	)
}

export default Login;
