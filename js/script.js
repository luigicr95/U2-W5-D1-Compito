function getDays(month, year) {
  let monthDays = new Date(year, month, 0).getDate();
  document.getElementById("textarea").value = monthDays;
}

//console.log(new Date());

getDays(1, 2022);

function todaysDate() {
  let today = new Date();
  let days = today.getDate();
  let months = today.getMonth() + 1;
  let years = today.getFullYear();
  let actualDate = days + "/" + months + "/" + years;
  document.getElementById("date").value = actualDate;
}
