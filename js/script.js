// {{DATA}}
const dataTopics = [
	"General knowledge",
	"Fashion and style",
	"Animals and wildlife",
	"Mythology and folklore",
	"Languages english",
	"Food and drink ",
	"Geography",
	"Business and finance",
	"Literature",
	"Technology",
	"History",
	"Science",
	"Psychology",
	"Sports",
	"TV shows",
	"Movies",
	"Music",
	"Celebrities",
	"Math",
	"Programming",
].reverse();
// for each topic, we have 15 question...we choose 10 of them randomly
const questions = {
	1: [
		{
			question: "Which keyword is used to declare a constant in JavaScript?",
			options: ["var", "let", "const", "all of the above"],
			answer: "const",
		},
		{
			question: "Which operator is used to compare two values in JavaScript?",
			options: ["+", "-", "*", "=="],
			answer: "==",
		},
		{
			question:
				"Which HTTP method is used to create a new resource on the server?",
			options: ["GET", "PUT", "POST", "DELETE"],
			answer: "POST",
		},
		{
			question: "Which keyword is used to retrieve data from a MySQL database?",
			options: ["POST", "GET", "SELECT", "UPDATE"],
			answer: "SELECT",
		},
		{
			question: "What is the default port num for HTTP?",
			options: ["80", "8080", "8000", "8888"],
			answer: "80",
		},
		{
			question:
				"Which property is used to change the background color of an HTML element?",
			options: ["color", "background-color", "bg-color", "bgcolor"],
			answer: "background-color",
		},
		{
			question: "What is the correct way to add a comment in CSS?",
			options: [
				"<!-- This is a comment -->",
				"// This is a comment",
				"/* This is a comment */",
				"# This is a comment",
			],
			answer: "/* This is a comment */",
		},
		{
			question:
				"Which attribute is used to define a unique identifier for an HTML element?",
			options: ["class", "id", "name", "href"],
			answer: "id",
		},
		{
			question: "Which keyword is used to declare a variable in JavaScript?",
			options: ["var", "let", "const", "all of the above"],
			answer: "all of the above",
		},
		{
			question:
				"What is the output of the following code? \nconsole.log(typeof(null));",
			options: ["object", "null", "undefined", "number"],
			answer: "object",
		},

		{
			question:
				"What is the correct syntax for a function named 'myFunction' in JavaScript?",
			options: [
				"function = myFunction()",
				"function myFunction = ()",
				"function myFunction()",
				"function:myFunction()",
			],
			answer: "function myFunction()",
		},
		{
			question: "Dot vs. Bracket notation for object properties:",
			options: ["none", "dot:string", "bracket:variables", "Both"],
			answer: "bracket:variables",
		},
		{
			question: "Add new property to existing object:",
			options: ["dot notation", "addProperty()", "bracket notation", "None"],
			answer: "dot notation",
		},
		{
			question: "'this' inside object literal:",
			options: ["global", "nothing", "object", "window"],
			answer: "object",
		},
		{
			question: "Accessing 'age' in an object:",
			options: ["dot", "brackets", "Both", "Invalid"],
			answer: "Both",
		},
	],
	15: [
		{
			question: "What is the national dish of Spain?",
			options: ["Paella", "Sushi", "Pizza", "Tacos"],
			answer: "Paella",
		},
		{
			question: "What is the main ingredient in hummus?",
			options: ["Chickpeas", "Eggplant", "Tomatoes", "Lentils"],
			answer: "Chickpeas",
		},
		{
			question:
				"What is the name of the Japanese soup made with miso paste and dashi broth?",
			options: ["Miso soup", "Udon soup", "Ramen", "Soba soup"],
			answer: "Miso soup",
		},
		{
			question: "What type of pastry is used to make a croissant?",
			options: [
				"Puff pastry",
				"Shortcrust pastry",
				"Filo pastry",
				"Choux pastry",
			],
			answer: "Puff pastry",
		},
		{
			question: "What is the national dish of India?",
			options: ["Chicken tikka masala", "Butter chicken", "Biryani", "Samosas"],
			answer: "Biryani",
		},
		{
			question: "What is the most widely consumed meat in the world?",
			options: ["Pork", "Beef", "Chicken", "Fish"],
			answer: "Pork",
		},
		{
			question:
				"What is the name of the famous Italian cured meat that is often served with melon?",
			options: ["Prosciutto", "Salami", "Coppa", "Mortadella"],
			answer: "Prosciutto",
		},
		{
			question:
				"What is the name of the Thai dish made with rice noodles, shrimp, peanuts, and tamarind sauce?",
			options: ["Pad thai", "Tom yum soup", "Green curry", "Massaman curry"],
			answer: "Pad thai",
		},
		{
			question:
				"What is the name of the Italian dessert made with ladyfingers, mascarpone cheese, and espresso?",
			options: ["Tiramisu", "Cannoli", "Panna cotta", "Gelato"],
			answer: "Tiramisu",
		},
		{
			question: "What is the main ingredient in guacamole?",
			options: ["Avocado", "Tomato", "Onion", "Garlic"],
			answer: "Avocado",
		},
		{
			question: "What type of fish is used to make traditional sushi?",
			options: ["Tuna", "Salmon", "Eel", "Yellowtail"],
			answer: "Tuna",
		},
		{
			question:
				"What is the name of the French dish made with beef, onions, and red wine?",
			options: ["Boeuf bourguignon", "Coq au vin", "Ratatouille", "Cassoulet"],
			answer: "Boeuf bourguignon",
		},
		{
			question:
				"What is the name of the Mexican sauce made with chili peppers, tomatoes, and spices?",
			options: ["Salsa", "Mole", "Enchilada sauce", "Adobo sauce"],
			answer: "Mole",
		},
		{
			question:
				"What is the name of the Korean dish made with rice, vegetables, beef, and egg?",
			options: ["Bibimbap", "Kimchi", "Bulgogi", "Japchae"],
			answer: "Bibimbap",
		},
		{
			question:
				"What is the name of the French cheese that is known for its strong smell?",
			options: ["Roquefort", "Brie", "Camembert", "Gruyere"],
			answer: "Roquefort",
		},
	],
};

/// {{VARIABLES of Dom}}
// {btns}
const btnStart = document.querySelector(".btn__start");
const btnSkip = document.querySelector(".skip");
const btnRemoveOneOption = document.querySelector(
	`.quiz__hint[data-num='0'] div`
);
const btnGetHint = document.querySelector(`.quiz__hint[data-num='1'] div`);
// {box of game}
const containerBox = document.querySelector(".container");
const containerInnerBox = document.querySelector(".container__inner");
// {img}
imgStart = document.querySelector(".img__start");
imgQuiz = document.querySelector(".img__quiz");
// topics list: for inserting topics dynamically
const topicsList = document.querySelector(".topics__list");
// {firstTimer321}
const labelTimer321 = document.querySelector(".start__timer");
// {quiz}
const allQuizEl = document.querySelectorAll(".quiz");
const labelQuestionEl = document.querySelector(".quiz__question p");
// header(topic name, question counter)
const labelTopicEl = document.querySelector(".quiz__header--topic");
const labelQuestionCounter = document.querySelector(
	".quiz__header--number span"
);
// timer-30
const labelTimer30Text = document.querySelector(".quiz__time--text");

//options of q
const allOptionsBtn = document.querySelectorAll(".quiz__option a");
const optionsListEL = document.querySelector(".quiz__options--list");
// end game(score and btnAgain)
const labelScore = document.querySelector(".score");
const btnAgain = document.querySelector(".btn__end");
// correct answer icon(we insert that by js)
const CorrectIcon = `<svg
                    class="correct-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>`;

/// {JS program variable}
let score = 0;
let currentQuestion = {};
let answer;
let currentOptionsList = [];
let questionCounter = 0;
const randomNumsSet = new Set();
let timer30;
let topicNum;
/// {{FUNCTIONS}}

topicsList.innerHTML = "";
const insertTopics = () => {
	let htmlStr;
	dataTopics.forEach((el, i) => {
		htmlStr = `<li class="btn__topic btn" data-topic-num=${
			i + 1
		}><a href="#">${el}</a></li>`;
		topicsList.insertAdjacentHTML("beforeend", htmlStr);
	});
};
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const startToTopics = () => {
	// {btnStart--> hidden}
	btnStart.classList.add("hidden");
	//{change style of container}
	containerBox.classList.add("container--notStart");
	// inner
	containerInnerBox.classList.add("container__inner--topics");
	containerInnerBox.classList.add("container__inner--notStart");
	// {insert,show topics}
	insertTopics();
	topicsList.classList.remove("hidden");
	//title-->hidden
	document.querySelector(".title__game").classList.add("hidden");
	//{img}-->change
	imgStart.classList.add("hidden");
	imgQuiz.classList.remove("hidden");

	// data isn't ready
	setTimeout(() => {
		alert(`Hi, for now you can just use 'Programmin', 'food and drinks'`);
	}, 1000);
};

function setQuizTime() {
	clearInterval(timer30);
	labelTimer30Text.textContent = "00:30";
	let sec = 29;
	timer30 = setInterval(() => {
		showSec = String(sec).padStart(2, "0");
		labelTimer30Text.textContent = `00:${showSec}`;
		if (sec === 0) {
			clearInterval(timer30);
			setTimeout(() => {
				alert("your time is over!!!");
				btnSkipEventHandlerFn();
			}, 100);
		}
		sec--;
	}, 1000);
}
const topicToQuiz = function (e) {
	if (!e.target.closest(".btn__topic")) return;
	// topicNum, specifies which topic the user has selected( it's at least 1)
	topicNum = e.target.closest(".btn__topic").dataset.topicNum;
	// ALREDY THE DATA IS ONLY AVILABLE ON 'PROGRAMMING' AND 'FOOD AND DRINK', so :
	if (!["1", "15"].includes(topicNum)) return;
	// {hide topics}
	topicsList.classList.add("hidden");
	//{timer321}
	labelTimer321.classList.remove("hidden");
	let time = 2;
	labelTimer321.firstElementChild.textContent = `...3`;
	labelTimer321.classList.add("start__timer--transform");
	//container
	containerInnerBox.classList.remove("container__inner--topics");
	containerBox.classList.add("container--timer");

	const timer321 = setInterval(() => {
		labelTimer321.firstElementChild.textContent = `...${time--}`;
	}, 1000);
	let randomNumInitial = getRandomInt(0, 14);
	randomNumsSet.add(randomNumInitial);
	setTimeout(() => {
		containerInnerBox.classList.remove("container__inner--center");
		// remove timer321 effects
		labelTimer321.classList.remove("start__timer--transform");
		containerBox.classList.remove("container--timer");
		labelTimer321.classList.add("hidden");
		// {FIRST random question}(remember: we have 15 questions for each topics)
		makeQusetionContent(randomNumInitial, topicNum);
		//{quiz}--> show
		allQuizEl.forEach((e) => e.classList.remove("hidden"));
		labelQuestionCounter.textContent = 1;
		clearInterval(timer321);
		questionCounter++;
	}, 3500);
	// don't wrap below code to setTimeout...we got error.
};

function makeQusetionContent(randomNum, topicNum) {
	if ([typeof undefined, null].includes(typeof randomNum)) {
		randomNum = getRandomInt(0, 14);
		randomNumsSet.add(randomNum);
	}
	console.log(topicNum, randomNum);
	currentQuestion = questions[topicNum][randomNum].question;
	answer = questions[topicNum][randomNum].answer;
	currentOptionsList = questions[topicNum][randomNum].options;
	//  show Q
	labelQuestionEl.textContent = currentQuestion;
	//show topic
	labelTopicEl.innerHTML = "";
	labelTopicEl.textContent = dataTopics[Number(topicNum) - 1];
	// show options
	allOptionsBtn.forEach((el, i) => (el.textContent = currentOptionsList[i]));
	// setQuizTime
	setQuizTime();
	console.log(answer);
}
function resetStyleNextQuestion() {
	optionsListEL.style.pointerEvents = "initial";
	btnSkip.style.pointerEvents = "initial";
	btnRemoveOneOption.querySelector("a").style.textDecoration = "none";
	setQuizTime();
	btnRemoveOneOption.addEventListener("click", removeOneOptionFn);
	//style of options
	allOptionsBtn.forEach((el) => {
		el.parentElement.classList.remove("correct-answer", "choose__false");
		el.closest("li").classList.remove("hidden__v2");
	});
	//remove correct icon
	document.querySelector(".correct-icon")?.remove();
}
const setNextQuestions = function (topicNum) {
	if (questionCounter === 10) {
		setTimeout(() => {
			// hide quiz
			allQuizEl.forEach((el) => el.classList.add("hidden"));
			// show again, score
			labelScore.classList.remove("hidden");
			labelScore.querySelector("span").textContent = score;
			btnAgain.classList.remove("hidden");
			containerInnerBox.classList.add("container__inner--center");
			return;
		}, 1000);
	}
	//{we choose 10 q, randomly}
	while (randomNumsSet.size !== 10) {
		randomNum = getRandomInt(0, questions[topicNum].length - 1);
		randomNumsSet.add(randomNum);
	}
	randomNumsArr = [...randomNumsSet];

	// style(make animation)
	setTimeout(() => {
		allQuizEl.forEach((el) => {
			el.classList.add("hidden__v2");
		});
	}, 50);
	setTimeout(() => {
		makeQusetionContent(randomNumsArr[questionCounter - 1], topicNum);
		labelQuestionCounter.textContent = questionCounter;

		allOptionsBtn.forEach((el) => {
			el.parentElement.classList.remove("correct-answer", "choose__false");
			el.closest("li").classList.remove("hidden__v2");
		});
		document.querySelector(".correct-icon")?.remove();
		resetStyleNextQuestion();

		allQuizEl.forEach((el) => {
			el.classList.remove("hidden__v2");
		});
	}, 1000);
	// content
	questionCounter++;
};

const checkAnswer = function (e) {
	e.preventDefault();
	selectedOption = e.target.closest(".quiz__option");
	if (!selectedOption) return;
	const num = Number.parseFloat(selectedOption.parentElement.id);
	// example id ='1op'
	if (currentOptionsList[num] === answer) {
		selectedOption.classList.add("correct-answer");
		// insert correct icon
		selectedOption.insertAdjacentHTML("beforeend", CorrectIcon);
		score++;
	} else {
		// choose wrong option
		selectedOption.classList.add("choose__false");
		allOptionsBtn.forEach((el) => {
			if (el.textContent === answer) {
				el.closest(".quiz__option").classList.add("correct-answer");
				el.closest(".quiz__option").insertAdjacentHTML(
					"beforeend",
					CorrectIcon
				);
			}
		});
	}
	optionsListEL.style.pointerEvents = "none";
	btnSkip.style.pointerEvents = "none";
	// stop timer , more styles
	document
		.querySelectorAll(".container:hover .btn.quiz__option")
		.forEach((el) => {
			el.style.backgroundColor = "var(--color-primary-opacity-1)";
			el.style.boxShadow = "inset 0 0 0 1px var(--color-primary-opacity-2)";
		});
	setNextQuestions(topicNum);
};
// remove one options(hint)
const removeOneOptionFn = function (e) {
	e.preventDefault();
	const setNum = new Set();
	while (setNum.size !== 2) {
		let randomNum = getRandomInt(0, 3);
		setNum.add(randomNum);
	}
	const arrNum = [...setNum];
	if (currentOptionsList[arrNum[0]] !== answer) {
		document.getElementById(`${arrNum[0]}op`).classList.add("hidden__v2");
	} else if (currentOptionsList[arrNum[1]] !== answer) {
		document.getElementById(`${arrNum[1]}op`).classList.add("hidden__v2");
	}
	// we can remove an option just once
	btnRemoveOneOption.removeEventListener("click", removeOneOptionFn);
	btnRemoveOneOption.querySelector("a").style.textDecoration = "line-through";
};
function btnSkipEventHandlerFn() {
	setNextQuestions(topicNum);
}
function btnAgainEventHandlerFn(e) {
	e.preventDefault();
	// {score,btnAgain}-->hidden
	btnAgain.classList.add("hidden");
	labelScore.classList.add("hidden");
	// back to start
	btnStart.classList.remove("hidden");
	// container
	containerBox.classList.remove("container--notStart");
	containerInnerBox.classList.remove("container__inner--notStart");
	//show title(short answer)
	document.querySelector(".title__game").classList.remove("hidden");
	//reset styles
	resetStyleNextQuestion();
	/// LOGIC OF PROGRAM
	score = 0;
	randomNumsSet.clear();
	questionCounter = 1;
	// img-->change
	imgStart.classList.remove("hidden");
	imgQuiz.classList.add("hidden");
}

/// {{EVENT HNDLERS}}
// satartToTopics
btnStart.addEventListener("click", startToTopics);
//select topics
topicsList.addEventListener("click", topicToQuiz);
// select an option--> check the answer
optionsListEL.addEventListener("click", checkAnswer);
// hint--> remove one option
btnRemoveOneOption.addEventListener("click", removeOneOptionFn);
// btn skip
btnSkip.addEventListener("click", btnSkipEventHandlerFn);
// again btn
btnAgain.addEventListener("click", btnAgainEventHandlerFn);
