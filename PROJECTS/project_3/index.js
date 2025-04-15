const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");
const btn_4 = document.querySelector(".btn-4");
const btn_5 = document.querySelector(".btn-5");
const btn_6 = document.querySelector(".btn-6");
const btn_7 = document.querySelector(".btn-7");
const btn_8 = document.querySelector(".btn-8");
const btn_9 = document.querySelector(".btn-9");

const player = document.querySelector(".player-name");

const winner = document.querySelector(".winner");

const setOnClick = (btn) =>{

    if( player.innerText === "A")
    {
        player.innerText = "B"
        player.style.color = "green"
        btn.innerText = "A"
        btn.style.backgroundColor = "blue"
        btn.style.color = "white"
    }
    else
    {
        player.innerText = "A"
        btn.innerText = "B"
        player.style.color = "blue"
        btn.style.backgroundColor = "green"
        btn.style.color = "white"
    }

    checkWinner(btn.innerText)
}

btn_1.addEventListener("click",()=>{setOnClick(btn_1)})
btn_2.addEventListener("click",()=>{setOnClick(btn_2)})
btn_3.addEventListener("click",()=>{setOnClick(btn_3)})
btn_4.addEventListener("click",()=>{setOnClick(btn_4)})
btn_5.addEventListener("click",()=>{setOnClick(btn_5)})
btn_6.addEventListener("click",()=>{setOnClick(btn_6)})
btn_7.addEventListener("click",()=>{setOnClick(btn_7)})
btn_8.addEventListener("click",()=>{setOnClick(btn_8)})
btn_9.addEventListener("click",()=>{setOnClick(btn_9)})

const checkWinner = ( playerName) => {
    
    if( checkRow() || checkCol() || checkDiagonal())
    {
        winner.innerText = `${playerName} is the winner`
        
        setTimeout( setInitialState, 3000 )

    }
    else if(checkFilled())
    {
        winner.innerText = `Game is tied`
        
        setTimeout( setInitialState, 3000 )
    }
}

const setInitialState = () => {
    btn_1.innerText = ""
    btn_2.innerText = ""
    btn_3.innerText = ""
    btn_4.innerText = ""
    btn_5.innerText = ""
    btn_6.innerText = ""
    btn_7.innerText = ""
    btn_8.innerText = ""
    btn_9.innerText = ""
    winner.innerText = ""

    player.innerText = "A"

    const btn = document.querySelectorAll(".btn")
    btn.forEach( (b) => {
        b.style.backgroundColor = "white"
    })
}

const checkRow = ()=>{

    if( (btn_1.innerText !== "" && btn_2.innerText=="" && btn_3.innerText=="") && (btn_1.innerText === btn_2.innerText && btn_1.innerText === btn_3.innerText) )
    {
        return true
    }
    else if( (btn_4.innerText !=="" && btn_5.innerText !== "" && btn_6.innerText !== "" ) && ( btn_4.innerText === btn_5.innerText && btn_4.innerText === btn_6.innerText))
    {
        return true
    }
    else if( (btn_7.innerText !=="" && btn_8.innerText !== "" && btn_9.innerText !== "" ) && ( btn_7.innerText === btn_8.innerText && btn_7.innerText === btn_9.innerText) )
    {
        return true
    }

    return false
}

const checkCol = ()=>{

    if( ( btn_1.innerText !== "" && btn_4.innerText !=="" && btn_7.innerText !== "") && (btn_1.innerText === btn_4.innerText && btn_1.innerText === btn_7.innerText ))
    {
        return true
    }
    else if( (btn_2.innerText !== "" && btn_5.innerText !== "" && btn_8.innerText !== "") && (btn_2.innerText === btn_5.innerText && btn_2.innerText === btn_8.innerText))
    {
        return true
    }
    else if( (btn_3.innerText !== "" && btn_6.innerText !== "" && btn_9.innerText !== "" ) && (btn_3.innerText === btn_6.innerText && btn_3.innerText === btn_9.innerText) )
    {
        return true
    }

    return false
}

const checkDiagonal = ()=>{

    if( ( btn_1.innerText !== "" && btn_5.innerText !== "" && btn_9.innerText !== "") && (btn_1.innerText === btn_5.innerText && btn_1.innerText === btn_9.innerText) )
    {
        return true
    }
    else if( ( btn_3.innerText !== "" && btn_5.innerText !== "" && btn_7.innerText !== "") && (btn_3.innerText === btn_5.innerText && btn_3.innerText === btn_7.innerText) )
    {
        return true
    }
    
    return false
}

const checkFilled = ()=>{

    if( btn_1.innerText !== "" && btn_2.innerText !== "" && btn_3.innerText !== "" && btn_4.innerText !== "" && btn_5.innerText !== "" && btn_6.innerText !== "" && btn_7.innerText !== "" && btn_8.innerText !== "" && btn_9.innerText !== "" )
    {
        return true
    }

    return false
}