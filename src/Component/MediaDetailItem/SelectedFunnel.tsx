import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";
import avatar10 from "../../assets/avatar10.png";
import iconN from "../../assets/-icon.png";
import avatar11 from "../../assets/avatar11.png";
import avatar12 from "../../assets/avatar12.png";
import avatar13 from "../../assets/avatar13.png";
import avatar14 from "../../assets/avatar14.png";
import avatar15 from "../../assets/avatar15.png";

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
                  src={avatar10}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label22}>認知</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src={iconN}
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
                  src={avatar11}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label24}>興味</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src={iconN}
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
                  src={avatar12}
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label24}>理解</div>
              </div>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src={iconN}
                />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA9}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src={avatar13}
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
                  src={iconN}
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
                  src={avatar14}
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label24}>リピート</div>
              </div>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src={iconN}
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
                  src={avatar15}
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label24}>推奨</div>
              </label>
              <div className={styles.icon18}>
                <img
                  className={styles.icon19}
                  alt=""
                  src={iconN}
                />
              </div>
            </button>
          </div>
        </div>
    )
};

export default SelectedFunnel;