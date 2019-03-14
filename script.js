(function(){
'use strict';

const filmsContainer = document.querySelector('.films-list');
const mainFormField = document.querySelector('.form-control');
const apiKey = 'apikey=d7d141b5';


function loadFilms(newInput) {
    const xhr = new XMLHttpRequest();

 
    xhr.open('GET', `http://www.omdbapi.com/?t=${newInput}&${apiKey}`, true);

    xhr.onload = function(){
        if(this.status == 200){
           let films = JSON.parse(this.responseText);
           console.log(this.responseText);
           let output = '';

           for(let i in films) {
            output += `<div class="card">
            <img src="${films.Poster}" class="card-img-top" />
            <div class="card-body">
            <ul>
            <li class="card-title">${films.Title}</li>
            <li style="margin-bottom:1rem;">${films.Year}</li>
            <li>${films.Plot}</li>
            </ul>
            </div>
            </div>`

            filmsContainer.innerHTML = output;
                }
                
           }
    }

    xhr.onerror = function () {
        console.log("** An error occurred during the transaction");
      };

    xhr.send();
}


document.querySelector('.input-group').addEventListener('submit', function(e){
    const newInput = mainFormField.value;

    filmsContainer.innerHTML = `<p>${loadFilms(newInput)}</p>`

    e.preventDefault();

});


})();

/* 
put searchbar on page
get searchbar value in js
enter searchbar value as query in omdb db
output omdb value as response to query

--- show film title, year, actors, director, poster

*/


  /* xhr.open('GET', 'http://www.omdbapi.com/?t=The%20Walking%20Dead&season=9&apikey=d7d141b5', true);  */