
import axios from "axios";
import { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const PintereachApi = () => {
	console.log("PINTEREACH API CALL")

	const api = {};
	const [isLoading, setIsLoading] = useState(false);

	api._isLoading = isLoading;
	api._setIsLoading = setIsLoading;


	api.login = function (user) {
		return this._wrap(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/login', user)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				return res;
			}));
	}

	api.signUp = function (user) {
		return this._wrap(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/register', user));
	}

	api.fetchArticles = function () {
		return new Promise(async (resolve, reject) => {
			this._setIsLoading(true);

			try {
				const response = await axiosWithAuth().get("/articles");
				resolve(response.data);
			}

			catch (error) {
				reject(error);
			}

			finally {
				setIsLoading(false);
			}
		});
	};

	api.saveArticle = function (article) {
		return this._wrap(() => axiosWithAuth().post("/article", article));
	}

	api.fetchArticle = function (article_id) {
		return this._wrap(() => axiosWithAuth().get(`article/${article_id}`));
	}

	api.deleteArticle = function (article_id) {
		return this._wrap(() => axiosWithAuth().delete(`article/${article_id}`));
	}

	api._wrap = function (func) {
		this._setIsLoading(true);

		// return new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		func()
		// 			.then(res => {
		// 				this._setIsLoading(false);
		// 				resolve(res);
		// 			})
		// 			.catch(err => {
		// 				this._setIsLoading(false);
		// 				reject(err);
		// 			})
		// 	}, 1000);
		// });

		return func()
			.then(res => {
				this._setIsLoading(false);
				return res;
			})
			.catch(err => {
				this._setIsLoading(false);
				throw err;
			})
	}

	return api;
}

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
