import styled from 'styled-components';

const ArticleCardContainer = styled.div`
	width: 90%;
	background: #00000011;
	margin: 1rem;
	padding: 1rem;
	position: relative;
	border-radius:4px;
	box-shadow: 0px 1px 1px 0px #00000099,
							0px 2px 1px 0px #00000088,
							0px 3px 1px 0px #00000033;

	h5 {
		font-size: 2.5rem;
		margin: 0em;
	}

	&:hover {
		background: #00000009;

		box-shadow: 0px 3px 1px 0px #00000055,
								0px 3px 2px 0px #00000055,
								0px 3px 3px 0px #00000055;
	}
`;

export default ArticleCardContainer;
