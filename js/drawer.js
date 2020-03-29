function clearDrawer() {

}

function toggleDrawer(reset = false) {
    let navbar = document.getElementById("nav-list");
    let links = navbar.getElementsByTagName("li");
    let icon = document.getElementById("dropdown-btn").getElementsByTagName("a")[0];

    if (reset || icon.innerHTML === "▲") {
        icon.innerHTML = "☰";
    } else {
        icon.innerHTML = "▲";
    }
}