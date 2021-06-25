import React, { useContext, useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';

import DashContainer from './Dash.style';

import SaveArticle from './SaveArticle';
import ArticleList from './ArticleList';
import Article from './Article';
import { ApiContext } from '../App';


const Dash = (props) => {
	const { api, articles } = useContext(ApiContext);
	const history = useHistory();

	const logOut = () => {
		localStorage.removeItem("token");
		history.push('/');
	};

	useEffect(() => {
		api.refreshArticles();
	}, [api]);

	return (
		<DashContainer>
			<div className="dash-background"></div>

			<div className="dash-header">
				<h1>Pintereach</h1>
				<nav>
					<Link to="/dash">Home</Link>
					<Link to="/dash/savearticle">Add Article</Link>
					<Link to="/" onClick={logOut}>LogOut</Link>
				</nav>
			</div>

			<div className="dash-content">
				<Switch>

					<Route path='/dash' exact>
						<ArticleList articles={articles} />
					</Route>

					<Route path='/dash/savearticle' exact>
						<SaveArticle />
					</Route>

					<Route path='/dash/article/:id' exact>
						<Article />
					</Route>

				</Switch>
			</div>

		</DashContainer>
	)
}

export default Dash;
