import styles from "./Controllers.module.css"

const ControllersBlock = ({watchOn, handleStart, buttonEl, handleReset}) => {

    return (
        <div className={styles.btnContainer}>
            <button onClick={handleStart} className={!watchOn ? styles.btnStart : styles.btnStop}>
                {
                    watchOn ?
                        "Stop" :
                        "Start"
                }
            </button>
            <button ref={buttonEl} className={styles.btnWait}>Wait</button>
            <button onClick={handleReset} className={styles.btnReset}>Reset</button>
        </div>
    )
}

export default ControllersBlock