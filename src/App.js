import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function ButtonIncrement(props){

// return(

//   <button onClick={props.onClickFunc}>
//     +1</button>
// )  
// }

// function ButtonDecrement(props){

//   return(
//     <button onClick={props.onClickFunc}>-1</button>
//   )
// }

function Display(props) {
  
  return (
     <h2>{props.message}</h2>
  )
}

function App() {

  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    setInterval(()=>{
      setCounter(counter + 1);
    }, 1000)
    return (()=>{
      clearTimeout(counter)
    })
  }, [counter])

  // useEffect(()=>{
    
  //   console.log("console first")
  //   return (()=>{
  //     console.log("return log")
  //   })
  // }, [counter])

  // useEffect(()=>{
  //   console.log("counter console")
  // }, [counter])

  // useEffect(()=>{
  //   return (()=>{
  //     console.log("return log")
  //   })
  // }, [])

  return (
    
    <div> 
       
       <Display message={counter}/><br></br>
        
       {/* <ButtonIncrement onClickFunc={incrementCounter} />
       
       <ButtonDecrement onClickFunc={decrementCounter} /> */}
       
    </div>
  );
}
export default App;

// return 
// useEffect
// return 

// useEffect - update
// return 

// useEffect - unmount
// return


// real DOM