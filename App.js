import React from "react"
import WindowTracker from "./WindowTracker"

export default function App() {
    const [show, setShow] = React.useState(true)
    
    function handleClick(){
        setShow(prevShow => !prevShow)
    }
    // console.log(show)
    
    return (
        <div className="container">
            <button
                onClick={handleClick}
            >
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
