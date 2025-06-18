console.log("скрипт main 1C");

function waitForButton() {
  const checkButton = setInterval(() => {
    const authWindow = document.querySelector("#authWindow");
    const button = document.querySelector(".okButton");
    if (authWindow && button) {
      const style = window.getComputedStyle(authWindow);
      if (style.display != "none") {
        button.click();
        clearInterval(checkButton);
      }
    }
  }, 100); // Проверяем каждые 100мс
}

// Запускаем при загрузке
waitForButton();

fum = document.createElement("script");
fum.src = "http://192.168.60.2/Js/OdinC/Del_user_from_OdinC.js";
document.body.appendChild(fum);
