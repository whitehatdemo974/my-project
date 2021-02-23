class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("pet feeding");
        title.position(130,0);
        
        var feedbutton=createButton("feed food");
        var loadbutton=createButton("load food");
        feedbutton.position(130,160);
        loadbutton.position(250,200);
        feedbutton.mousePressed(function(){
            input.hide();
            button.hide();
            var n=input.value();
            playerCount+=1;
            player.update(n);
            player.updateCount(playerCount);
            greet.html("hello"+n);
        })
        loadbutton.mousePressed(function(){
            input.hide();
            button.hide();
            var n=input.value();
            playerCount+=1;
            player.update(n);
            player.updateCount(playerCount);
            greet.html("hello"+n);
        })

    }
}