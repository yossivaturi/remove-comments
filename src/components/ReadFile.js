import { useHistory } from "react-router-dom";

const ReadFile = () => {
    let data ="";
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
            data = splitToLines(removeCommentsFromLines(splitToLines(text)));      
        };
        reader.onerror = () =>{
            console.log(reader.error)
        }
        reader.readAsText(e.target.files[0]);
    }

    return(
        <>
            <h1>File Reader</h1>
            <input type="file" name="inputfile" id="inputfile" onInput={ e => handleInput(e) }></input>  
            <button onClick={() => history.push('/output', [data])}> Output </button>    
        </>
    )
}

export default ReadFile;