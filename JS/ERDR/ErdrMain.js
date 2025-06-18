function Interval(id, playfunction) {
  let MInterval;
  let mx = 0;
  MInterval = setInterval(() => {
    mx++;
    if (mx > 100) {
      clearInterval(MInterval);
    }
    if (id) {
      // завершаем цикл
      clearInterval(MInterval);
      // Выполняем функцию
      playfunction();
    }
  }, 500);
}

setTimeout(function () {
  document.getElementById("r1:0:ps1::i").click();
}, 1000);
setTimeout(function () {
  document.getElementById("r1:0:cmi1").click();
}, 500);
setTimeout(function () {
  document.getElementById("r1:0:d4::close").click();
}, 2500);

// увеличиваем верхнию строку
document.body.innerHTML = document.body.innerHTML.replace(
  "position:absolute;bottom:5px;left:0px;right:0px;top:25px",
  "position:absolute;bottom:5px;left:0px;right:0px;top:67px"
);

// выравниваем отступы
// document.body.innerHTML = document.body.innerHTML.replace(
//   "top:0px;left:0px;width:463px;bottom:0px;padding:0px;border-width:0px",
//   "top:6px;left:2px;width:463px;bottom:0px;padding:0px;border-width:0px"
// );

function ADDTableUser() {
  // Добавляем панель для вывода данных сакуры
  div_tab = document.createElement("div");
  div_tab.id = "div_tab";
  div_tab.classList.add("tabs");
  input_radio1 = document.createElement("input");
  input_radio1.type = "radio";
  input_radio1.name = "inset";
  input_radio1.id = "tab1";
  input_radio1.setAttribute("checked", "");

  input_radio2 = document.createElement("input");
  input_radio2.type = "radio";
  input_radio2.name = "inset";
  input_radio2.id = "tab2";

  input_radio3 = document.createElement("input");
  input_radio3.type = "radio";
  input_radio3.name = "inset";
  input_radio3.id = "tab3";

  input_radio4 = document.createElement("input");
  input_radio4.type = "radio";
  input_radio4.name = "inset";
  input_radio4.id = "tab4";

  div_1 = document.createElement("div");
  div_1.id = "txt_1";

  div_2 = document.createElement("div");
  div_2.id = "txt_2";
  table2 = document.createElement("table");
  table2.id = "table2";
  div_2.appendChild(table2);

  div_3 = document.createElement("div");
  div_3.id = "txt_3";
  table3 = document.createElement("table");
  table3.id = "table3";
  div_3.appendChild(table3);

  div_4 = document.createElement("div");
  div_4.id = "txt_4";
  table4 = document.createElement("table");
  table4.id = "table4";
  div_4.appendChild(table4);

  label1 = document.createElement("label");
  label1.setAttribute("for", "tab1");
  label1.id = "add";
  t1 = document.createTextNode("На добавление");
  label1.appendChild(t1);

  label2 = document.createElement("label");
  label2.setAttribute("for", "tab2");
  label2.id = "razblok";
  t2 = document.createTextNode("На разблокирование");
  label2.appendChild(t2);

  label3 = document.createElement("label");
  label3.setAttribute("for", "tab3");
  label3.id = "blok";
  t3 = document.createTextNode("На блокирование");
  label3.appendChild(t3);

  label4 = document.createElement("label");
  label4.setAttribute("for", "tab4");
  label4.id = "smena";
  t4 = document.createTextNode("На смену лич. данных");
  label4.appendChild(t4);

  document.body.appendChild(div_tab);

  div_tab = document.getElementById("div_tab");
  if (div_tab) {
    div_tab.appendChild(input_radio1);
    div_tab.appendChild(label1);
    div_tab.appendChild(input_radio2);
    div_tab.appendChild(label2);
    div_tab.appendChild(input_radio3);
    div_tab.appendChild(label3);
    div_tab.appendChild(input_radio4);
    div_tab.appendChild(label4);
    div_tab.appendChild(div_1);
    div_tab.appendChild(div_2);
    div_tab.appendChild(div_3);
    div_tab.appendChild(div_4);
  }
}
console.log(document.getElementsByClassName("xkx").length);

if (document.getElementsByClassName("xkx").length == 2) {
  console.log("Это страница с вводом пароля");
} else {
  ADDTableUser();
  console.log("2");
}

s = document.createElement("script");
s.src = "http://192.168.60.2/js/ERDR/Erdr_face_rovd_otdel.js";
document.body.appendChild(s);

function editUser() {
  document.getElementById("r1:0:busEdit").click();
}

// запрашиваем данные из сакуры
function get_data() {
  fum = document.createElement("script");
  fum.src = "http://192.168.60.2/Js/users_erdr_script.js";
  document.body.appendChild(fum);

  s = document.createElement("script");
  s.src = "http://192.168.60.2/includes/sql/Get_data_user_erdr_from_sakura.php";
  document.body.appendChild(s);

  // Добавляю пользоватлям прослушевание двойного нажатия
  let tableUser = document.getElementById("r1:0:tbUsTre::db");
  let tableRow = tableUser.querySelectorAll("tbody>tr");
  for (var j = 0; j < tableRow.length; j++) {
    tableRow[j].addEventListener("dblclick", editUser);
  }
  // AnalizRovdOtdel();
}
//    get_data();
if (document.getElementsByClassName("xkx").length == 1) {
  setInterval(function () {
    get_data();
  }, 5000);
}

if (document.getElementById("r1")) {
  // запускаем цикл по отметке узлов
  setInterval(function () {
    var spani = document.querySelectorAll("span");

    for (var q = 0; q < spani.length; q++) {
      if (spani[q].textContent.match(/►/i)) {
        spani[q].className = "uzel";
      }
      if (spani[q].textContent.match(/03/i)) {
        spani[q].className = "rovd";
      }
      if (spani[q].textContent.match(/местн/i)) {
        spani[q].className = "mps";
      }
      if (spani[q].textContent.match(/участковых инспекторов/i)) {
        spani[q].className = "uchastkovii";
      }
      if (spani[q].textContent.match(/ювенал/i)) {
        spani[q].className = "uvenal";
      }
      spani[q].title = spani[q].textContent;
    }
  }, 2000);
}
// РЕАЛИЗАЦИЯ ПОИСКА
document.body.innerHTML = document.body.innerHTML.replace(
  "Администрируемые области и органы",
  '<div id = "serching" style="height: 30px;">Find </div><div id = "edit" style="height: 30px;">Edit  </div>'
);
//строка поиска
var input_search = document.createElement("input");
input_search.id = "input_search";
input_search.placeholder = "Поиск по ИИН";
input_search.style = "left:0px; bottom:0px; font-size:14px; z-index:2;";
document.getElementById("serching").appendChild(input_search);

// Найдите поле ввода
const input = document.getElementById("r1:0:tbAres:_afrFltrMdlc8::content");

// Установите значение в поле ввода
input.value = "1939*03";

// Создайте функцию для нажатия Enter
function triggerEnter() {
  const enterEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter",
  });
  input.dispatchEvent(enterEvent);
}

// Настройте MutationObserver для отслеживания появления данных в таблице
const observer = new MutationObserver((mutationsList, observer) => {
  // Ищем элемент таблицы с данными
  const tableData = document.querySelector("#div_tab");

  if (tableData) {
    // Если данные найдены, выполняем фильтрацию
    triggerEnter();
    // Останавливаем наблюдатель после выполнения фильтрации
    observer.disconnect();
  }
});

// Указываем, за какими изменениями следить
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// кнопка Найти
var find = document.createElement("input");
find.id = "find";
find.value = "Найти";
find.type = "button";
find.classList.add("neu-btn");
find.setAttribute(
  "onclick",
  "document.getElementById('r1:0:cmi1').click(); if (document.getElementById('r1:0:sbc1::content').checked!='') {document.getElementById('r1:0:sbc1::content').click()}; document.getElementById('r1:0:it1::content').value=document.getElementById('input_search').value; document.getElementById('r1:0:b2').click();"
);
//find.style = "background: #bfdaf4; height: 25px;border-top: 1px solid #95B6D4;border-right: 1px solid #95B6D4;border-bottom: 1px solid #92B3D1;border-left: 1px solid #95B6D4;border-radius: 3px;background-image: -moz-linear-gradient(top, #CCE2F6 0%, #B1D2F2 100%);margin: 2px;";
document.getElementById("serching").appendChild(find);

// кнопка Выход из поиска
var exit_find = document.createElement("input");
exit_find.id = "exit_find";
exit_find.value = "Выход из поиска";
exit_find.type = "button";
exit_find.classList.add("neu-btn");
exit_find.setAttribute(
  "onclick",
  "document.getElementById('r1:0:b3').click();"
);
//exit_find.style = "background: #bfdaf4; height: 25px;border-top: 1px solid #95B6D4;border-right: 1px solid #95B6D4;border-bottom: 1px solid #92B3D1;border-left: 1px solid #95B6D4;border-radius: 3px;background-image: -moz-linear-gradient(top, #CCE2F6 0%, #B1D2F2 100%);margin: 2px;";
document.getElementById("serching").appendChild(exit_find);

// ОБРАБОТКА РЕДАКТИРОВАНИЯ
// кнопка Редактировать
var edit_btn = document.createElement("input");
edit_btn.id = "edit_b";
edit_btn.value = "Редактировать (CTRL+Q)";
edit_btn.type = "button";
edit_btn.classList.add("neu-btn");
script =
  "document.getElementById('r1:0:busEdit').click(); " +
  "setTimeout(function(){var iframe = document.getElementsByTagName('iframe')[1]; " +
  " document.cookie = 'IIN=' + iframe.contentWindow.document.getElementById('itUserId::content').innerHTML; " +
  "iframe.contentWindow.document.getElementById('l1').click();},3000)";
edit_btn.setAttribute("onclick", script);
//edit_btn.style = "background: #bfdaf4; height: 25px;border-top: 1px solid #95B6D4;border-right: 1px solid #95B6D4;border-bottom: 1px solid #92B3D1;border-left: 1px solid #95B6D4;border-radius: 3px;background-image: -moz-linear-gradient(top, #CCE2F6 0%, #B1D2F2 100%);margin: 2px;";
document.getElementById("edit").appendChild(edit_btn);

// кнопка Отсоединить
var del_btn = document.createElement("input");
del_btn.id = "del_b";
del_btn.value = "Отсоединить (CTRL+Z)";
del_btn.type = "button";
del_btn.classList.add("neu-btn");
script =
  "document.getElementById('r1:0:busEdit').click(); " +
  "setTimeout(function(){var iframe = document.getElementsByTagName('iframe')[1]; " +
  "IIN = iframe.contentWindow.document.getElementById('itUserId::content').innerHTML; " +
  "iframe.contentWindow.document.getElementById('l2').click(); },3000); " +
  " setTimeout(function(){var iframe = document.getElementsByTagName('iframe')[1]; " +
  " iframe.contentWindow.document.getElementById('d2_ok').click(); " +
  " iframe.contentWindow.document.getElementById('b1').click(); },5000); ";
del_btn.setAttribute("onclick", script);
//del_btn.style = "background: #bfdaf4; height: 25px;border-top: 1px solid #95B6D4;border-right: 1px solid #95B6D4;border-bottom: 1px solid #92B3D1;border-left: 1px solid #95B6D4;border-radius: 3px;background-image: -moz-linear-gradient(top, #CCE2F6 0%, #B1D2F2 100%);margin: 2px;";
document.getElementById("edit").appendChild(del_btn);

//Горячие клавиши
document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode == "Q".charCodeAt(0)) {
    document.getElementById("edit_b").click();
  }
  if (e.ctrlKey && e.keyCode == "Z".charCodeAt(0)) {
    document.getElementById("del_b").click();
  }
};

//Обработчик ролей
function SaveRoleToSakura() {
  // ищем чекнутые чекбоксы
  /*let checkboxRole = iframe.contentWindow.document.querySelectorAll('input[type="checkbox"][checked=""]');
		for (var i = iframe.contentWindow.document.querySelectorAll('input[type="checkbox"][checked=""]').length - 1; i >= 0; i--) 
		{
			//alert(checkboxRole[i].id);
			
		}*/
  iframe = document.getElementsByTagName("iframe")[1];
  iframeDoc = iframe.contentWindow.document;
  if (iframeDoc.querySelectorAll("#UpdateRS").length == 1) {
  } else {
    fum = iframeDoc.createElement("script");
    fum.id = "RoleScript";
    fum.src = "http://192.168.60.2/Js/ERDR/UpdateRoleFromERDR.js";
    iframeDoc.body.appendChild(fum);
    //console.log('Добавлен скрипт обработки ролей');

    s1 = iframeDoc.createElement("script");
    s1.src = "http://192.168.60.2/js/ERDR/role_erdr_script.js";
    iframeDoc.body.appendChild(s1);

    iin = iframeDoc.getElementById("itUserId::content").innerHTML;
    s = iframeDoc.createElement("script");
    s.src =
      "http://192.168.60.2/js/ERDR/Get_data_user_from_sakura_po_iin_for_role.php?iin=" +
      iin;
    iframeDoc.body.appendChild(s);
  }
}

//console.log('Открыт фрем с ролями');

let MInterval = setInterval(() => {
  if (document.getElementsByTagName("iframe").length > 2) {
    //console.log('Открыт фрем с ролями');
    SaveRoleToSakura();
    //clearInterval(MInterval);
  }
}, 700);
