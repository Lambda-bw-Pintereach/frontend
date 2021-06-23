import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from './AddArticle';
import DashContainer from './Dash.style';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const articles = [{
	title: "Fake Title",
	preview: "What's the difference between preview and story?",
	story: "Nobody really has any idea. I think preview is like an excerpt?",
	category: "dummy",
}, {
	title: "How to Write Fake Content",
	preview: "Lorem ipsum dollar thingy",
	story: "Abracadabra alakazam, zim da la zim da barbara",
	category: "dummy",
},
{
	title: "Amazing Content",
	preview: "You have never read a more amazing article than this one right here",
	story: "Except it's a just a sample, and you will never see the full text! Tough beans.",
	category: "dummy",
}]


const logOut = () => {
	axiosWithAuth().post('/logout')
	.then(()=> {
	  localStorage.removeItem("token");
	  window.location.href = "/";
	})
	.catch(err=> {
	  console.log(err);
	})
  };

const Dash = (props) => {
	return (
		<DashContainer>

			<div className="dash-background"></div>

			<div className="dash-header">
				<h1>pintereach</h1>
				<nav>
					<Link>home</Link>
					<Link>save article</Link>
					<Link>settings</Link>
					<Link onclick={logOut}>log out</Link>
				</nav>
			</div>


			<div className="dash-content">
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
				<div className="dash-article-list">
					{articles.map(art => {
						return (
							<div className="dash-article-card">
								<h5>{art.title}</h5>
								<p>{art.preview}</p>
								<p>{art.story}</p>
							</div>
						);
					})}
				</div>
			</div>


		</DashContainer>
	)
}

export default Dash;
