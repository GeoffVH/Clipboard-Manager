//Snapshot is a global variable that hosts an image of what storage looks like. 
var snapshot = [
        "Name",
        "Text",
        "Name",
        "Text",
        "Name",
        "Text",
        ]
var storage = chrome.storage.local;
var allElementIDs = [
        document.getElementById('name1'),
        document.getElementById('text1'),
        document.getElementById('name2'),
        document.getElementById('text2'),
        document.getElementById('name3'),
        document.getElementById('text3')
        ]
var subButton = document.getElementById('ApplyChanges');
subButton.addEventListener('click', applyButton, false); 

//Update text input on button push
function applyButton(){
    allElementIDs.forEach(updateSnapshot);
    saveData();
}

//Replaces snapshot with all text from user input
function updateSnapshot(textboxid, index){
    snapshot[index] = textboxid.value;
}

//Start point        
window.onload = function() {
    textHandler();
};

//Fills input text from storage
function textHandler(){
    storage.get('key', function(obj) {
        if(obj){ 
            for (let i=0; i<allElementIDs.length; i++) {
                Refresh(allElementIDs[i], i, obj.key[i] );
              }
            }      
        else {
            allElementIDs.forEach(Fill);
        }
    });
}

//Replaces all text fields from data, and updates the snapshot.
function Refresh(textboxid, i, str){
    textboxid.defaultValue = str;
    snapshot[i] = str;
}

//Replaces all text fields to generic values, saves them to storage, and updates the snapshot.
function Fill(textboxid, index, array){
    var rowGeneric = ["name", "text"];
    textboxid.defaultValue = rowGeneric[index%2];
    snapshot[index] = rowGeneric[index%2];
    saveData();
}

//saves the current snapshot into storage.
function saveData(){
    storage.set( {'key' : snapshot} );
}

//prints storage data at index. 
//NOTE: This function is async.
function printData(index){
    storage.get('key', function(obj) {
        console.log(obj.key[index]);
    });
}