import React from 'react';
import { Link} from 'react-router-dom';

const FavouriteArticleList = (props) => {
    const { favourites } = props;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Articles</h5>
        {
            favourites.map(article=>{
                return <Link key={article.id} className="btn btn-light savedButton" to={`/dash/article//${article.id}`}>{article.title}</Link>
            })
        }
    </div>);
}

export default FavouriteArticleList;