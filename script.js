// stop the form from submitting
const submitButton = document.querySelector(".js-btn-rounded");

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
});

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

submitButton.addEventListener("click", validateEmail);

function validateEmail() {
    const inputEmail = document.getElementById("email").value;
    const isValidEmail = emailRegex.test(inputEmail);
    
    if (isValidEmail == false) {
        const inputField = document.getElementById("email");
        inputField.style.border = "1px solid var(--clr-red-400)";
        if (inputEmail == '') {
            document.querySelector('.error-format').style.display = 'none';
            document.querySelector('.error-empty').style.display = 'block';
        } else {
            document.querySelector('.error-empty').style.display = 'none';
            document.querySelector('.error-format').style.display = 'block';
        }
    }
    
}
