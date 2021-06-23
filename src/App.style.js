import styled from "styled-components";


export const AppContainer = styled.div`
	h1 {
		font-family: 'Padauk', sans-serif;
		color: #f0f0f0;
		font-size: 5rem;
		margin: 0;
		font-weight: 400;
		line-height: 1;
	}

	h2 {
		font-family: 'Padauk', sans-serif;
		color: #f0f0f0;
		font-size: 1.6rem;
		margin: 0;
		font-weight: 400;
		line-height: 1;
	}

	.btn {
		display: inline;
		border: 0;
		font-size: 1.6rem;
		padding: .4rem .5rem;
		margin: .8rem .3rem;
		text-decoration: none !important;
	}

	/* .btn:disabled {
		opacity: 75%;
	} */

	.btn-orange {
		background-color: ${p => p.theme.secondaryColor};
		color: #000000bb;
	}

	.btn-orange:hover {
		background-color: ${p => p.theme.secondaryHigh};
		color: #000000dd;
	}

	.btn-orange:active {
		background-color: ${p => p.theme.secondaryHigher};
		color: #000000;
	}

	.btn-orange:disabled {
		background-color: ${p => p.theme.secondaryLower} !important;
		color: #000000bb !important;
	}

	.btn-blue {
		background-color: ${p => p.theme.primaryColor};
	}

	.btn-blue:hover {
		background-color: ${p => p.theme.primaryHigher};
	}

	.btn-blue:active {
		background-color: ${p => p.theme.primaryHigh};
	}

	.btn-red {
		background-color: ${p => p.theme.redColor};
	}

	.btn-red:hover {
		background-color: ${p => p.theme.redHigher};
	}

	.btn-red:active {
		background-color: ${p => p.theme.redHigh};
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
