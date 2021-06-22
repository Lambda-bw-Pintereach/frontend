import styled from "styled-components";


export const AppContainer = styled.div`
	h1 {
		font-family: 'Padauk', sans-serif;
		color: #f0f0f0;
		font-size: 6em;
		margin: 0;
		font-weight: 400;
		line-height: 1;
	}

	h2 {
		font-family: 'Padauk', sans-serif;
		color: #f0f0f0;
		font-size: 1.8em;
		margin: 0;
		font-weight: 400;
		line-height: 1;
	}

	button {
		display: inline;
		border: 0;
		font-size: 2em;
		padding: .2em .5em;
		margin: .8em .3em;
	}

	.button-orange {
		background-color: #c96a37;
	}

	.button-orange:hover {
		background-color: #d4845b;
	}

	.button-orange:active {
		background-color: #e4946b;
	}

	.button-blue {
		background-color: #579fd9;
	}

	.button-blue:hover {
		background-color: #77aff9;
	}

	.button-blue:active {
		background-color: #87bff9;
	}
`;

export const Landing = styled.div`

	.landing-background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(#0f1322, #0b070f);
		z-index: -1;
	}

	margin: auto;
	height: 80vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
