var storage = chrome.storage.local;

//Start point
function main(){
    contextMenu();
}

//Creates context menu based on the current storage data.   
function contextMenu(){
	chrome.contextMenus.removeAll();
	storage.get(null, function(store) {
		for(index in store){
			var name = store[index][0];
			var text = store[index][1];
			addRow(name, text);
		}
	});
}

//Creates one row of the context menu labeled "name" and assigns "text" as the string to paste.
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
chrome.runtime.onMessage.addListener(contextMenu);
