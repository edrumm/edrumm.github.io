function resetDropdown() {
  let list = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");
  let icon = document.getElementsByClassName("dropdown-btn")[0].getElementsByTagName("a")[0];

  icon.innerHTML = "☰";

  Object.values(list).forEach((item) => {
    item.classList.remove("active");
  });
}

function toggleDropdown() {
  let list = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");
  let icon = document.getElementsByClassName("dropdown-btn")[0].getElementsByTagName("a")[0];

  if (icon.innerHTML === "☰") {
      icon.innerHTML = "▲";
  } else {
      icon.innerHTML = "☰";
  }

  Object.values(list).forEach((item) => {
    item.classList.toggle("active");
  });
}
