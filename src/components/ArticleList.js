
import React from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchArticles } from '../api';
// import { categories } from './AddArticle';
// import { axiosWithAuth } from '../utils/axiosWithAuth'

// import { ApiContext } from '../App';
import ArticleCard from './ArticleCard';
// import FavouriteArticleList from './FavouriteArticleList';

import { categories } from './SaveArticle';

/**
 * Renders a list of articles
 * (Will no longer fetch article - they need to be provided by the parent component)
 *
 * @param {*} props.articles - an array of article data
 */
const ArticleList = props => {
	//const [articles, setArticles] = useState([]);
	//const [favourites, setFavourites] = useState([]);
	//const { api } = useContext(ApiContext);
	const { articles } = props;

// 	const loadArticles = () => {
// 		api.fetchArticles()
// 			.then(res => {
// 				setArticles(res.data);
// 			})
// 			.catch(err => console.log);
//  }

	// useEffect(() => {
	// 	loadArticles();
	// })

	// const { article_id } = useParams();

    // useEffect(()=>{
    //     axiosWithAuth().get(`/article/${article_id}`)
    //         .then(res=>{
    //             setFavourites(res.data);
    //         })
    //         .catch(err=>{
    //             console.log(err.response);
    //         })
    // }, [article_id]);

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
			{/* <section className="articleDashboard"> */}

			<div className="dash-article-list">
				{articles && articles.map((art) => <ArticleCard art={art} key={art.article_id}/>)}
			</div>

			{/* <div className='favouriteArticles'>
			<FavouriteArticleList favourites={favourites}/>
			</div>
			</section> */}
		</>
	);
}

export default ArticleList;
