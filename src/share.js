function toogleActive(id) {
  var element = document.getElementById(id);
  element.classList.toggle('active');
}

function showOptios() {
  toogleActive("button");
  toogleActive("options");
}