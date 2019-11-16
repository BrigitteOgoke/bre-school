var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my JS site"
document.body.append(newH1)

var newP = document.createElement("P")
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var newLi = document.createElement("li")
newLi.textContent = "one"
var myList = document.getElementById("my-list")
myList.prepend(newLi)
