// Selecting elements
var popupoverlay = document.querySelector(".popupoverlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var cancelpopup = document.getElementById("cancel-popup");
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Show popup
addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book
addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    var div = document.createElement("div");
    div.className = "bookcontainer"; // Use consistent class name

    div.innerHTML = `
        <h1>${booktitleinput.value}</h1>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button type="button" class="delete-button">Delete</button>
    `;

    // Add event listener for the new delete button
    div.querySelector(".delete-button").addEventListener("click", function(event) {
        deleteBook(event);
    });

    container.appendChild(div);

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Delete book function
function deleteBook(event) {
    event.target.parentElement.remove();
}

  

