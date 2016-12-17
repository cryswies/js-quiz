/* 
Page is loaded
	1. Load first entries in arrays for questions and answers
User clicks radio button
User submits answer:
	1. Store clicked radio result
	2. Compare:
		If it matches data answer, show 'Correct' text
			If it is correct, add one to the score (ie, 1/10)
		Else, show 'Wrong' text

When next button is clicked: 
	1. Go to next entry in arrays for question and answers
	2. Add one to the question number (ie, 1/10)
*/


// Question and Answers
var allQuestions = [{
    question: 'Canada is a bilingual country, but what is the only officially bilingual province?',
    choices: ['Quebec', 'New Brunswick', 'Ontario', 'Nova Scotia'],
    correctAnswer: 1
	},
	{
    question: 'How many oceans border Canada?',
    choices: ['1', '2', '3', '4'],
    correctAnswer: 2
	},
	{
    question: 'What are the two most multicultural cities in Canada?',
    choices: ['Toronto and Montreal', 'Victoria and Toronto', 'Vancouver and Toronto', 'Vancouver and Montreal'],
    correctAnswer: 2
	},
	{   
    question: 'What is Canada\’s highest mountain?',
    choices: ['Mount Logan, Yukon', 'Mont Tremblant, Quebec', 'Whistler Mountain, BC', 'Mount Alberta, AB'],
    correctAnswer: 0
}];


var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');
var submitButton = document.getElementById('submitButton');
var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;
var result = document.getElementById('result');

// FILLING IN QUESTIONS AND ANSWERS
	// How do I have it start on the first question?

nextButton.onclick = function() {
    if(i>allQuestions.length){ 
       i=0;       
    }    
    populateQuestion(i);
    i++;
};

function populateQuestion(qNum) {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    selectionList.innerHTML = ""; 
    for(key in individualQuestion.choices){
        var radioBtnName = "question"+i+"_choice";
        var choiceText = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName,choiceText));
    }
}

function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioHtml = '<input type="radio" name="option"' + name + '"';    
        radioHtml += '/>';
        radioHtml += choiceText;        
        e.innerHTML = radioHtml;        
        return e;
    }

// SUBMITTING ANSWER
	// Submit button is having it "refresh"

submitButton.onclick = function() {
	var userAnswer = $("input[name='option']:checked").val(); // unable to get this right
	console.log(userAnswer);
	/*if (userAnswer == correctAnswer) {
		result.innerHTML = result.innerHTML + "Correct!";
	}
	else {
		result.innerHTML = result.innerHTML + "Wrong. The answer is " + correctAnswer;
	}*/
}
