import styled from 'styled-components';

// This refers to the full Article page
// ie: /dash/article/10
// Keep in mind that this is still a child of Dash, and inherits style from DashContainer
const ArticleContainer = styled.div`
/* background: #ff000022; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: top;

	.dash-article-content {
		/* background: #FFFFFF22; */
		margin: 1rem;
		padding: 1rem;
		position: relative;
		flex-grow: 1;

		h5 {
			font-size: 3rem;
			margin: 0em;
		}
	}

	.dash-article-buttons {
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
		margin-top: 1rem;
		padding-top: 1rem;

		/* background: #00FF0022; */

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
		padding: 0rem;
		position: relative;
		box-shadow: 1px 1px 15;
		border: 0px solid black;
		width: 12rem;
		flex-shrink: 0;

		/* background: #0000FF22; */

		&>div {
			background: #00000010;
			font-size: 1.0rem;
			margin: .1rem;
			padding: .2rem .5rem;
		}

		a {
			color: inherit;
		}

		a:visited {
			color: inherit;
		}
	}
`;

export default ArticleContainer;
