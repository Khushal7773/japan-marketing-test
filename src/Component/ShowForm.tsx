import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import icon10 from "../assets/icon10.png";

const ShowForm: FunctionComponent = () => {
    return(
        <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src={icon10} />
        </div>
    )
};

export default ShowForm;