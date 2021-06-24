import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteArticle } from '../api';
import Loader from 'react-spinners/PuffLoader';
import theme from '../style/theme';

const ArticleCard = props => {
	const { art, loadArticles } = props;
	const [isConfirmDelete, setIsConfirmDelete] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const promptConfirm = () => {
		setIsConfirmDelete(true);
	}

	const style = {
		opacity: isLoading ? "75%" : "100%"
	}

	const onConfirm = (del) => {
		if (del) {
			setIsLoading(true);
			deleteArticle(art.article_id)
				.then(res => loadArticles())
				.catch(err => console.log(err));
		}

		else {
			setIsConfirmDelete(false);
		}
	}

	return (
		<div className="dash-article-card" style={style}>

			{isLoading &&
				<div className="loading-blur">
					<Loader color={theme.blueHigh} />
				</div>
			}

			<div className="dash-card-buttons">
				{!isConfirmDelete &&
					<button className="btn" onClick={() => promptConfirm()}>delete</button>
				}

				{isConfirmDelete &&
					<>
						<span>confirm?</span>
						<button className="btn-blue btn" onClick={() => onConfirm(false)}>no</button>
						<button className="btn-red btn" onClick={() => onConfirm(true)}>yes</button>
					</>
				}
			</div>

			<a href={`/dash/article/${art.article_id}`}>
				<h5>{art.title}</h5>
			</a>
			<p>{art.preview}</p>
			<p>{art.story}</p>
		</div >
	);
}

export default ArticleCard;
