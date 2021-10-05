function showOptios() {
  let element = document.getElementById("image-footer");
  element.classList.toggle('active');

  let isActive = element.classList.contains('active')

  let btn = document.querySelector("button");
  btn.setAttribute("aria-expanded", isActive);

  let profile = document.querySelector(".profile");
  profile.setAttribute("aria-hidden", isActive);
  profile.setAttribute("alt", isActive ? "" : "michelle appleton");
}