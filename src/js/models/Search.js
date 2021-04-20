export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }
    async getResults() {
        const base_url = "https://api.themoviedb.org/3";
        const api_key = "c6884de1a155e9c43c354de9799bd5e4";

        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    }
}