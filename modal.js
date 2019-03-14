var link = document.querySelector(".write_us");
var contacts = document.querySelector(".modal_login");
var close = document.querySelector(".modal_close");
var login = document.querySelector("[name=login]");
var map = document.querySelector(".map");
var map_popup = document.querySelector(".modal_map");
var close_map = document.querySelector(".modal_close_map");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  contacts.classList.add("modal_show");
  login.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  contacts.classList.remove("modal_show");
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("modal_show");
});
close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal_show");
});

link.addEventListener("click", function () {
  console.log("click")});
