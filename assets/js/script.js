var getCurrencyData = function () {
    var apiUrl = 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&apiKey=56ae4aece0ac2ac705cf';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };

  getCurrencyData();


  var getGameData= function () {
    var apiUrl = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=10';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };

  getGameData();
