let input = document.getElementById("inputBox");

input.addEventListener("input", validate);

function validate() {
    let form = document.getElementById("mainForm");
    let pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;


    if (input.value.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}
