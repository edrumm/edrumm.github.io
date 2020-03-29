window.onload = function () {
    document.getElementById("date").innerHTML = new Date().getUTCFullYear().toString();
};

window.onresize = function () {
    if (window.innerWidth > 600) {
        toggleDrawer(true);
    }
};
