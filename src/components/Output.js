import { useHistory } from "react-router-dom";

const Output = (props) => {
    const history = useHistory();
    console.log(props.location.state);
    
    return(
        <div>
            <h1>Output</h1>
            {/* DELETE THIS BUTTON WHEN YOU FINISH THE ASSIGNMENT */}
            <button onClick={() => history.push('read-file')}> Read File </button>

            <p>{props.location.state}</p>   
        </div>    
    )
}

export default Output;