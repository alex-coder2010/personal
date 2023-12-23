function CurrentProfile(){

    return(
        <div className = "currentProfile" >
            <div className = "profilePicture" >
            <img src = "https://picsum.photos/40" className = "rounded" />
            </div>
            <div>
            <p className = "currentProfileName" >Alex</p>
            <p className = "profileLocation" >Niagara Falls, Canada</p>
            <p className = "postTime" >2 weeks ago</p>
            </div>
            <div className = "postSettings" >
            <button className = "button" >
            <i className = "fa-solid fa-ellipsis-vertical" style = {{color: "#000000", fontSize: "2em"}}></i>
            </button>
            </div>
        </div> 
    )
}

export default CurrentProfile