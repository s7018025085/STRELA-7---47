console.log("Eotinosh Main");

if (document.querySelectorAll("#MainScript").length === 0) {
  script = document.createElement("script");
  script.id = "MainScript";
  script.src = "http://192.168.60.2/js/EOtinish/EOMainScript.js";
  script.defer = true;
  console.log(script);
  document.body.appendChild(script);
}

function LoadPage() {
  console.log("LoadPage");
  console.log(document.readyState);
}
