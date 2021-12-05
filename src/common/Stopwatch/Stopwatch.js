import styles from "./Stopwatch.module.css"


const Stopwatch = ({watchOn}) => {
    return (
        <div className={styles.stopwatch}>
            <div className={styles.button1}/>
            <div className={styles.button2}/>
            <div className={watchOn && styles.time + " " + styles.t1}/>
            <div className={watchOn && styles.time + " " + styles.t2}/>
            <div className={watchOn && styles.time + " " + styles.t3}/>
            <div className={watchOn && styles.time + " " + styles.t4}/>
        </div>
    )
}

export default Stopwatch