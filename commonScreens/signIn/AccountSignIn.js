import React from 'react'
import styles from "./signIn.module.scss";
import Email from "../../icons/Email icon.svg";
import Password from "../../icons/Password icon.svg";
import { useNavigate } from 'react-router-dom';

function AccountSignIn() {
    const navigate = useNavigate();
  return (
    <main className={styles["signIn_main_div"]}>
        <section className={styles["heading_text_div"]}>
        <h1>Saylani Welfate Store</h1>
        <p> Online Discount Store</p>
        </section>

        <section className={styles["form_main_div"]}>
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
            <button onClick={() => navigate("/adminHome")}>Sign In</button>
            <p>Don't have an account? Register</p>
        </section>

    </main>
  )
}

export default AccountSignIn
