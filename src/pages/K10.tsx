import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import SideBar from "../Component/SideBar";
import Header from "../Component/Header";
import Form from "../Component/Form";
import ShowForm from "../Component/ShowForm";
import CompareMedia from "../Component/CompareMedia";
import Container1 from "../Component/Container1";
import Container2 from "../Component/Container2";

const K10: FunctionComponent = () => {
  return (
    <div className={styles.k10}>
      <SideBar />
      <div className={styles.headingParent}>
        <Header />
        <div className={styles.frameParent2}>
          <Form />
          <ShowForm />
          <CompareMedia />
          <div className={styles.frameParent13}>
            <Container1 />
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  )
};

export default K10;
