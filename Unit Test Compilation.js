//Unit test: Display contex menu
chrome.contextMenus.create({
    title: "placehold 1",
    contexts:["editable"],  // ContextType
    onclick: foo // A callback function
  });


 //Unit test: Register a click from the context menu
 chrome.contextMenus.create({
    title: "placehold 1",
    contexts:["editable"], 
    onclick: foo 
  });

  foo = function(){ 
    console.log("Right click registered, function activated");
  }


//Unit test: Function to paste from the clipboard on selected textbox
function pastFromClipboard(){
    chrome.tabs.executeScript({
        code: "document.execCommand('paste');"
    });
}


//Unit test: Function to input text into the clipboard
function copyToClipboard (text) {
    var userString = document.createElement("textarea");
    document.body.appendChild(userString);
    userString.value = text;
    userString.select();
    document.execCommand("copy");
    document.body.removeChild(userString);
}


 //Unit test: Register text in textbox
 var arrayAll =
    [
    document.getElementById('name1'),
    document.getElementById('text1'),
    document.getElementById('name2'),
    document.getElementById('text2'),
    document.getElementById('name3'),
    document.getElementById('text3')
    ]

function testText(index){
    var docID = arrayAll[index];
    console.log(docID.value + " found at supplied index to the testText");
}


//Unit test: Overwrite promt text on textboxes
var arrayAll =
    [
    document.getElementById('name1'),
    document.getElementById('text1'),
    document.getElementById('name2'),
    document.getElementById('text2'),
    document.getElementById('name3'),
    document.getElementById('text3')
    ]

function testOverride(index){
    var elementID = arrayAll[index];
    elementID.defaultValue = "TESTING INPUT OVERWRITE";
}


 //Unit test: Store or get a value from popup.js into local storage
 var arrayAll =
    [
    document.getElementById('name1'),
    document.getElementById('text1'),
    document.getElementById('name2'),
    document.getElementById('text2'),
    document.getElementById('name3'),
    document.getElementById('text3')
    ]
 
function testSet(index){
    var elementID = arrayAll[index];
    chrome.storage.local.set({'testData': elementID.value});
}

function testGet(index){
    chrome.storage.local.get("testData", function(getValue){
        console.log("Obtained: " + getValue.testData);
    });
}

//Unit test: Overwrite prompt text on textboxes from local storage on startup.
//Futureproof above unit to handle any amount of rows.
//********************************** */
<script src="Unit Test Compilation.js">
function load() {
    console.log("load event detected!");
}
window.onload = load;
</script>
//********************************** */


var arrayAll =
    [
    document.getElementById('name1'),
    document.getElementById('text1'),
    document.getElementById('name2'),
    document.getElementById('text2'),
    document.getElementById('name3'),
    document.getElementById('text3')
    ]


window.onload = function() {
    chrome.storage.local.get('textbox', function(data) {
            arrayAll.forEach(fill);
    });
};

function fill(textboxid, index, array){
    var rowGeneric = ["name", "text"];
    textboxid.defaultValue = rowGeneric[index%2];
}
