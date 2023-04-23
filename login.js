function LoginValidation() {
    let UserName = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
  
    localStorage.setItem("UserName1", "Admin");
    localStorage.setItem("Password1", "Adminpass");
    localStorage.setItem("UserName2", "GreatLearning");
    localStorage.setItem("Password2", "GreatL@12");
  
    let UserName1 = localStorage.getItem("UserName1");
    let Password1 = localStorage.getItem("Password1");
    let UserName2 = localStorage.getItem("UserName2");
    let Password2 = localStorage.getItem("Password2");
  
    if (UserName === UserName1 && Password === Password1) {
        alert("Login Successful");
        window.location.href = "Resume.html";
    } else if (UserName === UserName2 && Password === Password2) {
        alert("Login Successful");
        window.location.href = "Resume.html";
    } else {
        alert("!!! Invalid username/password ");
    }
  }

let button = document.getElementById("login");
button.addEventListener('click',LoginValidation);

  
  function restrictBackpage() {
    window.history.forward();
  }
  setTimeout("restrictBackpage()", 0);
  window.onunload = function () {
    null;
  };