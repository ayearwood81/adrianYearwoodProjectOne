const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event){

    // prevent default behaviour (page refresh)
    event.preventDefault();

    // get the value of the inputs and store them in variables
    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;
    const subject = document.querySelector("input[name=subject]").value;
    const comment = document.querySelector("textarea[name=comment]").value;

    if ((comment) && (name) && (email)) {
        alert("Thank you for submitting your comment - we will be in touch with you as soon as possible!")
        document.querySelector("input[name=name]").value = "";
        document.querySelector("input[name=email]").value = "";
        document.querySelector("input[name=subject]").value = "";
        document.querySelector("textarea[name=comment]").value = "";
    } else if (comment == false) {
        alert("Missing Comment!");
    } else if (name == false) {
        alert("Missing Name!");
    } else if (email == false) {
        alert("Missing Email!");
    }
});