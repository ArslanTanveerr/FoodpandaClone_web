
document.addEventListener("DOMContentLoaded", function () {

    var searchBtn = document.getElementById("searchBtn");
    var locationInput = document.getElementById("locationInput");
    var cards = document.getElementsByClassName("card-img");

    searchBtn.onclick = function () {
        var location = locationInput.value.trim();

        if (location === "") {
            alert("Please enter your location");
        } else {
            alert("Searching restaurants near: " + location);
        }
    };

    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
            alert("You selected: " + this.innerText);
        };
    }

});
