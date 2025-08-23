let marks = [87, 45, 99, 67, 72];

function getAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

function getHighest(arr) {
  return Math.max(...arr);
}

function getLowest(arr) {
  return Math.min(...arr);
}
function AnalyseResult(number){
    let avg = getAverage(marks);
    let high = getHighest(marks);

    if(number > avg && number < avg + (high - avg)/4){
        console.log("You have done better than average students of class but need improvement");
    } else if(number < avg && number>40){
        console.log("You are below average, improvement needed!!");
    } else if(number < 40){
        console.log("You Failed, will have to reappear.");
    } else {
        console.log("Very good, keep going!");
    }
}

let number=Number(prompt("Enter your Marks Obtained in Exam :"));
 AnalyseResult(number);
 
 
 console.log("Rest students Data:");
console.log(" Marks:", marks);
console.log(" Average:", getAverage(marks));
console.log(" Highest:", getHighest(marks));
console.log(" Lowest:", getLowest(marks));
console.log(" Sorted:", marks.sort((a, b) => a - b));

