// Activate/deactivate modal
var modal = document.getElementById("modal");
var btn = document.getElementById("modal-trigger");
var accept = document.getElementById("btn-accept");
var cancel = document.getElementById("btn-cancel");
var output = document.getElementById("btn-output");


btn.onclick = () => {
    modal.style.display = "block";
}

accept.onclick = () => {
    modal.style.display = "none";
    output.innerHTML = "You just clicked 'Accept'";
}

cancel.onclick = () => {
    modal.style.display = "none";
    output.innerHTML = "You just clicked 'Cancel'";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}