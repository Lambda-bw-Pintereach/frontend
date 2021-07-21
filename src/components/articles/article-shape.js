import PropTypes from 'prop-types';

const articleShape = PropTypes.shape({
	title: PropTypes.string,
	preview: PropTypes.string,
	story: PropTypes.string,
	category: PropTypes.string,
	url: PropTypes.string,
})

export default articleShape;
