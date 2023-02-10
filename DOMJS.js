//sets variable for button so that it is called once by the program
var button = document.getElementById("enter");

//sets variable for userInput in input box
var input = document.getElementById("userinput");

//sets variable for ul to allow li to be added to ul
var ul = document.querySelector("ul");

//function to gather input length
function inputLength() {
	return input.value.length;
}

//function that creates list element
//step 1, create li variable that also creates new li element
//step 2, create text node for new li element using append child
//step 3, appends child to ul element so HTML know where to place new li element
//step 4, resets value to empty
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

//creates function to add new li element if input is greater than 0
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//creates function to add new li element if enter key is pressed and input is greater than zero
function addListAfterKeypress(event) {
	if (inputLength()>0 && event.keyCode===13){
		createListElement();
	}
}

//event listener for click, has click type and function from above
button.addEventListener("click", addListAfterClick);

//event listener for enter key, has keypress type and function from above
input.addEventListener("keypress", addListAfterKeypress);