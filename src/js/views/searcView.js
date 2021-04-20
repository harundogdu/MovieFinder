import {
    elements
} from '../base';

export const clearInput = () => {
    elements.searchInput.value = "";
}
export const clearResults = () => {
    elements.movieList.innerHTML = "";
}

export const displayPreface = ((keyword, data) => {
    let html = `<p class="card-title">found <span class="text-danger">${data.total_results}</span> results matching the <span class="text-success">${keyword}</span> you searched for.</p>`;
    elements.moviePreface.innerHTML = html;
});

export const displayResult = data => {
    let html;
    if (data.results == 0) {
        html = `<p class="lead text-danger font-weight-bold text-center">movie not found!</p>`;
        elements.movieListContainer.classList.add('d-block');
        elements.movieList.insertAdjacentHTML('beforeend', html);
    } else {
        data.results.forEach(item => {
            html = `
            <li class="media my-3">
                <img src="https://www.themoviedb.org/t/p/w300/${item.backdrop_path}" onerror="this.onerror=null;this.src='https://via.placeholder.com/300x169';"  class="mr-3" alt="${item.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1"><a href="#${item.id}">${item.title}</a> | <span class="badge badge-danger">${item.vote_average}</span></h5>
                    <p class="card-text">${item.overview}</p>               
                    <h6 class="mt-0 mb-1">${item.release_date}</h6>
                </div>
            </li>
        `;
            elements.movieListContainer.classList.add('d-block');
            elements.movieList.insertAdjacentHTML('beforeend', html);
        });
    }
}