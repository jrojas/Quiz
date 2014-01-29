var htmlQuiz = (function() {
 
   
    //Questions Array
    var questions = [
        {
        question: "What does HTML stand for?",
        choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        questionNumber : 0,
        correctAnswer : 2,
        
        },
        {
        question: "Who is making the Web standards?",
        choices: ["The World Wide Web Consortium", "Microsoft", "Google"],
        questionNumber : 1,
        correctAnswer : 1,
        
        },
        {
        question: "Choose the correct HTML tag for the largest heading",
        choices: ["<head>", "<h1>", "<heading>"],
        questionNumber : 2,
        correctAnswer: 1,
        
        },
        {
        question: "What is the correct HTML tag for inserting a line break?",
        choices: ["<lb>", "<br>", "<break>"],
        questionNumber : 3,
        correctAnswer: 1,
        },
        {
        question: "What is the preferred way for adding a background color in HTML?",
        choices: ["<background>yellow</background>", "background-color:yellow;","body background:yellow;"],
        questionNumber: 4,
        correctAnswer : 1,
      
    }]
    
    
    // public variables for Quiz
   
    var correctAnswer = 0;
    var questionNumber = 0;
    var answer = "";
    var liOpen = '<ol><li>';
    var liClose ='</li></ol>';
   
    var choiceZero = questions[questionNumber].choices[0];
    var choiceOne = questions[questionNumber].choices[1];
    var choiceTwo = questions[questionNumber].choices[2];
    var spanOpen = '<span class="choices">';
    var spanClose = '<span class="choices">';
  
    // public init method to be exposed to the document ready function 
    var init = function(){
        
            appendQuestionChoices();
            submitAnswer();
     };
    var appendQuestionChoices = function(){
        
        $('.question').html(liOpen + questions[questionNumber].question + liClose);
        
        $('.enterForm').html(spanOpen + '<input type="radio" name="option" class="option" value="0">' + choiceZero + spanClose);
        $('.enterForm').html(spanOpen + '<input type="radio" name="option" class="option" value="1">' + choiceOne + spanClose);
        $('.enterForm').html(spanOpen + '<input type="radio" name="option" class="option" value="2">' + choiceTwo + spanClose);
    
    };
    
    // Submit Answer
    var submitAnswer = function() {
        
       // $(form).on("click", ".btnSubmit", function(e) {
           
           // e.preventDefault();
          //  questionNumber++;
          //  appendQuestionChoices();
            
          //  });
        
       $('.enterForm').click(function(e){
             e.preventDefault();
            questionNumber++;
            appendQuestionChoices();
          
            });
          };

      //validateAnswer
    var  validateAnswer = function() {
       
        console.log("Validate");
      
    };
    // public API
    return {init: init};
 
})();

$(document).ready(function()
{
    htmlQuiz.init();
 
});
     

 
