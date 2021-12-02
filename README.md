# Game Grab
Designed and developed by Bo Kok, Brendan Ahearn, and Collin Beisel

![Game Grab Screenshot](https://github.com/collin-beisel-tm/game-grab/blob/main/assets/images/app-screenshot.PNG)
## App Description
Game Grab provides users a list of the best video game deals on Steam for that day (top 60). Users will see the top 60 game deals from Steam and can choose to either scroll the deal list or use the search bar to check for the game of their choice. The users recent search terms will be saved on the left side of the page and will return to those search results on click. Each game card will contain the game title that links out to Steam, a thumbnail, the steam rating, the sale price listed in USD and EUR, and a link to the Metacritic review. The first Server side API we will use is CheapShark which provides all the game data for the app. The second SS API we will use is Free Currency Converter which we will use to convert the game prices from USD to EUR so that we have the 2 most common global currencies displayed.
## Technologies used
HTML
CSS
JavaScript
JQuery
Bulma
CheapShark Server Side API
Free Currency Converter Server Side API
Git/GitHub
## Why did I build this project?
We built this app as a group project assignment for Southern Methodist University's Full Stack Bootcamp. We chose to build a game deals app because the three of us are all gamers and this is a tool we would all use personally.
## What did I learn?
During this project we learned how to collaborate with other developers, execute an application from idea to reality, and learn how to merge commits from multiple branches while dealing with conflicts.
## How to install this application
No installation is required to use this web application. Simply navigate to the url in your favorite web browser.
## How to use this application
Navigate to https://collin-beisel-tm.github.io/game-grab/
scroll the list of deals or use the search bar to look up a game
click the game title to redirect to the steam page for that game
click the metacritic link to see the game review
rinse and repeat for as many games as you'd like
visit your previously viewed searches by clicking the search term on the left side of the page.
## license
MIT License

Copyright (c) [2021] [BoKok BrendanAhearn CollinBeisel]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## User Story
AS A gamer I WANT be able to view the best game deals and info about these games in one location.

## Acceptance Criteria
GIVEN a list of the top game deals is displayed when landing on the home page
THEN the user is able to scroll through 60 deals and view game title, image, steam rating, price in USD/EUR, and metacritic link in each game card
AND the user is able to click out to metacritic or steam using the provided links
AND the user is able to search through the game deals using the search bar
AND search term data persists in the left hand side of the screen
