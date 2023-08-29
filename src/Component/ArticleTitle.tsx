import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import image2x from "../assets/image2x.png";

const ArticleTitle: FunctionComponent = () => {
    return (
        <div className={styles.imageParent}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src={image2x}
                    />
                    <div className={styles.frame4}>
                      <div className={styles.div16}>公開日 : 2022/12/20</div>
                      <b className={styles.title1}>
                        記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル
                      </b>
                    </div>
        </div>
    )
};

export default ArticleTitle;
