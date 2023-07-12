import React,{useState} from "react";


export default function TextForm() {
  
  const handleUpClick = () => {
    // console.log("you click me"+text);
    let newtext=text.toUpperCase();
    setText(newtext)
    
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText)
  }
  const handleCapClick=()=>{
    let newText=text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText)
  }
  const handleCopy=()=>{
    var text =  document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange=(event)=>{
    // console.log("uu change me");
    setText(event.target.value);
  }
  const[text, setText]= useState('');
  return (
    <div className="container">
      <div className="container mb-3">
        <h1>Enter your text </h1>
        <textarea
          className="form-control" id="myBox" value={text} rows="3" onChange={handleOnChange}
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>UpeerCase </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>LowerCase </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2 " onClick={handleCapClick}>Capitalize </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2 " onClick={handleCopy}>CopyText </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2 " onClick={handleRemoveSpace}>Remove space </button>
      </div>
      <h1>Your Text Summary</h1>
      <p>{text.length} character,{text.split(" ").filter((element)=>{return element.length!==0}).length} word </p>
    </div>
  );
}


