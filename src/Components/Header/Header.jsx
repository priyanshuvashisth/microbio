import React from 'react'
import "../../Styles/Header.css";
import colgLogo from "../../Assets/Header/IPDClogo.gif"
import micro from "../../Assets/Header/Microbio.png"

const Header = () => {
  return (
    <>
    <header>
        <img src={colgLogo} alt="" />
        <p>
            Indraprastha Dental Collage & Hospital <br />46/1, Site-Iv, Industrial Area, Sahibabad, <br />Ghaziabad-201010 (U.P) <br />Department of Microbiology
        </p>
        <img src={micro} alt="" />
    </header>
    <hr style={{backgroundColor:'black',width:'100%'}} />
    </>
  )
}

export default Header