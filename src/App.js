import {useState} from "react";
import logo from './logo.svg';
import './App.css';



function Button({label, onClick}) {
  return (
    <button className="PassButton" onClick = {onClick}>
	{label}
    </button>
  );
}


  
function Display({display}) {
  return (
    <div className="PassDisplay">
	{display}
    </div>    
  );
}

function App() {
    
    const[disp, setDisp] = useState("INPUT CODE");
    const[num, setNum] = useState(null);
    const[enter, setEnter] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        
        const value = e.target.innerHTML;
        if(enter === null){
       	   if(num === null) {
                setNum(value);
                setDisp(value);
            } 
	   else {
                setNum(num+value);
                setDisp(num+value);
            }
        console.log(num);
        }
        
    }
    
    const handleEnter = (e) => {
        e.preventDefault();
        
        if (num === "2020000066") {
            setDisp("SUCCESS");
		setNum(null);
        } 
	else { 
            setDisp("INVALID");
		setNum(null);
        }
    }
    
    const handleReset = (e) => {
        e.preventDefault();    
        setDisp("INPUT CODE");
        setNum(null);
    }
    
  return (
  <div className = "Passcode">
    <Display display = {disp}/>
    <div className = "ButtonContainer">
		<Button label = {7} onClick = {handleClick}/>
		<Button label = {8} onClick = {handleClick}/>
		<Button label = {9} onClick = {handleClick}/>
		<Button label = {4} onClick = {handleClick}/>
		<Button label = {5} onClick = {handleClick}/>
		<Button label = {6} onClick = {handleClick}/>
		<Button label = {1} onClick = {handleClick}/>
		<Button label = {2} onClick = {handleClick}/>
		<Button label = {3} onClick = {handleClick}/>
		<Button label = {"Reset"} onClick = {handleReset}/>
		<Button label = {0} onClick = {handleClick}/>
		<Button label = {"Enter"} onClick = {handleEnter}/>
    </div>
  </div>
  );
}

export default App;
