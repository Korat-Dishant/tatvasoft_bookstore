import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>Home Page
        <br></br>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/register">Register</Link>
        </>
    );
    
} 

export default Home