var storage = chrome.storage.local;

//Initializes the context menu using data from storage. 
//This will be refactored in the final version
function main(){
    contextMenu();
}

//Creates context menu based on the current storage data.   
function contextMenu(){
    storage.get('key', function(obj) {
		for( let i=0; i<obj.key.length; i+=2){
			name = obj.key[i];
			n = i+1;
			text = obj.key[n];
			addRow(name, text);
		}
    });
}

//Creates one row of the context menu and it's corresponding action to user click. 
function addRow(name, text){
    chrome.contextMenus.create({
        title: name,
        contexts:["editable"],
        onclick: function() { 
			copyToClipboard(text);
			pasteFromClipboard(); 
			} 
      });
}
			

//Listens for the "Apply button" to be pushed. 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	  
  });


function pasteFromClipboard(){
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
