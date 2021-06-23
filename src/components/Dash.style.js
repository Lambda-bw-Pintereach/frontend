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
