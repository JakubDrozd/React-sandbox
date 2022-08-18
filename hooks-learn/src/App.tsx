import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"

export default function App(props: any){
  const [count, setCount] = useState(0)

  const incrementCount = () =>{
    setCount(count + 1);
  }
  return (
    <div>
      <Button variant="info" onClick={incrementCount}>{count}</Button>
    </div>
  )
}