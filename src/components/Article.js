import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchArticle } from '../api';
import { deleteArticle } from '../api';
import deleteIcon from '../images/trash.svg';
import backIcon from '../images/undo-arrow.svg';
import questionIcon from '../images/question-mark.svg';

const Article = props => {
	const { id } = useParams();
	const history = useHistory();
	const [article, setArticle] = useState({
		title: "",
		preview: "",
		story: "",
		category: [],
		article_id: 0
	});
	const [isConfirmDelete, setIsConfirmDelete] = useState(false);

	useEffect(() => {
		fetchArticle(id)
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
			deleteArticle(article.article_id)
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
