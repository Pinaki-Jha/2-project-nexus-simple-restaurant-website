import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passVis,setPassVis] = useState("password")
    const [message, setMessage] = useState("")

    const togglePassVis = () =>{
        if(passVis=="password"){
            setPassVis("text")
        }
        else{
            setPassVis("password")
        }
    }

    async function loginUser(event){
        event.preventDefault();
            setMessage("")
            const response  = await fetch ('http://localhost:3000/api/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()
            setMessage(data.message)
            if(data.user){
                localStorage.setItem("cornellNotesToken",data.user)
                location.href = "/"
            }
        
        
    }


    return(
        <div className="min-h-screen py-4 background-sign">
           <Header/>
           <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pl-16 pl-5 pr-5 py-10">
                    <div className="rounded-lg pb-10 heading-sub" style={{backgroundColor:"rgba(255,255,255,0.65"}}>
                        <h1 className="text-center opacity-95 text-xl p-2.5">Login</h1>
                        <hr className="border border-black mb-10 w-11/12 mx-auto"/>
                        <form onSubmit={loginUser}>

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

                            <div className="text-right mx-20">
                                <input type="checkbox" onClick={togglePassVis}/>
                                <span>Show Password</span>
                            </div>

                            <p className="text-red-500 text-center">{message}</p>

                            <div className="text-center">
                                <input type="Submit" value="Login" className="mx-auto bg-yellow-500 rounded-xl text-center px-10 py-2 border-black border hover:drop-shadow-2xl hover:bg-yellow-600"/>
                            </div>
                        </form>
                        
                        <p className="mx-auto mt-2 text-center">Not a member?<Link className="hover:underline" to="/register">Sign Up.</Link></p>
                    </div>
                </div>
                <div className="md:w-1/2 md:pr-16 flex flex-col py-16 md:py-32 justify-center text-center">
                    <h1 className="heading-main text-md md:text-xl text-white"><span className="text-yellow-500">Spice</span>Symphony</h1>
                    <h1 className="heading-main text-5xl md:text-7xl text-white"><span className="text-yellow-500">Food</span> You Love.</h1>
                    <h1 className="heading-main text-5xl md:text-7xl text-white"><span className="text-yellow-500">Music</span>You Love.</h1>
                </div>
           </div>
           

        </div>
    )
}


export default Login;