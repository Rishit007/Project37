class Quiz{
    constructor(){}
    

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
      }


    update(state){
        database.ref('/').update({
            gameState: state
        });
    }


    async start(){
        if(gameState ===0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if (contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
    
                console.log(contestantCount);
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        question.hide();
        bg = "yellow";
        fill ("black")
        textSize(50);
        text("Result of the Quiz",250, 55);
        Contestant.getContestantInfo();

        textSize(20)
        text ("Note: the Contestant who answered correct are hightlighted in Green",150,230);
        
        if(allContestants !== undefined){

            var display_position = 250;

            for(var plr in allContestants){

                var correctAns = "2";
                if(correctAns === allContestants[plr].distance)
                    fill ("green")
                else
                    fill ("red")
    
            display_position+=25;
            textSize(20);
            text(allContestants[plr].name + ": " + allContestants[plr].distance, 150,display_position);
            }
        }
    }


}