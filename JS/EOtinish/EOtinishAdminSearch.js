function AddToBase(p) {
  document.getElementsByClassName("page-link")[12].click();
  alert(p);
}

function reloadPage() {
  setTimeout(function () {
    // Добавим кнопку Excel
    ExcelBtn = document.createElement("button");
    ExcelBtn.id = "ExcelBtn";
    ExcelBtn.value = "Excel";
    ExcelBtn.innerHTML = "Excel";
    ExcelBtn.setAttribute("onclick", "ParseUsers()");
    ExcelBtn.classList.add("btn-info");
    ExcelBtn.classList.add("btn");
    document
      .getElementsByClassName("back__breadcrumbs")[0]
      .appendChild(ExcelBtn);
    // вешаем обработчик на кнопку
    ExcelBtn.addEventListener("click", ParseUsers, false);

    // Добавим кнопку PDF
    PDFBtn = document.createElement("button");
    PDFBtn.id = "PDFBtn";
    PDFBtn.value = "PDF";
    PDFBtn.innerHTML = "PDF";
    PDFBtn.setAttribute("onclick", "ParseUsersPDF()");
    PDFBtn.classList.add("btn-info");
    PDFBtn.classList.add("btn");
    document.getElementsByClassName("back__breadcrumbs")[0].appendChild(PDFBtn);
    // вешаем обработчик на кнопку
    PDFBtn.addEventListener("click", clearTable, false);
  }, 2000);
}

document.addEventListener("DOMContentLoaded", reloadPage());

// Функция перебирает все страницы и добавляет пользователей в бд
function ParseUsers() {
  CountPaje =
    document.querySelectorAll(".pagination>li>a")[
      document.querySelectorAll(".pagination>li").length - 3
    ].innerText;
  Paje = 1;
  // очищаем таблицу
  s = document.createElement("script");
  s.src = "http://192.168.60.2/js/EOtinish/AddUserEOtinishToBase.php?clear=";
  document.body.appendChild(s);

  loginInterval = setInterval(function () {
    // вставляем данные в базу
    rowCount = document.querySelectorAll(
      ".table-responsive>table>tbody>tr"
    ).length;
    for (var q = 0; q < rowCount; q++) {
      row = document.querySelectorAll(".table-responsive>table>tbody>tr")[q];
      name = "";
      login = "";
      positionRu = "";
      positionKk = "";
      phone = "";
      role = "";
      organization = "";
      email = "";

      name = row.querySelectorAll("td")[0].innerText;
      organization = row.querySelectorAll("td")[1].innerText;
      role = row.querySelectorAll("td")[2].innerText;
      positionRu = row.querySelectorAll("td")[3].innerText;
      login = row.querySelectorAll("td")[4].innerText;
      phone = row.querySelectorAll("td")[5].innerText;

      s = document.createElement("script");
      s.src =
        "http://192.168.60.2/js/EOtinish/AddUserEOtinishToBase.php?name=" +
        name +
        "&login=" +
        login +
        "&positionRu=" +
        positionRu +
        "&positionKk=" +
        positionKk +
        "&phone=" +
        phone +
        "&email=" +
        email +
        "&role=" +
        role +
        "&organization=" +
        organization;
      document.body.appendChild(s);
    }

    Paje++;
    console.log(
      "Page = " +
        Paje +
        " из " +
        CountPaje +
        ". Количество добавленных строк: " +
        rowCount
    );
    if (Paje > CountPaje) {
      clearInterval(loginInterval);
      return;
    }

    // Переходим на следующую страницу
    item = document.querySelectorAll(".pagination>li").length;
    document.querySelectorAll(".pagination>li>a")[item - 2].click();
  }, 3000);
}

// Функция перебирает все страницы и на каждой странице открывает каждого пользователя и добавляет в БД
function ParseUsersPDF() {
  CountPaje =
    document.querySelectorAll(".pagination>li>a")[
      document.querySelectorAll(".pagination>li").length - 3
    ].innerText;
  Paje = 0;

  console.log("Запускаю цикл по страницам");
  loginInterval = setInterval(function () {
    setTimeout(function () {
      console.log("Задержка при загрузки страницы");
    }, 300);
    rowCount = document.querySelectorAll(
      ".table-responsive>table>tbody>tr"
    ).length;
    console.log("Всего записей на странице " + rowCount);
    user = 0;
    console.log("Запускаю цикл по пользователям на странице");

    UsersInterval = setInterval(function () {
      row = document.querySelectorAll(".table-responsive>table>tbody>tr")[user];
      //console.log('Отрабатываем пользователя номер '+user);
      td = row.querySelectorAll("td")[6];
      btnUser = td.querySelector("app-staff-new>button");
      btnUser.click();
      setTimeout(function () {
        formuser = document.querySelectorAll("form")[0];
        name = "";
        login = "";
        positionRu = "";
        positionKz = "";
        phone = "";
        role = "";
        organization = "";
        email = "";

        organization = formuser.querySelector(
          "div>ng-select>div>div>div>.ng-value-label"
        ).innerText;
        name = formuser
          .querySelectorAll(".form-group")[1]
          .querySelector(".form-control").value;
        login = formuser
          .querySelectorAll(".form-group")[2]
          .querySelector(".form-control").value;
        positionRu = formuser
          .querySelectorAll(".form-group")[3]
          .querySelector(".form-control").value;
        positionKk = formuser
          .querySelectorAll(".form-group")[4]
          .querySelector(".form-control").value;

        roles = formuser.querySelectorAll(".ng-value-label");
        for (var r = 1; r < roles.length; r++) {
          role =
            role +
            formuser.querySelectorAll(".ng-value-label")[r].innerText +
            "/";
        }

        phone = formuser
          .querySelectorAll(".form-group")[6]
          .querySelector(".form-control").value;
        email = formuser
          .querySelectorAll(".form-group")[7]
          .querySelector(".form-control").value;

        btnCalcel = document.querySelector(".btn-link-dark");
        btnCalcel.click();
        console.log(name);
        s = document.createElement("script");
        s.src =
          "http://192.168.60.2/js/EOtinish/AddUserEOtinishToBase.php?name=" +
          name +
          "&login=" +
          login +
          "&positionRu=" +
          positionRu +
          "&positionKk=" +
          positionKk +
          "&phone=" +
          phone +
          "&email=" +
          email +
          "&role=" +
          role +
          "&organization=" +
          organization;
        document.body.appendChild(s);
      }, 500);

      user++;

      if (user == rowCount) {
        clearInterval(UsersInterval);
        console.log("Это последний пользователи на странице");
      }
    }, 1000);

    Paje++;
    console.log(
      "Page = " +
        Paje +
        " из " +
        CountPaje +
        ". Количество добавленных строк: " +
        rowCount
    );
    if (Paje - 1 > CountPaje) {
      clearInterval(loginInterval);
      return;
    }

    // Переходим на следующую страницу
    if (Paje > 1) {
      item = document.querySelectorAll(".pagination>li").length;
      document.querySelectorAll(".pagination>li>a")[item - 2].click();
    }
  }, 15000);
}

function clearTable() {
  // очищаем таблицу
  console.log("Затускаю очистку таблицы");
  s = document.createElement("script");
  s.src = "http://192.168.60.2/js/EOtinish/AddUserEOtinishToBase.php?clear=";
  document.body.appendChild(s);
  console.log("Таблица очищена");
  ParseUsersPDF();
}
