import styles from "./Stopwatch.module.css"


const Stopwatch = ({watchOn}) => {
    return (
        <div className={styles.stopwatch}>
            <div className={styles.button1}/>
            <div className={styles.button2}/>
            {watchOn &&
            <div>
                <div className={styles.time + " " + styles.t1}/>
                <div className={styles.time + " " + styles.t2}/>
                <div className={styles.time + " " + styles.t3}/>
                <div className={styles.time + " " + styles.t4}/>
            </div>
            }
        </div>
    )
}

export default Stopwatch