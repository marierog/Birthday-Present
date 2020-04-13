var button = document.querySelector("button");
button.addEventListener("click", clickFunction);
var nextLink = document.querySelector("a");
var errorMessage = document.querySelector("#error");

function clickFunction(){
	var answer = document.querySelector("input").value;
	if(answer !=  'კი' && answer != 'დიახ' && answer != 'თუ' && answer != 'არა' && answer!= ''){
		errorMessage.classList.add("hidden");
		nextLink.classList.remove("hidden");
	} else {
		errorMessage.classList.remove("hidden");
		nextLink.classList.add("hidden");
	}
}