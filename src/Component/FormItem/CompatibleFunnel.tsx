import { FunctionComponent } from "react";
import styles from "../../StyleSheets/K10.module.css";

const CompatibleFunnel: FunctionComponent = () => {
    return (
        <div className={styles.frameParent5}>
          <div className={styles.wrapper}>
            <b className={styles.b3}>対応ファネル</b>
          </div>
          <div className={styles.chips1InputbTextOnlyAParent}>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>認知</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar1.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>興味</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar2.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>理解</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar3.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>購買 / 来店促進</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar4.png"
                />
              </div>
              <div className={styles.label8}>
                <div className={styles.label1}>リピート</div>
              </div>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
            <button className={styles.chips1InputbTextOnlyA}>
              <div className={styles.avatar}>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="../../../public/avatar5.png"
                />
              </div>
              <label className={styles.label}>
                <div className={styles.label1}>推奨</div>
              </label>
              <div className={styles.icon18}>
                <img className={styles.icon19} alt="" src="../../../public/-icon.png" />
              </div>
            </button>
          </div>
        </div>
    )
};

export default CompatibleFunnel;