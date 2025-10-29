const generateBtn = document.querySelector(".generateBtn")

const memeTitle = document.querySelector(".memeTitle")

const memeImg = document.querySelector(".memeImg")

const authorOutput = document.querySelector(".author")


function createMeme(){
    
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        const {url,title,author} = data

        memeImg.src = url
        memeTitle.textContent = title
        authorOutput.textContent = `Meme by : ${author}`        
        
    })
    
}

createMeme()

generateBtn.addEventListener("click",function(){
    createMeme()
})