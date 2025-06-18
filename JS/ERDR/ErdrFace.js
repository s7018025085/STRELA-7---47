// весь код выполняем с задержкой 7 секунд
setTimeout(function () {
  function get_data() {
    var iframe = window.frames[0];
    var iin = iframe.document.getElementById("itIin::content").value;

    fum = document.createElement("script");
    fum.src = "http://192.168.60.2/Js/face_script.js";
    document.body.appendChild(fum);

    s = document.createElement("script");
    s.src =
      "http://192.168.60.2/includes/sql/Get_data_user_from_sakura_po_iin.php?iin=" +
      iin;
    document.body.appendChild(s);
  }

  function get_data_kz() {
    var iframe = window.frames[0];
    var iin = iframe.document.getElementById("itIin::content").value;

    fun_kz = document.createElement("script");
    fun_kz.src = "http://192.168.60.2/Js/ERDR/Erdr_face_script_kz.js";
    document.body.appendChild(fun_kz);

    s = document.createElement("script");
    s.src =
      "http://192.168.60.2/Js/ERDR/Get_data_user_from_sakura_po_iin_for_erdr_kz.php?iin=" +
      iin;
    document.body.appendChild(s);
  }

  function get_data_ru() {
    var iframe = window.frames[0];
    var iin = iframe.document.getElementById("itIin::content").value;

    fun_kz = document.createElement("script");
    fun_kz.src = "http://192.168.60.2/Js/ERDR/Erdr_face_script_ru.js";
    document.body.appendChild(fun_kz);

    s = document.createElement("script");
    s.src =
      "http://192.168.60.2/Js/ERDR/Get_data_user_from_sakura_po_iin_for_erdr_ru.php?iin=" +
      iin;
    document.body.appendChild(s);
  }

  function get_data_qq() {
    var iframe = window.frames[0];
    var iin = iframe.document.getElementById("itIin::content").value;

    fun_kz = document.createElement("script");
    fun_kz.src = "http://192.168.60.2/Js/ERDR/Erdr_face_script_qq.js";
    document.body.appendChild(fun_kz);

    s = document.createElement("script");
    s.src =
      "http://192.168.60.2/Js/ERDR/Get_data_user_from_sakura_po_iin_for_erdr_qq.php?iin=" +
      iin;
    document.body.appendChild(s);
  }

  top.window.resizeTo(screen.availWidth, screen.availHeight);
  top.window.moveTo(1, 1);

  var iframe = window.frames[0];
  // увеличиваю высоту верхнего блока
  //iframe.document.getElementById('psl1::t').style.height = 200+'px';
  //iframe.document.getElementById('pfl4').style.width = 220+'px';

  // сокращаем надпись Номер заявки Колганат
  //iframe.document.body.innerHTML = iframe.document.body.innerHTML.replace(
  //'Номер заявки Колганат',
  //'№ Колганат');

  find = iframe.document.createElement("input");
  find.id = "synh";
  find.value = "Синхронизировать";
  find.type = "button";
  find.classList.add("synch_btn");

  find.addEventListener("click", get_data);
  iframe.document.getElementById("d1").appendChild(find);

  iframe.document
    .getElementById("bEdit")
    .addEventListener("click", EditColorTable);
  // Выделяем цветом таблицу при редактировании
  function EditColorTable() {
    iframe.document.getElementById("pgl6").style = "background: #fbd7c9;";
    //iframe.document.getElementById('pbFilter').style = "background: #fbd7c9;";
  }

  // Создаем и добавляем конопку Корректировать KZ
  Edit_KZ = iframe.document.createElement("input");
  Edit_KZ.id = "synch_btn_kz";
  Edit_KZ.value = "Edit KZ";
  Edit_KZ.type = "button";
  Edit_KZ.classList.add("Edit_btn_kz");

  Edit_KZ.addEventListener("click", get_data_kz);
  iframe.document.getElementById("d1").appendChild(Edit_KZ);

  // Создаем и добавляем конопку Корректировать RU
  Edit_RU = iframe.document.createElement("input");
  Edit_RU.id = "synch_btn_ru";
  Edit_RU.value = "Edit RU";
  Edit_RU.type = "button";
  Edit_RU.classList.add("Edit_btn_ru");

  Edit_RU.addEventListener("click", get_data_ru);
  iframe.document.getElementById("d1").appendChild(Edit_RU);

  // Создаем и добавляем конопку Корректировать KZ
  Edit_QQ = iframe.document.createElement("input");
  Edit_QQ.id = "synch_btn_qq";
  Edit_QQ.value = "Edit QQ";
  Edit_QQ.type = "button";
  Edit_QQ.classList.add("Edit_btn_qq");

  Edit_QQ.addEventListener("click", get_data_qq);
  iframe.document.getElementById("d1").appendChild(Edit_QQ);

  scr = document.createElement("script");
  scr.src = "http://192.168.60.2/Js/onchange_iin.js";
  iframe.document.body.appendChild(scr);

  // Добавляем панель для вывода данных сакуры

  div_tab = iframe.document.createElement("div");
  div_tab.id = "div_tab";
  div_tab.classList.add("tabs");

  input_radio1 = iframe.document.createElement("input");
  input_radio1.type = "radio";
  input_radio1.name = "inset";
  input_radio1.id = "tab1";
  input_radio1.setAttribute("checked", "");

  input_radio2 = iframe.document.createElement("input");
  input_radio2.type = "radio";
  input_radio2.name = "inset";
  input_radio2.id = "tab2";

  input_radio3 = iframe.document.createElement("input");
  input_radio3.type = "radio";
  input_radio3.name = "inset";
  input_radio3.id = "tab3";

  input_radio4 = iframe.document.createElement("input");
  input_radio4.type = "radio";
  input_radio4.name = "inset";
  input_radio4.id = "tab4";

  div_1 = iframe.document.createElement("div");
  div_1.id = "txt_1";

  div_2 = iframe.document.createElement("div");
  div_2.id = "txt_2";
  table2 = document.createElement("table");
  table2.id = "table2";
  div_2.appendChild(table2);

  div_3 = iframe.document.createElement("div");
  div_3.id = "txt_3";
  table3 = document.createElement("table");
  table3.id = "table3";
  div_3.appendChild(table3);

  div_4 = iframe.document.createElement("div");
  div_4.id = "txt_4";
  table4 = document.createElement("table");
  table4.id = "table4";
  div_4.appendChild(table4);

  label1 = iframe.document.createElement("label");
  label1.setAttribute("for", "tab1");
  label1.id = "add";
  t1 = iframe.document.createTextNode("На добавление");
  label1.appendChild(t1);

  label2 = iframe.document.createElement("label");
  label2.setAttribute("for", "tab2");
  label2.id = "razblok";
  t2 = iframe.document.createTextNode("На разблокирование");
  label2.appendChild(t2);

  label3 = iframe.document.createElement("label");
  label3.setAttribute("for", "tab3");
  label3.id = "blok";
  t3 = iframe.document.createTextNode("На блокирование");
  label3.appendChild(t3);

  label4 = iframe.document.createElement("label");
  label4.setAttribute("for", "tab4");
  label4.id = "smena";
  t4 = iframe.document.createTextNode("На смену лич. данных");
  label4.appendChild(t4);

  iframe.document.body.appendChild(div_tab);

  div_tab = iframe.document.getElementById("div_tab");
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

  csss = iframe.document.createElement("link");
  csss.rel = "stylesheet";
  csss.type = "text/css";
  csss.href = "http://192.168.60.2/CSS/erdr_face.css";
  iframe.document.body.appendChild(csss);

  // Заполнить из куки ИИН
  function set_iin() {
    cookie = document.createElement("script");
    cookie.src = "http://192.168.60.2/Js/IIN_cookie.js";
    document.body.appendChild(cookie);
  }
  setTimeout(function () {
    set_iin();
  }, 1000);

  // запрашиваем данные из сакуры
  function get_data_sakura() {
    fum = iframe.document.createElement("script");
    fum.src = "http://192.168.60.2/Js/users_erdr_script.js";
    iframe.document.body.appendChild(fum);

    s = iframe.document.createElement("script");
    s.src =
      "http://192.168.60.2/includes/sql/Get_data_user_erdr_from_sakura.php";

    iframe.document.body.appendChild(s);
  }

  get_data_sakura();

  checkFio = document.createElement("script");
  checkFio.src = "http://192.168.60.2/Js/check_erdr_fio.js";
  document.body.appendChild(checkFio);
}, 3000);
