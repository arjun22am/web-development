//example 1  Accessing DOM Elements

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//example 2  Traversing the DOM

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
  });

//exmaple 3  Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "white";
  coffeeType.style.color = "black";
  // coffeeType.style.margin= "50px"
  coffeeType.style.padding = "5px";
});

// example 4  Creating and Inserting Elements

document.getElementById("addNewItem").addEventListener("click", function () {
  let newitem = document.createElement("li");
  newitem.textContent = "Chicken";
  document.getElementById("shoppingList").append(newitem);
});

//exmaple 5  Removing DOM Elements

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let removelastitem = document.getElementById("taskList");
    removelastitem.lastElementChild.remove();
  });

//exmaple 6 ( Event Handling)

document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("Event Updated : Yes");
  });

//exmaple 7 Event Delegation

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target.matches(".teaItem")) {
    alert("You selected : " + event.target.textContent);
  }
});

//example 8 Form Handling

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is :  ${feedback}`;
  });

//exmaple 9 DomContentLoaded

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Dom Fully Loaded";
});

// exmaple 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descText = document.getElementById("descriptionText");
    descText.classList.toggle("highlight");
  });
