import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiContext } from '../App';
import deleteIcon from '../images/trash.svg';
import backIcon from '../images/undo-arrow.svg';
import LoadingIndicator from './LoadingIndicator';

const Article = props => {
	const { id } = useParams();
	const history = useHistory();
	const { api } = useContext(ApiContext);
	const [article, setArticle] = useState({
		title: "",
		preview: "",
		story: "",
		category: [],
		article_id: 0
	});
	const [isConfirmDelete, setIsConfirmDelete] = useState(false);

	useEffect(() => {
		api.fetchArticle(id)
			.then(res => {
				setArticle(res.data);
			})
			.catch(err => console.log(err));
	})

	const deleteConfirm = (e) => {
		e.preventDefault();
		setIsConfirmDelete(true);
	}

	const onConfirm = (del) => {
		if (del) {
			api.deleteArticle(article.article_id)
				.then(res => history.push("/dash"))
				.catch(err => console.log(err));
		}

		else {
			setIsConfirmDelete(false);
		}
	}

	return (
		<>
			<div className="dash-article-full">

				<div className="dash-article-content">
					<a href={`/dash/article/${article.article_id}`} className="article-card-link">
						<h5>{article.title}</h5>
					</a>
					<p>{article.story}</p>

					<LoadingIndicator fill/>
				</div>

				<div className="dash-article-buttons">
					{!isConfirmDelete &&
						<img className="btn-delete"  src={deleteIcon} alt="delete" onClick={deleteConfirm} />
					}

					{isConfirmDelete &&
						<>
						<img className="btn-back" src={backIcon} alt="cancel" onClick={() => onConfirm(false)} />
						<img className="btn-delete" src={deleteIcon} alt="delete" onClick={() => onConfirm(true)} />
						</>
					}
				</div>

				<div className="dash-article-sidebar">
					<p>article link</p>
					<p>article link</p>
					<p>article link</p>
				</div>

			</div>
		</>
	);
}

export default Article;
