
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export class PintereachApi {
	constructor(setIsLoading) {
		this._setIsLoading = setIsLoading;
	}

	login(user) {
		return this._wrap(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/login', user)
			.then(res => {
				localStorage.setItem("token", res.data.token);
				return res;
			}));
	}

	signUp(user) {
		return this._wrap(() => axios.post('https://lambda-ft-pintereach-05.herokuapp.com/api/auth/register', user));
	}

	fetchArticles() {
		return this._wrap(() => axiosWithAuth().get("/articles"));
	}

	saveArticle(article) {
		return this._wrap(() => axiosWithAuth().post("/article", article));
	}

	fetchArticle(article_id) {
		return this._wrap(() => axiosWithAuth().get(`article/${article_id}`));
	}

	deleteArticle(article_id) {
		return this._wrap(() => axiosWithAuth().delete(`article/${article_id}`));
	}

	_wrap(func) {
		this._setIsLoading(true);
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
}

export function fetchArticles() {
	return axiosWithAuth().get("/articles");
}

export function saveArticle(article) {
	return axiosWithAuth().post("/article", article);
}

export function fetchArticle(article_id) {
	return axiosWithAuth().get(`article/${article_id}`);
}

export function deleteArticle(article_id) {
	return axiosWithAuth().delete(`article/${article_id}`);
}
