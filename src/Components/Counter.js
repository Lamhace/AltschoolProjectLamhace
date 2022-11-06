import React from 'react'
const Counter = () => {
    // CREATE USE STATE
    const [value, setValue] = React.useState(0);
    // HANDLE DECREMENT
    function handleDecrement() {
        setValue(value - 1)
    }
    // HANDLE RESET
    function handleReset() {
        setValue(0)
    }
    // HANDLE INCREMENT
    function handleIncrement() {
        setValue(value + 1)
    }
    return (
        <div className='count-btn'>

            <h1>Count: <span className='count'>{value}</span></h1>
            <div className='btns'>
                <button onClick={handleDecrement}>DECREMENT</button>
                <button onClick={handleReset}>RESET</button>
                <button onClick={handleIncrement}>INCREMENT</button>
            </div>
        </div>
    )
}

export default Counter