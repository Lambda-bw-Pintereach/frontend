import styled from "styled-components";

const AddArticleContainer = styled.div`
	background-color: #00000022;
	max-width: 40em;
	margin: 1em auto;
	padding: 1em;
	border: 1px solid black;
	text-align: left;

	h3 {
		margin: 0em 0em 1em;
		padding: 0;
		font-size: 2em;
		font-weight: normal;
	}

	form {
		display: flex;
		flex-direction: column;

		// this selects "label" elements that are the first child of the form
		// (Title, Preview, Story)
		&>label {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			margin-bottom: .8em;

			// this selects the actual text of the label
			span {
				padding-left: .2em;
			}

			// this selects the input elements
			input {
				font-size: 1em;
				padding: .3em;
			}
		}
	}

	span {
		padding-left: .2em;
	}

	.cat-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		text-align: left;
		padding: 0 1em;
		align-items: stretch;
		margin-bottom: .8em;

		// this selects label elements within the .cat-list div
		&>label{
			width: 10em;
			margin: .1em .1em;
			text-transform: capitalize;
			vertical-align: middle;

			input {
				width: 1.2em;
				height: 1.2em;
				margin-right: .5em;
			}
		}
	}

	input[type=submit] {
		font-size: 1.5em;
		margin: auto;
		display: block;
	}
`;

export default AddArticleContainer;
