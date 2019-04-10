// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

console.log("Hello Ash");

//jQuery in JavaScript
//var theForm = $("#theForm");
//theForm.hide();

//var theForm = document.getElementById("theForm");
//theForm.hidden = true;



var button = document.getElementById("buyButton");
button.addEventListener("click", function () {
    alert("Buying Item");
});


var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("clicked one of the items: " + $(this).text());
});


//Click and Hide Login Form
var $loginToggle = $("#loginToggle");
var $popupForm = $(".popup-form");

//toggle animations(slideToggle)(fadeToggle)
$loginToggle.on("click", function () {
    $popupForm.toggle(950);
});