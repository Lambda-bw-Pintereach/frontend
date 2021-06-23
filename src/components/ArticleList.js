import React from 'react';
import { useRouteMatch } from 'react-router-dom';
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

const ArticleList = props => {
console.log(useRouteMatch())
	return (
		<>
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
				{articles.map((art, i) => {
					return (
						<div className="dash-article-card" key={i}>
							<h5>{art.title}</h5>
							<p>{art.preview}</p>
							<p>{art.story}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default ArticleList;
