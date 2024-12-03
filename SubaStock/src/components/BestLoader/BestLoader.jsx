import styles from "./bestLoader.module.css"

export default function BestLoader() {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.spinner}></div>
        </div>
    );
}
