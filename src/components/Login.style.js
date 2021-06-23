import styled from "styled-components";

const LoginContainer = styled.div`
	label {
		display: block;
		position: relative;
		top: 1.2rem;
		left: 10px;
		color: #adbfcf;
		font-size: 1rem;
	}

	input[type=text], input[type=password] {
		display: block;
		height: 2.5rem;
		width: 15rem;
		font-size: 1.5rem;
		padding: 1rem .5rem .1rem;
		background-color: #444;
		border: 0;
		border-radius: 8px 8px 0px 0px;
		border-bottom: 3px white solid;
		color: #dddddd;
	}

	input:focus, input:focus-visible {
		border-bottom: 3px solid #bf8cf9;
		outline: 0;
	}

	.login-error {
		max-width: 15rem;
		color: ${p => p.theme.errorOnDark};
		font-size: .9rem;
	}

	.login-tos {
		margin: 0em 0em 1em;
		label, input {
			display: inline;
		}
	}

	.login-buttons {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-evenly;

		* {
			text-transform: uppercase;
		}
	}
`;

export default LoginContainer;
