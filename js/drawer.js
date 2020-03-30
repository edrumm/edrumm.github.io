function clearDrawer() {

}

function toggleDrawer(reset = false) {
    let nav = document.getElementById("nav-list");
    let list = document.querySelectorAll("#nav-list > li:not(#dropdown-btn)");
    let icon = document.getElementById("dropdown-btn").getElementsByTagName("a")[0];

    if (reset || icon.innerHTML === "▲") {
        icon.innerHTML = "☰";

        // flex-direction
        nav.style.flexDirection = "row";
        icon.style.flexDirection = "row";

        for (let item of list) {
            item.style.display = "none";
        }

    } else {
        icon.innerHTML = "▲";

        nav.style.flexDirection = "column";
        icon.style.flexDirection = "column";

        for (let item of list) {
            item.style.display = "block";
        }
    }
}