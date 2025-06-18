//Ищем загрузку страницы логина
let loginInterval;
loginInterval = setInterval(() => {
  notif_mail = document.getElementById("notif_mail");
  console.log(notif_mail);
  if (notif_mail) {
    // завершаем цикл
    clearInterval(loginInterval);
    // Нажимаем на кнопку вход
    document.getElementById("notif_mail").click();
  }
}, 50);
