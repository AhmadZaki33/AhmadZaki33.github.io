/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/




function generateWinningNumber () {  
    let num = Math.ceil(Math.random()*100)
    return num

}




function shuffle (arr) {

    for (let i = 0; i < arr.length; i++) {
        const randamIdx = Math.round(Math.random()* i)
        const store = arr[i];
        arr[i] = arr[randamIdx]
        arr[randamIdx] = store
        
    }

    return arr

}





class Game {
    constructor() {
        this.playersGuess = null
        this.pastGuesses = []
        this.winningNumber = generateWinningNumber()
       

    }

    difference () {
        return Math.abs(this.winningNumber - this.playersGuess)

        // let difference = this.winningNumber - this.playersGuess
        // if(difference < 0) {
        //     difference *= -1
        //     return difference
        // }

        

    }




    isLower = () => {
        return this.playersGuess < this.winningNumber
    }
        






    playersGuessSubmission(guessNum) {
        
        if (typeof guessNum !== 'number'|| guessNum<1 || guessNum>100) {
            throw 'That is an invalid guess.'
        }
        this.playersGuess = guessNum
        return this.checkGuess()
        
    }







    checkGuess () {

        let message = ''

    
        if(this.playersGuess === this.winningNumber) {
            message = `You Win in round ${this.pastGuesses.length+1} but i still Prettier!!!`
            document.getElementById('data').remove()
        } else if (this.pastGuesses.includes(this.playersGuess)) {
            message = 'You have already guessed that number.'
        } else {

            this.pastGuesses.push (this.playersGuess)
            if (this.pastGuesses.length === 5) {
                message = `You Lose!  I'm The Champ! I'm Pretty!!! I'm Pretty!!! The winning number was . . . .   ${this.winningNumber}  Sucker!`
                document.getElementById('data').remove()
            }else{
        
        

                // let inputButton = document.getElementById('data')
                // let gameOver = document.createElement('p')
                // gameOver.innerHTML = 'GAME OVER!'
                // inputButton.parentNode.replaceChild(gameOver,inputButton)
                // console.log(this.winningNumber)
                // console.log(this.pastGuesses)
                   
                if (this.difference() < 10 && this.isLower()) message = `You're burning up! Punch higher`;
                if (this.difference() < 10 && !this.isLower()) message = `You're burning up! Punch lower`;

                if (this.difference() > 10 && this.difference() < 25 && this.isLower()) message = `You're lukewarm! Punch higher`;
                if (this.difference() > 10 && this.difference() < 25 && !this.isLower()) message = `You're lukewarm! Punch lower`;

                if (this.difference() < 50 && this.difference() > 25 && this.isLower()) message = `You're a bit chilly! Punch higher`;
                if (this.difference() < 50 && this.difference() > 25 && !this.isLower()) message = `You're a bit chilly! Punch lower`;

                if (this.difference() > 50 && this.difference() < 100 && this.isLower())message = `You're ice cold! Punch higher`;
                if (this.difference() > 50 && this.difference() < 100 && !this.isLower())message = `You're ice cold! Punch lower`;

            }

        }
        

    
        document.getElementById('status').innerHTML = message;

    }

    


    provideHint() {

        let hintArray = [generateWinningNumber(),generateWinningNumber(),this.winningNumber]

        // let hintArray = []
        // for (let i = hintArray.length; i < 2; i++) {
        //     hintArray.push(generateWinningNumber())
        // }
        // hintArray.push(this.winningNumber)
        
        return shuffle(hintArray)
    }


}


const newGame = () => {
    return new Game()
}








function playGame() {

    const game = newGame()
   

    const submitButton = document.getElementById('submit')
    const inputButton = document.getElementById('data')
    const hintButton = document.getElementById('hint')
    const playAgain = document.getElementById('play-again')
    let hintRequested = document.getElementById('hint-requested')
    let Guess1 = document.getElementById('Guess1')
    let Guess2 = document.getElementById('Guess2')
    let Guess3 = document.getElementById('Guess3')
    let Guess4 = document.getElementById('Guess4')
    let Guess5 = document.getElementById('Guess5')


    // function guessing1 () {
    //     if(game.pastGuesses[0]) {
    //         Guess1.innerHTML = game.pastGuesses[0]
    //     }

    // }

    function guessing1 () {
        if(game.pastGuesses[0]) {
            Guess1.innerHTML = game.pastGuesses[0] + ' &#128565' + '&#129354'
            return Guess1.innerHTML

        }else{
            Guess1.innerHTML = 'Round 1'
            return Guess1.innerHTML

        }

    }

    function guessing2 () {
        if(game.pastGuesses[1]) {
            Guess2.innerHTML = game.pastGuesses[1] + ' &#128565' + '&#129354'
            return Guess2.innerHTML
        }else{
            Guess2.innerHTML = 'Round 2'
            return Guess2.innerHTML

        }

    }

    function guessing3 () {
        if(game.pastGuesses[2]) {
            Guess3.innerHTML = game.pastGuesses[2] + ' &#128565' + '&#129354'
            return Guess3.innerHTML
        }else{
            Guess3.innerHTML = 'Round 3'
            return Guess3.innerHTML

        }

    }

    function guessing4 () {
        if(game.pastGuesses[3]) {
            Guess4.innerHTML = game.pastGuesses[3] + ' &#128565' + '&#129354'
            return Guess4.innerHTML
        }else{
            Guess4.innerHTML = 'Round 4'
            return Guess4.innerHTML

        }

    }

    function guessing5 () {
        if(game.pastGuesses[4]) {
            Guess5.innerHTML = game.pastGuesses[4] + ' &#128565' + '&#129354'
            return Guess5.innerHTML
        }else{
            Guess5.innerHTML = 'Round 5'
            return Guess5.innerHTML

        }

    }


    




    
    submitButton.addEventListener('click',function(){
        const playersGuess = Number(inputButton.value)
        inputButton.value = ''
        game.playersGuessSubmission(playersGuess)

        

        Guess1.innerHTML = guessing1()
        Guess2.innerHTML = guessing2()
        Guess3.innerHTML = guessing3()
        Guess4.innerHTML = guessing4()
        Guess5.innerHTML = guessing5()

        hintRequested.innerHTML = ''
        

        

    })


    hintButton.addEventListener('click',function(){
        hintRequested.innerHTML = game.provideHint()
    })


    playAgain.addEventListener('click', () => {
        window.location.reload(true);
        return game;
    });



        
        

        


    



}
    
playGame ()



    

// const hint = document.getElementById("hint")




