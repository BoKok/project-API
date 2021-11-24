var getCurrencyData = function () {
    var apiUrl = 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=56ae4aece0ac2ac705cf';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            
          });
        } else {
          
        }
      })
      .catch(function (error) {
        
      });
  };

 // getCurrencyData();

const rowContainer = document.getElementById("row-container");

  var getGameData= function () {
    var apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          
          response.json().then(function (data) {
            console.log(data);
            //loop through each array item

            for (i=0; i < data.length; i++) {
              //create html for game cards
              const gameRow = document.createElement("div")
              gameRow.setAttribute("class","level");
              const gameCard = document.createElement("div");
              gameCard.setAttribute("class", "gameCard");
              const gameTitle = document.createElement("h2");
              const thumbNail = document.createElement("img");
              const priceDiv = document.createElement("div");
              const priceUSD = document.createElement("p");
              const priceEUR = document.createElement("p");
              const rating = document.createElement("p");

              //populate response data into these elements
              gameTitle.innerHTML = data[i].title;
              let currentThumb = data[i].thumb;
              thumbNail.setAttribute("src", currentThumb);
              priceUSD.innerHTML = "$" + data[i].salePrice;
              priceEUR.innerHTML = "Euro placeholder"
              rating.innerHTML = "Steam Rating: " + data[i].steamRatingPercent + "%";
              
              rowContainer.append(gameRow);
              gameRow.append(gameCard);
              gameCard.append(gameTitle);
              gameCard.append(thumbNail);
              gameCard.append(priceDiv);
              priceDiv.append(priceUSD);
              priceDiv.append(priceEUR);
              gameCard.append(rating);
            }

          });
        } else {
          
        }
      })
      .catch(function (error) {
        
      });
  };

  getGameData();
