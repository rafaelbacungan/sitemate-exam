var modal = document.getElementById("modal");
var btn = document.getElementById("modal-trigger");
var output = document.getElementById("btn-output");
var btnOption = document.getElementsByClassName("btn-option");

// Show modal upon clicking the btn containing the 'modal-trigger' id
btn.onclick = () => {
    modal.style.display = "block";
}

// Loop through the list of btns containing the same className
for (let btns = 0; btns < btnOption.length; btns++) {
    btnOption[btns].onclick = () => {
        modal.style.display = "none";
        output.innerHTML = `You just clicked "${btnOption[btns].innerText}"`;
    }
}

// Clicking outside the modal exits it without printing anything.
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}