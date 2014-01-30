var htmlQuiz = (function() {
    
    //Questions Array
    var questions = [
        {
        question: "What does HTML stand for?",
        choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        questionNumber : 0,
        correctAnswer : 1,
        
        },
        {
        question: "Who is making the Web standards?",
        choices: ["The World Wide Web Consortium", "Microsoft", "Google"],
        questionNumber : 1,
        correctAnswer : 0,
        
        },
        {
        question: "Choose the correct HTML tag for the largest heading",
        choices: ["head", "h1", "heading"],
        questionNumber : 2,
        correctAnswer: 1,
        
        },
        {
        question: "What is the correct HTML tag for inserting a line break?",
        choices: ["lb", "br", "break"],
        questionNumber : 3,
        correctAnswer: 1,
        },
        {
        question: "What is the preferred way for adding a background color in HTML?",
        choices: ["<background>yellow</background>", "background-color:yellow;","body background:yellow;"],
        questionNumber: 4,
        correctAnswer : 1,
      
    },
        
    
    ]

    // public variables for Quiz
   
    var correctAnswer = 0;
    var questionNumber = 0;
   
    //var answer = "";
    var liOpen = '<ol><li>';
    var liClose ='</li></ol>';
    var radioZero= '<input type="radio" name="option" class="option" value="0">';
    var radioOne= '<input type="radio" name="option" class="option" value="1">';
    var radioTwo= '<input type="radio" name="option" class="option" value="2">';
    
    // public init method to be exposed to the document ready function 
    var init = function(){
        
           
        submitAnswer();
        appendQuestionChoices();
        resetClick();
            
            
     };
    var appendQuestionChoices = function(){
        console.log(questionNumber + 'appendQuestionChoices')
    
     
        
        
            $('.question').html(liOpen +questions[questionNumber].question + liClose + '<br>'  + radioZero + questions[questionNumber].choices[0] + '<br>' + radioOne + questions[questionNumber].choices[1] + '<br>' +  radioTwo + questions[questionNumber].choices[2]);
       
               
        
       
    };
    
    // Submit Answer
    var submitAnswer = function() {
        
       
       $('input').click(function(){
           var userAnswer = $(".option[type='radio']:checked").val(),
               messageToError = $('.error')
               
            
                console.log(questionNumber + 'questionNumber');
            
           
           
           
           switch (true) {
            
            case userAnswer == undefined:
                   messageToError.html('Please select an option.');
                  
            break;
            
            case userAnswer == questions[questionNumber].correctAnswer:
                  
                   
                messageToError.html('Correct Answer!');
                   
                validateAnswer();
                nextQuestion();

            break;  
                   
            case userAnswer !== questions[questionNumber].correctAnswer:
                    messageToError.html('Wrong Answer!');
                  
                    nextQuestion();
                  
            break;    

           }
					
	
          
            });
       
          };

      //validateAnswer
    var  validateAnswer = function() {
       
  
        console.log("Validate");
        correctAnswer++
        console.log(correctAnswer + 'corect answer count'); 
      
    };
    
    var resetClick = function(){
    
   
        $('.reset').click(function(){
              
            history.go('0');
               
        });
    
    };

    var complete = function(){
            var mNextQuestion = $('.error'),
                messageToComplete = $('.complete')
        
        $('input').hide();
        $('.question').remove();
        $('.reset').toggle();
        mNextQuestion.html('Quiz Complete!' + '<br>' +  + correctAnswer + " of 5 Questions Correct" );
    
    
    };

    var nextQuestion = function() 
    {
        
    
         if (questionNumber < 4 && questionNumber !== undefined){
                   
        console.log(questionNumber + 'questionNumber nextQuestion')
        questionNumber++;
        appendQuestionChoices();
        console.log(correctAnswer + 'corect answer count'); 
                   }
                   
                   else{
                       
                       complete();
                      
                 
                   
                   }
    
     
    };
    // public API
    return {init: init};
 
})();

$(document).ready(function()
{
    htmlQuiz.init();
 
});
     

 
