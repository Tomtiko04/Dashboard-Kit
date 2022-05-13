console.log("Hello World!!");


const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})


// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});
//for validation

function validate() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var check = /[DEF]253[10-40][1-6]/i

    if (email.trim() == "" || pass.trim() == "") {
        alert("Missing credentials");
        return false;

    } else if (!(email == "ogunneyeoyinkansola@gmail.com")) {
        alert("Account does not exist");
        return false;
    } else {
        alert("sign-in successful");
        return true;
    }

    if ((check.test(pass))) {
        alert("Sign-in successful")
    } else {
        alert("Wrong password")
        return false;
    }
}

//for validating signin form

function validate2() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPass = document.getElementById("userPass").value;
    var userPass2 = document.getElementById("userPass2").value;
    if (userName.trim() == "" || userEmail.trim() == "" || userPass.trim() == "" || userPass2.trim() == "") {
        alert("please fill out this form well");
        return false;
    } else if (!(userPass == userPass2)) {
        alert("Password does not match");
        return false;

    } else {
        alert("Account sucessfully created");
        return true;
    }
}