import React, { useState } from 'react';
import styled from 'styled-components';
import ArticlePreview from './ArticlePreview';

const ArticlePreviewTest = () => {
	const [url, setUrl] = useState("");

	const handleChange = e => {
		setUrl(e.target.value);
	}

	return (
		<>

			<input type="text" name="url" value={url} onChange={handleChange} />

			<ArticlePreview url={url} />

		</>
	);
}

export default ArticlePreviewTest;
