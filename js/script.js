// ================================
// LOGIN FUNCTION
// ================================

function loginUser() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {

        alert("Login Successful ✅");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password ❌");
    }
}

// ================================
// REGISTER FUNCTION
// ================================

function registerUser() {

    let fullname = document.getElementById("fullname").value;

    let email = document.getElementById("email").value;

    let mobile = document.getElementById("mobile").value;

    let username = document.getElementById("regUsername").value;

    let password = document.getElementById("regPassword").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    // CHECK EMPTY FIELDS

    if(
        fullname === "" ||
        email === "" ||
        mobile === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === ""
    ){

        alert("Please fill all fields ⚠️");

        return;
    }

    // PASSWORD CHECK

    if(password !== confirmPassword){

        alert("Passwords do not match ❌");

        return;
    }

    alert("Registration Successful ✅");

    window.location.href = "login.html";
}

// ================================
// LOGOUT FUNCTION
// ================================

function logoutUser() {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if(confirmLogout){

        alert("Logged Out Successfully 👋");

        window.location.href = "login.html";
    }
}

// ================================
// DARK MODE FUNCTION
// ================================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");
}

// ================================
// SHOW PASSWORD FUNCTION
// ================================

function showPassword(inputId) {

    let input = document.getElementById(inputId);

    if(input.type === "password"){

        input.type = "text";

    } else {

        input.type = "password";
    }
}

// ================================
// WELCOME MESSAGE
// ================================

window.onload = function() {

    console.log("Application Project Loaded Successfully 🚀");
};
