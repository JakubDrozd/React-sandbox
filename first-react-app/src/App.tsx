import React from 'react';
import logo from './logo.svg';
import './App.css';


export function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
    </div>
  );
}

const user = {
  firstName: "Jakub",
  lastName: "Drozd"
}

export function Welcome(){
  function formatName(user: {firstName: string, lastName: string}) {
    if(user){
      return `${user.firstName} ${user.lastName} it is ${new Date().toLocaleTimeString("en-GB")}`
    } 
    return <h1>Hello, anonymous user</h1>
  }
  
   function tick(){
    return <h1>Hello, {formatName(user)}</h1>
  }

  return tick()
  
}

