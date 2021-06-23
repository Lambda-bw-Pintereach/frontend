import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addArticle } from '../api';
import AddArticleContainer from './AddArticle.style';

const emptyFormValues = {
	title: "",
	preview: "",
	story: "",
	category: [],
}

export const categories = [
	"tech",
	"politics",
	"entertainment",
	"sports",
	"local",
	"science",
	"health",
	"gossip",
	"react",
	"form design",
	"stuff",
	"and such"
]

const AddArticle = props => {

	const [formValues, setFormValues] = useState(emptyFormValues);
	const history = useHistory();

	const handleChange = (e) => {
		const updFormValues = {
			...formValues,
			[e.target.name]: e.target.value
		};

		setFormValues(updFormValues);
	};

	const handleCheck = (e) => {
		const categoryName = e.target.name.slice(4);
		const category = formValues.category;

		if (category.includes(categoryName))
			setFormValues({ ...formValues, category: category.filter(c => c !== categoryName) });
		else
			setFormValues({ ...formValues, category: [...category, categoryName] });
	}

	// {
	// 	"title": "new article",
	// 		"preview": "This is testing",
	// 			"story": "This testing is good",
	// 				"category": "fashion"
	// }
	const handleSubmit = e => {
		e.preventDefault();

		addArticle(formValues)
			.then(res => {
				console.log(res);
				history.push('/dash')
			})
			.catch(err => console.log(err));
	}

	return (
		<>
			<AddArticleContainer>
				<h3>Add Article</h3>
				<form onSubmit={handleSubmit}>
					<label>
						<span>Title</span>
						<input name="title" type="text" value={formValues.title} onChange={handleChange} />
					</label>
					<label>
						<span>Preview</span>
						<input name="preview" type="textarea" value={formValues.preview} onChange={handleChange} />
					</label>
					<label>
						<span>Story</span>
						<input name="story" type="textarea" value={formValues.story} onChange={handleChange} />
					</label>

					<span>Categories:</span>
					<div className="cat-list">
						{categories.map((cat,i) => {
							return (
								<label key={i}>
									<input name={`cat-${cat}`} type="checkbox" checked={formValues.category.includes(cat)} onChange={handleCheck}/>
									{cat}
								</label>
							);
						})}
					</div>
					<div>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</AddArticleContainer>
		</>
	);
}

export default AddArticle;

