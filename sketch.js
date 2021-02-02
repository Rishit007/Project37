var canvas;
var gameState = 0, contestantCount = 0;
var database, quiz, question, contestant, allContestants;
var bg = "pink";
var s = 0;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background(bg);

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    quiz.play();
  }
  
}
