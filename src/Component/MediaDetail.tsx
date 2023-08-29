import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import SelectedFunnel from "./MediaDetailItem/SelectedFunnel";

const MediaDetail: FunctionComponent = () => {
    return (
      <div className={styles.frameParent26}>
        <div className={styles.parent1}>
          <div className={styles.div11}>メディア概要</div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description6}>
              概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト概要テキスト
            </div>
          </div>
        </div>
        <SelectedFunnel />
        <div className={styles.top3Parent}>
          <div className={styles.div11}>
            広告主の業種/商材Top3
          </div>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description7}>
              <p className={styles.p}>1.食品・飲料 00%</p>
              <p className={styles.p}>
                2.家庭用品・トイレタリー 00%
              </p>
              <p className={styles.p}>3.化粧品 00%</p>
            </div>
          </div>
        </div>
        <div className={styles.parent1}>
          <div className={styles.div11}>メディア種別</div>
          <div className={styles.descriptionFrame}>
            <div className={styles.description8}>
              {" "}
              ポータルメディア
            </div>
          </div>
        </div>
        <div className={styles.top3Group}>
          <div className={styles.div14}>
            閲覧/視聴/読者ターゲット
          </div>
          <div className={styles.descriptionFrame}>
            <div className={styles.description8}>
              女性 , 社会人
            </div>
          </div>
        </div>
      </div>
    )
};

export default MediaDetail;