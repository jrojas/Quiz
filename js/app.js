var htmlQuiz = (function() {
 
    // public variables for Quiz
   
    var numberCorrectAnswer = 0;
    var questionNumber = 0;
    var liOpen = '<ol><li>';
    var liClose ='</li></ol>';
   
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
  
    // public init method to be exposed to the document ready function 
    var init = function(){
        
        submitAnswer();
        appendQuestion();
     };
    var appendQuestion = function(){
        var questionDiv = $('.question');
        questionDiv.html(liOpen + questions[questionNumber].question + liClose);
    
    };
    
    // Submit Answer
    var submitAnswer = function() {
        
        $('form').on("click", ".btnSubmit", function(d) {
            d.preventDefault();
            validateAnswer();
            questionNumber++;
            appendQuestion();
            
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
     

 
