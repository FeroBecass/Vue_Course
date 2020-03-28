new Vue({
    el: "#app",
    data: {
        pHealth: '100',
        mHealth: '100',
        gameIsRunning: false,
        turns: [],

    },

    methods: {
        startGame: function(){
            this.pHealth = 100;
            this.mHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];
        },
        attack: function(){
            const damage = this.calculateDamage(1, 6);
            this.mHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for '+ damage
            });

            if(this.checkWin)
                return;

            this.mDoSomething();
        },
        specialAttack: function(){
            const damage = this.calculateDamage(7, 10);
            this.mHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for '+ damage
            });

            if(this.checkWin)
                return;

            this.mDoSomething();
        },
        heal: function(){
            const max = 5;
            const min = 1;
            const heal = Math.floor(Math.random() * (max - min) + min);
            if(this.pHealth + heal <= 100)
                this.pHealth += heal;
            else
                this.pHealth = 100;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for '+ heal
            });

            this.mDoSomething();
        },
        giveUp: function() {
            this.gameIsRunning = false;

        },
        mDoSomething: function(){
            let damage;
            const typeOfMove = Math.floor(Math.random() * (4 - 1) + 1);
            console.log(typeOfMove);
            //Attack
            if(typeOfMove == 1){
                damage = this.calculateDamage(2, 7);
                this.pHealth -= damage;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for '+ damage
                });
            }

            //Special Attack
            if(typeOfMove == 2){
                damage = this.calculateDamage(8, 11);
                this.pHealth -= damage;

                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for '+ damage
                });
            }

            //Heal
            if(typeOfMove == 3){
                var heal = Math.floor(Math.random() * 11);
                if(this.mHealth + heal <= 100)
                    this.mHealth += heal;
                else
                    this.mHealth = 100;

                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster heals for '+ heal
                });
            }
            

            this.checkWin;
        },
        calculateDamage: function(min, max){
            return Math.floor(Math.random() * (max - min) + min);
        },
    },
    computed: {
        checkWin: function(){
            if(this.pHealth <= 0){
                if(confirm('You Lost! New Game?'))
                    this.startGame();
                else
                    this.gameIsRunning = false;
                return true;
            }else if(this.mHealth <= 0){
                if(confirm('You Won! New Game?'))
                    this.startGame();
                else
                    this.gameIsRunning = false;
                return true;
            }
            return 
        },
    }
})