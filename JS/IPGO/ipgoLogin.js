//Ищем загрузку страницы логина
let loginInterval;
loginInterval = setInterval(() => {
  login_btn = document.getElementById("login_btn");
  console.log(login_btn);
  if (login_btn) {
    chrome.runtime.sendMessage({ msg: "getDiasbled" }, function (response) {
      if (!response.disabled) {
        console.log("12212");
      }
    });

    //нажимаем на рус
    let rus = document.getElementsByClassName("t2");
    console.log(rus);
    rus[0].click();
    // заполняем поля логин пароль
    document.body.innerHTML = document.body.innerHTML.replace(
      'name="_58_login"',
      'name="_58_login" id="loginId"'
    );
    document.body.innerHTML = document.body.innerHTML.replace(
      'name="_58_password"',
      'name="_58_password" id="passId"'
    );
    let loginId = document.getElementById("loginId");
    let passId = document.getElementById("passId");
    loginId.value = "m.boichuk@mvd.gov.kz";
    passId.value = "L@tika123";
    // завершаем цикл
    clearInterval(loginInterval);
    // Нажимаем на кнопку вход
    document.getElementById("login_btn").click();
  }
}, 50);
