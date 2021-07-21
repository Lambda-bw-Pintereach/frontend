
import React from 'react';
import PropTypes from 'prop-types';

import ArticleCard from './article-card';
import { categories } from './save-article';
import articleShape from './article-shape';


/**
 * Renders a list of articles
 * (Will no longer fetch article - they need to be provided by the parent component)
 * Uses ArticleCard for child items
 *
 * @param {ArticleListProps} props.articles - an array of article data
 */
const ArticleList = props => {
	const { articles } = props;
	const Item = props.itemComponent;

	return (
		<>
			<div className="dash-section-header">
				<h3>Your Saved Articles</h3>
				<select>
					{["Show All", ...categories].map((cat, i) => {
						return (
							<option key={i}>{cat}</option>
						);
					})}
				</select>
			</div>

			<div className="dash-article-list">
				{articles && articles.map((art) => <ArticleCard art={art} key={art.article_id}/>)}
			</div>
		</>
	);
}

ArticleList.propTypes = {
	itemComponent: PropTypes.element,
	articles: PropTypes.arrayOf(PropTypes.shape(articleShape))
}

export default ArticleList;
