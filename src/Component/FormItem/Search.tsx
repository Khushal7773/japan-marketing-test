import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";

const Search: FunctionComponent = () => {
    return (
        <div className={styles.frame1}>
              <button className={styles.buttonoutlined5}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button5}>検索条件をクリア</div>
                </div>
              </button>
              <button className={styles.buttonoutlined6}>
                <div className={styles.unstyledbutton5}>
                  <div className={styles.button6}>検索する</div>
                </div>
              </button>
        </div>
    )
};

export default Search;