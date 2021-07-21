
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Renders a list of articles
 * (Will no longer fetch article - they need to be provided by the parent component)
 * Uses ArticleCard for child items
 *
 * @param {ArticleListProps} props.articles - an array of article data
 */
const ArticleList = props => {
	const { articles, className } = props;
	const Item = props.itemComponent;

	return (
		<>
			<div className={className || ""}>
				{articles && articles.map((art) => <Item article={art} key={art.article_id}/>)}
			</div>
		</>
	);
}

ArticleList.propTypes = {
	itemComponent: PropTypes.elementType,
	articles: PropTypes.array,
	className: PropTypes.string
}

export default ArticleList;
