import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../App';
import ArticleCard from './ArticleCard';
import { categories } from './SaveArticle';

const articles = [{
	id: 1,
	title: "Fake Title",
	preview: "What's the difference between preview and story?",
	story: "Nobody really has any idea. I think preview is like an excerpt?",
	category: "dummy",
}, {
	id: 2,
	title: "How to Write Fake Content",
	preview: "Lorem ipsum dollar thingy",
	story: "Abracadabra alakazam, zim da la zim da barbara",
	category: "dummy",
},
{
	id: 3,
	title: "Amazing Content",
	preview: "You have never read a more amazing article than this one right here",
	story: "Except it's a just a sample, and you will never see the full text! Tough beans.",
	category: "dummy",
}]

const ArticleList = props => {
	const [articles, setArticles] = useState([]);
	const { api } = useContext(ApiContext);

	const loadArticles = () => {
		api.fetchArticles()
			.then(res => {
				setArticles(res.data);
			})
			.catch(err => console.log);
 }

	useEffect(() => {
		loadArticles();
	}, [])


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
				{articles.map((art) => <ArticleCard art={art} key={art.article_id} loadArticles={loadArticles}/>)}
			</div>
		</>
	);
}

export default ArticleList;
