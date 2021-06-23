import React from 'react';
import { Link, Route, Switch, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import AddArticle, { categories } from './AddArticle';
import DashContainer from './Dash.style';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import ArticleList from './ArticleList';
import Article from './Article';





const Dash = (props) => {
	const history = useHistory();

	const logOut = () => {
		// axiosWithAuth().post('/logout')
		// 	.then(() => {
		// 		localStorage.removeItem("token");
		// 		history.push('/');
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	})

		localStorage.removeItem("token");
		history.push('/');
	};

	return (
		<DashContainer>

			<div className="dash-background"></div>

			<div className="dash-header">
				<h1>pintereach</h1>
				<nav>
					<Link to="/dash">home</Link>
					<Link to="/dash/addarticle">save article</Link>
					<Link to="/" onClick={logOut}>log out</Link>
				</nav>
			</div>


			<div className="dash-content">
				<Switch>
					<Route path='/dash' exact>
						<ArticleList />
					</Route>

					<Route path='/dash/addarticle' exact>
						<AddArticle />
					</Route>

					<Route path='/dash/article/:id' exact>
						<Article/>
					</Route>
				</Switch>
			</div>


		</DashContainer>
	)
}

export default Dash;
