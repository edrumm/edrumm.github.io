function resetDropdown() {
    let list = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");
    let icon = document.getElementsByClassName("dropdown-btn")[0].getElementsByTagName("a")[0];

    icon.innerHTML = "☰";

    for (let item of list) {
        item.classList.remove("active");
    }
}

function toggleDropdown() {
    let list = document.getElementsByClassName("nav-list")[0].getElementsByTagName("li");
    let icon = document.getElementsByClassName("dropdown-btn")[0].getElementsByTagName("a")[0];

    if (icon.innerHTML === "☰") {
        icon.innerHTML = "▲";
    } else {
        icon.innerHTML = "☰";
    }

    for (let item of list) {
        item.classList.toggle("active");
    }
}