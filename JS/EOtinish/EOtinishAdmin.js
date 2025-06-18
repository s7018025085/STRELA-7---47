function reloadPage() {
  ss = document.getElementsByTagName("a");
  for (var i = ss.length - 1; i >= 0; i--) {
    ss[i].innerHTML = ss[i].innerHTML.replaceAll(
      "Государственное учреждение",
      ""
    );
    ss[i].innerHTML = ss[i].innerHTML.replaceAll(
      " Департамента полиции Костанайской области Министерства внутренних дел Республики Казахстан",
      ""
    );
    ss[i].innerHTML = ss[i].innerHTML.replaceAll(
      " ДП Костанайской области",
      ""
    );
    ss[i].innerHTML = ss[i].innerHTML.replaceAll('"Отдел полиции', "ОП ");
    ss[i].innerHTML = ss[i].innerHTML.replaceAll('"Управление полиции ', "УП ");
    ss[i].innerHTML = ss[i].innerHTML.replaceAll("города", "г.");
    ss[i].innerHTML = ss[i].innerHTML.replaceAll("района", "");
    ss[i].innerHTML = ss[i].innerHTML.replaceAll('"', "");
  }

  div_ngcontent = document.querySelectorAll("table>tbody>tr>td>div");
  for (var j = div_ngcontent.length - 1; j >= 0; j--) {
    if (div_ngcontent[j].innerHTML == "Исполнитель") {
      div_ngcontent[j].style =
        "height: 16px; background: #7cffd3;display: inline-block;";
    }
    if (div_ngcontent[j].innerHTML == "Руководитель") {
      div_ngcontent[j].style =
        "font-style: italic; font-weight: 700;height: 16px; background: #fd00008c;color: black;display: inline-block;";
    }
    if (div_ngcontent[j].innerHTML == "Регистратор") {
      div_ngcontent[j].style =
        "height: 16px; background: #267d7d;color: white;display: inline-block;";
    }
    if (div_ngcontent[j].innerHTML == "Контролер") {
      div_ngcontent[j].style =
        "height: 16px; background: #ff6c00;color: black;display: inline-block;";
    }
    if (div_ngcontent[j].innerHTML == "Администратор ГО") {
      div_ngcontent[j].style =
        "height: 16px; background: #f00;color: white;display: inline-block;";
    }
  }

  // Добавим кнопку переход на страницу поиска
  if (!document.getElementById("aaa")) {
    aBtn = document.createElement("a");
    aBtn.id = "aaa";
    aBtn.href = "http://10.61.140.66/admin/search";
    aBtn.innerHTML = " Перейти списку пользователей";
    aBtn.classList.add("btn-info");
    aBtn.classList.add("btn");
    document.getElementsByClassName("back__breadcrumbs")[0].appendChild(aBtn);
  }
}

//document.addEventListener("DOMContentLoaded", reloadPage());
loginInterval = setInterval(function () {
  reloadPage();
}, 1000);

function AddInfoUserSakura() {
  divModal = document.querySelector(".modal-body");
  // Добавим dvi Sakura

  if (document.getElementsByClassName("DivSakura").length == 0) {
    DivSakura = document.createElement("div");
    DivSakura.id = "DivSakura";
    DivSakura.classList.add("DivSakura");
    divModal.appendChild(DivSakura);

    formuser = document.querySelectorAll("form")[0];
    iin = formuser
      .querySelectorAll(".form-group")[2]
      .querySelector(".form-control").value;
    var y = new XMLHttpRequest();
    url = "http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin=" + iin;
    y.open("GET", url, true);
    y.onload = function () {
      if (y.status != 200) {
        // обработать ошибку
        DivSakura.innerHTML = "Ошибка получения данных";
      } else {
        // вывести результат
        DivSakura.innerHTML = y.responseText;
      }
    };
    y.onerror = function (e) {
      console.error(y.statusText);
    };
    y.send(null);

    /*
			x = new XMLHttpRequest();
			url = "http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin="+iin;
			//console.log(x.open('GET', url));
			x.open('GET', url, true);
			console.log(x.onreadystatechange);
			x.onload = function()
		    { if (x.status != 200) {  // обработать ошибку
		        DivSakura.innerHTML= 'Ошибка получения данных';
		      } else {  // вывести результат
		        DivSakura.innerHTML= x.responseText;       
		      }   
		    }   
		    x.send(null);*/

    //alert(iin);
    /*s = document.createElement('script');
			s.src="http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin="+iin;
			divModal.appendChild(s);	*/

    /*			s = document.createElement('script');
			s.src="jquery-3.6.0.min.js";
			divModal.appendChild(s);	*/

    //	$.get("http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin="+iin, function(data){DivSakura.innerHTML=data});

    /*		$.ajax({
				type: "GET",
				url: "http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin="+iin,
				dataType: 'html',
				cache: false,
				async: false,
				success: function(){
					console.log('jr');
				}
			});*/
  }
}

function getData() {
  divModal = document.querySelector(".modal-body");
  // Добавим dvi Sakura

  if (document.getElementsByClassName("DivSakura").length > 0) {
    formuser = document.querySelectorAll("form")[0];
    iin = formuser
      .querySelectorAll(".form-group")[2]
      .querySelector(".form-control").value;
    var y = new XMLHttpRequest();
    url = "http://192.168.60.2/js/EOtinish/GetUserSakura.php?iin='" + iin + "'";
    url = "http://192.168.60.2/js/EOtinish/GetUserSakura.php";
    y.Open("Get", url, false);
    y.onload = function () {
      if (y.status != 200) {
        // обработать ошибку
        DivSakura.innerHTML = "Ошибка получения данных";
      } else {
        // вывести результат
        DivSakura.innerHTML = y.responseText;
      }
    };
    y.onerror = function (e) {
      console.error(y.statusText);
    };
    y.send(null);
  }
}

//loginInterval = setInterval(function(){AddInfoUserSakura()}, 1000);
getDataInterval = setInterval(function () {
  getData();
}, 1000);
