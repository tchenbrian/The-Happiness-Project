function submitAnswers() {
    
    var eScore = 0;
    var iScore = 0;
    var total = 10;
  
  //Get user input
    
  var q1 = document.forms['quizForm']['q1'].value;
  var q2 = document.forms['quizForm']['q2'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q3 = document.forms['quizForm']['q3'].value;
  var q4 = document.forms['quizForm']['q4'].value;
  var q5 = document.forms['quizForm']['q5'].value;
  var q6 = document.forms['quizForm']['q6'].value;
  var q7 = document.forms['quizForm']['q7'].value;
  var q8 = document.forms['quizForm']['q8'].value;
  var q9 = document.forms['quizForm']['q9'].value;
  var q10 = document.forms['quizForm']['q10'].value;
  
    
  // Validation  
  /* for(var i = 1; i <= total; i++) {
    if(eval('q' + i) === null || eval('q' + i) == '' ) {
      alert('Please complete question ' + i);
      return false;
    }
  } */
  
  // Set correct answers
var extrovert =["Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree"];
var introvert = ["Agree","Agree","Agree","Agree","Agree","Agree","Agree","Agree","Agree","Agree" ];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == extrovert[i - 1]) {
      eScore++;
    }  
  } 
    for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == introvert[i - 1]) {
      iScore++;
    }  
  } 

  return false;    
    
}

function displayResult() {
    
  var q1A = document.forms['quizForm']['q1'].value;
  var q2A = document.forms['quizForm']['q2'].value;
  var q3A = document.forms['quizForm']['q3'].value;
  var q3A = document.forms['quizForm']['q3'].value;
  var q4A = document.forms['quizForm']['q4'].value;
  var q5A = document.forms['quizForm']['q5'].value;
  var q6A = document.forms['quizForm']['q6'].value;
  var q7A = document.forms['quizForm']['q7'].value;
  var q8A = document.forms['quizForm']['q8'].value;
  var q9A = document.forms['quizForm']['q9'].value;
  var q10A = document.forms['quizForm']['q10'].value;
    
  var resultOne = document.getElementById("resultOne");
  var resultTwo = document.getElementById("resultTwo");
    
    if (eScore > iScore) {
        document.getElementById("quizForm").style.display="none";
        resultOne.style.display="block";
    } else if (eScore <= iScore) {
        document.getElementById("quizForm").style.display="none";
        resultTwo.style.display="block";
    }
}

function displayQuiz() {
    document.getElementById("quizIntro").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
}