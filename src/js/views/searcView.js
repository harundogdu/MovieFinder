import {
    elements
} from '../base';

export const clearInput = () => {
    elements.searchInput.value = "";
}
export const clearResults = () => {
    elements.searchResults.innerHTML = "";
}

export const displayResult = data => {
    console.log(data.results[0]);
    data.results.forEach(item => {
        let html = `
        <li class="media my-3">
            <img src="https://www.themoviedb.org/t/p/w300/${item.backdrop_path}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x169';"  class="mr-3" alt="${item.title}">
            <div class="media-body">
                <h5 class="mt-0 mb-1">${item.title} | <span class="badge badge-danger">${item.vote_average}</span></h5>
                <p class="card-text">${item.overview}</p>               
                <h6 class="mt-0 mb-1">${item.release_date}</h6>
            </div>
        </li>
    `;
        elements.searchResults.insertAdjacentHTML('beforeend', html);
    });
}