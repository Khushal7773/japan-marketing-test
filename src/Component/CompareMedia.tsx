import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import maskedIcon1 from "../assets/masked-icon.png";

const CompareMedia: FunctionComponent = () => {
    return (
        <button className={styles.buttonoutlined7}>
            <div className={styles.unstyledbutton5}>
              <button className={styles.content5}>
                <div className={styles.button6}>メディアを比較</div>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={maskedIcon1}
                />
              </button>
            </div>
        </button>
    )
}

export default CompareMedia;