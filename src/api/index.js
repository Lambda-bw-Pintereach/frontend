
import axios from "axios";
import { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PintereachApi = () => {
	console.log("PINTEREACH API CALL")

	const api = {};
	//const [isLoading, setIsLoading] = useState(false);

	api._setIsLoading = () => { };

	api.init = function (setIsLoading) {
		api._setIsLoading = setIsLoading;
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

	api.fetchArticles = function () {
		return this._wrapCall(() => axiosWithAuth().get("/articles"));
		// return new Promise(async (resolve, reject) => {
		// 	this._setIsLoading(true);

		// 	try {
		// 		const response = await axiosWithAuth().get("/articles");
		// 		resolve(response.data);
		// 	}

		// 	catch (error) {
		// 		reject(error);
		// 	}

		// 	finally {
		// 		this._setIsLoading(false);
		// 	}
		// });
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

export const api = PintereachApi();
export default api;

// export function fetchArticles() {
// 	return axiosWithAuth().get("/articles");
// }

// export function saveArticle(article) {
// 	return axiosWithAuth().post("/article", article);
// }

// export function fetchArticle(article_id) {
// 	return axiosWithAuth().get(`article/${article_id}`);
// }

// export function deleteArticle(article_id) {
// 	return axiosWithAuth().delete(`article/${article_id}`);
// }
