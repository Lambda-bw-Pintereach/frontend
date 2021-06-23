import { axiosWithAuth } from "../utils/axiosWithAuth";


export function fetchArticles() {
	return axiosWithAuth().get("/articles");
}

export function addArticle(article) {
	return axiosWithAuth().post("/article", article);
}
