/*
The MIT License (MIT)

Copyright (c) 2018 Geoffrey Herz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/



var data = {};

//Start point
window.onload = function() {
	recoverStorage();
}

//Gets storage to a global object
function recoverStorage(){
	storage.get('row', function(store) {
		data = Object.assign({}, store); 
	});
}

//Creates rows and populates them with storage data.
function initializeStorage(){
	var index=0;
	for(index in data.row){
		index = parseInt(index);
		generateRow(index);
		populateRow(store.row[index], index);
		setButton(index, "Delete");
	}
	if(index==0){
		generateRow(index);
	}
	//Last button by default must always be an add button.
	setButton(index, "add");
}

//Generates an empty row[index]
function generateRow(index){
	var table = document.getElementById("homescreen");
    var row = table.insertRow(-1);
    var name = row.insertCell(-1);
    var text = row.insertCell(-1);
	var button = row.insertCell(-1);
    name.innerHTML = '<td><input id="name' + index +'"" required="" type="text"><label alt="Menu name" placeholder="Menu name"></label></td>';
    text.innerHTML = '<td><input id="text' + index +'"" required="" type="text"><label alt="Text pasted" placeholder="Text pasted"></label></td>';
	button.innerHTML = '<td><button id="btn' + index +'"" type="button" class="btn btn-outline-secondary">Unassigned!</button></td>';
}

//Sets a button to either "Add row" or "Delete row" given the butonID and choice.
function setButton(button, sign){
	$(button).unbind();
	if(sign == "add"){
		$(button).bind('click', addRow);
		button.textContent  = "Add row";
		button.className = "btn btn-outline-primary";
	}
	else{
		$(button).bind('click', function(){ removeRow(button); });
		button.className = "btn btn-outline-danger";
		button.textContent  = "Delete row";
	}
}

//Removes the row the button is on. 
function removeRow(button){
	var table = document.getElementById('homescreen');
	var index = parseInt(this.id.substring(3, button.length));
	table.deleteRow(index+1); //+1 offset because the first row is the header. 
}

//creates a new empty row with it's button set to "Add Row" and turns the calling button to "Remove row"
function addRow(button){
	var index = parseInt(button.substring(3, button.length));
	generateRow(index+1);
	var newButton = document.getElementById('btn'+(index+1));
	setButton(newButton, "add");
	setButton(button, "Delete");
}

//Saves current global snapshot to storage
function saveStorage(){
	storage.set(data);
}
