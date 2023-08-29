import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import SmallScreenCompare from "./SmallScreenCompare";
import EnBroker from "./EnBroker";
import MediaTitle from "./MediaTitle";
import MediaDetail from "./MediaDetail";
import DiscountOffer from "./DiscountOffer";
import ArticleTitle from "./ArticleTitle";
import Inquiry from "./Inquiry";

const Container1: FunctionComponent = () => {
    return (
        <div className={styles.frameParent14}>
          <SmallScreenCompare />
          <div className={styles.frameParent15}>
            <div className={styles.frameParent16}>
              <div className={styles.frameParent17}>
                <EnBroker />
                <div className={styles.frameParent24}>
                  <MediaTitle />
                  <div className={styles.frameParent25}>
                    <MediaDetail /> 
                    <DiscountOffer />
                  </div>
                </div>
              </div>
              <ArticleTitle />
            </div>
            <Inquiry />
          </div>
        </div>
    )
};

export default Container1;