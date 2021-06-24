import styled from "styled-components";

const DashContainer = styled.div`
	.dash-header {
		background-color: ${p => p.theme.darkBackground};
		padding: .2rem 11rem;

		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;

		nav>a {
			color: ${p => p.theme.onDark};
			margin: 0 .5rem;
			text-decoration: none;
		}
	}

	.dash-section-header {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;

		select {
			font-size: 1.2rem;
			margin: 1rem;
			padding: .2rem;
		}

		h3 {
			margin: 1rem;
		}
	}

	.dash-article-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.dash-article-card {
		width: 20rem;
		height: 15rem;
		background: #00000022;
		border: 1px solid black;
		margin: 1rem;
		padding: 1rem;
		position: relative;
	}

	.dash-card-buttons {
		position: absolute;
		bottom: 0px;
		right: 0px;
		display: flex;
		flex-direction: column-reverse;

		button {
			margin: .1rem;
		 padding: .1rem;
		}
	}

	.loading-blur {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #00000088;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;

		&>* {
			position: relative;
			margin: auto;
		}
	}

	.dash-content {
		margin: 0rem 10%;
		padding: 1rem;
	}

	.dash-background {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 10%;
		right: 10%;
		background: #dddddd;
		z-index: -1;
	}
`;

export default DashContainer;
