class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Quelle méthode Javascript permet de filtrer les éléments d'un tableau", 
    ["indexOf()", "map()", "filter()", "reduce()"], "filter()"),
    new Question("Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()","includes()", "findIndex()", "isOdd()"], "includes()"),
    new Question("Quelle méthode transforme du JSON en un objet Javascript ?", 
    ["JSON.parse()","JSON.stringify()", "JSON.object()", "JSON.toJS"], "JSON.parse()"),
    new Question("Quel objet Javascript permet d'arrondir à l'entier le plus proche", 
    ["Math.ceil()","Math.floor()", "Math.round()", "Math.random()"], "Math.round()")
  ];

  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.indexAnswer = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  function incrementValue() {
    quiz.indexAnswer++;
    if (quiz.indexAnswer >= quiz.questions.length) {
      quiz.indexAnswer = 0;
    }
    display.endQuiz();
    display.showAnswer();
  }
  function disIncrementValue() {
    quiz.indexAnswer--;
    if (quiz.indexAnswer <= 0) {
      quiz.indexAnswer = quiz.questions.length;
    }
    display.endQuiz();
    display.showAnswer();
  }


  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },


    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
        `;
      this.elementShown("quiz", endQuizHTML);
    },
// Méthode use for show the answers in the end of the quiz
    showAnswer: function () {
      answerHTML = `
      <div class="increment">
        <input class="index" onclick="disIncrementValue()" type="button" id="moins" value="-"/>
        <input class="index" onclick="incrementValue()" type="button" id="plus" value="+">
      </div>
      <div class="answers">
        <h2> ${quiz.questions[quiz.indexAnswer].text} </h2>
      `;
//Answer 1
      if (quiz.questions[quiz.indexAnswer].choices[0] === quiz.questions[quiz.indexAnswer].answer) {
        answerHTML+=`
        <button class="btn" id="realAnswer">    
          <p>${quiz.questions[quiz.indexAnswer].choices[0]}</p>
        </button>
        `;
      } else {
        answerHTML+=`
        <button class="btn">    
          <p>${quiz.questions[quiz.indexAnswer].choices[0]}</p>
        </button>
        `;
      }
//Answer 2
      if (quiz.questions[quiz.indexAnswer].choices[1] === quiz.questions[quiz.indexAnswer].answer) {
        answerHTML+=`
        <button class="btn" id="realAnswer">    
          <p>${quiz.questions[quiz.indexAnswer].choices[1]}</p>
        </button>
        `;
      } else {
        answerHTML+=`
        <button class="btn">    
          <p>${quiz.questions[quiz.indexAnswer].choices[1]}</p>
        </button>
        `;
      }
//Answer 3
      if (quiz.questions[quiz.indexAnswer].choices[2] === quiz.questions[quiz.indexAnswer].answer) {
        answerHTML+=`
        <button class="btn" id="realAnswer">    
          <p>${quiz.questions[quiz.indexAnswer].choices[2]}</p>
        </button>
        `;
      } else {
        answerHTML+=`
        <button class="btn">    
          <p>${quiz.questions[quiz.indexAnswer].choices[2]}</p>
        </button>
        `;
      }
//Answer 4
      if (quiz.questions[quiz.indexAnswer].choices[3] === quiz.questions[quiz.indexAnswer].answer) {
        answerHTML+=`
        <button class="btn" id="realAnswer">    
          <p>${quiz.questions[quiz.indexAnswer].choices[3]}</p>
        </button>
        </div>
        `;
      } else {
        answerHTML+=`
        <button class="btn">    
          <p>${quiz.questions[quiz.indexAnswer].choices[3]}</p>
        </button>
        </div>
        `;
      }
      this.elementShown("answers", answerHTML)
    },
    
    
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
      display.showAnswer();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  //console.log(quiz);