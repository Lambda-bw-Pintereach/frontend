import LoginContainer from "./Login.style"

const Login = props => {
	return (
		<LoginContainer>
			<label>username
				<input type="text" />
			</label>

			<label>password
				<input type="password" />
			</label>

			<div className="login-buttons">
				<button>SIGN UP</button>
				<button>LOG IN</button>
			</div>
		</LoginContainer>
	)
}

export default Login;
