class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }

    //read the playerCount value from database
    getCount(){
        db.ref("playerCount").on("value",function (data) {
            playerCount = data.val()
        })
    }

    //writing the playerCount value to the database
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }

    //writing the player name and distance in database
    updateInfo(){
        db.ref("players/player"+this.index).set({
            name:this.name,
            distance:this.distance
        })
    }
    
    //reads all the players information at a time
    static getPlayersInfo(){
        db.ref("players").on("value",(data)=>{
            all=data.val()
        })
    }
    
}