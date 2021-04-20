// import Search class
import Search from './models/Search';
import {
    elements
} from './base';
import * as searcView from './views/searcView';
import * as movieView from './views/movieView';
import Movie from './models/Movie';

const state = {};

// searchController
const searchController = async () => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        state.search = new Search(keyword);
        await state.search.getResults();
        searcView.clearInput();
        searcView.clearResults();
        searcView.displayResult(state.search.data);

    } else {
        alert('Please fill in the blank');
    }
}

elements.searchForm.addEventListener('submit', ((e) => {
    searchController();
    e.preventDefault();
}));

// Movie Controller

const movieController = async () => {
    let id = window.location.hash.replace('#', '');
    if (id) {
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }

}

window.addEventListener('hashchange', movieController);