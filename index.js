const adviceID = document.getElementById("advice--id");
const advice = document.getElementById("advice");
const adviceSlip = document.getElementById("advice--slip");

async function adviceCard(){
    let response = await fetch("https://api.adviceslip.com/advice");

    let data = await response.json();
    
    adviceSlip.innerText = data.slip.advice;
    adviceID.innerText = `ADVICE #${data.slip.id}`
}


advice.addEventListener("click", ()=>{
    adviceCard();
})

