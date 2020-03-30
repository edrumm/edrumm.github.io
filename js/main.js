window.onload = function () {
    document.getElementById("date").innerHTML = new Date().getUTCFullYear().toString();
};

function resize() {
    if (window.innerWidth > 600) {
        toggleDrawer(true);
    }
}
