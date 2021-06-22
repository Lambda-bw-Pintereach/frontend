import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchPreview from '../util/linkPreview';

const emptyPreview = {
	title: "",
	description: "",
	image: "",
	url: ""
}

const LinkPreviewCard = props => {
	const { url } = props;
	const [preview, setPreview] = useState(emptyPreview);

	useEffect(() => {
		// this will cancel the update if the url isn't valid
		try {
			new URL(url);
		} catch (error) {
			console.log("bad url");
			return;
		}

		fetchPreview(url)
			.then(prev => setPreview(prev))
			.catch(err => console.log(err));

	}, [url])

	return (
		<>
			<ArticlePreviewContainer>
				{preview &&
					<>
						<div className="article-prev-image">
							<img src={preview.image} alt={preview.image} />
						</div>

						<div className="article-prev-info">
							<p>
								<span className="article-prev-site">{preview.site}</span>
							</p>

							<p>
								<span className="article-prev-title">{preview.title}</span>
							</p>

							<p>
								<span className="article-prev-desc">{preview.description}</span>
							</p>
						</div>
					</>
				}
			</ArticlePreviewContainer>
		</>
	)
}

const ArticlePreviewContainer = styled.div`
	width: 45em;
	background-color: #00000022;
	border: 2px black solid;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	text-align: left;

	.article-prev-image {
		width: 240px;
		height: 200px;
		flex-shrink: 0;
		margin: .2em;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.article-prev-info {
		padding: 0 1em;
	}

	.article-prev-site {
		font-size: 1.8em;
		font-weight: 500;
	}

	.article-prev-title {
		font-size: 1.4em;
		font-weight: 400;
	}

	.article-prev-desc {
		font-size: 1em;
		font-weight: 400;
	}

`;

function getMetaTitle(metadata) {
	const ogTitle = metadata.find(m => m.name === "og:title");
	if (ogTitle)
		return ogTitle.content;

	const appName = metadata.find(m => m.name === "application-name");
	if (appName)
		return appName.content;

	return "(no title)";
}

function getMetaDesc(metadata) {
}

function getMeta(metadata, names) {
	for (const name of names) {
		const match = metadata.find(m => m.name === name);
		if (match)
			return match.content;
	}

	return null;
}

const fetchMetaData = async (url) => {
	const response = await axios.get(`https://nameless-sierra-35621.herokuapp.com/api/meta?url=${url}`);
	const meta = response.data;

	return meta;
}

export default LinkPreviewCard;
