// association with static parent html container
const rowContainer = document.getElementById("row-container");

//global variables
var dealData = [];
var filteredData = [];
var currencyData = [];

var getGameData = function () {
  var apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {

        response.json().then(function (data) {
          
          dealData = data;

          var apiUrl = 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=56ae4aece0ac2ac705cf';

          fetch(apiUrl)
            .then(function (response) {

              response.json().then(function (data2) {
                currencyData = data2;


                //loop through each array item
                for (i = 0; i < dealData.length; i++) {
                  //create html for game cards

                  const gameRow = document.createElement("div")
                  gameRow.setAttribute("class", "level");
                  //column  class
                  gameRow.classList.add("column");
                  gameRow.classList.add("level-" + i)

                  const gameCard = document.createElement("div");
                  gameCard.setAttribute("class", "gameCard");
                  const gameTitle = document.createElement("h2");
                  const steamLink = document.createElement("a");
                  const thumbNail = document.createElement("img");
                  const priceDiv = document.createElement("div");
                  const priceUSD = document.createElement("p");
                  const priceEUR = document.createElement("p");
                  const rating = document.createElement("p");
                  const metaLink = document.createElement("a");
                  const buildMetaLink = "https://www.metacritic.com" + dealData[i].metacriticLink;
                  const buildSteamLink = "https://store.steampowered.com/app/" + dealData[i].steamAppID;

                  //populate response data into these elements
                  //steam links
                  steamLink.innerHTML = dealData[i].title;
                  steamLink.setAttribute("href", buildSteamLink);
                  steamLink.setAttribute("target", "_blank");
                  gameTitle.setAttribute("class", "noDecoration");
                  //Metacritic links
                  metaLink.innerHTML = "Metacritic Review";
                  metaLink.setAttribute("href", buildMetaLink);
                  metaLink.setAttribute("target", "_blank");
                  
                  let currentThumb = dealData[i].thumb;
                  thumbNail.setAttribute("src", currentThumb);
                  priceUSD.innerHTML = "$" + dealData[i].salePrice;
                  //convert USD to EUR using free currency converter API
                  priceEUR.innerHTML = "€" + (dealData[i].salePrice * currencyData.USD_EUR).toFixed(2);
                  rating.innerHTML = "Steam Rating: " + dealData[i].steamRatingPercent + "%";

                  //column formatting
                  const row = document.createElement("div");
                  if (i % 3 === 0) {
                    row.classList.add("columns");
                    row.classList.add("column-" + i);
                    row.classList.add("column-" + (i + 1));
                    row.classList.add("column-" + (i + 2));
                    rowContainer.append(row)
                  }

                  $(".column-" + i).append($(".level-" + i));
                  gameRow.append(gameCard);
                  gameCard.append(gameTitle);
                  gameTitle.append(steamLink);
                  gameCard.append(thumbNail);
                  gameCard.append(priceDiv);
                  priceDiv.append(priceUSD);
                  priceDiv.append(priceEUR);
                  gameCard.append(rating);
                  gameCard.append(metaLink);
                  $(".column-" + i).append(gameRow);
                  gameCard.classList.add("has-background-grey-lighter");
                  $("h2").addClass("title is-4");
                  $("p").addClass("is-size-5");
                  $("p").addClass("has-text-weight-semibold");

                }
              });

            });

        });
      }
    })


};

getGameData();

var gameSearch = function () {
  //search bar/btn setup with html and onclick event
  var searchBar = document.getElementById("searchBar")
  var searchValue = searchBar.value;

  // take deal data array and filter for objects based on title match and send those matches to the filteredData
  filteredData = dealData.filter(dealData => dealData.title.toLowerCase().includes(searchValue.toLowerCase()));

  //clear all html for game cards
  document.getElementById("row-container").remove();

  //rebuild the parent container dynamically
  var parentContainer = document.createElement("div");
  parentContainer.setAttribute("id", "row-container");
  parentContainer.classList.add("container");
  document.body.appendChild(parentContainer);

  if (filteredData.length === 0) {
    var noMatches = document.createElement("h3");
    noMatches.innerHTML = "Sorry, there are no deals that match your search. Try again!";
    parentContainer.append(noMatches);
  } else {
    //loop through each array item
    for (i = 0; i < filteredData.length; i++) {

      //create html for game cards
      const gameRow = document.createElement("div")
      gameRow.setAttribute("class", "level");
      //column  class
      gameRow.classList.add("column");
      gameRow.classList.add("level-" + i)

      const gameCard = document.createElement("div");
      gameCard.setAttribute("class", "gameCard");
      const gameTitle = document.createElement("h2");
      const steamLink = document.createElement("a");
      const thumbNail = document.createElement("img");
      const priceDiv = document.createElement("div");
      const priceUSD = document.createElement("p");
      const priceEUR = document.createElement("p");
      const rating = document.createElement("p");
      const metaLink = document.createElement("a");
      const buildMetaLink = "https://www.metacritic.com" + dealData[i].metacriticLink;
      const buildSteamLink = "https://store.steampowered.com/app/" + dealData[i].steamAppID;

      //populate response data into these elements
      //steam links
      steamLink.innerHTML = filteredData[i].title;
      steamLink.setAttribute("href", buildSteamLink);
      steamLink.setAttribute("target", "_blank");
      //Metacritic links
      metaLink.innerHTML = "Metacritic Review";
      metaLink.setAttribute("href", buildMetaLink);
      metaLink.setAttribute("target", "_blank");
      
      let currentThumb = filteredData[i].thumb;
      thumbNail.setAttribute("src", currentThumb);
      priceUSD.innerHTML = "$" + filteredData[i].salePrice;
      //convert USD to EUR using free currency converter API
      priceEUR.innerHTML = "€" + (filteredData[i].salePrice * currencyData.USD_EUR).toFixed(2);
      rating.innerHTML = "Steam Rating: " + filteredData[i].steamRatingPercent + "%";

      //column formatting
      const row = document.createElement("div");
      if (i % 3 === 0) {
        row.classList.add("columns");
        row.classList.add("column-" + i);
        row.classList.add("column-" + (i + 1));
        row.classList.add("column-" + (i + 2));
        parentContainer.append(row)
      }

      $(".column-" + i).append($(".level-" + i));
      gameRow.append(gameCard);
      gameCard.append(gameTitle);
      gameTitle.append(steamLink);
      gameCard.append(thumbNail);
      gameCard.append(priceDiv);
      priceDiv.append(priceUSD);
      priceDiv.append(priceEUR);
      gameCard.append(rating);
      gameCard.append(metaLink);
      $(".column-" + i).append(gameRow);
      gameCard.classList.add("has-background-grey-lighter");
      $("h2").addClass("title is-4");
      $("p").addClass("is-size-5");
      $("p").addClass("has-text-weight-semibold");

    }
  }
  //clear search bar after each search
  searchBar.value = "";
}
//brings user back to home page from search when Game Grab h1 is clicked
var refresh = function () {
  window.location.href = "index.html";
}

//search bar association
var searchButton = document.getElementById("searchButton");
//On click run the gameSearch function
searchButton.addEventListener('click', gameSearch);
//Or run the gameSearch Function if they click enter in the search box
searchBar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    gameSearch();
  }
})

//h1 association
var gameGrab = document.getElementById("logo");
gameGrab.addEventListener("click", refresh);