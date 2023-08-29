import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import localOffer from "../assets/local-offer.png";

const DiscountOffer: FunctionComponent = () => {
    return(
        <div className={styles.frameParent27}>
              <div className={styles.localOfferParent}>
                <img
                  className={styles.localOfferIcon}
                  alt=""
                  src={localOffer}
                />
                <div className={styles.div15}>
                  シーズン限定メニュー
                </div>
              </div>
              <div className={styles.descriptionWrapper2}>
                <div className={styles.description10}>
                  直前割引情報があります！
                </div>
              </div>
        </div>
    )
};

export default DiscountOffer;