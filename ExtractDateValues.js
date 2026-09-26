let event = {year: undefined, month: undefined, day: undefined}
let date = "5457-08-25";
let dateArray = date.split("-"); //extract date values

event.year = dateArray[0];
event.month = dateArray[1];
event.day = dateArray[2];

console.log("Date: ", event);
