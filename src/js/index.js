// import Search class
import Search from './models/Search';

const state = {};

// searchController
const searchController = async () => {
    const keyword = document.getElementById('text-keyword').value;
    state.search = new Search(keyword);

    await state.search.getResults();
    console.log(state.search.data);

    if (keyword) {

    } else {
        alert('Please fill in the blank');
    }

}

// form submit event
document.getElementById('form-search').addEventListener('submit', ((e) => {
    searchController();
    e.preventDefault();
}));