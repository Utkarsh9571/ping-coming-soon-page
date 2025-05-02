const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
  
const form = document.getElementById('form')
const emailInput = document.getElementById('user-email')

let isValidationOn = false

const validateInputs= () =>{
    if(!isValidationOn) return;

        emailInput.classList.remove("invalid");
        emailInput.nextElementSibling.classList.add("hidden");

    if (!isValidEmail(emailInput.value)){
        emailInput.classList.add("invalid");
        emailInput.nextElementSibling.classList.remove("hidden");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    isValidationOn = true;
})

emailInput.addEventListener('input', () =>{
    validateInputs();
})
