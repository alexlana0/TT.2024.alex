function showHide(inputId) {
    var passwordInput = document.getElementById(inputId);
    var icon = document.getElementById("icon");
    var icon2 = document.getElementById("icon_2");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.style.backgroundImage = "url('../img/hide.png')";
        icon2.style.backgroundImage = "url('../img/hide.png')";
    } else {
        passwordInput.type = "password";
        icon.style.backgroundImage = ""; // Remove o ícone
        icon2.style.backgroundImage = ""; // Remove o ícone
    }
}

