var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var numberOfA = [];
var numberOfB = [];
var numberOfC = [];
var numberOfD = [];
var numberOfF = [];

var lowestGrade = Math.min.apply(null, scores);
var highestGrade = Math.max.apply(null, scores);

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91 && scores[i] <= 100) {
		numberOfA.push(scores[i]);
	} else if (scores[i] >= 81 && scores[i] <= 90) {
		numberOfB.push(scores[i]);
	} else if (scores[i] >= 71 && scores[i] <= 80) {
		numberOfC.push(scores[i]);
	} else if (scores[i] >= 61 && scores[i] <= 70) {
		numberOfD.push(scores[i]);
	} else if (scores[i] >= 50 && scores[i] <= 60) {
		numberOfF.push(scores[i]);
	}
};

console.log("Here are the number of A grades: ", numberOfA.length);
console.log("Here are the number of B grades: ", numberOfB.length);
console.log("Here are the number of C grades: ", numberOfC.length);
console.log("Here are the number of D grades: ", numberOfD.length);
console.log("Here are the number of F grades: ", numberOfF.length);
console.log("Here is the lowest grade: ", lowestGrade);
console.log("Here is the highest grade: ", highestGrade);