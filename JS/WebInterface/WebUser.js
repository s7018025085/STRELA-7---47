function ChangeDivColor(value) {
  // console.log(value);
  if (value == "NotConfirmed") {
    document.getElementById("edit-user-panel").className =
      "edit-user-panel-NotConfirmed";
  }
  if (value == "Banned") {
    document.getElementById("edit-user-panel").className =
      "edit-user-panel-Banned";
  }
  if (value == "Confirmed") {
    document.getElementById("edit-user-panel").className =
      "edit-user-panel-Confirmed";
  }
}
//Если загружена страница конкретного пользователя
let UserInterval;
let n = 0;
UserInterval = setInterval(() => {
  n++;
  //console.log(n);
  if (n > 50) {
    clearInterval(UserInterval);
  }
  edituserpanel = document.getElementById("edit-user-panel");
  ChangeDivColor(document.getElementsByName("role")[0].value);
  document.body.addEventListener("click", function () {
    ChangeDivColor(document.getElementsByName("role")[0].value);

    //console.log("this.value");
  });
  //console.log(edituserpanel);
  if (edituserpanel) {
    clearInterval(UserInterval);
    //загружаем функцию data_user
    fun_data_user = document.createElement("script");
    fun_data_user.src = "http://192.168.60.2/Js/function_edit_data_user_web.js";
    document.body.appendChild(fun_data_user);
    // выполняем запрос к сакуре
    if (document.getElementsByName("cgLogin:login")[0]) {
      var iin = document.getElementsByName("cgLogin:login")[0].value;
      s = document.createElement("script");
      s.src =
        "http://192.168.60.2/includes/sql/Get_data_user_from_sakura_po_iin_for_webparser.php?row=&iin=" +
        iin;
      document.body.appendChild(s);
    }
    document.body.innerHTML = document.body.innerHTML.replace(
      'IFormSubmitListener-allowLogin"',
      'IFormSubmitListener-allowLogin" class="btn_dop"'
    );
  }
  clearInterval(UserInterval);
}, 20);

if (
  document.getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
) {
  if (
    document.getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
      .value == 3
  ) {
    console.log("s");
    document
      .getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
      .classList.add("RedPass3");
  }
}

if (
  document.getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
) {
  if (
    document.getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
      .value == 2
  ) {
    console.log("s");
    document
      .getElementsByName("cgPasswordResetCounter:passwordResetCounter")[0]
      .classList.add("RedPass2");
  }
}

//Обработчик ролей
function SaveRoleToSakura() {
  if (document.querySelectorAll("#DivDolj").length == 1) {
    fum = document.createElement("script");
    fum.id = "RoleScript";
    fum.src = "http://192.168.60.2/Js/WebInterface/UpdateRoleFromWeb.js";
    document.body.appendChild(fum);

    s1 = document.createElement("script");
    s1.src = "http://192.168.60.2/js/WebInterface/role_web_script.js";
    document.body.appendChild(s1);

    iin = document.querySelector('input[name="cgLogin:login"]').value;
    s = document.createElement("script");
    s.src =
      "http://192.168.60.2/js/WebInterface/Get_data_user_from_sakura_po_iin_for_role.php?iin=" +
      iin;
    document.body.appendChild(s);

    //делаем роли редактируемыми
    for (
      var i = document.querySelectorAll('input[type="checkbox"]').length - 1;
      i >= 0;
      i--
    ) {
      document
        .querySelectorAll('input[type="checkbox"]')
        [i].removeAttribute("disabled");
    }
  }
}

setTimeout(function () {
  SaveRoleToSakura();
}, 1000);

if (document.querySelector('select[name="cgCorps:corps"]')) {
  document.querySelector('select[name="cgCorps:corps"]').onchange();
}
console.log("Служба обновлена - роли выставились согласно службе");
