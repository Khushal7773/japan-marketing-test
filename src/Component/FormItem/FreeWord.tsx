import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";

const FreeWord: FunctionComponent = () => {
    return (
        <div className={styles.frameParent12}>
                <div className={styles.wrapper5}>
                  <b className={styles.b3}>フリーワード</b>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.textFieldoutlined1}>
                    <input className={styles.input1} type="text" />
                  </div>
                </div>
        </div>
    )
};

export default FreeWord;