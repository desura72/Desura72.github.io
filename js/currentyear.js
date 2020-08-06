function currentDateFunc() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var currentYear = currentDate.getYear() + 1900;
  
    if (currentMonth == 0) {
      currentMonth = "January"
    } else if (currentMonth == 1) {
      currentMonth = "February"
    } else if (currentMonth == 2) {
      currentMonth = "March"
    } else if (currentMonth == 3){
      currentMonth = "April"
    } else if (currentMonth == 4){
        currentMonth = "May"
    } else if (currentMonth == 5){
        currentMonth = "June"
    } else if (currentMonth == 6){
        currentMonth = "July"
    } else if (currentMonth == 7){
        currentMonth = "August"
    } else if (currentMonth == 8){
        currentMonth = "September"
    } else if (currentMonth == 9){
        currentMonth = "October"
    } else if (currentMonth == 10){
        currentMonth = "November"
    } else if (currentMonth == 11) {
        currentMonth = "December"
    } else {
        currentMonth = currentMonth
    }
  
  
    document.getElementById("year").textContent = "The date is currently: " + currentMonth + " " + currentDay + " " + currentYear;
  
}

currentDateFunc();


  