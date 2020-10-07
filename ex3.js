//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barnes",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions
//Declare cLastNameResults. Use Functions and map new array of objects

function getC(a){
    return a.lastName[0].toUpperCase() == "C";
}
//filtering for only C names
cLastNameResults = studentList.filter(getC);
//adding minScore, maxScore, and aveScore
cLastNameResults[0].minScore;
cLastNameResults[1].minScore;

cLastNameResults[0].maxScore;
cLastNameResults[1].maxScore;

cLastNameResults[0].aveScore;
cLastNameResults[1].aveScore;

function min(a){
    s = 100;
    for (i = 0; i < a.scores.length; i++){
        if (a.scores[i] < s){
            s = a.scores[i]
        } 
    }
    return s;
}
function max(a){
    s = 0;
    for (i = 0; i < a.scores.length; i++){
        if (a.scores[i] > s){
            s = a.scores[i]
        } 
    }
    return s;
}
function ave(a){
    s = 0;
    for (i = 0; i < a.scores.length; i++){
        s = s + a.scores[i];
    }
    return s / a.scores.length
}

cLastNameResults[0].minScore = min(cLastNameResults[0]);
cLastNameResults[1].minScore = min(cLastNameResults[1]);

cLastNameResults[0].maxScore = max(cLastNameResults[0]);
cLastNameResults[1].maxScore = max(cLastNameResults[1]);

cLastNameResults[0].aveScore = ave(cLastNameResults[0]);
cLastNameResults[1].aveScore = ave(cLastNameResults[1]);

console.log(cLastNameResults);