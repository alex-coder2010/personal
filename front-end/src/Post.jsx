import { useState } from "react";
import CurrentProfile from "./CurrentProfile.jsx"
import Comment from "./Comment.jsx"



function Post(){





{/*                                                  - BUTTONS LOGIC -                                                      */}

const [isRotated, setIsRotated] = useState(false);
const [downloads, setDownloads] = useState(Math.floor(Math.random() * 10000));
const [shares, setShares] = useState(Math.floor(Math.random() * 10000));
const [favourites, setFavourites] = useState(Math.floor(Math.random() * 10000));
const [isFavourite, setIsFavourite] = useState(false);

const onClickBookmark = () => {

    if (isFavourite == false){
        setFavourites(favourites + 1);
        setIsFavourite(true);
    } 
    
    else {
        setFavourites(favourites - 1);
        setIsFavourite(false);
    }
}

const [comments, setComments] = useState(Math.floor(Math.random() * 10000));
const [isCommented, setIsCommented] = useState(false);


const onClickComment = () => {

    if (isCommented == false){
        setIsCommented(true);
        setIsRotated(!isRotated);
        console.log(isRotated)

    } 
    
    else {
        setIsCommented(false);
        setIsRotated(!isRotated);
    }
}


const [likes, setLikes] = useState(Math.floor(Math.random() * 10000));
const [isLiked, setIsLiked] = useState(false);


const onClickLike = () => {

    if (isLiked == false){
        setLikes(likes + 1);
        setIsLiked(true);
    } 
    
    else {
        setLikes(likes - 1);

        setIsLiked(false);
    }
}


{/*                                                  - BUTTONS LOGIC -                                                      */}







    return(
        
        <div className = "content" >
        <CurrentProfile/>
        <br/>

        <div className = "post" >
        <img src = "./assets/Niagara.jpg" className = "image" ></img>
        <div className = "buttons" >



{/*                                                    - BUTTONS -                                                          */}


        <div className = "buttons" >

        <button className = "button" onClick = {onClickLike}>
        <i className="fa-solid fa-heart" style = {{color: isLiked ? "#ff0000" : "#000000", fontSize: "2.5em"}}></i>
        </button>
        <p className = "numberInteractions" >{likes}</p>

        <button className = "button" onClick = {onClickBookmark} >   
        <i className="fa-solid fa-bookmark" style = {{color: isFavourite ? "#ffc000" : "#000000", fontSize: "2.5em"}}></i>
        </button>
        <p className = "numberInteractions" >{favourites}</p>   


        <button className = "buttonShare">   
        <i className = "fa-solid fa-arrow-down" style = {{color: "#000000",  fontSize: "2.5em"}}></i>
        </button>
        <p className = "numberInteractions" >{downloads}</p>     


        <button className = "buttonShare">   
        <i className = "fa-solid fa-share" style = {{color: "#000000",  fontSize: "2.5em"}}></i>
        </button>
        <p className = "numberInteractions" >{shares}</p>    

        </div>


{/*                                                 -  BUTTONS -                                                            */}



        </div>
        </div>
        <div className = "commentsHeader" >
        <h3>Comments ({comments})</h3>
        <button  className = {isRotated ? 'rotated-button' : 'button'} id = "comment" onClick = {onClickComment} >   
        <i className = "fa-solid fa-chevron-down" style = {{fontSize: "1.5em"}}></i>
        </button>
        </div>
        <div className="commentSection" style={{ height: isCommented ? '500px' : '0', overflow: 'hidden', transition: 'height 0.5s ease-in-out' }}>
        <Comment/>
        </div>
        </div>
        
    )
}

export default Post