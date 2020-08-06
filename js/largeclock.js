function largeClock() {
    var currentTime = new Date ( );

    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    

    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Pad the hours AFTER converted to 12-hour format
    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Output the correct stuff in the place it needs to go in the HTML
    document.getElementById("jshours").textContent = currentHours;
    document.getElementById("jsminutes").textContent = currentMinutes;
    document.getElementById("jsseconds").textContent = currentSeconds;
}

setInterval(largeClock, 100);
