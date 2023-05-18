import React from "react";
import { Link } from "react-router-dom";

function Register () {
    return (
        <>Registration page
        <br></br>        
        <Link to="/login">Login now</Link>
        <br />
        <Link to="/">Home page</Link>

        </>
    );
    
} 

export default Register