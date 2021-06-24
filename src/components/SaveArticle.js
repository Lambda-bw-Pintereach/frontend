import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveArticle } from '../api';
import { isValidUrl } from '../utils/helpers';
import fetchPreview from '../utils/linkPreview';
import SaveArticleContainer from './SaveArticle.style';
import LinkPreviewCard from './LinkPreviewCard';
import LoadingIndicator from './LoadingIndicator';

const emptyFormValues = {
	title: "",
	preview: "",
	story: "",
	category: "",
	url: "",
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

const SaveArticle = props => {
	const [formValues, setFormValues] = useState(emptyFormValues);
	const [linkPreview, setLinkPreview] = useState(null);
	const [previewTimeout, setPreviewTimeout] = useState(null);
	const [error, setError] = useState("");

	const history = useHistory();

	const handleChange = (e) => {
		const updFormValues = {
			...formValues,
			[e.target.name]: e.target.value
		};

		setFormValues(updFormValues);

		if (e.target.name === "url") {
			previewUrl(e.target.value);
		}
	};

	const previewUrl = (url) => {
		if (isValidUrl(url)) {
			clearTimeout(previewTimeout);
			const to = setTimeout(() => {
				fetchPreview(url)
					.then(preview => {
						setPreviewTimeout(null);
						setLinkPreview(preview);
						setFormValues({
							...formValues,
							title: preview.title,
							preview: preview.description,
							story: "(...)",
							url: url
						})
					})
					.catch(err => {
						setPreviewTimeout(null);
						console.log(err)
					});
			}, 1000);
			setPreviewTimeout(to);
		}
	}

	const handleSubmit = e => {
		e.preventDefault();

		const article = {
			title: formValues.title ? formValues.title : "(no title)",
			preview: formValues.preview ? formValues.preview : "(no preview)",
			story: formValues.story ? formValues.story : "(no story content)",
			category: formValues.category,
			url: formValues.url
		}

		saveArticle(article)
			.then(res => {
				history.push('/dash')
			})
			.catch(err => {
				console.log(err);
				setError("An error occured. Please refresh and try again.")
			});
	}

	return (
		<>
			<SaveArticleContainer>
				<h3>Add Article</h3>

					<form onSubmit={handleSubmit}>
						<label>
							<span>Url (optional)</span>
							<input
								id="add-article-url"
								name="url"
								value={formValues.url}
								onChange={handleChange} />
						</label>

						{previewTimeout &&
							"(fetching preview...)"
						}

						{linkPreview &&
							<div className="add-article-link-preview">
								<LinkPreviewCard preview={linkPreview} />
							</div>
						}


						{!linkPreview &&
							<>
								<label>
									<span>Title</span>
									<input
										name="title"
										type="text"
										value={formValues.title}
										onChange={handleChange} />
								</label>

								<label>
									<span>Preview</span>
									<input
										name="preview"
										type="textarea"
										value={formValues.preview}
										onChange={handleChange} />
								</label>

								<label>
									<span>Story</span>
									<textarea
										name="story"
										rows={5}
										value={formValues.story}
										onChange={handleChange}
										disabled={formValues.url && linkPreview}
									/>
								</label>
							</>
						}

						<span>Category:</span>
						<div className="cat-list">
							{categories.map((cat, i) => {
								return (
									<label key={i}>
										<input
											id={`cat-${cat}`}
											value={cat}
											type="radio"
											name="category"
											checked={formValues.category === cat}
											onChange={handleChange} />
										{cat}
									</label>
								);
							})}
					</div>

					{error &&
						<div className="error-msg-box">{error}</div>
					}

						<div>
						<input type="submit" value="Submit" disabled={error}/>
						</div>
					</form>

				<LoadingIndicator color="white" fill/>

			</SaveArticleContainer>
		</>
	);
}

export default SaveArticle;
