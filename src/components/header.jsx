import { Button } from "@mui/material";
import React from "react";
// import Button from '@mui/material-next/Button';
import './header.css'
function Header(){
    return(
        <>
        <div className="header">
            <div className="websiteName">Website Name</div>
            <div className="button"><span className="button"><Button variant="outlined">Sign up</Button></span><span className="button"><Button variant="outlined">Log in</Button></span></div>


        
        
        </div>      

        </>
    );

}

export default Header