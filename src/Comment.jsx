

function Comment(){

    return(
        <>
        <div className = "commentContainer" >
        <div className = "commentProfilePicture" >
        <img src = "https://picsum.photos/40" className = "rounded" id = "commentPfp" />
        </div>
        <div className = "commentContent" >
        <div className = "commentTop" >
        <p className = "commentName" >Alex</p>
        <p className = "commentTime" >2 weeks ago</p>
        </div>
        <p className = "commentText">This image is absolutely breathtaking! The vibrant colors of the waterfall contrasting against the lush greenery is a sight to behold. It's like nature's own masterpiece. The play of light and shadow creates a mesmerizing effect. I can almost hear the soothing sound of the water cascading down. This photo truly captures the essence of the beauty that exists in our natural world. It's moments like these that remind us of the awe-inspiring wonders that surround us. Thank you for sharing this stunning image!
        </p>
        
        <div className = "commentLike" >
        <button className = "button">
        <i className="fa-solid fa-heart" style = {{fontSize: "1.5em"}}></i>
        </button>
        <p className = "numberLikesComment" >1321</p>
        <button className = "answer">
        <p className = "answerButtonText" >Answer</p>
        </button>

        </div>
        </div>
        </div> 
        </>
    )
}

export default Comment
