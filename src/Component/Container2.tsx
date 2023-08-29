import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import SmallScreenCompare from "./SmallScreenCompare";
import EnBroker from "./EnBroker";
import MediaTitle from "./MediaTitle";
import MediaDetail from "./MediaDetail";
import Inquiry from "./Inquiry";

const Container2: FunctionComponent = () => {
    return (
        <div className={styles.frameParent14}>
          <SmallScreenCompare />
          <div className={styles.frameParent29}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent17}>
                <EnBroker />
                <div className={styles.frameParent24}>
                  <MediaTitle />
                  <div className={styles.frameWrapper2}>
                    <MediaDetail />
                  </div>
                </div>
              </div>
            </div>
            <Inquiry />
          </div>
        </div>
    )
};

export default Container2;