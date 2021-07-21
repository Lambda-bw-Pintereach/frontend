import React, { useState } from 'react';
import styled from 'styled-components';
import LinkPreviewCard from './link-preview-card';

const ArticlePreviewTest = () => {
	const [url, setUrl] = useState("");
	const [urlInput, setUrlInput] = useState("");

	const handleChange = e => {
		setUrlInput(e.target.value);
	}

	const handleClick = e => {
		e.preventDefault();
		setUrl(urlInput);
	}

	return (
		<>
			<input type="textarea" name="url" value={urlInput} onChange={handleChange} style={{ width: "40em" }} />
			<button onClick={handleClick}>Load</button>
			<LinkPreviewCard url={url} />
		</>
	);
}

export default ArticlePreviewTest;
