import { useEffect, useState } from "react"
import {decodeToken} from "react-jwt"

function Header(){
    const [menuButtonVis, setmenuButtonVis] = useState("hidden")
    const [menuVis, setMenuVis] = useState("hidden")

    const toggleMenuVis = ()=>{
        if (menuVis== "hidden"){
            setMenuVis("")
        }
        else{
            setMenuVis("hidden")
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("spiceSymphonyToken")
        if(token){
            const user = decodeToken(token)
            if(user){
                setmenuButtonVis("")
            }
        }else{
            setmenuButtonVis("hidden")
        }
        
    },[])

    const logoutUser = () =>{
        localStorage.removeItem("spiceSymphonyToken")
        location.href="/login"
    }

    return(
        <div>
            <div className=" flex flex-row justify-between  rounded-xl w-11/12 mx-auto py-3" style={{backgroundColor:"rgba(0,0,0,0.35)"}}>
                <h1 className="heading-main text-white px-5 md:px-10 text-lg md:text-xl">Spice<span className=" text-yellow-500">Symphony</span></h1>
                <button className={"text-white hover:text-yellow-500 heading-sub px-5 " + menuButtonVis} onClick={toggleMenuVis}><span className="material-symbols-outlined">person</span></button>
            </div>
            <div className={"absolute heading-sub w-10/12 rounded-2xl md:right-16 md:ml-0 ml-10 md:w-3/12 " + menuVis} style={{backgroundColor:"rgba(255,255,255,0.7)"}} >
                <button className="px-2 py-2">Profile</button>
                <hr/>
                <button className="px-2 py-2">Menu</button>
                <hr/>
                <button onClick={logoutUser} className="px-2 py-2">Logout</button>
            </div>
        </div>

    )
}

export default Header;