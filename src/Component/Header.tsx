import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const Header: FunctionComponent = () => {
    return (
      <div className={styles.heading}>
        <b className={styles.b1}>メディア一覧</b>
      </div>
    )
};

export default Header;