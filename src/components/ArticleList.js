import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import { fetchArticles } from '../api';
import { categories } from './AddArticle';
import FavouriteArticleList from './FavouriteArticleList';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const articles = [{
	id: 1,
	title: "Fake Title",
	preview: "What's the difference between preview and story?",
	story: "Nobody really has any idea. I think preview is like an excerpt?",
	category: "dummy",
}, {
	id: 2,
	title: "How to Write Fake Content",
	preview: "Lorem ipsum dollar thingy",
	story: "Abracadabra alakazam, zim da la zim da barbara",
	category: "dummy",
},
{
	id: 3,
	title: "Amazing Content",
	preview: "You have never read a more amazing article than this one right here",
	story: "Except it's a just a sample, and you will never see the full text! Tough beans.",
	category: "dummy",
}]

const ArticleList = props => {
	const [articles, setArticles] = useState([]);
	const [favourites, setFavourites] = useState([]);

	useEffect(() => {
		fetchArticles()
			.then(res => {
				setArticles(res.data);
			})
			.catch(err => console.log);
	})

	const { article_id } = useParams();

    useEffect(()=>{
        axiosWithAuth().get(`/article/${article_id}`)
            .then(res=>{
                setFavourites(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [article_id]);

	return (
		<>
		
			<div className="dash-section-header">
				<h3>Your Saved Articles:</h3>
				<select>
					{["show all", ...categories].map((cat, i) => {
						return (
							<option key={i}>{cat}</option>
						);
					})}
				</select>
			</div>
			<section className="articleDashboard">
			<div className="dash-article-list">
				{articles.map((art, i) => {
					return (
						<div className="dash-article-card" key={i}>
							<a href={`/dash/article/${art.id}`}>
								<h5>{art.title}</h5>
							</a>
							<p>{art.preview}</p>
							<p>{art.story}</p>
						</div>
					);
				})}
			</div>
			
			<div className='favouriteArticles'>
			<FavouriteArticleList favourites={favourites}/>
			</div>
			</section>
		</>
	);
}

export default ArticleList;
