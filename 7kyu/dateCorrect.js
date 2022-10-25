/* A very easy task for you!

You have to create a method, that corrects a given date string. There was a problem in addition, so many of the date strings are broken. Date-Format is european. That means "DD.MM.YYYY".

Some examples:

"30.02.2016" -> "01.03.2016"
"40.06.2015" -> "10.07.2015"
"11.13.2014" -> "11.01.2015"
"99.11.2010" -> "07.02.2011"

If the input-string is null or empty return exactly this value!
If the date-string-format is invalid, return null.

Hint: Correct first the month and then the day!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */

//Step 1 : check if empty or valid an dreturn accordingly
// Check if in date string format : using regex
//correct the month first then the day
// format in date

function dateCorrect(datestring) {
  const prefix0 = (part) => (part < 10 ? "0" + part : part);

  /* function regularise(part, maximum, nextPart) {
    while (part >= maximum) {
        if (nextPart) {
            nextPart = parseInt(nextPart) + 1;
          }
          return   part -= maximum;
    }
  } */
  // const date2="07.02.2011"
  const dateCorrect = (string) => {
    const isDate = /\d\d.\d\d.\d\d\d\d/;
    if (!isDate.test(string)) {
      return null;
    } else {
      // const dateFormared=new Date(string)
      const dateArr = string.split(".");
      let day = dateArr[0],
        month = dateArr[1],
        year = dateArr[2];
      //check if month is valid usuing regex
      console.log("day: " + day + "month " + month + "year" + year);
      
      
      const monthWith31days=["01" , "03" , "05" , "07" ,"08" , "10" , "12"]
      const monthsWith30days=["04","06","09","11"]
      while (monthWith31days.includes(month)) {
        console.log(" 31 day month");
        while (day > 31) {
          day = parseInt(day) - 31;
          console.log("day: " + day);
          month = parseInt(month) + 1;
          
          month = prefix0(month);
        }
      } while (monthsWith30days.includes(month)) {
        console.log("30 day month");
        while (day > 30) {
          day = parseInt(day) - 30;
          console.log("line 53 day" + day);
          month = prefix0(parseInt(month) + 1);
        }
      } while (month=="02"&&year % 4 == 0) {
        console.log("leap year")
        while (day > 29) {
          day = parseInt(day) - 29;
          console.log("line 60 day" + day);
          month = prefix0(parseInt(month) + 1);
        }
      } while(month=="02"&&year % 4 == 0) {
        while (day >= 28) {
          console.log("leap");
          day = parseInt(day) - 28;
          console.log("line 60 day" + day);
          month = prefix0(parseInt(month) + 1);
        }
        
      }
      while (month > 12) {
        month -= 12;
        year = parseInt(year) + 1;}
      return prefix0(day) + "." + month + "." + year;
      // return dateFormared
    }
  };
  return !datestring || datestring == "" ? datestring : dateCorrect(datestring);
}
console.log(dateCorrect("99.11.2010"));
