import React, { useReducer } from 'react'


function reducer(state, action) {
    if (action.type === 'DECREMENT') {
        return { Count: state.Count - 1 }
    }
    else if (action.type === 'RESET') {
        return { Count: state.Count - state.Count }
    }
    else if (action.type === 'INCREMENT') {
        return { Count: state.Count + 1 }
    }
    else {
        return { Count: state }
    }
}

const ReducerCounter = () => {
    // CREATE USE REDUCER
    const [state, dispatch] = useReducer(reducer, { Count: 0 })
    // HANDLE DECREMENT
    function handleDecrement() {
        dispatch({ type: 'DECREMENT' })
    }
    // HANDLE RESET
    function handleReset() {
        dispatch({ type: 'RESET' })
    }
    // HANDLE INCREMENT
    function handleIncrement() {
        dispatch({ type: 'INCREMENT' })
    }
    return (
        <div className='count-btn'>
            <h1>Count: <span className='count'>{state.Count}</span></h1>
            <div className='btns'>
                <button onClick={handleDecrement}>DECREMENT</button>
                <button onClick={handleReset}>RESET</button>
                <button onClick={handleIncrement}>INCREMENT</button>
            </div>
        </div>
    )
}

export default ReducerCounter