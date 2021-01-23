var key = "4FzPxhj5oXEaJyCN1y3bvOk8eKhl5fAf";

var body = document.getElementsByTagName("BODY")[0];
var heading = document.createElement("h1");
heading.textContent = "THE PERTINENT TIMES";
heading.setAttribute("id", "h1")
body.appendChild(heading);

var navbar = document.createElement("ul");
var l1 = document.createElement("li");
l1.textContent = "HOME"
var l2 = document.createElement("li");
l2.textContent = "WORLD"
var l3 = document.createElement("li");
l3.textContent = "POLITICS"
var l4 = document.createElement("li");
l4.textContent = "MAGAZINE"
var l5 = document.createElement("li");
l5.textContent = "TECHNOLOGY"
var l6 = document.createElement("li");
l6.textContent = "SCIENCE"
var l7 = document.createElement("li");
l7.textContent = "HEALTH"
var l8 = document.createElement("li");
l8.textContent = "SPORTS"
var l9 = document.createElement("li");
l9.textContent = "ARTS"
var l10 = document.createElement("li");
l10.textContent = "FASHION"
var l11 = document.createElement("li");
l11.textContent = "FOOD"
var l12 = document.createElement("li");
l12.textContent = "TRAVEL"

body.appendChild(navbar);
navbar.appendChild(l1);
navbar.appendChild(l2);
navbar.appendChild(l3);
navbar.appendChild(l4);
navbar.appendChild(l5);
navbar.appendChild(l6);
navbar.appendChild(l7);
navbar.appendChild(l8);
navbar.appendChild(l9);
navbar.appendChild(l10);
navbar.appendChild(l11);
navbar.appendChild(l12);

var li = navbar.childNodes;
for (let i = 0; i < li.length; i++) {
    li[i].setAttribute('class', "nav");
}

var articleBOX = document.createElement("div");
body.appendChild(articleBOX);
articleBOX.setAttribute('class', 'box');

var navs = document.querySelectorAll(".nav");
for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function () {
        for (let i = 0; i < 3; i++) {
            articleBOX.innerHTML = "";
            displayArticles(this.textContent.toLowerCase(), i);
        }
    });
}


function displayArticles(q, i) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + q + "&api-key=" + key;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var articles = document.createElement("div");
            articleBOX.appendChild(articles);
            articles.setAttribute('class', 'articleBox');
            var title = document.createElement("p");
            title.textContent = q.charAt(0).toUpperCase() + q.slice(1);;
            title.setAttribute('id', 'text');
            articles.appendChild(title);
            var br = document.createElement("br");
            title.appendChild(br);
            var text = document.createTextNode(data.response.docs[i].headline.main);
            title.appendChild(text);
            var br = document.createElement("br");
            title.appendChild(br);
            var time = document.createTextNode(data.response.docs[i].pub_date);
            title.appendChild(time);
            var br = document.createElement("br");
            title.appendChild(br);
            var abs = document.createTextNode(data.response.docs[i].abstract);
            title.appendChild(abs);
            var image = document.createElement("img");
            image.setAttribute('src', "https://static01.nyt.com/" + data.response.docs[i].multimedia[0].url)
            articles.appendChild(image);
            var webURL = document.createElement("a");
            webURL.textContent = "Continue Reading";
            webURL.setAttribute('href', data.response.docs[i].web_url);
            articles.appendChild(webURL);
            var p = articles.childNodes;
            for (i = 0; i < p.length; i++) {
                p[i].setAttribute('class', "ps");
            }
            image.setAttribute('class', 'img');
        })
        .catch(function (error) {
            console.log(error);
        });

}