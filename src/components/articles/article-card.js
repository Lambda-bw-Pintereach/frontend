import React from 'react';
import { useHistory } from 'react-router-dom';

import ArticleCardContainer from './article-card.style';


/**
 * Displays a preview for the provided article
 * Navigates to the article page when clicked
 *
 * @param {*} props.art - The article to display
 */
const ArticleCard = props => {
	const { art } = props;
	const history = useHistory();

	const onCardClick = (e) => {
		history.push(`/dash/article/${art.article_id}`);
	}

	return (
		<ArticleCardContainer onClick={onCardClick}>
			<a href={`/dash/article/${art.article_id}`} className="article-card-link">
				<h5>{art.title}</h5>
			</a>
			<p>{art.preview}</p>
		</ArticleCardContainer>
	);
}

export default ArticleCard;
