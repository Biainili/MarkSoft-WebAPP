document.getElementById('navbar-logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});
function togglePassword() {
    var passwordInput = document.getElementById("passwordInput");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show Password";
    }
}
function togglePassword1() {
    var passwordInput = document.getElementById("passwordInput1");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show Password";
    }
}

document.getElementById('signUp').addEventListener('click',function(){
    window.location.href = 'signUp.html'
})


  