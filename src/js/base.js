export const elements = {
    searchForm: document.getElementById('form-search'),
    searchInput: document.getElementById('text-keyword'),
    movieList: document.getElementById('movieList'),
    movieListContainer: document.getElementById('movieListContainer'),
    movieDetails: document.getElementById('movieDetails'),
    movieDetailsContainer: document.getElementById('movieDetailsContainer'),
    closeMovieDetails: document.getElementById('closeMovieDetails'),
    moviePreface: document.getElementById('moviePreface')
}

export const renderLoader = parent => {
    const loader = `<div class="loader"></div>`;
    parent.insertAdjacentHTML('beforebegin', loader);
}

export const closeLoader = parent => {
    const loader = parent.previousSibling;

    if (loader) {
        loader.parentNode.removeChild(loader);
    }
}