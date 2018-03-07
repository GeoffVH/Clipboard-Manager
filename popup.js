var storage = chrome.storage.local;
var rowIDs = [];
//This data construct is used to generate the storage object.
//rowIDs[n][x] = represents row n, each subarray x contains metadata on rows currently displayed on popup.html
//rowIDs[][0] = key used to store row data in the storage object. 
//rowIDs[][1] = elementID of the row's name input field. 
//rowIDs[][2] = elementID of the row's text input field.  

//Start point
window.onload = function() {
     //loadDummyData();
    recoverStorage();
}

//Debug test to display expected shape of a storage object.
function loadDummyData() {
    storage.clear();
    var row = {
        0: ["name0", "text0"],
        1: ["name1", "text1"],
        2: ["name2", "text2"],
        3: ["name3", "text3"]
    }
    storage.set(row);
}

//Creates rows and populates them with storage data.
function recoverStorage() {
    storage.get(null, function(store) {
        var index = 0;
        for (index in store) {
            index = parseInt(index);
            generateRow(index);
            populateRow(store[index], index);
            setButton(index, "Delete");
        }
        if (index == 0) generateRow(index);
        setButton(index, "add");
    });
}

//Generates one empty row at (index) complete with all event hooks ready. 
//NOTE: Button is generated but not assigned in this function.
function generateRow(index) {
    var table = document.getElementById("homescreen");
    var row = table.insertRow(-1);
    var name = row.insertCell(-1);
    var text = row.insertCell(-1);
    var button = row.insertCell(-1);
    row.id = "row" + index;
    name.innerHTML = '<tr><td><input id="name' + index + '"" required="" type="text"><label alt="Menu name" placeholder="Menu name"></label></td>';
    text.innerHTML = '<td><input id="text' + index + '"" required="" type="text"><label alt="Text pasted" placeholder="Text pasted"></label></td>';
    button.innerHTML = '<td><button id="btn' + index + '"" type="button" class="btn btn-outline-secondary">Unassigned!</button></td></tr>';
    updateRowIDs(index);
    onTextInput(index);
}

//Stores the row meta information in the rowID global array for later use when saving changes to storage.
function updateRowIDs(index) {
    var nameID = document.getElementById("name" + index);
    var textID = document.getElementById("text" + index);
    var item = [index, nameID, textID];
    rowIDs.push(item);
}

//Creates a listener for the text fields on row(index)
function onTextInput(index) {
    $("#name" + index)
        .on('change', modifyData);
    $("#text" + index)
        .on('change', modifyData);
}

//Loops through all rowId's and saves name and text to storage.
//Alerts the context menu there's been an update in storage.
function modifyData() {
    var newObject = {}
    for (i in rowIDs) {
        var nameField = rowIDs[i][1].value;
        var textField = rowIDs[i][2].value;
        newObject[rowIDs[i][0]] = [nameField, textField];
    }
    storage.clear();
    storage.set(newObject);
    chrome.runtime.sendMessage({});
}

//given an array of two strings (items), places them into respective text inputs on the html row[index]
function populateRow(items, index) {
    var name = document.getElementById('name' + index);
    var text = document.getElementById('text' + index);
    name.defaultValue = items[0];
    text.defaultValue = items[1];
}

//Sets a button to either "Add row" or "Delete row" given the butonID and choice.
// sign == "add" for "Add row" button. Anything else for "Delete row" button. 
function setButton(index, sign) {
    var button = document.getElementById("btn" + index);
    $("#btn" + index)
        .off();
    if (sign == "add") {
        $("#btn" + index)
            .on('click', addRow);
        button.textContent = "Add row";
        button.className = "btn btn-outline-primary";
    } else {
        $("#btn" + index)
            .on('click', removeRow);
        button.className = "btn btn-outline-danger";
        button.textContent = "Delete row";
    }
}

//Removes the row the calling element is on. 
function removeRow() {
    var index = parseInt(this.id.substring(3, this.id.length));
    var table = document.getElementById('row' + index);
    table.outerHTML = '';
    findAndRemove(index);
    modifyData();
}

//Removes the row from the active rowIDs
function findAndRemove(index) {
    for (i in rowIDs) {
        if (rowIDs[i][0] == index && i != -1) {
            rowIDs.splice(i, 1);
        }
    }
}

//creates a new empty row with it's button set to "Add Row" and turns the calling element's button to "Delete row"
function addRow() {
    console.log("Add button correctly hooked up");
    var index = parseInt(this.id.substring(3, this.id.length));
    generateRow(index + 1);
    setButton(index + 1, "add");
    setButton(index, "Delete");
}
