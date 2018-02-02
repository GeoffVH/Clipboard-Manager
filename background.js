rightClickHandler = function(){ 
    console.log("Right click registered, function activated");
    chrome.tabs.executeScript({
        code: "document.execCommand('paste');"
    });
};

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