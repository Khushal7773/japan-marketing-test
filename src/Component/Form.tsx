import { FunctionComponent } from "react";
import styles from "../StyleSheets/K10.module.css";
import Genre from "./FormItem/Genre";
import MediaType from "./FormItem/MediaType";
import CompatibleFunnel from "./FormItem/CompatibleFunnel";
import Target from "./FormItem/Target";
import TargetType from "./FormItem/TargetType";
import Demogra from "./FormItem/Demogra";
import Products from "./FormItem/Products";
import LowerCostSense from "./FormItem/LowerCostSense";
import FreeWord from "./FormItem/FreeWord";
import Search from "./FormItem/Search";

const Form: FunctionComponent = () => {
    return (
        <form className={styles.frameForm}>
            <div className={styles.frameParent3}>
                <Genre />
                <MediaType />
                <CompatibleFunnel />
                <Target />
                <TargetType />
                <Demogra />
                <Products />
                <LowerCostSense />
                <FreeWord />
            </div>
            <Search />
        </form>
    )
};

export default Form;