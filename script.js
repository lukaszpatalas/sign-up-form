const submitButton = document.querySelector('.create_button');

submitButton.addEventListener('click', () => {
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm_password').value;
    
    if (password == "") {
        alert("Enter password.")
    } else if (password != confirmPassword) {
        alert("Password didn`t match, try again.");
        return;
    }
});