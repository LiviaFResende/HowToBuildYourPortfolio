

document.querySelector(".hamburguer").addEventListener("click", dropDownMenu);

function dropDownMenu() {
    document.querySelector(".desktop").classList.toggle("mobile");
}

// THIS IS ABOUT THE BOX WITH INSTRUCTIONS

const mainButton = document.querySelector(".mainButton")
const thisChange1 = document.querySelector(".thisChange1")
const thisChange2 = document.querySelector(".thisChange2")

mainButton.addEventListener("click", function(){
  thisChange1.innerHTML = "";
  thisChange1.innerHTML = thisChange2.innerHTML;
})

// How to add the new text from JS from DataBase
