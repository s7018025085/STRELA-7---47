//Ждем загрузку страницы логина
let loginInterval;
let e = 0;
loginInterval = setInterval(() => {
  dsPassword = document.getElementById("ds_password"); //console.log(dsPassword);
  e++;
  if (e > 50) {
    clearInterval(loginInterval);
  } //console.log(e);
  if (dsPassword) {
    //console.log('1');

    //заполняем поле пароль к сертификату
    setTimeout(function () {
      document.getElementById("ds_password::content").value = "12345678";
    }, 150);
    //присваиваем кнопке Прочитать носитель ID
    //document.body.innerHTML = document.body.innerHTML.replace(
    //	'class="xg7"',   'class="xg7" id="nositel"');
    //Нажимаем на кнопку Прочитать носитель
    //setTimeout(function(){document.getElementById('nositel').click();},300);
    // завершаем цикл
    clearInterval(loginInterval);
    //Нажимаем на кнопку Вход
    //setTimeout(function(){document.getElementById('signer_signButton').click();},4000);
  }
}, 50);
