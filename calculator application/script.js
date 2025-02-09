document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

function redirectPage(url) {
    document.body.classList.add("fade-out");
    window.location.href = url;
}
