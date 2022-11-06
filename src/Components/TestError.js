import React from 'react'

const TestError = () => {
    //UNCOMMENT text = "" below to TEST ERROR BOUNDARY
    // text = ""
    const [text, setText] = React.useState("Getting there with React");
    function TextChange() {
        setText("React is getting Fun along the line. Do not Quit!")
    }
    return (
        <div className='Testerror'>
            <h1>{text}</h1>
            <button onClick={TextChange}>Change Text</button>
        </div>
    )
}

export default TestError