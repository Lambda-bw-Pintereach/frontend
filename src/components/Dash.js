import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from './AddArticle';

const articles = [{
	title: "Fake Title",
	preview: "What's the difference between preview and story?",
	story: "Nobody really has any idea. I think preview is like an excerpt?",
	category: "dummy",
}, {
	title: "How to Write Fake Content",
	preview: "Lorem ipsum dollar thingy",
	story: "Abracadabra alakazam, zim da la zim da barbara",
	category: "dummy",
},
{
	title: "Amazing Content",
	preview: "You have never read a more amazing article than this one right here",
	story: "Except it's a just a sample, and you will never see the full text! Tough beans.",
	category: "dummy",
}]


const Dash = (props) => {
	return (
		<DashContainer>

			<div className="dash-background"></div>

			<div className="dash-header">
				<h1>pintereach</h1>
				<nav>
					<Link>home</Link>
					<Link>save article</Link>
					<Link>settings</Link>
					<Link>log out</Link>
				</nav>
			</div>


			<div className="dash-content">
				<div className="dash-section-header">
					<h3>Your Saved Articles:</h3>
					<select>
						{["show all", ...categories].map((cat, i) => {
							return (
								<option key={i}>{cat}</option>
							);
						})}
					</select>
				</div>
				<div className="dash-article-list">
					{articles.map(art => {
						return (
							<div className="dash-article-card">
								<h5>{art.title}</h5>
								<p>{art.preview}</p>
								<p>{art.story}</p>
							</div>
						);
					})}
				</div>
			</div>


		</DashContainer>
	)
}

export default Dash;

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

