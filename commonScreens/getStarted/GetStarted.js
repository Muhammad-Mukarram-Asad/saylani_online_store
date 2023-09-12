import React from 'react'
import Saylani_table from "../../icons/saylani_table.svg";
import styles from "./getStarted.module.scss";
import { useNavigate } from 'react-router-dom';

function GetStarted() {
  const navigate = useNavigate();
  return (
    <div className={styles["getStarted_main_div"]}>
     
        <img src={Saylani_table} alt="saylani_image" />
        <h1>Saylani Welfare</h1>
        <p>Online Dscount Store</p>
       

  
        <button onClick={() => navigate("/signUp")}>
          Get Started
          </button>
      
    </div>
  )
}

export default GetStarted
