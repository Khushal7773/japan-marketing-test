import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const Inquiry: FunctionComponent = () => {
    return (
        <div className={styles.unstyledbuttonParent}>
                  <button className={styles.unstyledbutton8}>
                    <img
                      className={styles.menufilledIcon}
                      alt=""
                      src="../../public/icon12.png"
                    />
                    <div className={styles.button5}>お気に入り</div>
                    <div className={styles.unstyledbuttonChild} />
                    <div className={styles.button5}>10</div>
                  </button>
                  <button className={styles.buttonoutlined8}>
                    <div className={styles.unstyledbutton5}>
                      <div className={styles.button6}>お問い合わせ</div>
                    </div>
                  </button>
        </div>
    )
};

export default Inquiry;