console.log("Работаю с документологом. Главный скрипт doc");

divCursor = document.createElement("div");
divCursor.classList.add("cursor");
divCursor.setAttribute("style", "position: fixed;  z-index: 99999;");

divCursorA = document.createElement("div");
divCursorA.classList.add("click-animation");

divShapeBig = document.createElement("div");
divShapeBig.classList.add("shape");
divShapeBig.classList.add("circle");
divShapeBig.classList.add("big");

divShapeSmall = document.createElement("div");
divShapeSmall.classList.add("shape");
divShapeSmall.classList.add("circle");
divShapeSmall.classList.add("small");

divShapeyellow = document.createElement("div");
divShapeyellow.classList.add("shape");
divShapeyellow.classList.add("triangle");
divShapeyellow.classList.add("yellow");

divShapegreen = document.createElement("div");
divShapegreen.classList.add("shape");
divShapegreen.classList.add("triangle");
divShapegreen.classList.add("green");

divShapeDisc = document.createElement("div");
divShapeDisc.classList.add("shape");
divShapeDisc.classList.add("disc");

divCursorA.appendChild(divShapeBig);
divCursorA.appendChild(divShapeSmall);
divCursorA.appendChild(divShapeyellow);
divCursorA.appendChild(divShapegreen);
divCursorA.appendChild(divShapeDisc);

divCursor.appendChild(divCursorA);

document.body.appendChild(divCursor);

const cursorAnimation = document.querySelector(".cursor");
const cursors = document.querySelectorAll(".cursor");

document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursorAnimation.style.top = y + "px";
  cursorAnimation.style.left = x + "px";

  cursors.forEach((cursor) => {
    cursor.classList.add("active");

    function removeCursorActive() {
      cursor.classList.remove("active");
    }

    setTimeout(removeCursorActive, 1000);
  });

  let cursorClone = cursorAnimation.cloneNode(true);
  document.querySelector("body").appendChild(cursorClone);

  setTimeout(() => {
    cursorClone.remove();
  }, 1000);
});

function showHide() {
  console.log("Функция скрытия элемента");
  if (document.querySelector(".col-sm-5")) {
    var obj = document.querySelector(".col-sm-5");
    var objMain = document.getElementById("fullscreen_control_block");

    if (!document.getElementById("Splitter")) {
      Splitter = document.createElement("div");
      Splitter.id = "Splitter";
      Splitter.innerText = ">";
      Splitter.addEventListener("click", showHide, false);
      Splitter.classList.add("SplitterDoc");
      document.querySelector("#fullscreen_control_block").after(Splitter);
    }

    if (obj.style.display == "none") {
      obj.style.display = "block";
      objMain.style.width = "58%";
    } else {
      objMain.style.width = "98%";
      obj.style.display = "none";
    }
  }
}

// Функция несколько раз гоняет поиск элемента
function Interval() {
  let MInterval;
  let mx = 0;
  MInterval = setInterval(() => {
    mx++;
    if (mx > 100) {
      clearInterval(MInterval);
    }
    if (document.querySelector(".col-sm-5")) {
      // завершаем цикл
      clearInterval(MInterval);
      // Выполняем функцию
      showHide();
    }
  }, 200);
}

function setClick() {
  let inbox = document.querySelectorAll(".grid_row_single_line");
  for (var j = 0; j < inbox.length; j++) {
    inbox[j].addEventListener("click", Interval);
    //console.log(inbox[j]+' addEventListener("click", Interval)')
  }
}

document.querySelector(".tree_item_text").addEventListener("click", setClick);

setClick();

// MainScript сканирует страницу каждые 2 секунды
MainScript = setInterval(() => {
  if (document.getElementById("referenceAutocomplete_f_5138fc9")) {
    // добавление дела
    if (
      document.getElementById("referenceAutocomplete_f_5138fc9").value == ""
    ) {
      input = document.getElementById("referenceAutocomplete_f_5138fc9");
      input.value = "9-7-2-61";
      input.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true }));
    }
  }

  if (document.title.indexOf("документ") > 0) {
    title = document.title;
    console.log(title);
    let NomerDoc = title.replace("Входящий документ(Входящий ", "Вх. ");

    inputDoc = document.querySelector(".text-uppercase>input");
    //inputDoc.type = "";

    document.title = NomerDoc.substr(0, NomerDoc.length - 1);
  }

  // Добавляем ссылку на сакуру к ИИН
  if (
    document.querySelectorAll(".preview_right_content > iframe:nth-child(1)")[0]
  ) {
    iframe = document.querySelectorAll(
      ".preview_right_content > iframe:nth-child(1)"
    )[0];
    iframeDoc = iframe.contentWindow.document;

    if (!iframeDoc.getElementById("SakuraUrl")) {
      // правим заголовок окна

      divs = iframeDoc.querySelectorAll(".page>div>div");
      divs = Array.from(divs).filter((e) =>
        /\d\d\d\d\d\d\d\d\d\d\d\d/.test(e.outerText)
      );
      for (var k = 0; k < divs.length; k++) {
        Paragraf = document.createElement("p");
        SakuraUrl = document.createElement("a");
        SakuraUrl.id = "SakuraUrl";
        SakuraUrl.innerText = "Sakura";
        SakuraUrl.target = "_blank";
        SakuraUrl.href =
          "http://192.168.60.2/user.php?iin_user=" +
          divs[k].textContent +
          "&ND=" +
          document.title;
        SakuraUrl.classList.add("SakuraUrl");

        divs[k].appendChild(Paragraf);
        divs[k].appendChild(SakuraUrl);
        console.log(divs[k].innerText);

        Estyle = document.createElement("style");
        Estyle.innerHTML = ".textLayer{opacity: 2 !important;}";
        divs[k].appendChild(Estyle);

        Sstyle = document.createElement("style");
        Sstyle.innerHTML = ".page::after { display:none !important;}";
        divs[k].appendChild(Sstyle);
      }
    }
  }

  // Переводим казахские слова

  //walkerCheck = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  /*	walker  =  document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

		while (walker.nextNode()){

			const text =walker.currentNode.textContent.trim();

			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жұмыс үшін',
		    'Для работы');

			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Тиісті ақпаратты беруіңізді сұраймын',
		    'Прошу предоставить соответствующую информацию');

			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Бақылау үшін',
		    'Для контроля');

		    walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Ақпарат үшін',
		    'Для информации');

		    walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жұмыста қолдану',
		    'Использовать в работе');		    
		    		    
		  walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жауап жобасын дайындауды сураймын',   'Прошу подготовить проект ответа');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Қызметте белгілеу және қолдану үшін',   'Для использования и применения в работе');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Тексеруді өтінемін',   'Прошу проверить');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жауап үшін',   'Для ответа');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Материалдарды дайындау',   'Подготовить материалы');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Орнатылған тәртіп бойынша',   'В установленом порядке');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Тез арада',   'Срочно');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Қатысыңыз',   'Принять участие');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жұмыс тәртібінде жеткізу',   'Доложить в рабочем порядке');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Қаулының жобасын дайындау үшін',   'Для подготовки проекта постановления');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Маған көшірме',   'Копию мне');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Тапсырманың орындалуы үшін',   'Для выполнения задания');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Ескерту үшін',   'Для предупреждения');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Қарастыру және ұсыныс беру үшін',   'Для рассмотрения и рекомендаций');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Қарау және жауап беру',   'Рассмотреть и ответить');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Орындауды ұйымдастыру үшін',   'Для организации исполнения');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Ұсыныстар үшін',   'Для предложений');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Орнатылған тәртіп бойынша жауап үшін',   'Для ответа в установленном порядке');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Ұсыныстар мен ескертулер үшін',   'Для предложений и замечаний');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Шешім үшін',   'Для решения');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Приказбен келісу',   'Согласовать приказ');
				
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Келісім үшін ',   'Для согласования');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Орындау үшін',   'Для выполнения');
				
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Адресатқа',   'Адресату');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Тез арада орындау үшін',   'Для немедленного выполнения');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Ақпаратты уақытылы беру үшін',   'Для своевременной передачи информации');	
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Мәліметке алу',   'Получение информации');
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Белгілеу үшін',   'Для обозначения');		
			
			walker.currentNode.textContent = walker.currentNode.textContent.replace(
			'Жұмыста есептеу үшін',   'Для использования в работе');	
		}*/

  if (!document.getElementById("Web")) {
    liWeb = document.createElement("li");
    liWeb.setAttribute("class", "topMenuItem cmMain");
    aWeb = document.createElement("a");
    aWeb.href = "http://10.61.36.150/";
    aWeb.target = "_blank";
    aWeb.textContent = "Web интерфейс";
    aWeb.id = "Web";
    aWeb.classList.add("aWeb");
    liWeb.appendChild(aWeb);

    liSakura = document.createElement("li");
    liSakura.setAttribute("class", "topMenuItem cmMain");
    aSakura = document.createElement("a");
    aSakura.href = "http://192.168.60.2/";
    aSakura.target = "_blank";
    aSakura.textContent = "aSakura";
    aSakura.id = "Sakura";
    aSakura.classList.add("aWeb");
    liSakura.appendChild(aSakura);

    liCRM = document.createElement("li");
    liCRM.setAttribute("class", "topMenuItem cmMain");
    aCRM = document.createElement("a");
    aCRM.href = "https://crm.gov.kz";
    aCRM.target = "_blank";
    aCRM.textContent = "ЦРМ";
    aCRM.id = "CRM";
    aCRM.classList.add("aWeb");
    liCRM.appendChild(aCRM);

    liEA = document.createElement("li");
    liEA.setAttribute("class", "topMenuItem cmMain");
    aEA = document.createElement("a");
    aEA.href = "http://10.61.209.47/erdradmin";
    aEA.target = "_blank";
    aEA.textContent = "ЕА";
    aEA.id = "EA";
    aEA.classList.add("aWeb");
    liEA.appendChild(aEA);

    liVig = document.createElement("li");
    liVig.setAttribute("class", "topMenuItem cmMain");
    aVig = document.createElement("a");
    aVig.href = "http://10.61.36.150:19285/";
    aVig.target = "_blank";
    aVig.textContent = "Выгрузка";
    aVig.id = "Vig";
    aVig.classList.add("aWeb");
    liVig.appendChild(aVig);

    naw = document.getElementById("header_menu");
    naw.appendChild(liVig);
    naw.appendChild(liSakura);
    naw.appendChild(liWeb);
    naw.appendChild(liCRM);
    naw.appendChild(liEA);
  }

  if (document.title.indexOf("езолю") > 0) {
    inputDoc = document.querySelector(".text-uppercase>input");
    //inputDoc.type = "";
    document.title = inputDoc.value;
  }
}, 2000);
