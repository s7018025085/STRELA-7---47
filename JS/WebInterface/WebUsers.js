//переходим на пользователей
let UsersInterval;
let n = 0;
UsersInterval = setInterval(() => {
  n++;
  //console.log(n);
  if (n > 100) {
    clearInterval(UsersInterval);
  }
  webUsersWrapper = document.getElementById("webUsersWrapper");

  //console.log(webUsersWrapper);
  if (webUsersWrapper) {
    //document.body.innerHTML = document.body.innerHTML.replace('Выберите группу пользователей', 'Поиск');
    document.body.innerHTML = document.body.innerHTML.replace("Web", "");
    document.body.innerHTML = document.body.innerHTML.replace("ТЕТРА", "");
    document.body.innerHTML = document.body.innerHTML.replace(
      "Редактировать",
      "Edit"
    );
    document.body.innerHTML = document.body.innerHTML.replace("Удалить", "Del");
    document.body.innerHTML = document.body.innerHTML.replace(
      "Срок действия пароля",
      "Срок пароль"
    );

    showDeleted =
      "document.getElementById('isDeleted').value = '1'; document.getElementById('usersForm').submit();";

    document.body.innerHTML = document.body.innerHTML.replace(
      "Удаленные",
      '<a href=# onclick="' + showDeleted + '">Удаленные</a>'
    );

    //загружаем функцию data_user
    fun_data_user = document.createElement("script");
    fun_data_user.src = "http://192.168.60.2/Js/function_data_user_web.js";
    document.body.appendChild(fun_data_user);

    //загружаем скрипт добавления селекта с активными пользователями сакуры
    fun_data_user = document.createElement("script");
    fun_data_user.src =
      "http://192.168.60.2/Js/WebInterface/UsersListSakura.js";
    document.body.appendChild(fun_data_user);

    // Добавляем строку поиска пользователей
    let input_search = document.createElement("input");
    input_search.id = "input_search";
    input_search.setAttribute("placeholder", "Поиск по Web");
    document.body.appendChild(input_search);

    // завершаем цикл
    clearInterval(UsersInterval);
    // Нажимаем на кнопку вход
    // document.getElementById('agree').click();
  }
}, 20);
