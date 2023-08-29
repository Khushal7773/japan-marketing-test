import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";

const SelectedFunnel: FunctionComponent = () => {
    return (
        <div className={styles.top3Group}>
          <div className={styles.div11}>対応ファネル</div>
          <div
            className={styles.chips1InputbTextOnlyAContainer}
          >
            <button className={styles.chips1InputbTextOnlyA9}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar10.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label22}>認知</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
            <button
              className={styles.chips1InputbTextOnlyA10}
            >
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar11.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label24}>興味</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
            <button
              className={styles.chips1InputbTextOnlyA10}
            >
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar12.png"
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label24}>理解</div>
              </div>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA9}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar13.png"
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label22}>
                  購買 / 来店促進
                </div>
              </div>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
            <button
              className={styles.chips1InputbTextOnlyA10}
            >
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar14.png"
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label24}>リピート</div>
              </div>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
            <button
              className={styles.chips1InputbTextOnlyA10}
            >
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar15.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label24}>推奨</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src="../../../public/-icon.png"
                />
              </div>
            </button>
          </div>
        </div>
    )
};

export default SelectedFunnel;