import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

const ArticleCard = props => {
	const { art } = props;
	const history = useHistory();

	const onCardClick = (e) => {
		history.push(`/dash/article/${art.article_id}`);
	}

	return (
		<div className="dash-article-card" onClick={onCardClick}>
			<a href={`/dash/article/${art.article_id}`} className="article-card-link">
				<h5>{art.title}</h5>
			</a>
			<p>{art.preview}</p>
		</div>
	);
}

export default ArticleCard;
