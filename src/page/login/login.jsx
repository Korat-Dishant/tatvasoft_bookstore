import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Button } from "@mui/material";
function Login(){
    return (<>
    <Header></Header>
    Login page
    
    <br></br>
    <Link to="/register"><div className="button"><Button variant="contained">Register</Button></div> </Link>
    <br></br>
    <Link to="/"><div className="button"><Button variant="contained">Home Page</Button></div> </Link>

    
    </>);
}

export default Login