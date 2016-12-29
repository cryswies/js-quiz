// Question and Answers
var allQuestions = [{
    question: 'Canada is a bilingual country, but what is the only officially bilingual province?',
    choices: ['Quebec', 'New Brunswick', 'Ontario', 'Nova Scotia'],
    correctAnswer: 'New Brunswick'
	},
	{
    question: 'How many oceans border Canada?',
    choices: ['1', '2', '3', '4'],
    correctAnswer: '3'
	},
	{
    question: 'What are the two most multicultural cities in Canada?',
    choices: ['Toronto and Montreal', 'Victoria and Toronto', 'Vancouver and Toronto', 'Vancouver and Montreal'],
    correctAnswer: 'Vancouver and Toronto'
	},
	{   
    question: 'What is Canada\’s highest mountain?',
    choices: ['Mount Logan, Yukon', 'Mont Tremblant, Quebec', 'Whistler Mountain, BC', 'Mount Alberta, AB'],
    correctAnswer: 'Mount Logan, Yukon'
}];


var questionTitle = document.getElementById('questionTitle');
var selectionList = document.getElementById('selectionList');
var nextButton = document.getElementById('nextButton');
var qCount = document.getElementById('qCount');
var canadaForm = document.getElementById('canadaForm');
var i = 0;
var clickCount = 0;


$(nextButton).on('click', function() {  
    //Question Counter
    clickCount++;
    if (clickCount > 4) {
        return false;
        }
    $(qCount).text(clickCount + "/4")   
        
    // Button Triggering Questions and Answers
    nextButton.innerHTML = "Next"; 
    if(i>allQuestions.length){ 
        i=0;       
        }    
    populateQuestion(i);
    i++;
}); 


// Getting Questions and Answers
function populateQuestion(qNum) {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;
    selectionList.innerHTML = ""; 
    for(key in individualQuestion.choices){
        var radioBtnName = "question"+i+"_choice";
        var choiceText = individualQuestion.choices[key];
        selectionList.appendChild(createLi(radioBtnName,choiceText));
    }
};

// Creating New li Answers
function createLi(name, choiceText) {
    var answerOption = document.createElement('li');
    var radioHtml = '<input type="radio" name="option" value="' + allQuestions[i].correctAnswer + '"' + name + '"'; // value undefined   
    radioHtml += '/>';
    radioHtml += choiceText;        
    answerOption.innerHTML = radioHtml;        
    return answerOption;
};

// Showing if answer is correct or not when radio clicked
$(canadaForm, 'input[name=option]').on('click', function() {
    var answerOption = document.createElement('li');
    answer = $("input[name=option]:checked").val()
    userAnswer = $("input [name=option]:checked").text() // <<< not sure how to get the answer option text to compare
    console.log(answer)
    console.log(userAnswer)
    /*
    if (userAnswer == answer) {
        alert("Good job!");
    }
    else {
        alert("Wrong. The correct answer is " + userAnswer);
    } 
    */
});
