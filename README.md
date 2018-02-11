# Clipboard Manager
A quick multi-paste tool from your contex menu!

# Installation

1) Download and unzip the repository into any location on your local machine. 
2) Navigate to chrome://extensions on your chrome browser. (Alternatively, open chrome option -> More Tools -> Extensions) 
3) Select the "Developer mode" checkmark on the top right hand of the page. 
4) Select the "Load unpacked extension" button
5) Select the unzipped folder where you stored this repo. 

# User's Guide

<img src="blob:https://imgur.com/f9065ff0-1642-42aa-9f64-c49168eda61c">

# Initial Architecture

<img src="https://i.imgur.com/HJ0KzyC.gif">

# Roadmap (Minimum Viable Product)

- [x] **Unit test:** Display contex menu
- [X] **Unit test:** Register a click from the context menu
- [X] **Unit test:** Function to paste from the clipboard on selected textbox
- [X] **Unit test:** Function to input text into the clipboard
- [X] Create application home screen with unconnected inputs
- [X] **Unit test:** Register text in textbox
- [X] **Unit test:** Overwrite promt text on textboxes
- [X] **Unit test:** Store or get a value from popup.js into local storage
- [X] **Unit test:** Overwrite prompt text on textboxes from local storage on startup.  
- [X] **Unit test:** Futureproof above unit to handle any amount of rows.  
  -***Restriction:*** elementID's need to be grouped in one array at the start following a specific pattern.
- [X] Brainstorm code architecture following OOP practices from everything learned in the unit tests. Graph it out. 
- [X] Code MVP.
 - - [x] popup.js
 - - [X] background.js
 
 # Roadmap (Final version)
 
- [x] Replace hardcoded functions with generic variable functions. 
- [x] Dynamically change the context menu items.
- [x] Create an add item button and matching function.
- [x] Create a remove item button and matching function. 
- [x] Design final HTML and CSS for popup.
- [ ] Add custom image to header and popup icon.
- [ ] re-create graph to show difference between theoretical innitial setup vs final setup.
