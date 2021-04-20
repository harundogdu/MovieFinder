// import Search class
import Search from './models/Search';
import {
    elements
} from './base';
import * as searcView from './views/searcView';

const state = {};

// searchController
const searchController = async () => {
    const keyword = elements.searchInput.value;
    state.search = new Search(keyword);

    await state.search.getResults();
    searcView.displayResult(state.search.data);

    if (keyword) {

    } else {
        alert('Please fill in the blank');
    }

}

// form submit event
elements.searchForm.addEventListener('submit', ((e) => {
    searchController();
    e.preventDefault();
}));