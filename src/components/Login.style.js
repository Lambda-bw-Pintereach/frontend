import styled from "styled-components";

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;

	label {
		display: block;
		position: relative;
		top: 1.2rem;
		left: 10px;
		color: #adbfcf;
		font-size: 1rem;
	}

	input {
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
`;

export default LoginContainer;
