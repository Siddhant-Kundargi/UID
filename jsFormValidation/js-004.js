function unameValidation(uname) {
    
    let pattern = /[a-zA-Z0-9\.]+\@[a-zA-z\.]+\.[a-zA-z\.]+/;

    return uname.match(pattern)
}

function isDataValid(uname, password) {
    
    if (unameValidation(uname) == null) {
        
        console.log("uname", uname)

        window.alert("invalid email");
        return false;

    } else if (password == "" || password == NaN){

        window.alert("Password missing");
        return false;

    } else {

        return true;
    }
}

function sendData(){

    let uname = document.forms["CYS"]["uname-input"].value;
    let password = document.forms["CYS"]["password-input"].value;

    if(isDataValid(uname, password)){
        unameValidation(uname)
        window.alert("Send Success!");
        return false;
    }

    return false;
}

function checkNum() {
    
    let num = document.getElementById("numval").value;

    if (0 < num && num <= 100) {
        alert("Number valid");
    } else {

        alert("Number invalid");
    }
}

/* JS form validation
Js provides a way to validate the form before sending it to the server
    - Generally there are 2 form validations:
        1. Basic Validation that checks if all mandatory fields are filled in
        2. Data format validation that checks the entered value is in the correct format
    - Using js the client side form validation can be customized 
    - Client side validate is used to perform initial check by catcing invalid data on the client side, i.e. web browser
        + if we don't perform basic validation on the client side then there will be a noticible delay in the server side validation

    - Types of Client Validation:
        1. Built-in form validation using HTML(5)
        2. JS validation (highly customisable)
*/