import { axiosWithAuth } from "../utils/axiosWithAuth";


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
