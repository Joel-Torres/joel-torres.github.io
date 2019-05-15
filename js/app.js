// script for the greeting 
  
      var todayDate = new Date();
      var todayHour = todayDate.getHours();
      var greeting;

      (function greet (){
      if (todayHour>18){
        greeting = 'Good Evening!';
        document.getElementById("greeting").innerHTML = greeting;
      } else if (todayHour>12){
        greeting = 'Good Afternoon';
        document.getElementById("greeting").innerHTML = greeting;
      } else if (todayHour>0){
        greeting = 'Good Morning';
        document.getElementById("greeting").innerHTML = greeting;
      }
      })();

      //  script typewriter effect
      var i = 0;
      var txt = 'Welcome to my site';
      var speed = 170;

      (function message() {
        if(i < txt.length) {
          document.getElementById('welcome').innerHTML += txt.charAt(i);
          i++;
          setTimeout(message, speed);
        }
      })();

      function myFunction() {
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }