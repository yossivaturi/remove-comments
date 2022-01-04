import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Output from "./Output";

const ReadFile = () => {
    const history = useHistory();

    const removeCommentsFromLines = (lines) => {
        let isMultiLine = false;
        for(let line = 0; line < lines.length-1; line++){
            if(isMultiLine == true){
                let i2 = lines[line].indexOf('*/');
                if(i2 > 0){
                    lines[line] = lines[line].substring(i2+2);
                    isMultiLine = false;
                }                
            }
            let i = lines[line].indexOf('/');
            if(i<0 || i == lines[line].length-1) continue

            if(lines[line][i+1] == '/'){
                lines[line] = lines[line].substring(0, i);
            }
            else if(lines[line][i+1] == '*'){
                isMultiLine = true;
                lines[line] = lines[line].substring(0, i);
            }
        }  
        return lines.join('\n');
    }

    const splitToLines = text => text.split("\n");
        
    const handleInput = e => {
        const reader = new FileReader();
        reader.onload = e => { 
            const text = e.target.result;
            console.log(removeCommentsFromLines(splitToLines(text)));
            let data = removeCommentsFromLines(splitToLines(text));
            history.push('/output', [data])
        };
        reader.onerror = () =>{
            console.log(reader.error)
        }
        reader.readAsText(e.target.files[0]);
    }

    return(
        <div>
            <h1>File Reader</h1>
            <input type="file" name="inputfile" id="inputfile" onInput={ e => handleInput(e) }></input>  
            <button onClick={() => history.push('output')}> Output </button>    
        </div>
    )
}

export default ReadFile;