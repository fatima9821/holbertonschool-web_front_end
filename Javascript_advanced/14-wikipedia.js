// Fonction qui crée un paragraphe avec le contenu passé en argument
function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

// Fonction qui récupère un article Wikipedia via XMLHttpRequest
function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const extract = pages[Object.keys(pages)[0]].extract;
      callback(extract); // Appel du callback passé (ici, createElement)
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

// Appel de queryWikipedia avec createElement comme fonction callback
queryWikipedia(createElement);

