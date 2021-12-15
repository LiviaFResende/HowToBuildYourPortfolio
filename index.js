

document.querySelector(".hamburguer").addEventListener("click", dropDownMenu);

function dropDownMenu() {
    document.querySelector(".desktop").classList.toggle("mobile");
}

// THIS IS ABOUT THE BOX WITH INSTRUCTIONS

const mainButton = document.querySelector(".mainButton")
const thisChange = document.querySelector(".thisChange")
const thisChange1 = document.querySelector(".thisChange1")

mainButton.addEventListener("click", function(){
  thisChange.innerHTML = "";
  thisChange.innerHTML = "Here goes the NewText";
  thisChange.style.display = "none";
})

// How to add the new text from JS from DataBase
