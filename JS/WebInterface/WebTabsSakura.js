//Если загружена страница пользователей
let tabInterval;
let k = 0;
tabInterval = setInterval(() => {
  k++;
  if (k > 50) {
    clearInterval(tabInterval);
  }
  usersForm = document.getElementById("usersForm");
  if (usersForm) {
    clearInterval(tabInterval);

    // Добавляем панель для вывода данных сакуры
    div_control = document.createElement("div");
    div_control.id = "div_control";

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
    t1 = document.createTextNode("На обнуление");
    //label1.classList.add('label1');
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

    document.body.appendChild(div_control);
    document.getElementById("div_control").appendChild(div_tab);

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
    get_data();
  }
}, 20);

function get_data() {
  fum = document.createElement("script");
  fum.src = "http://192.168.60.2/Js/users_web_script.js";
  document.body.appendChild(fum);
  s = document.createElement("script");
  s.src = "http://192.168.60.2/includes/sql/Get_data_user_web_from_sakura.php";
  setTimeout(function () {
    document.body.appendChild(s);
  }, 300);
  //console.log(s);
}
