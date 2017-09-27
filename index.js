// Create Require variables

var BasicCard = require('./BasicCard');
var inquirer = require('inquirer');

var basic_questions = [
	new BasicCard("What kind of guitar does Vince Gill love to play?", "A Telecaster"),
	new BasicCard("What is the name of Eric Clapton's favorite guitar?", "Blackie"),
	new BasicCard("What is the most popular selling guitar in the world?", "The Fender Stratocaster")
];


// Function to check answers useing for each loop to run through the questions array
function checkAnswers(type, answers) {
	var correct = 0;
	var incorrect = 0;

	if ( type == 'basic' ) {
		var keys = Object.keys(answers);

		basic_questions.forEach(function(question, index) {
			if ( answers[keys[index]] == question.back ) {
				console.log('correct');
			}
		});
	}
}
 // Prompts questions using Inquierer
function start(type) {
	if ( type == 'basic' ) {
		var questions = [];

		basic_questions.forEach(function(question, index) {
				questions.push({
					name: 'answer-' + index,
					message: question.front
				});
		});

		inquirer.prompt(questions).then(function(answers) {
				checkAnswers('basic', answers);
		});		
	}
}
  // Function to star the game.  Gives choice of basic or Cloze challenge using objects
function prompts() {
	inquirer.prompt({
		name: 'type',
		type: 'list',
		choices: ['Basic', 'Cloze'],
		message: 'What type of flash card challenge would you like?'
	}).then(function(answer) {
		if ( answer.type == 'Basic' ) {
			start('basic');
		}
	});
}
// Initial action ---- init
prompts();

