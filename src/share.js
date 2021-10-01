function toogleActive(id) {
  var element = document.getElementById(id);
  element.classList.toggle('active');
}

function showOptios() {
  toogleActive("image-footer");
  toogleActive("button");
  toogleActive("options");
}