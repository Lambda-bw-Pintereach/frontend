import styled from "styled-components";

const LoginContainer = styled.div`
	width: 18rem;

	* {
		/* border: white dotted 1px; */
		/* background-color: #ffffff11; */
		box-sizing: border-box;
	}

	label {
		display: block;

		position: relative;
		top: 0.6rem;
		margin: 0 .5rem;

		color: #adbfcf;
		font-size: 1rem;
	}

	input[type=text], input[type=password] {
		display: block;

		height: 2.5rem;
		width: 100%;
		font-size: 1.5rem;
		padding: .5rem .5rem .1rem;

		color: #dddddd;

		background-color: #444;
		border: 0;
		border-bottom: 3px solid ${p => p.theme.onDark};
		border-radius: 8px 8px 0px 0px;
	}

	.input-error {
		border-bottom-color: ${p=>p.theme.redColor} !important;
	}

	input:focus, input:focus-visible {
		border-bottom: 3px solid ${p=>p.theme.blueHigh};
		outline: 0;
	}

	.login-form-error {
		margin: auto;
		max-width: 14rem;
		color: ${p => p.theme.onDark};
		font-size: 1rem;
	}

	.login-tos {
		margin: 1rem auto 0;

		label {
			position: static;
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		input[type=checkbox] {
			height: 1.2rem;
			width: 1.2rem;
			margin-right: .5rem;
		}

	}

	.login-buttons {
		margin-top: .5rem;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-evenly;

		* {
			text-transform: capitalize;
		}
	}
`;

export default LoginContainer;
