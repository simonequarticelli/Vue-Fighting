new Vue({
	el: '#app',
    data: {
        showAction: false,
        yourLife: 100,
        monsterLife: 100,
        listAction: []
    },
    methods: {
  	    resetGame: function() {
            this.showAction = !this.showAction;
            this.yourLife = 100;
            this.monsterLife = 100;
            this.listAction = [];
        },
        attack: function() {
            let youRandomAttack = Math.floor(Math.random() * 10) + 1;
            let monsterRandomAttack = Math.floor(Math.random() * 10) + 1;
            this.monsterLife -= youRandomAttack;
            this.yourLife -= monsterRandomAttack;
            //console.log(Math.floor(Math.random() * 10) + 1); 
            this.listAction.unshift('monster attack you ' + monsterRandomAttack);
            this.listAction.unshift('you attack monster ' + youRandomAttack);
            this.checkLife();
        },
        specialAttack: function() {
            let monsterRandomAttack = Math.floor(Math.random() * 20) + 1;
            this.monsterLife -= 20;
            this.yourLife -= monsterRandomAttack;
            this.listAction.unshift('monster special-attack you ' + monsterRandomAttack);
            this.listAction.unshift('you special-attack monster ' + 20);
            this.checkLife();
        },
        heal: function() {
            if (this.yourLife <= 90) {
                this.yourLife += 10;  
                this.listAction.unshift('you heal ' + 10);
            }else if (this.yourLife > 90) {
                let diff = 100 - this.yourLife;  
                this.yourLife += diff;
                this.listAction.unshift('you heal ' + diff);
            }  
        },
        checkLife: function() {
            if (this.yourLife <= 0) {
                let lose = confirm('you lose! try again?');
                if (lose === true) {
                    this.resetGame(); 
                }
            }else if(this.monsterLife <= 0) {
                let win = confirm('you win! another match?');
                if (win === true) {
                    this.resetGame(); 
                }
            }
        }
    }
});