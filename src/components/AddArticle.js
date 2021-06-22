import React, { useState } from 'react';
import AddArticleContainer from './AddArticle.style';

const emptyFormValues = {
	title: "",
	preview: "",
	story: "",
	category: [],
}

const categories = [
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

	return (
		<>
			<AddArticleContainer>
				<h3>Add Article</h3>
				<form>
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
						{categories.map((cat) => {
							return (
								<label>
									<input name={`cat-${cat}`} type="checkbox" checked={formValues.category.includes(cat)} onChange={handleCheck} />
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
			<div>
				{JSON.stringify(formValues)}
			</div>
		</>
	);
}

export default AddArticle;

