import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ApiContext } from '../App';

import deleteIcon from '../images/trash.svg';
import backIcon from '../images/undo-arrow.svg';
import ArticleContainer from '../style/Article.style';
import LoadingIndicator from './LoadingIndicator';


const Article = props => {
	const { api, articles } = useContext(ApiContext);
	const [isConfirmDelete, setIsConfirmDelete] = useState(false);
	const { id } = useParams();
	const history = useHistory();

	const article = articles.find(art => art.article_id === parseInt(id));

	const deleteConfirm = (e) => {
		e.preventDefault();
		setIsConfirmDelete(true);
	}

	const onConfirm = (del) => {
		if (del) {
			api.deleteArticle(article.article_id)
				// .then(res => api.refreshArticles())
				.then(res => history.push("/dash"))
				.catch(err => console.log(err));
		}
		else {
			setIsConfirmDelete(false);
		}
	}

	return (
		<>
			<ArticleContainer>

				{article
					? // Article Content
					<div className="dash-article-content">
						<a href={`/dash/article/${article.article_id}`} className="article-card-link">
							<h5>{article.title}</h5>
						</a>
						<p>{article.story}</p>

						<LoadingIndicator type="fill" />
					</div>

					: // Error message for an invalid or missing article
					<div className="dash-article-content">
						This content is unavailable. It have been deleted.
					</div>
				}

				<div className="dash-article-buttons">
					{!isConfirmDelete &&
						<img className="btn-delete" src={deleteIcon} alt="delete" onClick={deleteConfirm} />
					}

					{isConfirmDelete &&
						<>
							<img className="btn-back" src={backIcon} alt="cancel" onClick={() => onConfirm(false)} />
							<img className="btn-delete" src={deleteIcon} alt="delete" onClick={() => onConfirm(true)} />
						</>
					}
				</div>

				<div className="dash-article-sidebar">
					{articles.map(art => {
						return (
							<div key={art.article_id}>
								<a href={`/dash/article/${art.article_id}`}>{art.title}</a>
								</div>
						);
					})}
				</div>

			</ArticleContainer>
		</>
	);
}

export default Article;
