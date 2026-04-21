function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("cw-header", "components/header.html");
    loadComponent("cw-footer", "components/footer.html");
});