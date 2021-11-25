
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


            }
          });

        });

          });
        } else {
          
        }
      })
      .catch(function (error) {
        
      });
  };

  getGameData();
