import { useState } from "react";
import logo from './logo.svg';
import './App.css';



function Button({label, onClick}) {
  return (
    <button className="CalcButton" onClick={onClick}>
	{label}
    </button>
  );
}


  
function Display({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

function App() {
	
	const[disp, setDisp] = useState(0);
	const[num1, setNum1] = useState(null);
	const[oper, setOper] = useState(null);
	const[num2, setNum2] = useState(null);
	
	const handleClick = (e) => {
		e.preventDefault();
		
		const value = e.target.innerHTML;
		if(oper === null){
			if(num1 === null){
				setNum1(value);
				setDisp(value);
			} 
			else {
				setNum1(num1+value);
				setDisp(num1+value);
			}
		} 
		else {
			if(num2 === null){
				setNum2(value);
				setDisp(value);
			} 
			else {
				setNum2(num2+value);
				setDisp(num2+value);
			}
			
		console.log(num1 + " " + oper + " " + num2);
		}
		
	}
	
	const handleOperator = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;
		setOper(value);
		setDisp(value);
		
		console.log(num1 + " " + oper + " " + num2);
	}
	
	const handleEqual = (e) => {
		e.preventDefault();
		
		if (oper === "+") {
			setDisp(parseInt(num1) + parseInt(num2));
		}
		else if (oper === "-") {
			setDisp(parseInt(num1) - parseInt(num2));
		}
		else if (oper === "x") {
			setDisp(parseInt(num1) * parseInt(num2));
		}
		else if (oper === "÷") {
			setDisp(parseInt(num1) / parseInt(num2));
		} 
		else { 
			setDisp("ERROR");
		}
	}
	
	const handleClear = (e) => {
		e.preventDefault();
		
		setDisp(0);
		setNum1(null);
		setNum2(null);
		setOper(null);
	}
	
  return (
  <div className="Calculator">
    <Display display={disp}/>
	<div className="ButtonContainer">
      <Button label={"C"} onClick = {handleClear}/>
      <Button label={"()"} onClick = {handleOperator}/>
      <Button label={"√"} onClick = {handleOperator}/>
      <Button label={"÷"} onClick = {handleOperator}/>
      <Button label={7} onClick = {handleClick}/>
      <Button label={8} onClick = {handleClick}/>
      <Button label={9} onClick = {handleClick}/>
      <Button label={"x"} onClick = {handleOperator}/>
      <Button label={4} onClick = {handleClick}/>
      <Button label={5} onClick = {handleClick}/>
      <Button label={6} onClick = {handleClick}/>
      <Button label={"-"} onClick = {handleOperator}/>
      <Button label={1} onClick = {handleClick}/>
      <Button label={2} onClick = {handleClick}/>
      <Button label={3} onClick = {handleClick}/>
      <Button label={"+"} onClick = {handleOperator}/>
      <Button label={"."} onClick = {handleClick}/>
      <Button label={0} onClick = {handleClick}/>
      <Button label={"%"} onClick = {handleOperator}/>
      <Button label={"="} onClick = {handleEqual}/>
    </div>
  </div>
    
  );
}

export default App;	
