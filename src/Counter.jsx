import { useRef, memo, useEffect} from "react"

const Counter =  memo(({ counter, setCounter,  inputText,
    setInputText }) => { 
    const intervalRef = useRef(null)

    console.log('Counter render')

    function start() { 
        intervalRef.current = setInterval(() => { 
            setCounter(prev => prev + 1)
        }, 1000)

    }
    function stop() { 
        clearInterval(intervalRef.current)
    }
    function reset() { 
        stop()
        setCounter(0)
    }
    useEffect(() => { 
        return () => { stop() }
    }, [])


    return (
        <div>
            <p>{inputText}</p>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}} />
            <p>{counter}</p>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
})

export default Counter

