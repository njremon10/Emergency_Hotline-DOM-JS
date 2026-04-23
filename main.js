//............................all Heart click > navBar Heart Count.............................................//
let count = 0;
const heartIcon = document.getElementById("heart-icon")

const hearts = document.querySelectorAll(".heart-btn");
for(const heart of hearts){
    heart.addEventListener("click",function(){
        console.log("Heart-btn clicked.")
        count++;
        heartIcon.innerText = count;
    })
}


//.............................................Card..............................................................//
//........Call Button a click korle alert dekhabe and coin kombe plus history te show korbe......................//

// National ei kaj ta ami function er maddhome korechi r argument pathai dichi
//............................eivabe sob ghula banaite hole amr onk time lagbe bad style..........................//

/* let coin = 100
const coinIcon = document.getElementById("coin")
const nation = document.getElementById("nation-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    console.log("click national button",nation)

    alert("Calling National Emergency service 999....")

    if(coin === 20){
        alert("Your Coin finish this time.")
    }
    if(coin < 20){
        alert("Not enough Coin.")
        return
    }
   
    coin = coin - 20
    coinIcon.innerText = coin

    // History card a sob show "Transaction show"
    const historyCard = document.getElementById("history")
    const div = document.createElement('div')
    // div.innerText = "National Emergency"+ br +"999"
    div.innerHTML = `
      <div class="mt-5 bg-sky-50 p-2 flex justify-between items-center">
         <div>
            <h1 class="font-bold text-[20px">${"National Emergency"}</h1>
            <p> ${999}</p>
         </div>
         <div>
           <h1>${new Date().toLocaleTimeString()}</h1>     
         </div>
     </div>  
`;
   historyCard.appendChild(div)
})
*/

//...........................................Smart & Easy way button................................................//

let coin = 100
const coinIcon = document.getElementById("coin")
function handleCall(serviceName,number){

    if(coin < 20){
      alert("If you want to call this hotline you need minimum 20 Coin.")
      return
   }

   alert(`Calling ${serviceName} ${number}...`)

   if(coin === 20){
     alert("Your Coin finish this time.")
   }
   
   //coin-=20
     coin = coin - 20
     coinIcon.innerText = coin

     const history = document.getElementById("history")
     const div = document.createElement('div')
     div.innerHTML = `
        <div class="mt-5 bg-sky-50 p-2 flex justify-between items-center">
            <div>
                <h1 class="font-bold text-[20px]">${serviceName}</h1>
                <p>${number}</p>
            </div>
            <div>
                <h1>${new Date().toLocaleTimeString()}</h1>
            </div>
        </div>
     `
     history.appendChild(div)

}

// ......................................Card argument pathailam..........................................//

document.getElementById("nation-btn")
.addEventListener("click",function(e){
e.preventDefault()
handleCall("National Emergency","999")
})


document.getElementById("police-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Police","999")
})


document.getElementById("fire-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Fire service","999")
})


document.getElementById("ambulance-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Ambulance","991994-9999999")
})


document.getElementById("help-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Women & Child Helpline","109")
})


document.getElementById("anti-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Anti-Corruption","106")
})

document.getElementById("electricity-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("electricity","16216")
})

document.getElementById("brac-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Brac","16445")
})

document.getElementById("railway-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    handleCall("Bangladesh Railway","163")
})


// ............................................ Clear Button....................................................//

document.getElementById('clear-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    console.log("clear button click.")
    const history = document.getElementById('history')
    history.innerHTML = "";
})



// .............................................Copy Button.........................................................//

let copy = 0
const copyParent = document.getElementById("copy")

const copyButton = document.querySelectorAll(".copy-btn")
    for(const copyBtn of copyButton){
        copyBtn.addEventListener("click",function(){
            // console.log("click copy btn.",copyBtn)

            const number = copyBtn.getAttribute("data-number")
            // console.log(number)  data-number gula show korbe number class a add kore rakhsi
            alert("Copied Number :"+' '+ number)
 
           // copy count update
            copy++
            copyParent.innerText = copy

            // clipboard এ copy
        navigator.clipboard.writeText(number);

        // google search open (optional 🔥)
        window.open(`https://www.google.com/search?q=${number}`);
        })
        
    }
