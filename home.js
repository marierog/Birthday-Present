var button = document.querySelector("button");
button.addEventListener("click", clickFunction);
var nextLink = document.querySelector("a");
var errorMessage = document.querySelector("#error");

function clickFunction(){
	var episode = document.querySelector("input").value;
	if(episode ==  321){
		errorMessage.classList.add("hidden");
		nextLink.classList.remove("hidden");
	} else {
		errorMessage.classList.remove("hidden");
		nextLink.classList.add("hidden");
	}
}