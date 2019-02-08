# PokéBlox: Two Popular Games Come Together in this Incredible Mash-Up

## Background and Overview
Tetris is a classic game with many fans around the world. It is played both casually and competitively by people of all ages. Pokémon is also a game with many fans around the world, and it, too, is played both casually and competitively. PokéBlox is a game that has all the functionality built into the Tetris that we all know and love with a little graphical and musical twist inspired by Pokémon.

In addition to this incredible mash-up, players will be able to also change the background music into one of ten original songs from the Pokémon soundtrack. If users prefer the classic Tetris soundtrack, that is an option as well.

## Functionality and MVP Features
PokéBlox will provide players with:
- [ ] A 10x20 board to play on
- [ ] Seven unique pieces that will be used to play the game
- [ ] The option to save a piece when clicking the "shift" button
- [ ] The option to rotate a piece with the "up" arrow key
- [ ] The option to instantly bring a piece to the floor with the "spacebar" key
    
## Architecture and Technologies
This project was developed using the following languages / technologies:
- HTML5 to create a game that is accessible in the browser
- CSS3 to make the game more visually appealing, improving user experience
- Vanilla JavaScript to render the logic for the game
- [ some music api ] to generate background music
- Webpack to bundle up and make sure that JavaScript scripts will work as intended on the browser

In addition to these languages and technologies, there are [x] main parts that make up the project in the source code:
- board.js: this will handle the logic for creating the board the player will be playing on
- pieces.js: this will allow the game to generate certain pieces based on random input into a Pieces class
- music.js: this will handle the logic for rendering the background music for the game

## Wireframes
PokéBlox will feature a single game screen with buttons for
- [x] About Modal
- [ ] Turning off the music
- [ ] A start button
- [ ] A pause button
    
## Implementation Timeline
##### Day 1
- [x] Create skeleton JavaScript files for each part of the game
- [x] Create webpack.config.js file
- [x] Create package.json
- [x] Create a board.js file and a Board class
- [x] Create a pieces.js file and a Piece class
- [x] Create a music.js file
- [x] Do basic CSS for the initial version of the page

##### Day 2: Work on Board Class
Board class should...
- [ ] Have pieces move through a 10x20 grid with each grid block having a dimension of 34x34 pixels and a border of 2 pixels
- [ ] Be able to house pieces
- [ ] Update at least at 30 frames per second

##### Day 3: Work on Piece Class
- [ ] Piece class should be able to generate a piece object depending on the arguments given to it
- [ ] Create data for seven different pieces
- [ ] Create a method that will siphon out one random piece a time, using the piece class to generate the 

##### Day 4: Learn How to Use Music API
- [ ] Watch a tutorial on importing a music API into project
- [ ] Import music API into project
- [ ] Complete logic for music.js

##### Day 5: Create Modals and Other Important Buttons
- [ ] About modal
- [ ] Rules modal
- [ ] Button to start the game
- [ ] Button to pause the game
- [ ] Button to turn off the music

##### Day 6: Play Project and Debug
- [ ] Play project and find tons of bugs
- [ ] Fix said bugs
- [ ] CSS if there is time

##### Day 7: Last-minute CSS
- [ ] Make sure the game is visually appealing
- [ ] Include project into resume
- [ ] Put project into personal site
- [ ] Take screenshot of game screen and import into GitHub README.md

## Bonus Features
- [ ] Add a physics API to make the game more visually appealing
- [ ] Allow players to add their own music
- [ ] Allow players to change speed of the game based on frame rate options
- [ ] Allow players to speed up the rate at which a piece falls down with the "down" key
- [ ] Make the game 3-dimensional
- [ ] Display piece shadows like in TetrisFriends

## Checklist
##### Live Project
- [ ] Includes links to your Portfolio, Github and LinkedIn.
- [ ] Landing page/modal with obvious, clear instructions.
- [ ] Interactivity of some kind.
- [ ] Well styled, clean frontend.
- [ ] If it has music, the option to mute or stop it.
- [ ] Hosted from your portfolio site on GitHub pages.

##### Repo and README
- [ ] Link to live version.
- [ ] Instructions on how to play/use the project.
- [ ] List of techs/languages/plugins/APIs used.
- [ ] Technical implementation details with code snippets (make sure it looks good).
- [ ] To-dos/future features.
- [ ] No .DS_Stores / debuggers / console.logs.
- [ ] Organize into /assets and /lib.
