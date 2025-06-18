console.log("CreateDoc");

but = document.createElement("input");
but.id = "inputBut";
but.type = "button";
but.classList.add("ButAdd");
but.value = "Заполнить реквизиты";
Splitter.addEventListener("click", fillIn, false);

document.querySelector(".panel-heading").appendChild(but);

function fillIn() {}
