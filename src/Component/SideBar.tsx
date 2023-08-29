import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";

const SideBar: FunctionComponent = () => {
    return (
      <nav className={styles.nav}>
        <div className={styles.iconbutton}>
          <div className={styles.unstylediconbutton}>
            <img
              className={styles.menufilledIcon}
              alt=""
              src="../../public/menufilled.png"
            />
          </div>
        </div>
        <div className={styles.image1Wrapper}>
          <img className={styles.image1Icon} alt="" src="../../public/image-12x.png" />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon.png"
                  />
                  <div className={styles.div}>ホーム</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </div>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon2.png"
                  />
                  <div className={styles.div}>登録情報</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon3.png"
                  />
                  <div className={styles.div}>与件一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon4.png"
                  />
                  <div className={styles.div}>担当者一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </nav>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon5.png"
                  />
                  <div className={styles.div}>商談管理</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </nav>
              <div className={styles.navigationItem4}>
                <div className={styles.rectangle} />
                <img className={styles.icon10} alt="" src="../../public/icon1.png" />
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <b className={styles.b}>メディア一覧</b>
                <img className={styles.vectorIcon} alt="" src="../../public/icon6.png" />
              </div>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon7.png"
                  />
                  <div className={styles.div}>お気に入りメディア</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </nav>
              <div className={styles.navigationItem6}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src="../../public/icon8.png"
                  />
                  <div className={styles.div}>お知らせ</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src="../../public/icon1.png"
                />
              </div>
            </div>
            <div className={styles.navigationItem7}>
              <img className={styles.menufilledIcon} alt="" src="../../public/icon9.png" />
              <div className={styles.div7}>ログアウト</div>
              <img className={styles.icon17} alt="" src="../../public/icon1.png" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.description}>広告主</div>
            <div className={styles.frameParent1}>
              <div className={styles.groupWrapper}>
                <div className={styles.ellipseParent}>
                  <div className={styles.groupChild} />
                  <img
                    className={styles.image1Icon1}
                    alt=""
                    src="../../public/image-112x.png"
                  />
                </div>
              </div>
              <div className={styles.koukokunushi}>株式会社KOUKOKUNUSHI</div>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default SideBar;