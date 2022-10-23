/* A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01" 
*/

function timeCorrect(timestring) {
  const formatReg = /[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/;
  console.log(timestring);
  function prefix(parts) {
    console.log(parts);
    const part = parts.toString();
    if (part.length < 2) {
      return "0" + part;
    } else {
      return part;
    }
  }

  if (timestring == null || timestring == "") {
    return timestring;
  } else if (!formatReg.test(timestring)) {
    return null;
  } else {
    const arr = timestring.split(":");

    //split into hours minutes seconds

    let hours = arr[0],
      minutes = arr[1],
      seconds = arr[2];
    console.log(seconds);

    // set constraints and fix each part of the time string

    if (seconds >= 60) {
      seconds -= 60;
      minutes = parseInt(minutes) + 1;
    }
    if (minutes >= 60) {
      minutes -= 60;
      hours = parseInt(hours) + 1;
    }
    while (hours >= 24) {
      hours -= 24;
    }
    {
       // while (/[0|1\d]|2[]0-4]/.test(hours))
      return prefix(hours) + ":" + minutes + ":" + seconds;
    }
  }
}
console.log(timeCorrect("52:01:00"));
