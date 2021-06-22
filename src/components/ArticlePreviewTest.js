import React, { useState } from 'react';
import styled from 'styled-components';
import LinkPreviewCard from './LinkPreviewCard';

const ArticlePreviewTest = () => {
	const [url, setUrl] = useState("");
	const [urlInput, setUrlInput] = useState("");
	const [updateDelay, setUpdateDelay] = useState(null);

	const handleChange = e => {
		setUrlInput(e.target.value);

		clearTimeout(updateDelay);

		const to = setTimeout(() => {
			setUrl(urlInput);
		}, 1500);

		setUpdateDelay(to);
	}

	return (
		<>
			<input type="text" name="url" value={urlInput} onChange={handleChange} style={{ width: "30em" }} />
			<LinkPreviewCard url={url} />
		</>
	);
}

export default ArticlePreviewTest;
