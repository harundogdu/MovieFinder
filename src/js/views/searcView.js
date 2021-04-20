import {
    elements
} from '../base';

export const displayResult = data => {
    console.log(data.results[0]);
    data.results.forEach(item => {
        let html = `<p>${item.title}</p>`;
        elements.searchResults.insertAdjacentHTML('beforeend', html);
    });
}