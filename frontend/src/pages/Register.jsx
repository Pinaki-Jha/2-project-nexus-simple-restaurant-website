import { useState, useEffect } from "react";
import Header from "./Header";
import{decodeToken} from "react-jwt"
import { Link, useNavigate } from "react-router-dom";

function Register(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [passVis,setPassVis] = useState("password")
    const [message, setMessage] = useState("")

    const navigateTo = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("spiceSymphonyToken")
        if(token){
            const user = decodeToken(token)
            if(user){
                navigateTo("/")
            }
        }
        
    },[])


    const togglePassVis = () =>{
        if(passVis=="password"){
            setPassVis("text")
        }
        else{
            setPassVis("password")
        }
    }

    async function registerUser(event){
        console.log("Registering User...")
        event.preventDefault();
        if (password!=confirmPass){
            setMessage("Passwords do not match.")
        }
        else if(password.trim().length<8 || password.trim().length>16){
            setMessage("Password must be between 8 and 16 characters.")
        }
        else if(!/\d/.test(password.trim())){
            setMessage("Password must contain a number.")
        }
        else if(!/[a-z]/i.test(password.trim())){
            setMessage("Password must contain a letter.")
        }
        else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password.trim())){
            setMessage("Password must contain atleast one special character.")
        }
        else if(password.trim()==""){
            setMessage("Spaces only is not a valid password.")
        }
        else if(username.trim()==""){
            setMessage("Spaces only is not a valid username")
        }
        else{
            setMessage("")
            const response  = await fetch ('http://localhost:3000/api/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            })

            const data = await response.json()
            setMessage(data.message)
        }
    }



    return(
        <div className="min-h-screen py-4 background-sign">
           <Header/>
           <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pl-16 pl-5 pr-5 py-10">
                    <div className="rounded-lg pb-10 heading-sub" style={{backgroundColor:"rgba(255,255,255,0.65"}}>
                        <h1 className="text-center opacity-95 text-xl p-2.5">Sign Up</h1>
                        <hr className="border border-black mb-10 w-11/12 mx-auto"/>

                        <form onSubmit={registerUser}>

                            <div className="flex flex-row mx-12 my-2">
                                <div className="flex flex-col justify-center text-center rounded-full bg-yellow-500 w-10 h-10 mx-2">
                                    <span className="material-symbols-outlined">face</span>
                                </div>
                                <div className="w-5/6">
                                    <input type="text" className="w-full py-2 px-5 rounded-lg" required value={username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                                </div>
                            </div>


                            <div className="flex flex-row mx-12 my-2">
                                <div className="flex flex-col justify-center text-center rounded-full bg-yellow-500 w-10 h-10 mx-2">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="w-5/6">
                                    <input type="email" className="w-full py-2 px-5 rounded-lg" required value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="flex flex-row mx-12 my-2">
                                <div className=" flex flex-col justify-center text-center rounded-full bg-yellow-500 w-10 h-10 mx-2">
                                    <span className="material-symbols-outlined">lock</span>
                                </div>
                                <div className="w-5/6">
                                    <input type={passVis} className="w-full py-2 px-5 rounded-lg" required value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                            </div>

                            <div className="flex flex-row mx-12 my-2">
                                <div className=" flex flex-col justify-center text-center rounded-full bg-yellow-500 w-10 h-10 mx-2">
                                    <span className="material-symbols-outlined">lock</span>
                                </div>
                                <div className="w-5/6">
                                    <input type={passVis} className="w-full py-2 px-5 rounded-lg" required value={confirmPass} placeholder="Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                                </div>
                            </div>


                            <div className="text-right mx-20">
                                <input type="checkbox" onClick={togglePassVis}/>
                                <span>Show Password</span>
                            </div>

                            <p className="text-red-500 text-center">{message}</p>

                            <div className="text-center">
                                <input type="Submit" value="Sign Up" onClick={()=>{setMessage('')}} className="mx-auto bg-yellow-500 rounded-xl text-center px-10 py-2 border-black border hover:drop-shadow-2xl hover:bg-yellow-600"/>
                            </div>
                        </form>
                        
                        <p className="mx-auto mt-2 text-center">Already a member?<Link className="hover:underline" to="/login">Log in.</Link></p>
                    </div>
                </div>
                <div className="md:w-1/2 md:pr-16 flex flex-col py-16 md:py-32 justify-center text-center">
                    <h1 className="heading-main text-5xl md:text-7xl text-white"><span className="text-yellow-500">Spice</span>Symphony</h1>
                    <h1 className="heading-main text-md md:text-xl my-1 text-white"><span className="text-yellow-500">Food</span> You Love.<span className="text-yellow-500"> Music </span>You Love.</h1>
                    
                </div>
           </div>
           

        </div>
    )
}


export default Register;