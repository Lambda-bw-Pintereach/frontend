import axios from "axios";

/**
 *	Fetches preview info from the specified url
 *
 * @param {string} url
 * @return {Promise<{title: string,
 *  								 description: string,
 *									 image: string,
 *									 url: string,
 *									 site: string} | null>}
 */
const fetchPreview = async (url) => {
	try {
		new URL(url);
	} catch (error) {
		return null;
	}

	const metadata = await fetchMetaData(url);

	const title = findName(metadata, ["og:title", "application-name"])?.content ?? "";
	const description = findName(metadata, ["description", "og:description"])?.content ?? "";
	const image = findName(metadata, ["og:image"])?.content ?? "";
	const site = findName(metadata, ["og:site_name"])?.content ?? "";

	return { title, description, image, url, site };
}
export default fetchPreview;


/**
 * @typedef {Object} Meta
 * @property {string} name
 * @property {string} content
*/


/**
 * Fetches a list of meta tags from the specified url
 *
 * @param {string} url
 * @return {Meta[]}
 */
async function fetchMetaData(url) {
	const response = await axios.get(`https://nameless-sierra-35621.herokuapp.com/api/meta?url=${url}`);
	const meta = response.data;

	return meta;
}


/**
 * Returns the first metatag from list with a matching name
 *
 * @param {Meta[]} metadata - the array of metatags to search through
 * @param {string[]} names - an array of names to match on
 * @return {Meta}
 */
function findName(metadata, names) {
	for (const name of names) {
		const match = metadata.find(m => m.name === name);
		if (match)
			return match;
	}

	return null;
}
