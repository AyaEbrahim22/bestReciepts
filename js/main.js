


var links = document.querySelectorAll('.nav-link')

for( var i = 0; i < links.length ; i++){
    links[i].addEventListener('click', function(e){
      
        getData(e.target.innerHTML)
    })
}

var data = [];

getData('pizza');

function getData(meal) {
    var myHttp = new XMLHttpRequest(); //instance object

    myHttp.open('GET', `https://forkify-api.herokuapp.com/api/search?q=${meal}`); //establish connection

    myHttp.send(); //send request

    myHttp.addEventListener('readystatechange', function () {
        if (myHttp.readyState == 4) {
            data = JSON.parse(myHttp.response).recipes;
            displayData();
        }
    })
}

function displayData() {
    var cols = '';

    for (var i = 0; i < data.length; i++) {
        cols += `
        <div class="col-md-4 text-center">
        <div class="card h-100">
            <img src="${data[i].image_url}" class="card-img-top" height="200px" alt="img">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <a href="${data[i].source_url}" target="_blank" class="btn btn-warning">Source</a>
            </div>
          </div>

    </div>
        `
    }

    document.getElementById('rowData').innerHTML = cols;
}
