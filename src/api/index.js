
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";


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
		return this._wrapCall(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/login', user))
			.then(res => {
				localStorage.setItem("token", res.data.token);
				return res;
			});
	}

	api.signUp = function (user) {
		return this._wrapCall(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/register', user));
	}

	/**
	 * Fetches the articles list from the api
	 * Consumers should use:
	 * {api, articles } = useContext(ApiContext))
	 * api.refreshArticles()
	 * @returns the HTTP response object
	 */
	api.fetchArticles = function () {
		return this._wrapCall(() => axiosWithAuth().get("/articles"));
	};

	api.refreshArticles = function () {
		return this._wrapCall(() => {
			return axiosWithAuth().get("/articles")
				.then(res => {
					this._setArticles(res.data);
					return res;
				});
		});
	};

	api.saveArticle = function (article) {
		return this._wrapCall(() => axiosWithAuth().post("/article", article));
	}

	api.fetchArticle = function (article_id) {
		return this._wrapCall(() => axiosWithAuth().get(`article/${article_id}`));
	}

	api.deleteArticle = function (article_id) {
		return this._wrapCall(() => axiosWithAuth().delete(`article/${article_id}`));
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
