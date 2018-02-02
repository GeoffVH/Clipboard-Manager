rightClickHandler = function(){ 
    console.log("Right click registered, function activated");

    textToClipboard("Hello world!")
    chrome.tabs.executeScript({
        code: "document.execCommand('paste');"
    });
};

function textToClipboard (text) {
    var userString = document.createElement("textarea");
    document.body.appendChild(userString);
    userString.value = text;
    userString.select();
    document.execCommand("copy");
    document.body.removeChild(userString);
}

chrome.contextMenus.create({
  title: "Editable thingy",
  contexts:["link","editable"],  // ContextType
  onclick: rightClickHandler // A callback function
});

chrome.contextMenus.create({
  title: "Next Link",
  contexts:["link","editable"], 
  onclick: rightClickHandler 
});

chrome.contextMenus.create({
  title: "Last final Link",
  contexts:["link","selection"],  
  onclick: rightClickHandler 
});