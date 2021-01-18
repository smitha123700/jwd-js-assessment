/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  const resetBtn = document.querySelector('#btnReset');
  const submitBtn = document.querySelector('#btnSubmit');
  
  start.addEventListener('click', function (e) {
  //start.addEventListener('click', (event) {
     // Prevent default action of refreshing the screen
     //event.preventDefault();
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    var count = 30;
    var interval = setInterval(function(){
      document.getElementById('time').innerHTML=count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('time').innerHTML='Done';
        // or...
        //alert("You're out of time!");
        calculateScore();

      }
    }, 1000);  

  } 
  );
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'Trivia Question: How many blue stripes are there on the U.S. flag',

    o:['6','7','13','0'],
    a:2,
    },
    {
      q: 'Which country held the 2016 Summer Olympics?',

    o:['China','Italy','Brazil','Russia'],
    a:2,

    }
  ];

//function to reset form
function resetForm(){
 
  window.location.reload();
}



  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    document.getElementById('time').innerHTML='Done';
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
       
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);


        if (quizItem.a == i) {
          //change background color of li element here
          
          liElement.style.backgroundColor = 'lightblue';
          
        }
        //if the original answer and answer checked is same,score gets added
        if (radioElement.checked && quizItem.a == i ) {
          // code for task 1 goes here
          liElement.style.backgroundColor = 'lightgreen';
          score++;
        }
      }
      
    });
    let scoreMessage = document.querySelector('#scoreMesg');
    scoreMessage.innerHTML = "Your score is: "+score;
    scoreMessage.style.display = "block"; 
    scoreMessage.style.backgroundColor = 'blueviolet'; 
    scoreMessage.style.color = 'white';
  };

  // call the displayQuiz function
  displayQuiz();
  
  submitBtn.addEventListener('click', calculateScore);
  // Add an 'onclick' event listener to the reset button
  resetBtn.addEventListener('click', resetForm);
    

});
