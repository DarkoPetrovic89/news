/**
 * Created by user on 2/7/2019.
 */
var xhr = new XMLHttpRequest();
var category;
// Setup our listener to process completed requests
xhr.onload = function () {
    var myObj , itemContainer = "";
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
        // What do when the request is successful
        myObj = JSON.parse(this.responseText);

       var news = myObj.articles;

        for (var x in news) {
            var title = news[x].title;
            var content = news[x].content;
            var urlForImage = news[x].urlToImage;
            var urlToNews = news[x].url;
            itemContainer += "<div class='imgHolder'><div><h2>" + title + "</h2></div><img class='newsImg' src="+ urlForImage +"><div><a href=" + urlToNews +">" + content + "</a></div></div>";
        }
        document.getElementById("itemHolder").innerHTML = itemContainer;

    } else {
        // What do when the request fails
        console.log('The request failed!');
    }

};
category = '';

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=rs&category=' + category +'&apiKey=aa4e7a35d3444485847c8838ca1be8f6');
xhr.send();

const items = document.querySelectorAll('header ul li');
for(const item of items){
    item.addEventListener('click' , setCategory);
}

function setCategory() {
    const categoryValue = this.id;
    category = categoryValue;
    callCategoryApi();
    markCategory();
    this.className = 'active';
}

function callCategoryApi(){
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=rs&category=' + category +'&apiKey=aa4e7a35d3444485847c8838ca1be8f6');
    xhr.send();
}

function markCategory() {
    for(const item of items){
        item.className = '';
    }
}