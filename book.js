const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data =>displaySearchResult(data.docs));
}


const displaySearchResult =docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent='' ;
    const totalbook=document.getElementById('serach-found');
    totalbook.innerHTML=`
    <h1>${docs.length} result are found</h1>`;

    console.log(docs.length);

    docs.forEach(doc=> {
        const img= `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`

      console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card h-100">
    <img src="${img}"  class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-title">Book name: ${doc.title}</h3>
        <h4 class="card-title" Author name:${doc.author_name}</h4>
        <h5 class="card-title"> publisher:${doc.publisher[0]}</h5>
        <h5 class="card-title">First published: ${doc.publish_year}</h5>
        <p class="card-text"></p>
     </div>
 </div>  `;
     searchResult.appendChild(div);
    console.log(div);
    });
 };

