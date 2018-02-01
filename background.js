rightClickHandler = function(){
  //Do  stuff over that selected context menu
};

chrome.contextMenus.create({
  title: "Editable thingy",
  contexts:["link","editable"],  // ContextType
  onclick: rightClickHandler // A callback function
});

chrome.contextMenus.create({
  title: "Next Link",
  contexts:["link","editable"],  // ContextType
  onclick: rightClickHandler // A callback function
});

chrome.contextMenus.create({
  title: "Last final Link",
  contexts:["link","selection"],  // ContextType
  onclick: rightClickHandler // A callback function
});