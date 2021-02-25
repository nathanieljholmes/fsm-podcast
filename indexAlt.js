const submitButton = document.getElementById("submitBtn");
const email = document.getElementById("email");
const error = document.getElementById("errorEvt");
error.style.display = "none"; 

submitButton.addEventListener("click", (ev) => {
    console.log(email.value)
    ev.preventDefault();
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mailFormat.test(email.value)){
        error.style.display = "none"; 
    } else {
        error.style.display = "block";
    }
}); 