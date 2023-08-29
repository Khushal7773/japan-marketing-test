import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const ShowForm: FunctionComponent = () => {
    return(
        <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src="../../public/icon10.png" />
        </div>
    )
};

export default ShowForm;