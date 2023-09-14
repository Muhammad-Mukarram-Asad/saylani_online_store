import React from "react";
import styles from "./home.module.scss";
import BackwardArrow from "../../icons/backward_arrow.svg";
import Profile_Icon from "../../icons/profile_image.svg";
import Admin_Menu from "../../icons/admin_menu.svg";
import Apple from "../../icons/apple.svg";
import Mango from "../../icons/mango.svg";
import Kivi from "../../icons/kivi.svg";
import Watermelon from "../../icons/watermelon.svg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
  return (
    <main className={styles["admin_home_main_div"]}>
      <header className={styles["header_main_div"]}>
        <section className={styles["backward_icon_div"]}>
          <img onClick={() => navigate(-1)} src={BackwardArrow} alt="backward_arrow" />
        </section>

        <section className={styles["profile_icon_main_div"]}>
          <div className={styles["profile_icon_img_div"]}>
            <img src={Profile_Icon} alt="profile_icon" />
          </div>
          <div className={styles["admin_name_div"]}>
            <h1>Mr.Mukarram</h1>
            <p> Admin</p>
          </div>
        </section>

        <section className={styles["admin_hamburger_div"]}>
          <img src={Admin_Menu} alt="profile_hamburger" />
        </section>
      </header>

      <h1 className={styles["All_products_heading"]}>All Products</h1>

      <section className={styles["categories_main_div"]}>
        <div className={styles["category_inner_div"]}>
          <img src={Apple} alt="apple" />
          <div className={styles["category_inner_name_div"]}>
            <h1>Apple</h1>
            <p>1. kg</p>
          </div>
          <p>$10</p>
        </div>

        <div className={styles["category_inner_div"]}>
          <img src={Mango} alt="mango" />
          <div className={styles["category_inner_name_div"]}>
            <h1>Mango</h1>
            <p>1. kg</p>
          </div>
          <p>$20</p>
        </div>

        <div className={styles["category_inner_div"]}>
          <img src={Kivi} alt="kivi" />
          <div className={styles["category_inner_name_div"]}>
            <h1>Kivi</h1>
            <p>1. kg</p>
          </div>
          <p>$10</p>
        </div>

        <div className={styles["category_inner_div"]}>
          <img src={Watermelon} alt="watermelon" />
          <div className={styles["category_inner_name_div"]}>
            <h1>Watermelon</h1>
            <p>1. kg</p>
          </div>
          <p>$20</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
