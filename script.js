// stop the form from submitting
document.getElementById("btn-rounded").addEventListener("click", function(event) {
    event.preventDefault()
});

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

document.getElementById("btn-rounded").addEventListener("click", validateEmail);

function validateEmail() {
    const inputEmail = document.getElementById("email").value;
    const isValidEmail = emailRegex.test(inputEmail);
    
    // document.getElementById("email").placeholder = "example@email/com";

    if (isValidEmail == false) {
        document.querySelector('.error').style.display = 'block';
        const inputField = document.getElementById("email");
        inputField.value = "example@email/com";
        inputField.style.border = "1px solid var(--clr-red-400)";
    }
    
}
