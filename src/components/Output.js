const Output = (props) => {
    const lines = props.location.state[0];
    return(
        <>
            <h1>Output</h1>
            {lines.map((line, i) => <p key={i}>{line}</p>)}
        </>    
    )
}

export default Output;