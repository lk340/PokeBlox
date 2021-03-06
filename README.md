# PokéBlox: Two Popular Games Come Together in this Incredible Mash-Up

Live: http://www.loydkim.com/PokeBlox/

## Background and Overview
Tetris is a classic game with many fans around the world. It is played both casually and competitively by people of all ages. Pokémon is also a game with many fans around the world, and it, too, is played both casually and competitively. PokéBlox is a game that has all the functionality built into the Tetris that we all know and love with a little twist inspired by Pokémon.

In addition to this incredible mash-up, players will be able to also change the background music using the provided playlist. If players prefer the classic Tetris soundtrack, that is an option as well.

## Functionality and MVP Features
PokéBlox will provide players with:
- [x] A 10x20 board to play on
- [x] Seven unique pieces (tetronimoes) that will be used to play the game
- [x] The option to save a piece when clicking the "shift" button
- [x] The option to rotate a piece with the "up" arrow key
- [x] The option to instantly bring a piece to the floor with the "spacebar" key
    
## Architecture and Technologies
This project was developed using the following languages / technologies:
- HTML5 to create a game that is accessible in the browser
- CSS3 to make the game more visually appealing, improving user experience
- HTML Canvas to render the board
- Vanilla JavaScript to render the logic for the game
- HTML <Audio/> tag and DOM manipulation to generate background music / music player
- Webpack to bundle up and make sure that JavaScript scripts will work as intended on the browser

## Wireframes
PokéBlox will feature a single game screen with buttons for
- [x] About Modal
- [x] Turning off the music
- [x] A start button
- [x] A pause button

## Implementation
The board itself is a 2-dimensional array that defaults to containing the background board color (charcoal), which is a one-dimensional array of length 10, composed of repeating values of rgb(54, 54, 54).

![Board_Array](board_array.png)

The board is drawn using Canvas. I implemented this by iterating through the board array and drawing the color at the distance at each index of the board array.

![Canvas_Board](canvas_board.png)

The piece itself is created using a currentPiece class. The currentPiece class generates random pieces, and switches its currPiece instance variable with its nextPiece instance variable with every frame.

![Piece_Class](piece_class.png)

The pieces are rendered on the board using canvas via the createPiece() instance method. This method checks to see if the game is over and if there is a vertical collision and generates new pieces based on these parameters.

![Create_Piece](create_piece.png)

The logic for clearing the board was implemented as follows:
- Start iterating through the board bottom-up
- Using a monkey-patched array method "countColors", seek to find a row that is completely filled with colors other than the default background color of charcoal
- Remove that row from the board array itself using splice and unshift an empty default row to the beginning of the array
- Continue repeating this process until we hit the part of the board beyond the pieces that are stacked at the bottom

![Board_Clearing_Logic](board_clearing_logic.png)
    
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
- [x] Have pieces move through a 10x20 grid with each grid block having a dimension of 34x34 pixels and a border of 2 pixels
- [x] Be able to house pieces
- [x] Update at least at 30 frames per second

##### Day 3: Work on Piece Class
- [x] Piece class should be able to generate a piece object depending on the arguments given to it
- [x] Create data for seven different pieces
- [x] Create a method that will generate a random piece
- [x] Record points
- [x] Change falling speed of pieces based on how many points the player has accrued

##### Day 4: Create Music
- [x] Watch a tutorial on using JavaScript audio object
- [x] Import music into project
- [x] Complete logic for music.js
- [x] Create music playlist to give a variety of options that are in-line with the theme of the project

##### Day 5: Create Modals and Other Important Buttons
- [x] About modal
- [x] Rules modal
- [x] Button to start the game
- [x] Button to pause the game
- [x] Button to turn off the music

##### Day 6: Play Project and Debug
- [x] Play project and find tons of bugs
- [x] Fix said bugs
- [x] CSS if there is time

##### Day 7: Last-minute CSS
- [x] Make sure the game is visually appealing
- [x] Include project into resume
- [x] Put project into personal site
- [x] Take screenshot of game screen and import into GitHub README.md

## Bonus Features
- [ ] Add a physics API to make the game more visually appealing
- [ ] Allow players to add their own music
- [ ] Allow players to change speed of the game based on frame rate options
- [ ] Allow players to speed up the rate at which a piece falls down with the "down" key
- [ ] Make the game 3-dimensional
- [ ] Display piece shadows, like in TetrisFriends

## Checklist
##### Live Project
- [x] Includes links to your Portfolio, Github and LinkedIn.
- [x] Landing page/modal with obvious, clear instructions.
- [x] Interactivity of some kind.
- [x] Well styled, clean frontend.
- [x] If it has music, the option to mute or stop it.
- [x] Hosted from your portfolio site on GitHub pages.

##### Repo and README
- [x] Link to live version.
- [x] Instructions on how to play/use the project.
- [x] List of techs/languages/plugins/APIs used.
- [x] Technical implementation details with code snippets (make sure it looks good).
- [x] To-dos/future features.
- [x] No .DS_Stores / debuggers / console.logs.
- [x] Organize into /assets and /lib.
