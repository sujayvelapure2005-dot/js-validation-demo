function validateEmail() {
    var email = document.getElementById("email").value;
    var msg = document.getElementById("emailMsg");
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        msg.innerHTML = "Valid Email ✔";
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Invalid Email ✖";
        msg.style.color = "red";
    }
}

function checkStrength() {
    var pwd = document.getElementById("password").value;
    var msg = document.getElementById("strengthMsg");

    if (pwd.length < 6) {
        msg.innerHTML = "Weak Password";
        msg.style.color = "red";
    } else if (pwd.match(/[A-Z]/) && pwd.match(/[0-9]/)) {
        msg.innerHTML = "Strong Password";
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Medium Password";
        msg.style.color = "orange";
    }
}

function setCookie() {
    document.cookie = "user=Student";
    alert("Cookie Set Successfully");
}

function readCookie() {
    document.getElementById("cookieMsg").innerHTML = document.cookie;
}

function setSession() {
    sessionStorage.setItem("branch", "Engineering");
    alert("Session Stored");
}

function readSession() {
    document.getElementById("sessionMsg").innerHTML =
        sessionStorage.getItem("branch");
}
