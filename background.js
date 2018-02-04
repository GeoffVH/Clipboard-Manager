//On recive message, change the title names of 


rightClickHandler = function(text){ 
    console.log("Right click registered, function activated");
    copyToClipboard(text);
    pastFromClipboard();
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

chrome.contextMenus.create({
  title: "placehold 1",
  contexts:["editable"],  // ContextType
  onclick: rightClickHandler(title)  // A callback function
});

chrome.contextMenus.create({
  title: "placeholder 2",
  contexts:["editable"], 
  onclick: rightClickHandler(title) 
});

chrome.contextMenus.create({
  title: "Placeholder 3",
  contexts:["editable"],  
  onclick: rightClickHandler(title)  
});