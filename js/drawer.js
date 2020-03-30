function toggleDrawer(reset) {
    let nav = document.getElementById("nav-list");
    let list = document.querySelectorAll("#nav-list > li:not(#dropdown-btn)");
    let icon = document.getElementById("dropdown-btn").getElementsByTagName("a")[0];

    if (reset || icon.innerHTML === "▲") {
        icon.innerHTML = "☰";

        // ...

    } else {
        icon.innerHTML = "▲";

        // ...
    }
}