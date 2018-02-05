var storage = chrome.storage.local;
var allNames = [
    "Default",
    "Default",
    "Default",
    ]

//Initializes the context menu using data from storage. 
function main(){
    storage.get('key', function(obj) {
        allNames[0] = obj.key[0];
        allNames[1] = obj.key[2];
        allNames[2] = obj.key[4];
        createContexMenus(allNames);
    });
}

//Creates each context menu item
//These will be refactored into one generic function on the final version. 
function createContexMenus(names){
    chrome.contextMenus.create({
        title: names[0],
        contexts:["editable"],
        onclick: row1 
      });

      chrome.contextMenus.create({
        title: names[1],
        contexts:["editable"], 
        onclick: row2 
      });
      
      chrome.contextMenus.create({
        title: names[2],
        contexts:["editable"],  
        onclick: row3 
      });
}

//Row functions are directly tied to menu items. 
//Each function will copy it's respective text from storage and paste it.
//These will be refactored into one generic function on the final version. 
row1 = function(){ 
    storage.get('key', function(obj) {
        text = obj.key[1]
        copyToClipboard(text);
        pastFromClipboard();
    });
}

row2 = function(){ 
    storage.get('key', function(obj) {
        text = obj.key[3]
        copyToClipboard(text);
        pastFromClipboard();
    });
}

row3 = function(){ 
    storage.get('key', function(obj) {
        text = obj.key[5]
        copyToClipboard(text);
        pastFromClipboard();
    });
}

function pastFromClipboard(){
    chrome.tabs.executeScript({
        code: "document.execCommand('paste');"
    });
}

function copyToClipboard (text) {
    var userString = document.createElement("textarea");
    document.body.appendChild(userString);
    userString.value = text;
    userString.select();
    document.execCommand("copy");
    document.body.removeChild(userString);
}

main();
