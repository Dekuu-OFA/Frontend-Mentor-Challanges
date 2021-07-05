var firstName = document.querySelector(".first-name");
var lastName = document.querySelector(".last-name");
var email = document.querySelector(".email");
var password = document.querySelector(".password");

document.querySelector(".formm button").addEventListener("click", check );

function check(){

  if (firstName.value == "") {
    error (".first-name", ".error-first");
    error(".last-name", ".error-img-first");
  }

  if(lastName.value == ""){
    error(".last-name", ".error-last");
    error(".last-name", ".error-img-last");
  }

  if (password.value==""){
    error(".password", ".error-psw");
    error(".password", ".error-img-psw");
  }


  // if(email.value.match(re)){
  //   alert("YAAAAAAA")
  // }
 valEmail()
}

function error(x, y) {
    document.querySelector(y).style.display = "block";
}

function valEmail(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if  (re.test(email.value)){
    return true;
  }else{
    errorEmail();
  }
}

function errorEmail(){
  document.querySelector(".error-mail").style.display = "block";
  document.querySelector(".error-img-mail").style.display = "block";
  email.setAttribute("placeholder", "email@example/com") ;
}