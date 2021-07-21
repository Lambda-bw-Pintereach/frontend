import React from 'react';
import PropTypes from 'prop-types';

const ArticleLink = props => {
	const { article } = props;

	return (
		<div>
			<a href={`/dash/article/${article.article_id}`}>{article.title}</a>
		</div>
	);
}

ArticleLink.propTypes = {
	article: PropTypes.any,
}

export default ArticleLink;
