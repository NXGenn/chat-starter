import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import useChatStore from "../../library/chatStore";
import { auth, db } from "../../library/firebase"
import useUserStore from "../../library/userStore";
import "./detail.css"

const Detail = () => {
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
    const { currentUser } = useUserStore();

    const handleBlock = async ()=>{
        if(!user) return;
        const userDocRef = doc(db, "users", currentUser.id)

        try{
            await updateDoc(userDocRef,{
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });
            changeBlock()

        }catch(error){
            console.log(error);
        }

    }
    return(
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt=""/>
                <h2>{user?.username}</h2>
                <p>Lorem ipsum dolor sit,Magnam!</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetails">
                            <img src="https://th.bing.com/th/id/OIP.MXJZRBJ9svOfIWd5kyZPwAHaFe?w=912&h=674&rs=1&pid=ImgDetMain" alt=""/>
                            <span>photo_2024_2.png</span>
                            </div>
                              <img src="./download.png" alt="" className="icons" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                            <img src="https://th.bing.com/th/id/OIP.MXJZRBJ9svOfIWd5kyZPwAHaFe?w=912&h=674&rs=1&pid=ImgDetMain" alt=""/>
                            <span>photo_2024_2.png</span>
                            </div>
                              <img src="./download.png" alt="" className="icons" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                            <img src="https://th.bing.com/th/id/OIP.MXJZRBJ9svOfIWd5kyZPwAHaFe?w=912&h=674&rs=1&pid=ImgDetMain" alt=""/>
                            <span>photo_2024_2.png</span>
                            </div>
                              <img src="./download.png" alt="" className="icons" />
                        </div>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>{
isCurrentUserBlocked ? "you are Blocked!" : isReceiverBlocked ? "user Blocked" :  "Block User"
}</button>
                <button className="logout" onClick={()=>auth.signOut()} >Log Out</button>
            </div>
        </div>
    )
}     
    
export default Detail