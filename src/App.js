import {useState, useEffect, useCallback, useRef} from "react"
import {Subject, interval, fromEvent} from "rxjs"
import DisplayBlock from "./components/Display/DisplayBlock"
import ControllersBlock from "./components/Controllers/ControllersBlock"
import {buffer, debounceTime, filter, map, takeUntil} from "rxjs/operators"
import styles from "./App.module.css"
import Stopwatch from "./common/Stopwatch/Stopwatch";

const App = () => {

    const [time, setTime] = useState(0)
    const [watchOn, setWatchOn] = useState(false)

    const buttonEl = useRef(null)

    const handleReset = useCallback(() => {
        setTime(0)
    }, [])
    const handleStart = useCallback(() => {
        setWatchOn(prevState => !prevState)
    }, [])

    useEffect(() => {
        setTime(JSON.parse(localStorage.getItem("time")))
    }, [])
    useEffect(() => {
        const click$ = fromEvent(buttonEl.current, 'click')
        const doubleClick$ = click$
            .pipe(
                buffer(click$.pipe(debounceTime(300))),
                map(clicks => clicks.length),
                filter(clicksLength => clicksLength >= 2)
            )
        doubleClick$.subscribe(_ => {
            setWatchOn(false)
        })

        const unsubscribe$ = new Subject()
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => watchOn && setTime(val => val + 1))
        return () => {
            unsubscribe$.next()
            unsubscribe$.complete()
        }
    }, [watchOn])
    useEffect(() => {
        localStorage.setItem("time", time.toString())
    }, [time])

    return (
        <div className={styles.container}>
            <DisplayBlock time={time}/>
            <ControllersBlock watchOn={watchOn} handleReset={handleReset} handleStart={handleStart}
                              buttonEl={buttonEl}/>
            <Stopwatch watchOn={watchOn}/>
        </div>
    );
}

export default App;