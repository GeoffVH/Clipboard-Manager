# Right-click-menu-paste
Addon created to speed up job forum applications. 
(And also to let me practice coding)

This addon allows the user to input text on the extention's options (Address, Email, ect) and paste that text directly on input fields using the right click menu. It will use the copy-paste clipboard directly, bypassing application forums that do not allow auto-fill.

Currently in progress.

# Innitial Architecture

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
- [ ] Brainstorm code architecture following OOP practices from everything learned in the unit tests. Graph it out. 
- [ ] Code MVP.
- [ ] Create "Add item" button on homescreen and have inputs dynamically appear on click.
- [ ] Dynamically change the context menu items based on number of text slots taken.
- [ ] Create a remove item button next to the inputs. 
