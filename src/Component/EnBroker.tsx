import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import frame3662x from "../assets/frame-3662x.png";

const EnBroker: FunctionComponent = () => {
    return (
        <div className={styles.frameParent18}>
              <img
                className={styles.frameChild}
                alt=""
                src={frame3662x}
              />
              <div className={styles.div10}>主なユーザー属性</div>
              <div className={styles.frameParent19}>
                <div className={styles.frameParent20}>
                  <div className={styles.rectangleWrapper}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.frame3}>
                    <div className={styles.content}>
                      <div className={styles.frameInner} />
                      <div className={styles.description}>
                        男性 : 00%
                      </div>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.description}>
                        女性 : 00%
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameParent22}>
                    <section>
                      <div className={styles.frameChild1} />
                    </section>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent23}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild3} />
                      <div className={styles.description}>
                        30代 男性 : 00%
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild4} />
                      <div className={styles.description}>
                        20代 男性 : 00%
                      </div>
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild5} />
                      <div className={styles.description}>
                        30代 女性 : 00%
                      </div>
                    </div>
                    <div className={styles.rectangleParent3}>
                      <div className={styles.frameChild6} />
                      <div className={styles.description}>
                        その他 : 00%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
};

export default EnBroker;