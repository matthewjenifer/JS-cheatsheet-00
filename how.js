var sum=0; 
for(i=4; i<8; i++) {
if (i == 6) {
    continue; 
}
sum += i;
}
console.log(sum); // prints: 16?

~

// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour. Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

function main() {
    var distance = parseInt(readLine(), 10);
    var milesPerHr = 40;
    var distanceInHours = distance / milesPerHr;
    var distanceInMinutes = distanceInHours * 60;
    console.log(distanceInMinutes);   
}


