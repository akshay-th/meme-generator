import React from "react"
// import "./memesData"
// import memesData from "./memesData"

export default function Meme(){
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        memeImage:"http://i.imgflip.com/1bij.jpg"
    })


 function handleChange(event){
    const {name,type,value}=event.target
    setMeme(prevMeme =>({
        ...prevMeme,
        [name]:value
    }))
 }

 const [allMemes,setAllMemes]=React.useState([])

 React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json)
    .then(data=>setAllMemes(data.data.memes))
 },[])
console.log(allMemes);
    const [memeImage,setMemeImage]=React.useState("")
    function buttonClick(){
        
        const randomNumber=Math.floor(Math.random()*allMemes.length)
        
        const url=allMemes[randomNumber].url
        setMemeImage(url)
    }
    return(
        <div className="body">
            <div className="form">
                <input 
                type="text" 
                className="form--input"  
                placeholder="top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}/>
                <input 
                type="text" 
                className="form--input" 
                placeholder="bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button 
                className="form--button"
                onClick={buttonClick}
                 >Get a new meme image 🖼</button>
            </div>
            {/* <img src={memeImage} alt="memeimg" className="meme-img" /> */}
            <div className="meme">
                <img src={memeImage} className="meme--image"alt="memeimg"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}