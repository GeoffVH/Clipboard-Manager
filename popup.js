//working with element ID's all in one array felt easier.
//Likely going forward this array could be expanded or automated.
//Current architecture can handle any size so long as it's in an array form like this. 
var arrayAll =
    [
    document.getElementById('name1'),
    document.getElementById('text1'),
    document.getElementById('name2'),
    document.getElementById('text2'),
    document.getElementById('name3'),
    document.getElementById('text3')
    ]

//On popup open searchs storage and populates the text fields with the previous inputs.
//If local storage is empty, innitializes generic ones.  
window.onload = function() {
    chrome.storage.local.get('textbox', function(data) {
            if(data) 
                arrayAll.forEach(refresh);           
            else     
                arrayAll.forEach(fill);
    });
};

//Replaces all text fields to generic values.
function fill(textboxid, index, array){
    var rowGeneric = ["name", "text"];
    textboxid.defaultValue = rowGeneric[index%2];
}

//TO DO - create a function to get storage data, then use it to assign values to upToDate. 
function refresh(textboxid, index, array){
    var upToDate = ["name", "text"];
    textboxid.defaultValue = upToDate[index%2];
}

//On apply changes button, update all text input in the popup. Send message that inputs have been changed.
function FOO(){

}


//Practice code for referance 
function getUserName() {
    var nameField = document.getElementById('name1');
    var nameField2 = document.getElementById('text1');
    var debug = document.getElementById('debug');

    nameField2.defaultValue = "TESTING INPUT OVERWRITE";
    debug.textContent = 'Your username is: ' + nameField2.value;
    chrome.storage.local.set({'textbox': nameField.value});

    //Get is async. All code will have to be inside the call function. 
    chrome.storage.local.get("textbox", function(getValue){
        console.log("Get method sucessfull, obtained: " + getValue.textbox);
    });
}


var subButton = document.getElementById('ApplyChanges');
subButton.addEventListener('click', getUserName, false); 