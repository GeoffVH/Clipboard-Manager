# Right-click-menu-paste
Addon created to speed up job forum applications. 
(And also to let me practice coding)

This addon allows the user to input text on the extention's options (Address, Email, ect) and paste that text directly on input fields using the right click menu. It will use the copy-paste clipboard directly, bypassing application forums that do not allow auto-fill.

Minimum Viable Product complete. 
Missing features: Dynamically changing context menu, ability to add/remove row.

# Installation

1) Download and unzip the repository into any folder on your local machine. 
2) Navigate to chrome://extensions on your chrome browser. (Alternatively, open chrome option -> More Tools -> Extensions) 
3) Select the "Developer mode" checkmark on the top right hand of the page. 
4) Select the "Load unpacked extension" button
5) Select the unzipped folder where you stored this repo. 

# User's Guide

Clicking on the popup menu button will open the extention's homepage. 
<img src="https://i.imgur.com/RTrtOo5.png?1">

Three rows are currently hardcoded into the MVP version of this extention. 
On each row, the first text box is linked to your context menu.
The second text box is the value that will be pasted on selecting the option.

<img src="https://i.imgur.com/k9yl0Ff.png?1">



# Initial Architecture

<img src="https://i.imgur.com/BQkVcsW.png?1">

# Roadmap 

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
- [ ] Create "Add item" button on homescreen and have inputs dynamically appear on click.
- [ ] Dynamically change the context menu items based on number of text slots taken.
- [ ] Create a remove item button next to the inputs. 
