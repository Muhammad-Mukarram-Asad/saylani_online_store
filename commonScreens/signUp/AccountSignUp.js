import React from 'react'
import styles from "./signUp.module.scss";
import UserName from "../../icons/User_name_icon.svg";
import Contact from "../../icons/Contact.svg";
import Email from "../../icons/Email icon.svg";
import Password from "../../icons/Password icon.svg";
import { useNavigate } from 'react-router-dom';


function AccountSignUp() {
    const navigate = useNavigate();
  return (
    <main className={styles["signUp_main_div"]}>
        <section className={styles["heading_text_div"]}>
        <h1>Saylani Welfate Store</h1>
        <p> Online Discount Store</p>
        </section>

        <section className={styles["form_main_div"]}>
            <div className={styles["form_input_div"]}>
                <input type="text" placeholder='Full Name' />
                <img src={UserName} alt="person_icon" />
            </div>

            <div className={styles["form_input_div"]}>
                <input type="text" placeholder='Contact' />
                <img src={Contact} alt="person_icon" />
            </div>

            <div className={styles["form_input_div"]}>
                <input type="text" placeholder='Email' />
                <img src={Email} alt="person_icon" />
            </div>

            <div className={styles["form_input_div"]}>
                <input type="text" placeholder='Password' />
                <img src={Password} alt="person_icon" />
            </div>


        </section>  

        <section className={styles["btn_text_div"]}>
            <button onClick={() => navigate("/signIn")}>Sign Up</button>
            <p>Already have an account? LogIn</p>
        </section>

    </main>
  )
}

export default AccountSignUp
