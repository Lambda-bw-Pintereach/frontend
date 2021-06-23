import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../api';

const Article = props => {
	const { id } = useParams();
	const [article, setArticle] = useState({
		title: "",
		preview: "",
		story: "",
		category: [],
		article_id: 0
	});

	useEffect(() => {
		fetchArticle(id)
			.then(res => {
				setArticle(res.data);
			})
			.catch(err => console.log(err));
	})

	return (
		<>
			<div className="dash-article-card">
				<a href={`/dash/article/${article.article_id}`}>
					<h5>{article.title}</h5>
				</a>
				<p>{article.preview}</p>
				<p>{article.story}</p>
			</div>
		</>
	);
}

export default Article;
