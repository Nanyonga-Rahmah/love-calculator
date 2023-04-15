// console.log("good morning?");
// var greeting = "Good morning";
// alert(greeting);

var firstname = prompt("Enter your name!");
var lastname = prompt("Enter their name!");

var result = Math.floor(Math.random() * 100 + 1);
var newFirstName = firstname.slice(0, 1).toUpperCase();
var remainingname = firstname.slice(1, firstname.length).toLowerCase();
var newName = newFirstName + remainingname;
var newLast = lastname.slice(0, 1).toUpperCase();
var remaining = lastname.slice(1, lastname.length).toLowerCase();
var newLastName = newLast + remaining;
if (result < 20) {
  alert(
    "Dear" +
      " " +
      newName +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      "is" +
      " " +
      " " +
      result +
      "%"
  );
} else if (result > 20 && result < 40) {
  alert(
    "Dear" +
      " " +
      newName +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      "is" +
      " " +
      " " +
      result +
      "%"
  );
} else if (result > 40 && result < 60) {
  alert(
    "Dear" +
      " " +
      newName +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      " " +
      "is" +
      " " +
      " " +
      result +
      "%"
  );
} else if (result > 60 && result < 80) {
  alert(
    "Dear" +
      " " +
      newName +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      " " +
      "is" +
      " " +
      result +
      "%"
  );
} else if (result > 80 && result < 95) {
  alert(
    "Dear" +
      " " +
      newName +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      " " +
      "is" +
      " " +
      result +
      "%"
  );
} else {
  alert(
    "Dear" +
      " " +
      newname +
      " " +
      "Your love score " +
      " " +
      "with" +
      " " +
      newLastName +
      "is" +
      " " +
      result +
      "% . Your love is platonic and God made ☺️!"
  );
}
