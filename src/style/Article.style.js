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
		padding: 1rem;
		position: relative;
		box-shadow: 1px 1px 15;
		border: 1px solid black;
		width: 10rem;
		flex-shrink: 0;

		/* background: #0000FF22; */
	}
`;

export default ArticleContainer;
