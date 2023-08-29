import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import maskedIcon from "../../assets/maskedicon.png";

const Products: FunctionComponent = () => {
    return (
        <div className={styles.frameParent5}>
                <div className={styles.wrapper}>
                  <b className={styles.b2}>主要広告主の業種/商材</b>
                </div>
                <div className={styles.buttonoutlinedFrame}>
                  <div className={styles.buttonoutlined4}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.content}>
                        <img
                          className={styles.maskedicon}
                          alt=""
                          src={maskedIcon}
                        />
                        <div className={styles.button}>
                          主要広告主の業種/商材を選ぶ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
    )
};

export default Products;