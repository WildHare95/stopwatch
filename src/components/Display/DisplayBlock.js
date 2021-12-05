import styles from "./DisplayBlock.module.css"

const DisplayBlock = ({time}) => {
    return (
        <div className={styles.container}>
            <div>{("0" + Math.floor((time / 3600) % 100)).slice(-2)}</div>
            :
            <div>{("0" + Math.floor((time / 60) % 60)).slice(-2)}</div>
            :
            <div>{("0" + Math.floor(time % 60)).slice(-2)}</div>
        </div>
    )
}

export default DisplayBlock