// var ddInput;
/* When the user clicks on the button,
toggle between hiding and selecteding the dropdown content */
function getDropDownInput() {
    document.getElementById("dropbtn").classList.toggle("selected");
}

// Close the dropdown menu if the user changes the value the dropdown menu is on
window.onchange = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        // ddInput = dropdowns.options[dropdowns.selectedIndex].text;
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('selected')) {
                openDropdown.classList.remove('selected');
            }
        }
    }
}

function getSelectedValue() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    selected = dropdowns.options[dropdowns.selectedIndex].text;
    return selected.value;
}

var dropDownSelect = document.getElementById("dropbtn");
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    li.appendChild(document.createTextNode(" ("));
    li.appendChild(document.createTextNode(dropDownSelect.value));
    li.appendChild(document.createTextNode(")"));

    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field


    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH


    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem() {
        li.classList.add("delete")
    }
    //END ADD CLASS DELETE
}

function addListAfterClick() {
    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createListElement();
    }
}

dropDownSelect.addEventListener("change", getSelectedValue);

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);