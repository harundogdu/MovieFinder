// api_key : c6884de1a155e9c43c354de9799bd5e4
// base : https://api.themoviedb.org/3
// query : https://api.themoviedb.org/3/search/movie?api_key=c6884de1a155e9c43c354de9799bd5e4&language=en-US&page=1&include_adult=false


// import Search class

import Search from './models/Search';

const search = new Search('abc');
search.getResults();