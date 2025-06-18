//Ждем загрузку страницы с надписью согласен
let rulesInterval;
let n = 0;
rulesInterval = setInterval(() => {
  n++;
  //console.log(n);
  if (n > 20) {
    clearInterval(rulesInterval);
  }
  rules = document.getElementById("rules-content");
  //console.log(rules);
  if (rules) {
    // Подготавливаем кнопку согласен
    document.body.innerHTML = document.body.innerHTML.replace(
      'name="agree"',
      'name="agree" id="agree"'
    );
    // завершаем цикл
    clearInterval(rulesInterval);
    // Нажимаем на кнопку вход
    document.getElementById("agree").click();
  }
}, 50);
