<<<<<<< Updated upstream

const rowContainer = document.getElementById("row-container");

  var getGameData= function () {
    var apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          
          response.json().then(function (data) {
            // console.log(data);

            var apiUrl = 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=56ae4aece0ac2ac705cf';
  
            fetch(apiUrl)
              .then(function (response) {
        
                  response.json().then(function (data2) {
                    console.log(data2.USD_EUR);





            //loop through each array item
            for (i=0; i < data.length; i++) {
              //create html for game cards
              
              const gameRow = document.createElement("div")
              gameRow.setAttribute("class","level");
              //column  class
              gameRow.classList.add("column");
              gameRow.classList.add("level-" + i)

              const gameCard = document.createElement("div");
              gameCard.setAttribute("class", "gameCard");
              const gameTitle = document.createElement("h2");
              const reviewLink = document.createElement("a");
              const thumbNail = document.createElement("img");
              const priceDiv = document.createElement("div");
              const priceUSD = document.createElement("p");
              const priceEUR = document.createElement("p");
              const rating = document.createElement("p");
              const buildMetaLink = "https://www.metacritic.com" + data[i].metacriticLink;

              //populate response data into these elements
              reviewLink.innerHTML = data[i].title;
              reviewLink.setAttribute("href", buildMetaLink);
              reviewLink.setAttribute("target", "_blank");
              let currentThumb = data[i].thumb;
              thumbNail.setAttribute("src", currentThumb);
              priceUSD.innerHTML = "$" + data[i].salePrice;
              priceEUR.innerHTML = "€" + (data[i].salePrice * data2.USD_EUR).toFixed(2);
              rating.innerHTML = "Steam Rating: " + data[i].steamRatingPercent + "%";
              
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
              gameTitle.append(reviewLink);
              gameCard.append(thumbNail);
              gameCard.append(priceDiv);
              priceDiv.append(priceUSD);
              priceDiv.append(priceEUR);
              gameCard.append(rating);
              $(".column-" + i).append(gameRow);
              gameCard.classList.add("has-background-grey-lighter");
              $("h2").addClass("title is-4");
              $("p").addClass("is-size-5");
              $("p").addClass("has-text-weight-semibold");

=======
var dealData = []
var filteredData = []
var getCurrencyData = function () {
  var apiUrl = 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=56ae4aece0ac2ac705cf';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
      

        });
      } else {

      }
    })
    .catch(function (error) {

    });
};

// getCurrencyData();

const rowContainer = document.getElementById("sacrifice");

var getGameData = function () {
  var apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&';

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {

        response.json().then(function (data) {
          
          dealData = data 
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
            const thumbNail = document.createElement("img");
            const priceDiv = document.createElement("div");
            const priceUSD = document.createElement("p");
            const priceEUR = document.createElement("p");
            const rating = document.createElement("p");


            //populate response data into these elements
            gameTitle.innerHTML = dealData[i].title;
            let currentThumb = dealData[i].thumb;
            thumbNail.setAttribute("src", currentThumb);
            priceUSD.innerHTML = "$" + dealData[i].salePrice;
            priceEUR.innerHTML = "Euro placeholder"
            rating.innerHTML = "Steam Rating: " + dealData[i].steamRatingPercent + "%";
>>>>>>> Stashed changes

            //column formatting
            const row = document.createElement("div");
            if (i % 3 === 0) {
              row.classList.add("columns");
              row.classList.add("column-" + i);
              row.classList.add("column-" + (i + 1));
              row.classList.add("column-" + (i + 2));
              rowContainer.append(row)
            }
          });

        });

            $(".column-" + i).append($(".level-" + i));
            gameRow.append(gameCard);
            gameCard.append(gameTitle);
            gameCard.append(thumbNail);
            gameCard.append(priceDiv);
            priceDiv.append(priceUSD);
            priceDiv.append(priceEUR);
            gameCard.append(rating);
            $(".column-" + i).append(gameRow);

          }

        });
      } else {

      }
    })
    .catch(function (error) {

    });
};

getGameData();
//formatting search text for internal Name look up


// searchBar = searchBar.replace(/\s/g, '');
var gameSearch = function () {
  var searchBar = document.getElementById("searchBar")
var searchValue = searchBar.value;

var capitalizedValue = searchValue.toUpperCase();

console.log(searchBar.value);

console.log(dealData)

rowContainer.remove()

var newRowContainer= document.createElement("div")
newRowContainer.classList.add('container')
newRowContainer.setAttribute('id','sacrifice')
filteredData = dealData.filter(deal => searchBar.value ==deal.internalName)
console.log(filteredData)

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
  const thumbNail = document.createElement("img");
  const priceDiv = document.createElement("div");
  const priceUSD = document.createElement("p");
  const priceEUR = document.createElement("p");
  const rating = document.createElement("p");


  //populate response data into these elements
  gameTitle.innerHTML = filteredData[i].title;
  let currentThumb = filteredData[i].thumb;
  thumbNail.setAttribute("src", currentThumb);
  priceUSD.innerHTML = "$" + filteredData[i].salePrice;
  priceEUR.innerHTML = "Euro placeholder"
  rating.innerHTML = "Steam Rating: " + filteredData[i].steamRatingPercent + "%";

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
  gameCard.append(thumbNail);
  gameCard.append(priceDiv);
  priceDiv.append(priceUSD);
  priceDiv.append(priceEUR);
  gameCard.append(rating);
  $(".column-" + i).append(gameRow);

}
}

//adds the search bar 
document.getElementById("searchButton");
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', gameSearch)
