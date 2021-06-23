import React from 'react';
import { useParams } from 'react-router-dom';

const Article = props => {
	const { id } = useParams();
	return (
		<>
			<div>
				You can pretend there is an article here. (id: {id})
			</div>
		</>
	);
}

export default Article;
