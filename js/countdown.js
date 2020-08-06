var myTimer;
    function clock() {
        myTimer = setInterval(myClock, 1000);
        var c = document.getElementById("numberInput").value;
        // gets audio file, checks audio level from html document slider, compares it to lower volume
        var audio = new Audio('/assets/bell.mp3');
        var audioVolume = document.getElementById("myRange").value;

        if (audioVolume == 1){
            audio.volume = 0
        } else if (audioVolume <= 10){
            audio.volume = 0.1
        } else if (audioVolume <= 20){
            audio.volume = 0.2
        } else if (audioVolume <= 30){
            audio.volume = 0.3
        } else if (audioVolume <= 40){
            audio.volume = 0.4
        } else if (audioVolume <= 50){
            audio.volume = 0.5
        } else if (audioVolume <= 60){
            audio.volume = 0.6
        } else if (audioVolume <= 70){
            audio.volume = 0.7
        } else if (audioVolume <= 80){
            audio.volume = 0.8
        } else if (audioVolume <= 90){
            audio.volume = 0.9
        } else {
            audio.volume = 1.0
        }

    function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         document.getElementById("timer").textContent = "0";
        audio.play();
       }
     }
   }
   