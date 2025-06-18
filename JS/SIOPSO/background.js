console.log("запущен скрипт background");

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Получено сообщение:", message); // Добавляем вывод сообщения для проверки
  if (message.type === "sendDataToServer") {
    const jsonData = message.data;

    console.log("Получены данные для отправки на сервер:", jsonData); // Отладочный вывод

    sendDataToServer(jsonData)
      .then(() => {
        console.log("Данные успешно сохранены в БД"); // Подтверждение успеха
        sendResponse({ status: "Данные успешно сохранены в БД" });
      })
      .catch((error) => {
        console.error("Ошибка при сохранении в БД:", error); // Логирование ошибки
        sendResponse({ status: "Ошибка при сохранении в БД", error: error });
      });

    return true; // Указывает, что ответ будет асинхронным
  }
});

function sendDataToServer(data) {
  return fetch("http://192.168.60.2/includes/Parsers/SIOPSO/save_data.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  })
    .then((response) => response.text()) // Получаем как текст
    .then((text) => {
      try {
        const jsonResponse = JSON.parse(text); // Пробуем преобразовать в JSON
        console.log("Response:", jsonResponse);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        console.error("Raw response:", text); // Выведем сырой ответ для диагностики
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      throw error; // Пробрасываем ошибку для обработки
    });
}
