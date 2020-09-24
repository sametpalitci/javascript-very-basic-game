
var button = document.getElementsByTagName('button');

var random = Math.floor(Math.random() * 3);

button[random].setAttribute("rightoption", true);

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var correct = this.getAttribute("rightoption");
        if (correct == "true") {
            alert("True!")
        } else {
            alert("False!");
        }
    });
}
