console.log("maimCrm");

function MainCRM() {
  if (document.querySelectorAll('iframe[title="CRM Mail"]').length == 1) {
    urlMain = document.querySelector("iframe").src;
    window.location.href = urlMain;
  }

  if (document.querySelectorAll(".shepherd-button-secondary").length == 1) {
    document.querySelectorAll('a[href="/mail"]')[0].click();
    //location.href = "/mail";
    document.querySelectorAll(".shepherd-button-secondary")[0].click();
  } else {
    setTimeout(function () {
      MainCRM();
    }, 1000);
  }
}
MainCRM();

function Repoad() {
  location.reload();
}
setTimeout(function () {
  Repoad();
}, 600000);

function GetMail() {}
