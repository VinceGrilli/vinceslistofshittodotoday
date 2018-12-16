var form = document.getElementById("form");
var input = document.getElementById("input");
var plusBtn = document.getElementById("plusBtn");
var item = document.querySelectorAll("li");
var list = document.querySelector("ul");
var trash = document.querySelectorAll("span");

plusBtn.onclick = function(){
	if(input.value === ""){
		alert("You have to enter something Jackass!");
	}
	//e.preventDefault();
}

// form.onsubmit = function(e){
// 	e.preventDefault();
// }

// NOT USED IN NODE VERSION
function addTodoItem(){
	if(input.value === ""){
		alert("You have to enter something jackass!");
	}else{
		var todoText = input.value;
		var li = document.createElement("li");
		li.innerHTML = '<span><i class="fas fa-trash-alt"></i></span> ' + todoText;
		li.classList.add("fade-in");
		list.appendChild(li);
		input.value = "";
		console.log(todoText);				
	}	
}

list.addEventListener("click", function (e){
	var clickedItem = e.target;
	if(clickedItem.tagName ==="LI") {
		clickedItem.classList.toggle("done");
	} 
});

list.addEventListener("mouseover", function(e){
	var hovered = e.target;
	if(hovered.tagName ==="LI"){
		hovered.classList.add("selected");
	}
});

list.addEventListener("mouseout", function(e){
	var hovered = e.target;
	if(hovered.tagName ==="LI"){
		hovered.classList.remove("selected");
	}
});

