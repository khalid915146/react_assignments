const Header = ({config}) =>{
    return (
        <div className="Header">
            <span className="logo"><img src="logo.png" alt="logosss" /></span>
            <span className="InstaClone">{"Instaclone"}</span>

            <span className="cameraIcon">
                <img src="./cameraIcon.png" alt="icon"/>
            </span>
            
        </div>
    );
}
export default Header