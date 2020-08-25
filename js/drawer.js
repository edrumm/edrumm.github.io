function toggleDropdown(reset = false) {
  const list = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");
  const icon = document.getElementsByClassName("dropdown-btn")[0].getElementsByTagName("a")[0];

  if (icon.innerHTML === "☰") {
      icon.innerHTML = "▲";
  } else {
      icon.innerHTML = "☰";
  }

  if (reset) {
    icon.innerHTML = "☰";

    Object.values(list).forEach((item) => {
      item.classList.remove("active");
    });

  } else {
    Object.values(list).forEach((item) => {
      item.classList.toggle("active");
    });
  }
}
