var modal = document.getElementById("modal");
var btn = document.getElementById("modal-trigger");
var output = document.getElementById("btn-output");

// Build modal here
let createModal = () => {
    return (modal.innerHTML = `
    <div class="modal-content">
        <div class="message">
            <p>Are you sure you want to continue?</p>
        </div>

        <div class="buttons">
            <button type="button" class="btn-option">Yes</button>
            <button type="button" class="btn-option">Cancel</button>
        </div>
    </div>
    `);
}

// Show modal upon clicking the btn containing the 'modal-trigger' id
btn.onclick = () => {
    modal.style.display = "block";

    // once the modal appears, retrieve the classnames of the buttons
    // and display the respective text on click.
    var btnOption = document.getElementsByClassName("btn-option");
    for (let btns = 0; btns < btnOption.length; btns++) {
        btnOption[btns].onclick = () => {
            modal.style.display = "none";
            output.innerHTML = `You just clicked "${btnOption[btns].innerText}"`;
        }
    }
}

// Clicking outside the modal exits it without printing anything.
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// on start, create the modal
(() => {
    createModal();
})();