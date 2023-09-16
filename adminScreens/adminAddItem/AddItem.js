import React from "react";
import BackwardArrow from "../../icons/backward_arrow.svg";
import Profile_Icon from "../../icons/profile_image.svg";
import Admin_Menu from "../../icons/admin_menu.svg";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import styles from "./addItem.module.scss";

function AddItem() {
  const navigate = useNavigate();
  return (
    <main className={styles["admin_home_main_div"]}>
      <header className={styles["header_main_div"]}>
        <section className={styles["backward_icon_div"]}>
          <img
            onClick={() => navigate(-1)}
            src={BackwardArrow}
            alt="backward_arrow"
          />
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

      <h1 className={styles["All_products_heading"]}>Add New Item</h1>

      <section className={styles["adddItem_form_div"]}>
        <div id={styles["product_image_div"]}></div>

        <div className={styles["input_main_div"]}>
          <input type="text" placeholder="Item Name" />
        </div>

        <div className={styles["input_main_div"]}>
          <select>
            <option defaultValue>Select Category</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Meat</option>
            <option>Grocerry</option>
          </select>
        </div>

        <div className={styles["input_textarea_div"]}>
          <textarea rows={8} cols={5} placeholder="Describe this item" />
        </div>
      </section>

      <section className={styles["product_unit_main_div"]}>
        <div className={styles["product_unit_inner_div"]}>
          <h1>Unit Name:</h1>
          <input type="text" placeholder="Pcs./ Kg/ dozen" />
        </div>

        <div className={styles["product_unit_inner_div"]}>
          <h1>Unit Price:</h1>
          <input type="text" placeholder="$3.22" />
        </div>
      </section>

      <section className={styles["addProduct_btn_div"]}>
        <button>Add Product</button>
      </section>

      <Footer />
    </main>
  );
}

export default AddItem;
