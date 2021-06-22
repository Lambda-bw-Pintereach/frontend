import styled from "styled-components";

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;

	label {
		display: block;
		position: relative;
		top: 1.2em;
		left: 10px;
		color: #adbfcf;
		font-size: 1.1em;
	}

	input {
		display: block;
		height: 2.5em;
		width: 15em;
		font-size: 1.5em;
		padding: .8em .5em 0em;
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
`;

export default LoginContainer;
