import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMetadata } from 'page-metadata-parser';
import domino from 'domino';

const ArticlePreview = props => {
	const { url } = props;
	const [md, setMd] = useState({})

	useEffect(() => {
		const getMeta = async (url) => {
			const response = await axios.get(url);
			const html = response.data;
			const doc = domino.createWindow(html).document;
			const metadata = getMetadata(doc, url);

			return metadata;
		}

		getMeta(url).then(md => setMd(md)).catch(err => console.log(err));
	}, [url])

	return (
		<>
			<ArticlePreviewContainer>
				{url}
				<input type="textarea" value={JSON.stringify(md, null, "  ").replace(/,/, ",\r\n")} />


			</ArticlePreviewContainer>
		</>
	)
}

const ArticlePreviewContainer = styled.div`
	width: 30em;
	height: 20em;
	background-color: #00000022;
	border-color: 2px black solid;
	position: relative;

	input {
		display: block;
		resize: both;
		width: 40em;
		height: 40em;
	}
`;

export default ArticlePreview;
