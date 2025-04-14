const replay = document.querySelector('.replay-btn')
const check = document.querySelector('.check-btn')

let randomNumber = ""

const reset = ()=>{

    const hideen_digit = document.querySelector('.hidden-digit-number')
    const user_input = document.querySelector('.input-box')
    const score_heading = document.querySelector('.score-heading')
    const attempts = document.querySelector('.attempts-count')

    const playCount = document.querySelector('.playing-count')
    playCount.innerText = Number( playCount.innerText ) + 1
    
    hideen_digit.value = "?"
    
    user_input.value = ""
    score_heading.innerText = "🧠 Guess the Number"
    attempts.innerText = 5

    const full_screen = document.querySelector('.full-screen')

    full_screen.style.backgroundColor  = 'gray'
    score_heading.style.color = 'white'
    
    randomNumber = ""

}

const chekNumber = ()=>{

    const hideen_digit = document.querySelector('.hidden-digit-number')
    const user_input = document.querySelector('.input-box')
    
    if( user_input.value === "" || ( user_input.value[0]>='a' && user_input.value[0]<='z' ) || ( user_input.value[0]>='A' && user_input.value[0]<='Z' )   )
    {
        alert("Please Enter a Number")
        return 
    }

    const a =  hideen_digit.value

    if( a === "?" && randomNumber === "")
    {
        randomNumber = Math.floor( Math.random() * 20)
        console.log(randomNumber)
    }

    const b = Number(user_input.value)

    const score_heading = document.querySelector('.score-heading')
    const attempts = document.querySelector('.attempts-count')

    attempts.innerText = Number(attempts.innerText) - 1;

    if(attempts.innerText <= 0) attempts.innerText = 0

    if( randomNumber === b &&  attempts.innerText >= 0)
    {
        score_heading.innerText = 'You Won'
        hideen_digit.value = randomNumber

        const user_score = document.querySelector('.user-score')
        user_score.innerText  = Number(user_score.innerText) + 1

        const user_best_score = document.querySelector('.user-best-score')

        if( Number(user_score.innerText) > Number(user_best_score.innerText) )
        {
            user_best_score.innerText = user_score.innerText
        }

        const full_screen = document.querySelector('.full-screen')

        full_screen.style.backgroundColor  = 'green'
        score_heading.style.color = 'blue'

        setTimeout(  reset , 1000)
    }
    else if(attempts.innerText == 0)
    {
       score_heading.innerText = 'You Lost!'
        score_heading.style.color = 'gray'

        const full_screen = document.querySelector('.full-screen')

        full_screen.style.backgroundColor  = 'red'

        setTimeout(  reset , 1000)
        return;
    }
    else if( b>randomNumber)
    {
        score_heading.innerText = 'Number is high'
        score_heading.style.color = 'red'
    }
    else{
        score_heading.innerText = 'Number is low'
        score_heading.style.color = 'red'
    }
    

}

replay.addEventListener('click' , reset)
check.addEventListener('click' , chekNumber)