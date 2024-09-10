function currentTime(){
      var date = new Date();

      var now = date.toLocaleString('en-US', { hour12: false });

      document.getElementById("currentTime").innerHTML = now;
    }

    setInterval(currentTime, 1);

    var alarmSound = new Audio("azan-ringtone.mp3");

    function setFajarAlarm() {
      var alarmTime = document.getElementById("alarmFajarTime").value;
			var now = new Date();
      var alarm = new Date(now.toDateString() + " " + alarmTime);

      var timeRemaining = alarm - now;

      setTimeout(playAlarm, timeRemaining);
    }

function setZuharAlarm() {
      var alarmTime = document.getElementById("alarmZuharTime").value;
			var now = new Date();
      var alarm = new Date(now.toDateString() + " " + alarmTime);

      var timeRemaining = alarm - now;

      setTimeout(playAlarm, timeRemaining);

    }

function setAsarAlarm() {
      var alarmTime = document.getElementById("alarmAsarTime").value;
			var now = new Date();
      var alarm = new Date(now.toDateString() + " " + alarmTime);

      var timeRemaining = alarm - now;

      setTimeout(playAlarm, timeRemaining);

    }

function setMaghribAlarm() {
      var alarmTime = document.getElementById("alarmMaghribTime").value;
			var now = new Date();
      var alarm = new Date(now.toDateString() + " " + alarmTime);

      var timeRemaining = alarm - now;

      setTimeout(playAlarm, timeRemaining);

    }

function setIshaAlarm() {
      var alarmTime = document.getElementById("alarmIshaTime").value;
			var now = new Date();
      var alarm = new Date(now.toDateString() + " " + alarmTime);

      var timeRemaining = alarm - now;

      setTimeout(playAlarm, timeRemaining);

    }

    function playAlarm() {
      alarmSound.play();
    }