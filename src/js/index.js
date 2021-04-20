// import Search class
import Search from './models/Search';
import {
    elements,
    renderLoader,
    closeLoader
} from './base';
import * as searcView from './views/searcView';
import * as movieView from './views/movieView';
import Movie from './models/Movie';

const state = {};

// searchController
const searchController = async () => {
    const keyword = elements.searchInput.value;
    if (keyword) {
        searcView.clearInput();
        searcView.clearResults();
        state.search = new Search(keyword);
        renderLoader(elements.movieListContainer);

        await state.search.getResults();

        setTimeout(() => {
            closeLoader(elements.movieListContainer);
        }, 500);

        setTimeout(() => {
            searcView.displayResult(state.search.data);
            searcView.displayPreface(keyword, state.search.data);
        }, 500);


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
        renderLoader(elements.movieDetailsContainer);
        await state.movie.getMovie();

        setTimeout(() => {
            closeLoader(elements.movieDetailsContainer);
        }, 500);

       setTimeout(() => {
        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
       }, 500);
    }

}

window.addEventListener('hashchange', movieController);
elements.closeMovieDetails.addEventListener('click', movieView.closeMovieDetails);