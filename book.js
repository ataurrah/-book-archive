// input field
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value ='';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const error = document.getElementById('error-message');
    error.textContent = '';
    const totalbook = document.getElementById('serach-found');
    totalbook.textContent = '';
   

    // condition cheak 
    if (searchText === '') {
        error.innerHTML = `
        <h1> write a book name in  search box</h1>
    `;
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs));
    }
}
//display search result
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    const totalbook = document.getElementById('serach-found');
    totalbook.innerHTML = `
    <h1>${docs.length} result are found</h1>`;
    // cover image add
    docs.forEach(doc => {
        const img = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
    <img src="${img}"  class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-title">Book name: ${doc.title}</h3>
        <h4 class="card-title">Author name:${doc.author_name ? doc.author_name : `no name`}</h4>
        <h5 class="card-title"> Publisher:${doc.publisher ? doc.publisher : "not Found"}</h5>
        <h5 class="card-title">First published: ${doc.publish_year}</h5>
        <p class="card-text"></p>
     </div>
 </div>  `;
        searchResult.appendChild(div);
        console.log(div);
    });
};

