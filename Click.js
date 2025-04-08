var user = new Map([["123", "123"]])

function login(){
    var username = document.getElementById("login-username").value;
    var username = document.getElementById("login-password").value;

    if(user.get(username)==password){
        window.location.href="loginSuccess.html";
    }else{
        alert("Username or password is wrong.")
    }
}
function register(){
    var username = document.getElementById("register-username").value;
    var username = document.getElementById("register-password").value;

    user.set(username, password);
    alert("Register success, please login.");
    document.getElementById("register-username").value="";
    document.getElementById("register-password").value="";
    document.getElementById("register-eamil").value="";
}