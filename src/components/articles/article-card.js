import React from 'react';
import { useHistory } from 'react-router-dom';

import ArticleCardContainer from './article-card.style';


/**
 * Displays a preview for the provided article
 * Navigates to the article page when clicked
 *
 * @param {*} props.article - The article to display
 */
const ArticleCard = props => {
	const { article } = props;
	const history = useHistory();

	const onCardClick = (e) => {
		history.push(`/dash/article/${article.article_id}`);
	}

	return (
		<ArticleCardContainer onClick={onCardClick}>
			<a href={`/dash/article/${article.article_id}`} className="article-card-link">
				<h5>{article.title}</h5>
			</a>
			<p>{article.preview}</p>
		</ArticleCardContainer>
	);
}

export default ArticleCard;
