console.log("LoginCrm " + document.querySelectorAll("#login>a").length);

n = 0;
function loginCRM() {
  if (document.querySelectorAll("#login>a").length == 1) {
    document.querySelector("#login>a").style = "color: #fbd7c9;";
    document.querySelector("#login>a").click();
  } else {
    n++;
    if (n < 50) {
      loginCRM();
    }
  }
}

loginCRM();
