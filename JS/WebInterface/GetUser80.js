console.log("Загружен скрипт GetUser80.js");

// Функция для получения данных из API
async function fetchUserData() {
  try {
    const response = await fetch(
      "http://192.168.60.2/includes/Parsers/Web/SQL/Get_user_80.php"
    );
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    displayDataInTable(data);
  } catch (error) {
    console.error("Ошибка получения данных:", error);
  }
}

// Функция для отображения данных в таблице
function displayDataInTable(data) {
  const tableContainer = document.createElement("div");
  tableContainer.style.display = "none"; // Изначально скрыто
  tableContainer.style.position = "fixed";
  tableContainer.style.top = "50%";
  tableContainer.style.left = "50%";
  tableContainer.style.transform = "translate(-50%, -50%)";
  tableContainer.style.backgroundColor = "#fff";
  tableContainer.style.border = "1px solid #000";
  tableContainer.style.zIndex = "9999";
  tableContainer.style.overflowY = "auto"; // Прокрутка
  tableContainer.style.maxHeight = "500px"; // Ограничение высоты
  tableContainer.style.transition = "opacity 0.5s ease"; // Анимация появления
  tableContainer.style.opacity = 0; // Начальное состояние
  tableContainer.style.padding = "7px";
  tableContainer.style.borderRadius = "5px";
  tableContainer.style.backgroundColor = "antiquewhite";

  tableContainer.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 7px;">
            <thead>
                <tr>
                    <th style="border: 1px solid #000;">Логин</th>
                    <th style="border: 1px solid #000;">ФИО</th>
                    <th style="border: 1px solid #000;">Срок действия пароля</th>
                </tr>
            </thead>
            <tbody>
                ${data
                  .map(
                    (row) => `
                    <tr>
                        <td class="login-cell" style="border: 1px solid #000; background-color: ${
                          row.colorStatusDoc
                        };cursor: pointer;">${row.Логин}</td>
                        <td style="border: 1px solid #000; background-color:${
                          row.slvstatususerColor
                        };">${
                      row["Фамилия"] + " " + row["Имя"] + " " + row["Отчество"]
                    }</td>
                        <td style="border: 1px solid #000;">${
                          row["Срок действия пароля"]
                        }</td>
                    </tr>
                `
                  )
                  .join("")}
            </tbody>
        </table>
        <button id="closeTableBtn" style="margin-top: 10px;">Закрыть</button>
    `;

  document.body.appendChild(tableContainer);

  // Показ таблицы с анимацией
  const showTableBtn = document.createElement("button");
  showTableBtn.textContent = "Пароль Web-интерфейсе просрочен более 80 дней";
  showTableBtn.style.position = "fixed";
  showTableBtn.style.top = "33px";
  showTableBtn.style.right = "10px";
  showTableBtn.style.zIndex = "10000";
  document.body.appendChild(showTableBtn);

  showTableBtn.addEventListener("click", () => {
    tableContainer.style.display = "block";
    setTimeout(() => {
      tableContainer.style.opacity = 1; // Плавное появление
    }, 10); // Задержка для активации анимации
  });

  // Закрытие таблицы
  const closeTableBtn = document.getElementById("closeTableBtn");
  closeTableBtn.addEventListener("click", () => {
    tableContainer.style.opacity = 0; // Плавное исчезновение
    setTimeout(() => {
      tableContainer.style.display = "none";
    }, 500); // Задержка, совпадающая с длительностью анимации
  });

  //Функция поиска
  function find_web() {
    iin = document.getElementById("input_search").value;
    // Выбираем всех пользователей
    selectElement = document.getElementsByClassName("select-role")[0];
    optionArray = Array.from(selectElement.options);
    foundOption = optionArray.find((option) => option.text === "Все");
    foundOption.selected = true;
    // Вставляем значение в поле логин
    document.querySelector('input[name="login"]').value = iin;
    // Нажимаем кнопку поиск
    document.querySelector("input.btn-primary").click();
  }

  // Заполнение инпута при клике на логин
  document.querySelectorAll(".login-cell").forEach((cell) => {
    cell.addEventListener("click", (event) => {
      const loginValue = event.target.textContent;
      const inputElement = document.getElementById("input_search"); // Убедитесь, что селектор корректен
      if (inputElement) {
        inputElement.value = loginValue;
        //добавляем IIN в локал сторейдж что нужно сразу открыть пользователя
        localStorage.setItem("IIN", loginValue);
        find_web();
      }
    });
  });
}

// Запуск функции получения данных
fetchUserData();
// Если логин забит в форме поиска и в таблице ответа 1 пользователь то открываем его сразу
function OpenUser() {
  const rows = document.querySelectorAll(".table>tbody>tr");
  const IIN = localStorage.getItem("IIN");
  const Login = document.querySelector('input[name="login"]').value;
  if (rows.length === 1 && IIN === Login && IIN != "") {
    const buttonUser = document.querySelectorAll(
      ".table>tbody>tr>td>span>center>a"
    )[0];
    if (buttonUser) {
      localStorage.setItem("IIN", "");
      buttonUser.click();
    }
  }
}

OpenUser();
