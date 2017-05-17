function submitAnswers() {
  var total = 10;
  var score = 0;
  
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
  var answers = ["Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree","Disagree"];
  
  for(var i = 1; i <= total; i++) {
    // Check answers
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  } 

  // Display results
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '.' + '</span></h3>';
  
    if (score >= 5) {
        results.innerHTML += '<h3>Based on your responses, you’re an extrovert. You relish social life and are energized by interacting with friends and strangers alike. You’re assertive, go-getting, and able to seize the day. You’re great at thinking on your feet and relatively comfortable with conflict. Given the choice, you usually prefer more stimulating environments that give you frequent opportunities to see and speak with others. When you’re in quiet environments, you’re prone to feeling bored and restless. You’re actively engaged in the world around you and at your best when you tap into its energy. </h3>';
    } else {
        results.innerHTML += '<h3>Based on your responses, you are an introvert. Given the choice, you’ll devote your social energy to a small group of people you care about most, preferring a glass of wine with a close friend to a party full of strangers. You think before you speak, have a more deliberate approach to risk, and enjoy solitude. You feel energized when focusing deeply on a subject or activity that really interests you. When you’re in overly stimulating environments (too loud, too crowded, etc.) you tend to feel overwhelmed. You seek out environments of peace, sanctuary, and beauty; you have an active inner life and are at your best when you tap into its riches.</h3>';
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
    
    
 var resultsContainer = document.getElementById('quizResults');
 resultsContainer.style.display = "block";
    
    
    document.getElementById("quizForm").style.display="none";
}

function displayQuiz() {
    
    document.getElementById("quizIntro").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
}