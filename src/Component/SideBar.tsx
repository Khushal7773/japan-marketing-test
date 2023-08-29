import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import menufilled from "../assets/menufilled.png";
import image12x from "../assets/image-12x.png";
import icon from "../assets/icon.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";
import icon9 from "../assets/icon9.png";
import image112x from "../assets/image-112x.png";


const SideBar: FunctionComponent = () => {
    return (
      <nav className={styles.nav}>
        <div className={styles.iconbutton}>
          <div className={styles.unstylediconbutton}>
            <img
              className={styles.menufilledIcon}
              alt=""
              src={menufilled}
            />
          </div>
        </div>
        <div className={styles.image1Wrapper}>
          <img className={styles.image1Icon} alt="" src={image12x} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon}
                  />
                  <div className={styles.div}>ホーム</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </div>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon2}
                  />
                  <div className={styles.div}>登録情報</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon3}
                  />
                  <div className={styles.div}>与件一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </nav>
              <nav className={styles.navigationItem}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon4}
                  />
                  <div className={styles.div}>担当者一覧</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </nav>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon5}
                  />
                  <div className={styles.div}>商談管理</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </nav>
              <div className={styles.navigationItem4}>
                <div className={styles.rectangle} />
                <img className={styles.icon10} alt="" src={icon1} />
                {/* <img className={styles.vectorIcon} alt="" src="/vector.svg" /> */}
                <b className={styles.b}>メディア一覧</b>
                <img className={styles.vectorIcon} alt="" src={icon6} />
              </div>
              <nav className={styles.navigationItem3}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon7}
                  />
                  <div className={styles.div}>お気に入りメディア</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </nav>
              <div className={styles.navigationItem6}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.menufilledIcon}
                    alt=""
                    src={icon8}
                  />
                  <div className={styles.div}>お知らせ</div>
                </div>
                <img
                  className={styles.menufilledIcon}
                  alt=""
                  src={icon1}
                />
              </div>
            </div>
            <div className={styles.navigationItem7}>
              <img className={styles.menufilledIcon} alt="" src={icon9} />
              <div className={styles.div7}>ログアウト</div>
              <img className={styles.icon17} alt="" src={icon1} />
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
                    src={image112x}
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