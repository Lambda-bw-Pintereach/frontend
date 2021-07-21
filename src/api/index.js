
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const API_URL = 'https://blooming-lowlands-48493.herokuapp.com/api'

const urls = {
	login: `${API_URL}/auth/login`,
	register: `${API_URL}/auth/register`,
	articles: `${API_URL}/articles`,
	article: (article_id) => `${API_URL}/article/${article_id}`,
}

const PintereachApi = () => {
	console.log("PINTEREACH API CALL")

	const api = {};

	api._setIsLoading = () => { };
	api._setArticles = () => { };

	api.init = function (setIsLoading, setArticles) {
		api._setIsLoading = setIsLoading;
		api._setArticles = setArticles;
	}

	api.login = function (user) {
		return this._wrapCall(() => axios.post(urls.login, user))
			.then(res => {
				localStorage.setItem("token", res.data.token);
				return res;
			});
	}

	api.signUp = function (user) {
		return this._wrapCall(() => axios.post(urls.register, user));
	}

	/**
	 * Fetches the articles list from the api
	 * Consumers should use:
	 * {api, articles } = useContext(ApiContext))
	 * api.refreshArticles()
	 * @returns the HTTP response object
	 */
	api.fetchArticles = function () {
		return this._wrapCall(() => axiosWithAuth().get(urls.articles));
	};

	api.refreshArticles = function () {
		return this._wrapCall(() => {
			return axiosWithAuth().get(urls.articles)
				.then(res => {
					this._setArticles(res.data);
					return res;
				});
		});
	};

	api.saveArticle = function (article) {
		return this._wrapCall(() => axiosWithAuth().post(urls.articles, article).then((res) => this.refreshArticles()));
	}

	api.fetchArticle = function (article_id) {
		return this._wrapCall(() => axiosWithAuth().get(urls.article(article_id)));
	}

	api.deleteArticle = function (article_id) {
		return this._wrapCall(() => axiosWithAuth().delete(urls.article(article_id)).then((res) => this.refreshArticles()));
	}

	api._wrapCall = function (apiCall) {
		return new Promise(async (resolve, reject) => {
			this._setIsLoading(true);

			try {
				const response = await apiCall();
				resolve(response);
			}

			catch (error) {
				reject(error);
			}

			finally {
				this._setIsLoading(false);
			}
		});
	};

	return api;
}

/**
 * Only App.js should be importing this!
 * Any other component should be using useContext(ApiContext)!
 *
 *  @type {*} */
const api = PintereachApi();

export default api;
