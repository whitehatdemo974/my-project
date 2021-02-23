class Food{
    constructor(){
        this.foodStock=null;
        this.lastFed;
        this.image=loadImage('Images/Milk.png');
    }
    
    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    getFedTime(lastFed){
        this.lastFed=lastFed;
    }

    deductFood(){
       if (this.foodStock>0) {
           this.foodStock=this.foodStock-1;
       }
   }
   getFoodStock(){
       return this.foodStock;
   }

   display(){
       var x=80,y=100;
   }
}