import {
    elements
} from '../base';

export const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
export const closeMovieDetails = () => {
    elements.movieDetailsContainer.classList.remove('d-block');
}
export const displayMovie = data => {
    console.log(data);

    let genres = [];

    data.genres.forEach(genre => {
        genres.push(genre.name);
    });

    let html =
        `
    <div class="row">
        <div class="col-md-5">
            <img src="https://www.themoviedb.org/t/p/w342/${data.poster_path}"  class="mr-3" alt="${data.title}">
        </div>
        <div class="col-md-7">
            <h5 class="card-title">${data.title} | <span class="badge badge-danger">${data.vote_average}</h5>
            <p class="card-text">${data.overview}</p>
            <table class="table table-bordered">
                <tr>
                    <td>Release Date</td>
                    <td>${data.release_date}</td>
                </tr>
                <tr>
                <tr>
                    <td>Movie Popularity</td>
                    <td>${data.popularity}</td>
                </tr>
                    <td>Movie Revenue</td>
                    <td>${new Intl.NumberFormat('en-US',{style :'currency',currency:'USD'}).format(data.revenue)}</td>
                </tr>
                <tr>
                    <td>Movie Budget</td>
                    <td>${data.budget==0 ? "Unknow" : new Intl.NumberFormat('en-US',{style :'currency',currency:'USD'}).format(data.budget)}</td>
                </tr>
            </table>            
            <p><span class="text-danger font-weight-bold">Categories</span> `;

    genres.forEach(genre => {
        html += `<span class="p-2 badge badge-primary mx-1">${genre}</span>`;
    });

    html += `
            </p>
            <hr>
            <p>more details <a target="_blank" href="https://www.imdb.com/title/${data.imdb_id}" class="badge badge-warning p-1">IMDb<a></p> 
        </div>
    </div>
    `;

    elements.movieDetailsContainer.classList.add('d-block');
    elements.movieDetails.innerHTML = html;

}