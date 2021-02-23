class Game{
    constructor(){

    }
    getState(){
        var gameState=database.ref('gameState');
        gameState.on("value",function(data){
            gameState=data.val();
        })
    }
    update(s){
        database.ref('/').update({
            gameState:s
        })
    }
    start(){
        if (gameState == 0) {
          player=new Player();
          player.getCount();
          form=new Form();
          form.display
        }
    }
}