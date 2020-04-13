var button = document.querySelector("button");
button.addEventListener("click", clickFunction);
var nextLink = document.querySelector("a");
var errorMessage = document.querySelector("#error");

function clickFunction(){
	var answer = document.querySelector("input").value;
	if(answer ==  '...' || answer == 'დამანებე თავი' || answer == 'u joking right?' || answer == 'U joking right?'
		|| answer ==  'u jokin right?' ||answer ==  'U jokin right?' ||answer ==  'ჯიზეს ქრაისთ'){
		errorMessage.classList.add("hidden");
		nextLink.classList.remove("hidden");
	} else {
		errorMessage.classList.remove("hidden");
		nextLink.classList.add("hidden");
	}
}