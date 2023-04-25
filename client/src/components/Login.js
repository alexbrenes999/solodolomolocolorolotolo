import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation, Link } from "react-router-dom";

function Login() {

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/",{
                username, password
            })
        }

        catch(e){
            console.log(e)
        }
    }


    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="username" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Username" name="" />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" />
            <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>
            
        </div>
    )

}

export default Login;