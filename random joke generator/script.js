const URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky";
const button = document.querySelector(".btn")
const joke = document.querySelector(".joke")
const delivery = document.querySelector(".answer")
button.addEventListener("click",()=>{
    getJoke();
})

function getJoke()
{
     fetch(URL).then((response)=>{
        const data = response.json()
        console.log(response)
        return data;

    }).then((datanew)=>{
        console.log(datanew)
        joke.textContent= datanew.setup 
        delivery.textContent = datanew.delivery
    })

    
    
}