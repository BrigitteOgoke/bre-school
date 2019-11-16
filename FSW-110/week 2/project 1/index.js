var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my site"
document.body.append(newH1)

var newP = document.createElement("P")
newP.textContent = "best site with js"
document.body.append(newP)

var newLi = document.createElement("li")
newLi.textContent = "Contact Us"
var myList = document.getElementById("my-list")
myList.prepend(newLi)
var newLi = document.createElement("li")
newLi.textContent = "Shop"
var myList = document.getElementById("my-list")
myList.prepend(newLi)
var newLi = document.createElement("li")
newLi.textContent = "Home"
var myList = document.getElementById("my-list")
myList.prepend(newLi)

var newFooter = document.createElement("footer")
newFooter.textContent = "site by Bri"
document.body.append(newFooter)
