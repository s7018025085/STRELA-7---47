let TekDate = new Date();
LenCells = document.querySelectorAll(".column-passwordExpirationDate>span");
// перебираем таблицу нпа предмет оконченных паролей
for (var i = 0; i < LenCells.length; i++) {
  var ar = document
    .querySelectorAll(".column-passwordExpirationDate>span")
    [i].innerHTML.split(".");
  //console.log(ar[2]+'-'+ar[1]+'-'+ar[0]);
  let UserDate = new Date(ar[2] + "-" + ar[1] + "-" + ar[0]);
  let TimeDiff = Math.abs(TekDate - UserDate);
  //let DiffDays = Math.ceil(TimeDiff / (1000*3600*24))
  let DiffDays = Math.ceil(
    Math.abs(TekDate.getTime() - UserDate.getTime()) / (1000 * 3600 * 24)
  );
  //console.log(TekDate+' - '+UserDate+' = '+DiffDays);
  document.querySelectorAll(".column-passwordExpirationDate>span")[
    i
  ].innerHTML =
    document.querySelectorAll(".column-passwordExpirationDate>span")[i]
      .innerHTML +
    " " +
    DiffDays;
  //document.querySelectorAll('#not_conf_tbl>tbody>tr>td')[i].classList.add('parolIstek');
  //console.log(i);

  if (DiffDays > 60) {
    //console.log(i);
    //console.log(DiffDays);
    document
      .querySelectorAll("#webUsersWrapper>table>tbody>tr")
      [i - 1].classList.add("parolIstek");
    document
      .querySelectorAll("#webUsersWrapper>table>tbody>tr")
      [i - 1].querySelector("td")
      .classList.add("parolIstekImg");
  }
}
