import React from 'react'
import styles from "./adminAccount.module.scss";

const AdminAccount = () => {
  return (
    <div className={styles["admin_account_main_div"]}>
        <h1>Settings</h1>
        <div className={styles["profile_icon_img_div"]}>
            <img src={Profile_Icon} alt="profile_icon" />
        </div>
        <div className={styles["input_image_main_div"]}>
            <input type="text" placeholder='Update Full Name' />
            <div id={styles["product_image_div"]}></div>
        </div>
      
    </div>
  )
}

export default AdminAccount
