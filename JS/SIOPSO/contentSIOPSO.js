console.log("Загружен скрипт contentSIOPSO");

// Создаем кнопку
const button = document.createElement("button");
button.innerText = "Запросить JSON";
button.id = "request-json";
button.style.position = "fixed";
button.style.bottom = "10px";
button.style.right = "10px";
button.style.zIndex = 1000;

if (document.getElementById("profile-img")) {
  document.body.appendChild(button);
}
// Обработчик нажатия кнопки
button.addEventListener("click", async () => {
  async function clearTable() {
    try {
      const response = await fetch(
        "http://192.168.60.2/includes/Parsers/SIOPSO/clear_table.php",
        {
          method: "GET",
        }
      );

      const result = await response.json();
      console.log("Очистка таблицы:", result);
    } catch (error) {
      console.error("Ошибка при очистке таблицы:", error);
    }
  }

  await clearTable(); // Очищаем таблицу перед обработкой

  const organCodes = [
    "248",
    "291",
    "703",
    "704",
    "295",
    "294",
    "292",
    "296",
    "581",
    "297",
    "298",
    "476",
    "293",
    "299",
    "301",
    "300",
    "302",
    "303",
    "304",
    "305",
    "306",
    "308",
    "307",
    "4023",
  ];

  //const organCode = prompt("Введите код органа:");

  for (const organCode of organCodes) {
    const url = `https://10.61.209.53:8443/admin/userlist?sEcho=1&iColumns=9&iDisplayStart=0&iDisplayLength=3000&mDataProp_0=0&bSortable_0=true&mDataProp_1=1&bSortable_1=true&mDataProp_2=2&bSortable_2=true&mDataProp_3=3&bSortable_3=true&mDataProp_4=4&bSortable_4=true&mDataProp_5=5&bSortable_5=true&mDataProp_6=6&bSortable_6=true&mDataProp_7=7&bSortable_7=true&mDataProp_8=8&bSortable_8=true&iSortCol_0=0&sSortDir_0=asc&iSortingCols=1&cinfo=&organization=${organCode}&group=&status=1&_=1547025929495`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Добавляем поля "статус" и "регион" в каждый элемент массива данных
      const status = "1"; // Например, если статус одинаков для всех
      const region = organCode; // Пример региона

      // Модифицируем каждый элемент массива данных
      data.aaData = data.aaData.map((item) => {
        return {
          ...item,
          status: status,
          region: region,
        };
      });

      console.log({ jsonData: data }); // Отладочный вывод

      browser.storage.local.set({ jsonData: data }, () => {
        console.log("Данные сохранены в локальном хранилище.");
      });

      browser.runtime.sendMessage(
        {
          type: "sendDataToServer",
          data: data,
        },
        (response) => {
          console.log("Ответ от background.js:", response); // Выводим ответ для проверки
        }
      );
    } catch (error) {
      console.error("Ошибка при запросе JSON:", error);
    }
  }

  for (const organCode of organCodes) {
    const url = `https://10.61.209.53:8443/admin/userlist?sEcho=1&iColumns=9&iDisplayStart=0&iDisplayLength=3000&mDataProp_0=0&bSortable_0=true&mDataProp_1=1&bSortable_1=true&mDataProp_2=2&bSortable_2=true&mDataProp_3=3&bSortable_3=true&mDataProp_4=4&bSortable_4=true&mDataProp_5=5&bSortable_5=true&mDataProp_6=6&bSortable_6=true&mDataProp_7=7&bSortable_7=true&mDataProp_8=8&bSortable_8=true&iSortCol_0=0&sSortDir_0=asc&iSortingCols=1&cinfo=&organization=${organCode}&group=&status=3&_=1547025929495`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Добавляем поля "статус" и "регион" в каждый элемент массива данных
      const status = "3"; // Например, если статус одинаков для всех
      const region = organCode; // Пример региона

      // Модифицируем каждый элемент массива данных
      data.aaData = data.aaData.map((item) => {
        return {
          ...item,
          status: status,
          region: region,
        };
      });

      console.log({ jsonData: data }); // Отладочный вывод

      browser.storage.local.set({ jsonData: data }, () => {
        console.log("Данные сохранены в локальном хранилище.");
      });

      browser.runtime.sendMessage(
        {
          type: "sendDataToServer",
          data: data,
        },
        (response) => {
          console.log("Ответ от background.js:", response); // Выводим ответ для проверки
        }
      );
    } catch (error) {
      console.error("Ошибка при запросе JSON:", error);
    }
  }
});

//https://10.61.209.53:8443/admin/userlist?sEcho=1&iColumns=9&iDisplayStart=0&iDisplayLength=3000&mDataProp_0=0&bSortable_0=true&mDataProp_1=1&bSortable_1=true&mDataProp_2=2&bSortable_2=true&mDataProp_3=3&bSortable_3=true&mDataProp_4=4&bSortable_4=true&mDataProp_5=5&bSortable_5=true&mDataProp_6=6&bSortable_6=true&mDataProp_7=7&bSortable_7=true&mDataProp_8=8&bSortable_8=true&iSortCol_0=0&sSortDir_0=asc&iSortingCols=1&cinfo=&organization=".$region[$r]."&group=&status=1&_=1547025929495
