# Group Project 1: Game Grab
## Proposal
Game Grab will provide users a list of the best video game deals on Steam for that day (top 60). Users will be displayed 12 games on the first page and will be able to page through the rest of the results, or use the search bar to see if their desired game is on the list. The users recent searches will be saved at the bottom of the page and will link directly to the games Steam page. Each game card will contain the game title that links out to Steam, a thumbnail, the steam rating, the normal price of the game, and the sale price listed in USD and EUR. The first SS API we will use is CheapShark which provides all the game data for the app. The second SS API we will use is Free Currency Converter which we will use to convert the game prices from USD to EUR so that we have the 2 most common global currencies displayed.

## Layout
- Header
- Search Bar
- Container with 12 game deals in order of best deal
- User can click through pages of 12 deal cards to view all 60 deals
- Each deal card will have:
    - Game title that links to steam
    - Normal price
    - image thumbnail
    - Steam rating %
    - Sale price in USD/EUR
- footer with search history
