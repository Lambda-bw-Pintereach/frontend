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
		width:80%;
	}

	.article-card-link {
		text-decoration: none;
		color: ${p => p.theme.onLight};
	}

	.dash-article-card {
		width: 90%;
		background: #00000022;
		margin: 1rem;
		padding: 1rem;
		position: relative;
		border-radius:10px;
		box-shadow: 1px 1px 15px 2px #00000055;

		h5 {
			font-size: 3rem;
			margin: 0em;
		}
	}

	.dash-article-card:hover {
		outline: 2px ${p => p.theme.deepPurp} solid;
		border-color: transparent;
		outline-offset: 2px;
	}

	.dash-article-full {
		display: flex;
		flex-direction: row;
	}

	.dash-article-content {
		background: #00000022;
		margin: 1rem;
		padding: 1rem;
		position: relative;
		box-shadow: 1px 1px 15px 2px #00000055;
		flex-grow: 1;

		h5 {
			font-size: 3rem;
			margin: 0em;
		}
	}

	.dash-article-buttons {
		display: flex;
		flex-direction: column;
		flex-grow: 0;
		margin-top: 1rem;
		padding-top: 1rem;

		img {
			width: 1.8rem;
			height: 1.8rem;
			border-radius: .5rem;
			padding: .2rem;
			background-color: #cccccc;
			border: 1px solid black;
			margin: .5rem 0rem;
		}
	}

	.btn-delete:hover {
		background-color: #e55e5d !important;
	}

.btn-back:hover {
		background-color: #6c768b !important;
	}

	.dash-article-sidebar {
		margin: 1rem;
		padding: 1rem;
		position: relative;
		box-shadow: 1px 1px 15;
		border: 1px solid black;
		width: 10rem;
		flex-shrink: 0;
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
