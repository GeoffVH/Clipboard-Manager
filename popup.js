//On popup open, search storage and populate the text fields with the previous inputs. 

//On apply changes button, update all text input in the popup

//Practice code
function getUserName() {
    var nameField = document.getElementById('name1');
    var nameField2 = document.getElementById('text1');
    var result = document.getElementById('result');

    nameField2.defaultValue = "TESTING INPUT OVERWRITE";
    result.textContent = 'Your username is: ' + nameField2.value;
    chrome.storage.local.set({'textbox': nameField.value});
    chrome.storage.local.get("textbox", function(getValue){
        console.log("Get method sucessfull, obtained: " + getValue.textbox);
    });
}

var subButton = document.getElementById('ApplyChanges');
subButton.addEventListener('click', getUserName, false); 